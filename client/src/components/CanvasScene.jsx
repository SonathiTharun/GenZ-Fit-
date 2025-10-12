import { Canvas, useFrame } from '@react-three/fiber'
import { Float, Environment, PresentationControls } from '@react-three/drei'
import { Suspense, useMemo, useRef } from 'react'
import Loader from './Loader'

function WavyTorus({ intensity = 0.3 }) {
  const mesh = useRef()
  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    if (mesh.current) {
      mesh.current.rotation.x = Math.sin(t * 0.4) * 0.2
      mesh.current.rotation.y += 0.01
      const s = 1 + Math.sin(t * 1.5) * 0.05 * intensity
      mesh.current.scale.set(s, s, s)
    }
  })
  return (
    <Float speed={1.5} rotationIntensity={0.4} floatIntensity={1.2}>
      <mesh ref={mesh} castShadow receiveShadow>
        <torusKnotGeometry args={[1.2, 0.4, 220, 32]} />
        <meshStandardMaterial color="#7c5cff" metalness={0.7} roughness={0.2} />
      </mesh>
    </Float>
  )
}

export default function CanvasScene({ reduced = false }) {
  const dpr = useMemo(() => (reduced ? [0.75, 1] : [1, 2]), [reduced])
  return (
    <Canvas dpr={dpr} camera={{ position: [0, 0, 5], fov: 50 }} shadows>
      <Suspense fallback={<Loader />}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[4, 6, 3]} intensity={1.1} castShadow />
        <PresentationControls
          global
          rotation={[0, 0, 0]}
          polar={[-Math.PI / 6, Math.PI / 6]}
          azimuth={[-Math.PI / 6, Math.PI / 6]}
          config={{ mass: 1, tension: 120 }}
          snap={{ mass: 1, tension: 120 }}
        >
          <WavyTorus intensity={reduced ? 0.15 : 0.35} />
        </PresentationControls>
        <Environment preset="studio" />
      </Suspense>
    </Canvas>
  )
}

