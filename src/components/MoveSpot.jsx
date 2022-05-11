import { Lightformer } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';

function MovingSpots({ positions = [2, 0, 2, 0, 2, 0, 2, 0] }) {
  const group = useRef();
  useFrame(
    (state, delta) =>
      (group.current.position.z += delta * 15) > 60 &&
      (group.current.position.z = -90)
  );
  return (
    <group rotation={[0, 0.5, 0]}>
      <group ref={group}>
        {positions.map((x, i) => (
          <Lightformer
            key={i}
            form='circle'
            intensity={4}
            rotation={[Math.PI / 2, 0, 0]}
            position={[x, 4, i * 4]}
            scale={[3, 1, 1]}
          />
        ))}
      </group>
    </group>
  );
}
export default MovingSpots;
