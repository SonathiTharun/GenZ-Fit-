import { Canvas, useFrame } from '@react-three/fiber'
import { Float, Environment, Stars } from '@react-three/drei'
import { Suspense, useMemo, useRef } from 'react'
import Loader from './Loader'
import usePrefersReducedMotion from '../hooks/usePrefersReducedMotion'

function Orbs() {
  const g = useRef()
  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    if (g.current) g.current.rotation.y = t * 0.15
  })
  return (
    <group ref={g}>
      <Float floatIntensity={1.5} rotationIntensity={0.3}>
        <mesh position={[-1.8, 0.2, 0]}>
          <icosahedronGeometry args={[0.9, 0]} />
          <meshStandardMaterial color="#a78bfa" metalness={0.8} roughness={0.2} />
        </mesh>
      </Float>
      <Float floatIntensity={1.2} rotationIntensity={0.4}>
        <mesh position={[1.6, -0.4, 0]}>
          <dodecahedronGeometry args={[0.7, 0]} />
          <meshStandardMaterial color="#7c5cff" metalness={0.6} roughness={0.35} />
        </mesh>
      </Float>
    </group>
  )
}

export default function ClassesHero3D() {
  const reduced = usePrefersReducedMotion()
  const dpr = useMemo(() => (reduced ? [0.75, 1] : [1, 2]), [reduced])
  return (
    <div className="classes-hero-3d">
      <Canvas dpr={dpr} camera={{ position: [0, 0, 5], fov: 50 }}>
        <Suspense fallback={<Loader />}>
          <ambientLight intensity={0.6} />
          <directionalLight position={[3, 4, 2]} intensity={1.1} />
          <Orbs />
          <Stars radius={40} depth={20} count={800} factor={2} fade speed={0.8} />
          <Environment preset="studio" />
        </Suspense>
      </Canvas>
    </div>
  )
}

