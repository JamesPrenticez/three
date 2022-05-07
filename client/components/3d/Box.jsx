/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('3d/box.glb') // file path
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Light" position={[4.08, 5.9, -1.01]} rotation={[1.89, 0.88, -2.05]} />
        <group name="Camera" position={[7.36, 4.96, 6.93]} rotation={[1.24, 0.33, -0.76]} />
        <group name="Armature" position={[0, -0.99, 0]}>
          <primitive object={nodes.Bone} />
          <primitive object={nodes.Bone001} />
          <skinnedMesh name="Cube" geometry={nodes.Cube.geometry} material={materials.Material} skeleton={nodes.Cube.skeleton} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/box.glb')