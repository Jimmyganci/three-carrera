import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const Carrera = (props) => {
  const gltf = useLoader(GLTFLoader, '/carrera-model/scene.gltf');
  return <primitive object={gltf.scene} {...props} />;
};

export default Carrera;
