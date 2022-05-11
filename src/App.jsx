import { Canvas } from '@react-three/fiber';
import Carrera from './components/Carrera';
import { Environment, Loader, OrbitControls } from '@react-three/drei';
import MovingSpots from './components/MoveSpot';
// import CameraRig from './components/CameraRig';

function App() {
  return (
    <>
      <Canvas gl={false}>
        <ambientLight intensity={0.7} />
        <spotLight position={[0, 30, 0]} angle={0.3} />
        {/* <CameraRig> */}
        <Carrera scale={1} rotation={[0, Math.PI / 3, 0]} />
        {/* </CameraRig> */}
        <OrbitControls
          enablePan={false}
          enableZoom={false}
          minPolarAngle={Math.PI / 2.4}
          maxPolarAngle={Math.PI / 2.4}
        />
        <Environment frames={Infinity} resolution={256} preset='warehouse'>
          <MovingSpots />
        </Environment>
      </Canvas>
      <Loader />
    </>
  );
}

export default App;
