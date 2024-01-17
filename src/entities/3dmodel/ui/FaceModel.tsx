import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

const animationProgress = {
  start: 0,
  reversePoint: 0.25,
  startEdge: 0.35,
  finalEdge: 0.8,
  final: 1
};

type FaceModelProps = {
  scale: number;
  receiveShadow: boolean;
  position: number[];
  rotation: number[];
};

export function FaceModel(props: FaceModelProps) {
  const modelRef = useRef<any>();

  useFrame(({}) => {
    if (modelRef.current.rotation) {
      if (modelRef.current.rotation.y === animationProgress.start) {
        modelRef.current.rotation.moveRight = true;
      }
      if (modelRef.current.rotation.y >= animationProgress.final) {
        modelRef.current.rotation.moveRight = false;
      }
      if (modelRef.current.rotation.y <= animationProgress.reversePoint) {
        modelRef.current.rotation.moveRight = true;
      }

      if (modelRef.current.rotation.moveRight && modelRef.current.rotation.y <= animationProgress.startEdge) {
        modelRef.current.rotation.y += 0.0007;
      } else if (modelRef.current.rotation.moveRight && modelRef.current.rotation.y >= animationProgress.finalEdge) {
        modelRef.current.rotation.y += 0.0007;
      } else if (modelRef.current.rotation.moveRight) {
        modelRef.current.rotation.y += 0.0014;
      } else if (!modelRef.current.rotation.moveRight && modelRef.current.rotation.y <= animationProgress.startEdge) {
        modelRef.current.rotation.y -= 0.0007;
      } else if (!modelRef.current.rotation.moveRight && modelRef.current.rotation.y >= animationProgress.finalEdge) {
        modelRef.current.rotation.y -= 0.0007;
      } else if (!modelRef.current.rotation.moveRight) {
        modelRef.current.rotation.y -= 0.0014;
      }
    }
  });

  const { nodes, materials } = useGLTF('/face.glb');
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

useGLTF.preload('/face.glb');
