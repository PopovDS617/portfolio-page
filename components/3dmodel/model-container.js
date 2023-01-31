import { OrbitControls, PerspectiveCamera } from '@react-three/drei';

import { Model } from './face-model';
import { angleToRadians } from '../../lib/angleToRadians';

const Three = () => {
  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 3, -15]} />
      <OrbitControls enabled={true} />

      <Model
        scale={0.6}
        receiveShadow
        position={[0, -1, 0]}
        rotation={[angleToRadians(10), angleToRadians(140), angleToRadians(0)]}
      />

      <directionalLight
        position={[5, 7, -16]}
        castShadow
        shadow-mapSize-height={1024}
        shadow-mapSize-width={1024}
        shadow-radius={20}
        shadow-bias={-0.0001}
        intensity={0.8}
      />
    </>
  );
};

export default Three;
