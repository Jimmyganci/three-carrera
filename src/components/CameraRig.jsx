import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function CameraRig({ v = new THREE.Vector3() }) {
  return useFrame((state) => {
    const t = state.clock.elapsedTime;
    state.camera.position.lerp(
      v.set(Math.sin(t / 5), 0, 10 + Math.cos(t / 1)),
      0.05
    );
    state.camera.lookAt(0, 0, 0);
  });
}

export default CameraRig;
