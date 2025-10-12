import { Canvas, useFrame } from '@react-three/fiber'
import { Environment, Grid, GizmoHelper, GizmoViewport } from '@react-three/drei'
import { Suspense, useMemo, useRef } from 'react'
import Loader from './Loader'
import usePrefersReducedMotion from '../hooks/usePrefersReducedMotion'

function Dumbbell() {
  const ref = useRef()
  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    if (ref.current) {
      ref.current.rotation.y = t * 0.5
      ref.current.position.y = Math.sin(t) * 0.2
    }
  })
  return (
    <group ref={ref}>
      <mesh castShadow position={[0,0,0]}>
        <cylinderGeometry args={[0.15, 0.15, 1.2, 32]} />
        <meshStandardMaterial color="#d1d5db" metalness={0.8} roughness={0.3} />
      </mesh>
      <mesh castShadow position={[0,0.75,0]}>
        <torusGeometry args={[0.35, 0.12, 20, 48]} />
        <meshStandardMaterial color="#7c5cff" metalness={0.8} roughness={0.2} />
      </mesh>
      <mesh castShadow position={[0,-0.75,0]}>
        <torusGeometry args={[0.35, 0.12, 20, 48]} />
        <meshStandardMaterial color="#22d3ee" metalness={0.8} roughness={0.2} />
      </mesh>
    </group>
  )
}

function Rigs() {
  return (
    <group>
      <Dumbbell />
      <mesh position={[2,0,-1]} rotation={[0.4,0.4,0]} castShadow>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="#22d3ee" metalness={0.6} roughness={0.3} />
      </mesh>
      <mesh position={[-2,-0.2,-1]} rotation={[0.2,-0.3,0.1]} castShadow>
        <cylinderGeometry args={[0.5, 0.5, 1.2, 24]} />
        <meshStandardMaterial color="#a78bfa" metalness={0.7} roughness={0.25} />
      </mesh>
    </group>
  )
}

export default function GymsHero3D() {
  const reduced = usePrefersReducedMotion()
  const dpr = useMemo(() => (reduced ? [0.75, 1] : [1, 2]), [reduced])
  return (
    <div className="gyms-hero-3d">
      <Canvas dpr={dpr} camera={{ position: [0, 1.2, 5], fov: 50 }} shadows>
        <Suspense fallback={<Loader />}>
          <hemisphereLight intensity={0.25} groundColor="#222" />
          <directionalLight position={[4, 6, 2]} intensity={1} castShadow />
          <Rigs />
          <Grid args={[10, 10]} position={[0, -1.2, 0]} cellColor="#1f2937" sectionColor="#374151" fadeInfinite />
          <Environment preset="city" />
          <GizmoHelper alignment="bottom-right" margin={[80, 80]}> <GizmoViewport /> </GizmoHelper>
        </Suspense>
      </Canvas>
    </div>
  )
}

