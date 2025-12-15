import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export function MeditationSphere() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const sphereRef = useRef<THREE.Mesh | null>(null);
  const orbitsRef = useRef<THREE.Group[]>([]);

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(
      75,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 2.5;

    const renderer = new THREE.WebGLRenderer({ 
      antialias: true, 
      alpha: true,
      precision: 'mediump'
    });
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    renderer.setClearColor(0x000000, 0);
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Create main sphere with enhanced material
    const geometry = new THREE.IcosahedronGeometry(1, 32);
    const material = new THREE.MeshPhongMaterial({
      color: 0xe6aa28,
      emissive: 0xb06b10,
      shininess: 120,
      wireframe: false,
      flatShading: false
    });
    const sphere = new THREE.Mesh(geometry, material);
    sphereRef.current = sphere;
    scene.add(sphere);

    // Add torus ring around sphere
    const torusGeometry = new THREE.TorusGeometry(1.3, 0.08, 32, 100);
    const torusMaterial = new THREE.MeshPhongMaterial({
      color: 0xd4a42a,
      emissive: 0xd4a42a,
      shininess: 80,
      transparent: true,
      opacity: 0.8
    });
    const torus = new THREE.Mesh(torusGeometry, torusMaterial);
    torus.rotation.x = Math.PI / 4;
    scene.add(torus);

    // Add rotating orbital rings
    const createOrbit = (radius: number, color: number, speed: number) => {
      const group = new THREE.Group();
      const geometry = new THREE.BufferGeometry();
      const points = [];
      for (let i = 0; i <= 64; i++) {
        const angle = (i / 64) * Math.PI * 2;
        points.push(
          Math.cos(angle) * radius,
          Math.sin(angle) * radius,
          0
        );
      }
      geometry.setAttribute('position', new THREE.BufferAttribute(new Float32Array(points), 3));
      
      const material = new THREE.LineBasicMaterial({ 
        color: color,
        transparent: true,
        opacity: 0.4,
        linewidth: 2
      });
      const line = new THREE.Line(geometry, material);
      group.add(line);
      group.userData.speed = speed;
      scene.add(group);
      orbitsRef.current.push(group);
    };

    createOrbit(1.5, 0xe6aa28, 0.0003);
    createOrbit(1.8, 0xd4a42a, -0.0002);
    createOrbit(2.1, 0xb07b1a, 0.00015);

    // Add glowing particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particleCount = 200;
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      const radius = Math.random() * 2 + 0.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.random() * Math.PI;
      
      positions[i] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i + 2] = radius * Math.cos(phi);

      // Color gradient adapted to gold tones
      colors[i] = 0.6 + Math.random() * 0.4;
      colors[i + 1] = 0.3 + Math.random() * 0.3;
      colors[i + 2] = 1.0;
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.08,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      sizeAttenuation: true
    });

    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particles);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(0xffffff, 1.2);
    pointLight1.position.set(5, 5, 5);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0xd4a42a, 1);
    pointLight2.position.set(-5, -5, 5);
    scene.add(pointLight2);

    const pointLight3 = new THREE.PointLight(0xe6aa28, 0.8);
    pointLight3.position.set(0, 5, -5);
    scene.add(pointLight3);

    // Animation
    let animationId: number;
    const animate = () => {
      animationId = requestAnimationFrame(animate);

      if (sphere) {
        sphere.rotation.x += 0.0005;
        sphere.rotation.y += 0.0008;
        
        // Breathing effect
        const scale = 1 + Math.sin(Date.now() * 0.0008) * 0.15;
        sphere.scale.set(scale, scale, scale);
      }

      // Animate torus
      if (torus) {
        torus.rotation.z += 0.001;
        torus.rotation.y += 0.0005;
      }

      // Rotate orbits
      orbitsRef.current.forEach((orbit) => {
        orbit.rotation.z += orbit.userData.speed;
      });

      // Rotate particles
      if (particles) {
        particles.rotation.x += 0.0001;
        particles.rotation.y += 0.00015;
      }

      renderer.render(scene, camera);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      if (!containerRef.current) return;
      const width = containerRef.current.clientWidth;
      const height = containerRef.current.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationId);
      renderer.dispose();
      geometry.dispose();
      material.dispose();
      torusGeometry.dispose();
      torusMaterial.dispose();
      particlesGeometry.dispose();
      particlesMaterial.dispose();
      containerRef.current?.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="w-full h-full absolute inset-0 pointer-events-none"
    />
  );
}
