import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three';

function CameraRig({ children }) {
  const outer = useRef();
  const inner = useRef();
  useFrame(({ camera, clock }) => {
    outer.current.position.y = THREE.MathUtils.lerp(
      outer.current.position.y,
      0.05,
      0.05
    );
    inner.current.rotation.y = Math.sin(clock.getElapsedTime() / 19) * Math.PI;
    inner.current.position.z = 5 + -Math.sin(clock.getElapsedTime() / 2) * 7;
    // inner.current.position.y = -5 + Math.sin(clock.getElapsedTime() / 2) * 2;
  });
  return (
    <group position={[0, -100, 0]} ref={outer}>
      <group ref={inner}>{children}</group>
    </group>
  );
}

export default CameraRig;
