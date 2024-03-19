import { MeshTransmissionMaterial, Text, useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";
import { useControls } from "leva";


// funciones
export const Model = () => {
  const { nodes } = useGLTF("/medias/torrus.glb");
  const { viewport } = useThree();
  const mesh = useRef();
  useFrame(() => {
    mesh.current.rotation.x += 0.02;
  });

  // control

  const materialProps = useControls({
    thickness: { value: 0.2, min: 0, max: 3, step: 0.05 },
    roughness: { value: 0, min: 0, max: 1, step: 0.1 },
    transmission: { value: 1, min: 0, max: 1, step: 0.1 },
    ior: { value: 1.2, min: 0, max: 3, step: 0.1 },
    chromaticAberration: { value: 0.02, min: 0, max: 1 },
    backside: { value: true },
  });

  return (
    <group scale={viewport.width / 3}>
      <Text
        fontSize={0.4}
        font="fonts/PPNeueMontreal-Bold.otf"
        position={[0, 0, -0.5]}
        color={"white"}
        anchorX={"center"}
        anchorY={"middle"}
      >
        Deus lo Vult!
      </Text>
      <mesh ref={mesh} {...nodes.Torus002}>
        <MeshTransmissionMaterial {...materialProps} />
      </mesh>
    </group>
  );
};
