import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { angleToRadians } from '../../lib/angleToRadians';

export function Model(props) {
  const modelRef = useRef();
   let rotateRight=true
  
  useFrame(() => {
     if (modelRef.current.rotation &&  modelRef.current.rotation.y && !rotateRight ) {
      modelRef.current.rotation.y -= 0.0033;
       if(modelRef.current.rotation.y===-2){rotateRight===true}
    } 
   
   if (modelRef.current.rotation &&  modelRef.current.rotation.y) {
      modelRef.current.rotation.y += 0.0033;
       if(modelRef.current.rotation.y===2){rotateRight===false}
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
