import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export function LuxuryBox() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 3;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    renderer.setClearColor(0x000000, 0);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);

    // Create luxury box with gradient material
    const geometry = new THREE.BoxGeometry(1.5, 1.5, 1.5);
    const materials = [
      new THREE.MeshPhongMaterial({ color: 0xd97706, emissive: 0xb45309, shininess: 100 }),
      new THREE.MeshPhongMaterial({ color: 0xd97706, emissive: 0xb45309, shininess: 100 }),
      new THREE.MeshPhongMaterial({ color: 0xf59e0b, emissive: 0xd97706, shininess: 100 }),
      new THREE.MeshPhongMaterial({ color: 0xf59e0b, emissive: 0xd97706, shininess: 100 }),
      new THREE.MeshPhongMaterial({ color: 0xb45309, emissive: 0x92400e, shininess: 100 }),
      new THREE.MeshPhongMaterial({ color: 0xb45309, emissive: 0x92400e, shininess: 100 })
    ];
    const box = new THREE.Mesh(geometry, materials);
    scene.add(box);

    // Add edge lines for luxury effect
    const edges = new THREE.EdgesGeometry(geometry);
    const line = new THREE.LineSegments(edges, new THREE.LineBasicMaterial({ color: 0xfcd34d, linewidth: 2 }));
    box.add(line);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(0xfbbc04, 1.5);
    pointLight1.position.set(5, 5, 5);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0xd97706, 1);
    pointLight2.position.set(-5, -5, 3);
    scene.add(pointLight2);

    // Animation
    let animationFrameId: number;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      box.rotation.x += 0.005;
      box.rotation.y += 0.008;
      box.rotation.z += 0.003;

      // Pulsing scale
      const scale = 1 + Math.sin(Date.now() * 0.0008) * 0.1;
      box.scale.set(scale, scale, scale);

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!containerRef.current) return;
      const w = containerRef.current.clientWidth;
      const h = containerRef.current.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      renderer.dispose();
      geometry.dispose();
      materials.forEach(m => m.dispose());
      if (containerRef.current?.contains(renderer.domElement)) {
        containerRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={containerRef} className="w-full h-full absolute inset-0 pointer-events-none" />;
}
