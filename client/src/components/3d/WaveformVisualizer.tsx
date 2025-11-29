import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export function WaveformVisualizer() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(
      75,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 3;

    const renderer = new THREE.WebGLRenderer({ 
      antialias: true, 
      alpha: true,
      precision: 'mediump'
    });
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    renderer.setClearColor(0x000000, 0);
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Create waveform geometry
    const waveGeometry = new THREE.BufferGeometry();
    const waveVertices = [];
    const waveIndices = [];
    
    const segments = 128;
    const amplitude = 0.5;
    
    for (let i = 0; i <= segments; i++) {
      const x = (i / segments) * 4 - 2;
      for (let j = 0; j <= 8; j++) {
        const y = (j / 8) * 2 - 1;
        const z = Math.sin(x * Math.PI + Date.now() * 0.001) * amplitude * (1 - Math.abs(y));
        waveVertices.push(x, y, z);
      }
    }

    // Create indices for triangle strips
    for (let i = 0; i < segments; i++) {
      for (let j = 0; j < 8; j++) {
        const a = i * 9 + j;
        const b = i * 9 + j + 1;
        const c = (i + 1) * 9 + j;
        const d = (i + 1) * 9 + j + 1;
        
        waveIndices.push(a, b, c);
        waveIndices.push(b, d, c);
      }
    }

    waveGeometry.setAttribute('position', new THREE.BufferAttribute(new Float32Array(waveVertices), 3));
    waveGeometry.setIndex(new THREE.BufferAttribute(new Uint32Array(waveIndices), 1));
    waveGeometry.computeVertexNormals();

    const waveMaterial = new THREE.MeshPhongMaterial({
      color: 0x9d7cff,
      emissive: 0x7c3aed,
      wireframe: false,
      transparent: true,
      opacity: 0.8,
      side: THREE.DoubleSide
    });

    const waveMesh = new THREE.Mesh(waveGeometry, waveMaterial);
    scene.add(waveMesh);

    // Add wireframe overlay
    const wireframeGeometry = new THREE.WireframeGeometry(waveGeometry);
    const wireframeMaterial = new THREE.LineBasicMaterial({ 
      color: 0x60a5fa,
      transparent: true,
      opacity: 0.3,
      linewidth: 1
    });
    const wireframe = new THREE.LineSegments(wireframeGeometry, wireframeMaterial);
    scene.add(wireframe);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xc084fc, 1.5);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);

    // Animation
    let animationId: number;
    const animate = () => {
      animationId = requestAnimationFrame(animate);

      // Update wave animation
      const positionAttribute = waveGeometry.getAttribute('position');
      const pos = positionAttribute.array as Float32Array;
      const time = Date.now() * 0.001;

      let index = 0;
      for (let i = 0; i <= segments; i++) {
        const x = (i / segments) * 4 - 2;
        for (let j = 0; j <= 8; j++) {
          const y = (j / 8) * 2 - 1;
          const z = Math.sin(x * Math.PI + time) * amplitude * (1 - Math.abs(y)) + 
                    Math.cos(x * 2 + time * 1.5) * amplitude * 0.3;
          
          pos[index * 3 + 2] = z;
          index++;
        }
      }
      positionAttribute.needsUpdate = true;
      waveGeometry.computeVertexNormals();

      waveMesh.rotation.x += 0.0002;
      wireframe.rotation.x += 0.0002;

      renderer.render(scene, camera);
    };

    animate();

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
      waveGeometry.dispose();
      waveMaterial.dispose();
      wireframeGeometry.dispose();
      wireframeMaterial.dispose();
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
