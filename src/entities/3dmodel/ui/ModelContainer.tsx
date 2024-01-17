import { OrbitControls, PerspectiveCamera } from '@react-three/drei';

import { FaceModel } from './FaceModel';
import { angleToRadians } from '@/lib';
import { Canvas } from '@react-three/fiber';

export const ModelContainer = () => {
  return (
    <Canvas shadows>
      <PerspectiveCamera makeDefault position={[0, 0, 12]} />
      <OrbitControls enabled={false} />
      <FaceModel
        scale={0.6}
        receiveShadow
        position={[-0.5, -4, 0]}
        rotation={[angleToRadians(0), angleToRadians(-30), angleToRadians(0)]}
      />
      <ambientLight intensity={Math.PI} />
    </Canvas>
  );
};
