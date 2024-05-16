"use client";

import { PerspectiveCamera, RenderTexture, Text } from "@react-three/drei";

export default function Cube() {
  return (
    <mesh>
      <boxGeometry args={[3, 3, 3]} />
      <meshStandardMaterial>
        <RenderTexture attach="map">
          <PerspectiveCamera makeDefault position={[0, 0, 2]} />
          <color attach={"background"} args={["yellow"]} />
          <Text fontSize={1} color={"red"}>
            Hi
          </Text>
        </RenderTexture>
      </meshStandardMaterial>
    </mesh>
  );
}
