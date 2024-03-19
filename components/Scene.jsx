"use client";
import { Canvas } from "@react-three/fiber";
import { Model } from "./Model";
import { Environment } from "@react-three/drei";

const Scene = () => {
  return (
    <Canvas style={{backgroundColor:"#121212"}} >
      {/* <ambientLight intensity={0.5} /> */}
      <directionalLight intensity={3} position={[0, 3, 2]} />
      <Environment preset="city" />
      <Model />
    </Canvas>
  );
};
export default Scene;
