'use client'

import React, { useMemo } from 'react'
import { useGLTF, Html, Plane } from '@react-three/drei'
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
            // geometry={<mesh geometry={roundedScreenGeometry} />}
            style={{
              // backfaceVisibility: 'hidden',
              transformOrigin: 'center center',
              pointerEvents: 'none',
            }}
          >
            <div
              style={{
                width: '365px',
                height: '790px',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                color: 'white',
                fontSize: '14px',
                fontFamily: 'Arial, sans-serif',
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: '60px',
                transformOrigin: 'center center',
                userSelect: 'none',
              }}
            >
              <h1 style={{ color: 'white', fontSize: '20px', margin: '0 0 8px 0' }}>Simple Phone</h1>
              <p style={{ margin: '0', opacity: 0.9, fontSize: '12px' }}>Interactive Screen</p>
            </div>
          </Html>
        </mesh>
      )}
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
