"use client";

import { MeshDistortMaterial, OrbitControls, Sphere } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Cube from "./Cube";

export default function ThreeStart() {
  return (
    <div className="w-[30rem] h-[30rem]">
      <Canvas>
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={1} />
        <directionalLight position={[3, 2, 1]} />
        <Sphere args={[1, 100, 200]} scale={2.4}>
          <MeshDistortMaterial
            attach={"material"}
            distort={0.5}
            color="#2f77ecd1"
            speed={2}
          />
        </Sphere>
        {/* <Cube /> */}
      </Canvas>
    </div>
  );
}
