import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

export function Model(props) {
  const modelRef = useRef();
  if (modelRef.current) {
    modelRef.current.rotation.moveRight = true;
  }

  useFrame(({}) => {
    if (modelRef.current.rotation.y >= 1.4) {
      modelRef.current.rotation.moveRight = false;
    }

    if (modelRef.current.rotation.y <= 0.18) {
      modelRef.current.rotation.moveRight = true;
    }

    if (
      modelRef.current.rotation &&
      modelRef.current.rotation.moveRight &&
      modelRef.current.rotation.y > 1.3
    ) {
      modelRef.current.rotation.y += 0.002;
    } else if (
      modelRef.current.rotation &&
      modelRef.current.rotation.moveRight
    ) {
      modelRef.current.rotation.y += 0.0033;
    }

    if (
      modelRef.current.rotation &&
      !modelRef.current.rotation.moveRight &&
      modelRef.current.rotation.y < 0.3
    ) {
      modelRef.current.rotation.y -= 0.002;
    } else if (
      modelRef.current.rotation &&
      !modelRef.current.rotation.moveRight
    ) {
      modelRef.current.rotation.y -= 0.0033;
    }
  });

  const { nodes, materials } = useGLTF('/final.glb');
  return (
    <group {...props}>
      <group ref={modelRef}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Untitled.geometry}
          material={materials.palette}
          rotation={[Math.PI / 2, 0, 0]}
        />
      </group>
    </group>
  );
}

useGLTF.preload('/final.glb');
