"use client";

import { MeshDistortMaterial, Sphere } from "@react-three/drei";

export default function Water() {
  return (
    <Sphere args={[1, 100, 200]} scale={2.4}>
      <MeshDistortMaterial
        attach={"material"}
        distort={0.5}
        color="#220736"
        speed={2}
      />
    </Sphere>
  );
}
