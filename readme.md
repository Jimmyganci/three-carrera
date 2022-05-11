# Workshop Three.js

## Choice your model

GO to https://sketchfab.com/3d-models?date=week&sort_by=-likeCount&cursor=bz0zJnA9MzM%3D and download the model of your choice

Unzip the folder

## Create react app

Create react app with vite

<pre>npm create vite@latest</pre>

- Go to this folder on your terminal and make

<pre>npm install</pre>

- Clean the app and create a public folder to the root of your applicaton and paste your model folder inside.

## Start your three.js application with react

- In main.jsx, replace React.strictMode by the Component Suspense imported by React (this is not only for three.js) and a fallBack props to null

- Import Canvas from "react-three/fiber and replace all code under the return by the Canvas component

## Import model 3d

- Create a folder components and create a file with the name of your model (example: Cat.jsx)
- Inside, create a react component and add this import on the top

<pre>
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
</pre>

- In your functionnal component create a const "gltf" and load your model
- return primite element and give the props "object" with the gltf.scene inside, the destructuring props also

Tips: don't forget to add the props in the parameter

## Let's go to see your model

- In App.jsx call your component model between the canvas component and give her the scale and the rotation array (or all property of your choice)...go to see the result in the browser.

For now, you have the model but it's black because there are nothing light in your scene.

- To resolve this issue, you have to add an environment and some light

- In App.jsx, import {Environment} from '@react-three/drei' and call the Envrionment component below your model.
  For now give her a preset attributes with a "warehouse" value
  You can see the model with color
- Add also an element ambientLight with an intensity of your choice

## Bonus - Animation light

- Create a new component MovingSpots.jsx and the fuctionnal component inside.
- Put this props in the parameter : { positions = [2, 0, 2, 0, 2, 0, 2, 0] }

- Create a ref group with useRef imported by react
- Create a useFrame imported by react-three/fiber :
  useFrame(
  (state, delta) =>
  (group.current.position.z += delta \* 15) > 60 &&
  (group.current.position.z = -90)
  );
- Return this code:
<pre>
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
</pre>

- In App.jsx and beteween the environment compoenent, call the component MovingSpots.
- In the open element Environment add:
<pre>
frames={Infinity} resolution={256}
</pre>

- Now you can see an light animation on your model.

## For further

Go to https://github.com/pmndrs/drei and look the documentation to test any new functionnalities
