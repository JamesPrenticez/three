import React, {useState, Suspense} from 'react'

import { Canvas } from "react-three-fiber"
import { softShadows, Loader } from '@react-three/drei'

import Box from "./3d/Box"
import Car from "./3d/Car"
import Floor from './3d/Floor'
import Lights from './3d/Lights'

softShadows()

export default function App() {
  const [open, setOpen] = useState(false)

  return (
  <div className='h-screen w-full flex items-center justify-center '>
      <Canvas
        shadows //updated from shadowmap
        camera={{position: [-5, 4, 4], fov: 40, zoom: .5}}
        >
        <Lights />
        <Suspense fallback={null}>
          <Box open={open} setOpen={setOpen} />
          {/* <Car /> */}
          <Floor />
        </Suspense> 
      </Canvas>
      <Loader />
    </div>
  )
}