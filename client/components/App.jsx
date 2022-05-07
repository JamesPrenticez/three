import React, {Suspense} from 'react'

import { Canvas } from "react-three-fiber"
import Box from "./3d/Box"
import Car from "./3d/Car"
import Lights from "./3d/Lights"

export default function App() {
  return (
  <>
    <Canvas
      colorManagement
      shadowMap
      camera={{position: [-5, 4, 4], fov: 40}}
    >
      <Lights />
      <Suspense fallback={null}>
        {/* <Box /> */}
        <Car />
      </Suspense> 
    </Canvas>
  </>
  )
}