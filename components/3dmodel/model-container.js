import { OrbitControls, PerspectiveCamera } from '@react-three/drei';

import { Model } from './face-model';
import { angleToRadians } from '../../lib/angleToRadians';

const Three = () => {
  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 12]} />
      <OrbitControls enabled={false} />

      <Model
        scale={0.6}
        receiveShadow
        position={[-0.5, -4, 0]}
        rotation={[angleToRadians(0), angleToRadians(-50), angleToRadians(0)]}
      />

      <ambientLight />
    </>
  );
};

export default Three;
