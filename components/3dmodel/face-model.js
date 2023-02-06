import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { angleToRadians } from '../../lib/angleToRadians';

export function Model(props) {
  const modelRef = useRef();
  let moveRight = true;

  useFrame(({}) => {
    if (modelRef.current.rotation.y >= 1.4) {
      console.log('yay');
      moveRight = false;
    }

    if (modelRef.current.rotation.y <= 0.18) {
      moveRight = true;
    }

    if (modelRef.current.rotation && moveRight) {
      modelRef.current.rotation.y += 0.0033;
    }

    if (modelRef.current.rotation && !moveRight) {
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
