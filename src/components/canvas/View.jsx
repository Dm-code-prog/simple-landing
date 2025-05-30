'use client'

import { forwardRef, Suspense, useImperativeHandle, useRef } from 'react'
import { Environment, Lightformer, OrbitControls, OrthographicCamera, View as ViewImpl } from '@react-three/drei'
import { Three } from '@/helpers/components/Three'
// import { HemisphereLight } from 'three/webgpu'

export const Common = ({ color }) => (
  <Suspense fallback={null}>
    {color && <color attach='background' args={[color]} />}
    <Environment preset='warehouse' />
    {/* <ambientLight intensity={0.5} />
    <pointLight position={[20, 30, 10]} intensity={5} decay={0.2} />
    <pointLight position={[-10, -10, -10]} intensity={3} color='blue' decay={0.2} /> */}
    <OrthographicCamera makeDefault={true} far={1000} near={-1000} position={[0, 0, 6]} zoom={200} />
  </Suspense>
)

const View = forwardRef(({ children, orbit, ...props }, ref) => {
  const localRef = useRef(null)
  useImperativeHandle(ref, () => localRef.current)

  return (
    <>
      <div ref={localRef} {...props} />
      <Three>
        <ViewImpl track={localRef}>
          {children}
          {orbit && <OrbitControls />}
        </ViewImpl>
      </Three>
    </>
  )
})
View.displayName = 'View'

export { View }
