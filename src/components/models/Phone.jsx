'use client'

import React, { useMemo } from 'react'
import { useGLTF, Html, Plane, MeshTransmissionMaterial } from '@react-three/drei'
import * as THREE from 'three'

export function PhoneModel(props) {
  const { nodes, materials } = useGLTF('/scene-transformed.glb')

  const roundedScreenGeometry = useMemo(() => {
    const w = 0.47,
      h = 0.96,
      r = 0.06
    const shape = new THREE.Shape()

    // start bottom-left, move clockwise
    shape.moveTo(-w / 2 + r, -h / 2)
    shape.lineTo(w / 2 - r, -h / 2)
    shape.quadraticCurveTo(w / 2, -h / 2, w / 2, -h / 2 + r)
    shape.lineTo(w / 2, h / 2 - r)
    shape.quadraticCurveTo(w / 2, h / 2, w / 2 - r, h / 2)
    shape.lineTo(-w / 2 + r, h / 2)
    shape.quadraticCurveTo(-w / 2, h / 2, -w / 2, h / 2 - r)
    shape.lineTo(-w / 2, -h / 2 + r)
    shape.quadraticCurveTo(-w / 2, -h / 2, -w / 2 + r, -h / 2)

    return new THREE.ShapeGeometry(shape, 8) // 8 = curve segments
  }, [])

  return (
    <group {...props} dispose={null}>
      {nodes.Frame_Frame_0?.geometry && materials.PaletteMaterial001 && (
        <mesh geometry={nodes.Frame_Frame_0.geometry} material={materials.PaletteMaterial001} />
      )}
      {nodes.Frame_Mic_0?.geometry && materials.material && (
        <mesh geometry={nodes.Frame_Mic_0.geometry} material={materials.material} />
      )}

      {nodes.Body_Wallpaper_0?.geometry && (
        <mesh visible={true} geometry={nodes.Body_Wallpaper_0.geometry}>
          <Html
            transform
            center
            occlude='blending'
            wrapperClass='phone-screen-html'
            distanceFactor={0.5}
            position={[0, 0, -0.025]}
            rotation={[0, Math.PI, 0]}
            scale={1}
            geometry={<primitive object={roundedScreenGeometry} attach='geometry' />}
            style={{
              transformOrigin: 'center center',
              pointerEvents: 'none',
            }}
          >
            <iframe
              style={{
                width: '355px',
                height: '790px',
                borderRadius: '60px',
                transformOrigin: 'center center',
                userSelect: 'none',
              }}
              src='https://simp1e-money.netlify.app/'
            />
          </Html>
        </mesh>
      )}
      {/* <mesh position={[0, 0, -0.03]} rotation={[0, Math.PI, 0]}>
        <primitive object={roundedScreenGeometry} attach='geometry' />{' '}
        <MeshTransmissionMaterial transmissionSampler />
      </mesh> */}
      {nodes.Body_Camera_Glass_0?.geometry && materials.PaletteMaterial002 && (
        <mesh geometry={nodes.Body_Camera_Glass_0.geometry} material={materials.PaletteMaterial002} />
      )}
      {nodes.Body_Lens_0?.geometry && materials.Lens && (
        <mesh geometry={nodes.Body_Lens_0.geometry} material={materials.Lens} />
      )}
    </group>
  )
}

useGLTF.preload('/scene-transformed.glb')
