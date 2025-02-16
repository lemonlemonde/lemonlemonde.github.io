"use client"; // Ensure it's a Client Component

import { Canvas } from "@react-three/fiber";

export default function Home() {
  return (
    <main>
      <Canvas>
        {/* Lights */}
        <ambientLight intensity={0.5} />
        <pointLight position={[5, 5, 5]} />

        {/* Simple 3D Object - A rotating cube */}
        <mesh rotation={[0.4, 0.2, 0]}>
          <boxGeometry args={[4, 4, 1]} />
          <meshStandardMaterial color="red" />
        </mesh>

      </Canvas>
    </main>
  );
}
