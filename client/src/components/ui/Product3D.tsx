import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import * as THREE from "three";

interface Product3DProps {
  type: "watch" | "earbuds" | "speaker" | "phone" | "ring" | "glasses";
  color?: string;
}

function ProductModel({ type, color = "#00ffff" }: Product3DProps) {
  const getGeometry = () => {
    switch (type) {
      case "watch":
        return (
          <group>
            <mesh position={[0, 0, 0]}>
              <cylinderGeometry args={[0.6, 0.6, 0.15, 32]} />
              <meshStandardMaterial color={color} metalness={0.8} roughness={0.2} />
            </mesh>
            <mesh position={[0, 0, 0.08]}>
              <cylinderGeometry args={[0.5, 0.5, 0.05, 32]} />
              <meshStandardMaterial color="#1a1a1a" metalness={0.9} roughness={0.1} />
            </mesh>
          </group>
        );
      case "earbuds":
        return (
          <group>
            <mesh position={[-0.2, 0, 0]}>
              <sphereGeometry args={[0.3, 32, 32]} />
              <meshStandardMaterial color={color} metalness={0.7} roughness={0.3} />
            </mesh>
            <mesh position={[0.2, 0, 0]}>
              <sphereGeometry args={[0.3, 32, 32]} />
              <meshStandardMaterial color={color} metalness={0.7} roughness={0.3} />
            </mesh>
            <mesh position={[0, -0.4, 0]}>
              <boxGeometry args={[0.6, 0.3, 0.3]} />
              <meshStandardMaterial color="#222" metalness={0.8} roughness={0.2} />
            </mesh>
          </group>
        );
      case "speaker":
        return (
          <group>
            <mesh position={[0, 0, 0]}>
              <cylinderGeometry args={[0.5, 0.45, 1, 32]} />
              <meshStandardMaterial color={color} metalness={0.6} roughness={0.4} />
            </mesh>
            <mesh position={[0, 0.5, 0]}>
              <cylinderGeometry args={[0.48, 0.48, 0.1, 32]} />
              <meshStandardMaterial color="#111" metalness={1} roughness={0} />
            </mesh>
          </group>
        );
      case "phone":
        return (
          <group>
            <mesh position={[0, 0, 0]}>
              <boxGeometry args={[0.4, 0.8, 0.08]} />
              <meshStandardMaterial color={color} metalness={0.8} roughness={0.1} />
            </mesh>
            <mesh position={[0, 0, 0.04]}>
              <boxGeometry args={[0.35, 0.75, 0.02]} />
              <meshStandardMaterial color="#000" emissive={color} emissiveIntensity={0.3} />
            </mesh>
          </group>
        );
      case "ring":
        return (
          <group>
            <mesh position={[0, 0, 0]}>
              <torusGeometry args={[0.4, 0.15, 32, 16]} />
              <meshStandardMaterial color={color} metalness={0.9} roughness={0.1} />
            </mesh>
            <mesh position={[0, 0.3, 0]}>
              <boxGeometry args={[0.3, 0.2, 0.3]} />
              <meshStandardMaterial color={color} metalness={0.9} roughness={0.1} emissive={color} emissiveIntensity={0.5} />
            </mesh>
          </group>
        );
      case "glasses":
        return (
          <group>
            <mesh position={[-0.25, 0, 0]}>
              <boxGeometry args={[0.35, 0.15, 0.1]} />
              <meshStandardMaterial color={color} metalness={0.7} roughness={0.2} />
            </mesh>
            <mesh position={[0.25, 0, 0]}>
              <boxGeometry args={[0.35, 0.15, 0.1]} />
              <meshStandardMaterial color={color} metalness={0.7} roughness={0.2} />
            </mesh>
            <mesh position={[0, 0, 0]}>
              <boxGeometry args={[0.15, 0.05, 0.1]} />
              <meshStandardMaterial color="#333" metalness={0.8} roughness={0.2} />
            </mesh>
          </group>
        );
      default:
        return null;
    }
  };

  return (
    <group rotation={[0.2, 0, 0]}>
      <ambientLight intensity={0.6} />
      <pointLight position={[5, 5, 5]} intensity={1.2} color="#00ffff" />
      <pointLight position={[-5, -5, 5]} intensity={0.8} color="#ff00ff" />
      {getGeometry()}
    </group>
  );
}

export function Product3D({ type, color }: Product3DProps) {
  return (
    <div className="w-full h-64 rounded-lg overflow-hidden bg-black/50 border border-white/10">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 2.5]} />
        <Suspense fallback={null}>
          <ProductModel type={type} color={color} />
        </Suspense>
        <OrbitControls 
          autoRotate 
          autoRotateSpeed={4}
          enableZoom={false}
          enablePan={false}
        />
      </Canvas>
    </div>
  );
}
