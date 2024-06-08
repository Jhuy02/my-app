"use client";
import React, { useRef, useState, useEffect } from "react";
import {
  MeshDistortMaterial,
  OrbitControls,
  ScrollControls,
  Sphere,
  useScroll,
  useTexture,
  useLoader,
} from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { PerspectiveCamera, RenderTexture, Text } from "@react-three/drei";
import Cube from "./Cube";
// import { TextureLoader } from "three";
import * as THREE from "three";

function Box() {
  const meshRef = useRef();
  const scroll = useScroll();
  // const [rotation, setRotation] = useState(0);
  const [rotation, setRotation] = useState(Math.PI / 4);
  const rotationSpeed = 4;
  const [texture, setTexture] = useState(null);

  // const texture = useLoader(THREE.TextureLoader, "/bg.jpg");
  useEffect(() => {
    const handleScroll = () => {
      // setRotation(scroll.scroll.current * 2 * Math.PI); // Điều chỉnh hệ số để thay đổi tốc độ xoay
      const { current: scrollPosition } = scroll.scroll;
      // Tính toán góc nghiêng dựa trên vị trí cuộn với tốc độ được điều chỉnh
      const newRotation =
        Math.PI / 4 +
        (scrollPosition / (scroll.pages - 1)) * (Math.PI / 2) * rotationSpeed;
      setRotation(newRotation);
    };

    scroll.el.addEventListener("scroll", handleScroll);

    return () => {
      scroll.el.removeEventListener("scroll", handleScroll);
    };
  }, [scroll]);

  // const imagePaths = ['img1.jpg', 'img2.jpg', 'img3.jpg'];
  useEffect(() => {
    const loader = new THREE.TextureLoader();
    loader.load(
      "/bg.jpg",
      (texture) => {
        setTexture(texture);
      },
      undefined,
      (error) => {
        console.error("Error loading texture:", error);
      }
    );
  }, []);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x = rotation;
      meshRef.current.rotation.y = rotation;
    }
  });
  return (
    <mesh ref={meshRef} castShadow receiveShadow>
      <boxGeometry args={[3, 3, 3]} />
      {texture && <meshStandardMaterial attachArray="material" map={texture} />}
      {texture && <meshStandardMaterial attachArray="material" map={texture} />}
      {texture && <meshStandardMaterial attachArray="material" map={texture} />}
      {texture && <meshStandardMaterial attachArray="material" map={texture} />}
      {texture && <meshStandardMaterial attachArray="material" map={texture} />}
      <meshStandardMaterial attachArray="material" color="orange" />
    </mesh>
  );
}

function CameraController() {
  const { camera } = useThree();
  const scroll = useScroll();

  useFrame(() => {
    const { current: scrollPosition } = scroll.scroll;
    // Tính toán vị trí và góc của camera dựa trên vị trí cuộn
    const yPosition = 5 - scrollPosition * 2; // Từ 5 đến 0
    const zPosition = 5 - scrollPosition * 2;
    const xPosition = 5 - scrollPosition * 2; // Từ 5 đến 0
    camera.position.set(xPosition, yPosition, zPosition);
    camera.lookAt(0, 0, 0); // Luôn nhìn về phía trung tâm của khối
  });

  return null;
}

function Plane() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, 0]} receiveShadow>
      <planeGeometry args={[10, 10]} />
      <shadowMaterial opacity={0.5} />
    </mesh>
  );
}

export default function HocTap() {
  return (
    <div className="w-full h-[100vh]">
      <Canvas shadows>
        <ScrollControls pages={3}>
          {/* <OrbitControls enableZoom={false} /> */}
          <ambientLight intensity={0.5} />
          <pointLight position={[2, 2, 2]} />
          <directionalLight
            position={[0, 10, 0]}
            castShadow
            shadow-mapSize-width={2048}
            shadow-mapSize-height={2048}
            shadow-camera-far={50}
            shadow-camera-left={-10}
            shadow-camera-right={10}
            shadow-camera-top={10}
            shadow-camera-bottom={-10}
            shadow-bias={-0.0005}
          />
          <Box />
          <Plane />
          <CameraController />
        </ScrollControls>
      </Canvas>
      {/* <Canvas>
        <ambientLight intensity={1} />
        <directionalLight position={[3, 2, 1]} />
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
      </Canvas> */}
    </div>
  );
}
// args={[100, 100, 200]}
{
  /* <OrbitControls enableZoom={false} /> */
}
{
  /* <Sphere args={[1, 1, 200]} scale={1.4}>
          <MeshDistortMaterial
            attach={"material"}
            distort={1}
            color="#2f77ecd1"
            speed={2}
          />
        </Sphere> */
}
