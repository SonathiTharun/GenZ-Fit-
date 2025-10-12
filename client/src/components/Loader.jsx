import { Html, useProgress } from '@react-three/drei'

export default function Loader() {
  const { progress } = useProgress()
  return (
    <Html center>
      <div style={{
        padding: '10px 14px',
        borderRadius: 12,
        backdropFilter: 'blur(8px)',
        background: 'rgba(255,255,255,0.06)',
        border: '1px solid rgba(255,255,255,0.12)',
        fontSize: 12
      }}>
        Loading {progress.toFixed(0)}%
      </div>
    </Html>
  )
}

