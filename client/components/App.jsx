import React, {useState, Suspense} from 'react'

import { Canvas } from "react-three-fiber"
import { softShadows } from '@react-three/drei'

import Box from "./3d/Box"
import Car from "./3d/Car"
import Floor from './3d/Floor'
import Lights from './3d/Lights'

softShadows()

export default function App() {
  const [open, setOpen] = useState(false)


  return (
  <div className='h-screen w-full flex items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>
    <div className='h-1/2 w-1/2'>
      <Canvas
        colorManagement
        shadows //updated from shadowmap
        camera={{position: [-5, 4, 4], fov: 40}}
        >
        <Lights />
        <Suspense fallback={null}>
          <Box open={open} setOpen={setOpen} />
          {/* <Car /> */}
          <Floor />
        </Suspense> 
      </Canvas>
    </div>
  </div>
  )
}