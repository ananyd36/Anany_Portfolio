import {Suspense} from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';

import CanvasLoader from '../Loader';


const Earth = () => {
  const earth = useGLTF("./treecko_and_mudkip/scene.gltf")
  
  
  return (
    <mesh>
      <ambientLight intensity={1.25}/>
      <hemisphereLight intensity={0.15} groundColor='black' />
      <spotLight
        position={[-20, 50, 10]}
        angle={-0.32}
        penumbra={1}
        intensity={1000}
        castShadow
        // shadow-mapSize={1024}
      />
      /<pointLight intensity={2} />
    <primitive
      object={earth.scene}
      //scale={0.002}//floating_island
      //scale = {1}//pokeball-lowpoly
      scale = {0.07} 
      position-y={0}
      rotation-y = {0}
    />
    </mesh>

    

  )
}

const EarthCanvas = () => {
  return (
    <Canvas
    shadows
    frameloop = 'demand'
    //requestAnimationFrame
    gl={{ preserveDrawingBuffer: true }}
    camera={{ 
      fov:45,
      near:0.1,
      far:200,
      position:[-2,4,6]
      //position:[-4,3,6]
    }}
    >
      <Suspense fallback = {<CanvasLoader/>}>
        <OrbitControls 
          autoRotate
          enableZoom={false} 
          maxPolarAngle={Math.PI/2}
          minPolarAngle={Math.PI/2}
          
          />
        
        <Earth />
      </Suspense>
    </Canvas>
  )

}

export default EarthCanvas