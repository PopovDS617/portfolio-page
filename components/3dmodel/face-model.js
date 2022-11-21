import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

export function Model(props) {
  const { nodes, materials } = useGLTF('/akkk.glb');

  const modelRef = useRef(null);

  useFrame(({}) => {
    modelRef.current.rotation.y += 0.0027;
  });

  return (
    <group {...props} dispose={null} ref={modelRef}>
      <group position={[-6.92, 12.4, -9.9]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube5978.geometry}
          material={materials.Voxel_mat53}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube5978_1.geometry}
          material={materials.Voxel_mat95}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube5978_2.geometry}
          material={materials.Voxel_mat208}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube5978_3.geometry}
          material={materials.Voxel_mat216}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube5978_4.geometry}
          material={materials.Voxel_mat79}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube5978_5.geometry}
          material={materials.Voxel_mat246}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube5978_6.geometry}
          material={materials.Voxel_mat96}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube5978_7.geometry}
          material={materials.Voxel_mat33}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube5978_8.geometry}
          material={materials.Voxel_mat160}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube5978_9.geometry}
          material={materials.Voxel_mat255}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube5978_10.geometry}
          material={materials.Voxel_mat200}
        />
      </group>
    </group>
  );
}

useGLTF.preload('/akkk.glb');
