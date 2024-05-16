"use client";

import { Canvas, useThree } from "@react-three/fiber";
import Model from "./Model";
import { Suspense } from "react";
import {
  useProgress,
  Html,
  ScrollControls,
  OrbitControls,
} from "@react-three/drei";

function Loader() {
  const { progress, active } = useProgress();

  return <Html center>{progress.toFixed(1)} % loaded</Html>;
}

export default function Scene() {
  return (
    <Canvas gl={{ antialias: true }} dpr={[1, 1.5]} className="relative h-svh">
      <OrbitControls enableZoom={false} />
      <ambientLight intensity={1} />
      <directionalLight position={[100, 100, 105]} />
      <Suspense fallback={<Loader />}>
        <ScrollControls damping={0.2} pages={2}>
          <Model />
        </ScrollControls>
      </Suspense>
    </Canvas>
  );
}
