import { useMemo, useRef } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Float } from '@react-three/drei'
import * as THREE from 'three'

function rng(seed) { let s = seed; return () => (s = (s * 16807) % 2147483647) / 2147483647 }

function Brain({ low, reduced }) {
  const group = useRef()
  const { size } = useThree()
  const { pts, lines } = useMemo(() => {
    const n = low ? 90 : 230, r = rng(11), p = [], l = []
    for (let i = 0; i < n; i++) {
      const side = i % 2 ? 1 : -1, u = r() * 2 - 1, t = r() * Math.PI * 2, rad = Math.cbrt(r()), s = Math.sqrt(1 - u * u)
      p.push(new THREE.Vector3(rad * s * Math.cos(t) * 0.9 + side * 0.45, rad * u * 1.0, rad * s * Math.sin(t) * 1.25))
    }
    for (let i = 0; i < n; i++) for (let j = i + 1; j < n; j++) if (p[i].distanceTo(p[j]) < (low ? 0.6 : 0.5)) l.push(p[i].x, p[i].y, p[i].z, p[j].x, p[j].y, p[j].z)
    return { pts: new Float32Array(p.flatMap((v) => [v.x, v.y, v.z])), lines: new Float32Array(l) }
  }, [low])
  useFrame((state, dt) => {
    if (reduced || !group.current) return
    group.current.rotation.y += dt * 0.25
    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, -state.pointer.y * 0.4, 0.05)
    group.current.position.x = THREE.MathUtils.lerp(group.current.position.x, state.pointer.x * 0.3 + (size.width > 900 ? 1.4 : 0), 0.05)
  })
  return (
    <Float speed={reduced ? 0 : 1.5} floatIntensity={0.6}>
      <group ref={group} position={[size.width > 900 ? 1.4 : 0, 0, 0]} scale={1.5}>
        <points><bufferGeometry><bufferAttribute attach="attributes-position" array={pts} count={pts.length / 3} itemSize={3} /></bufferGeometry><pointsMaterial color="#22D3EE" size={0.045} sizeAttenuation transparent opacity={0.95} /></points>
        <lineSegments><bufferGeometry><bufferAttribute attach="attributes-position" array={lines} count={lines.length / 3} itemSize={3} /></bufferGeometry><lineBasicMaterial color="#8B5CF6" transparent opacity={0.4} /></lineSegments>
        <mesh scale={0.5}><icosahedronGeometry args={[1, 1]} /><meshStandardMaterial color="#8B5CF6" emissive="#8B5CF6" emissiveIntensity={1.4} transparent opacity={0.35} wireframe /></mesh>
      </group>
    </Float>
  )
}

function Particles({ low, reduced }) {
  const ref = useRef()
  const arr = useMemo(() => {
    const n = low ? 250 : 900, r = rng(5), a = new Float32Array(n * 3)
    for (let i = 0; i < n; i++) { const d = 3 + r() * 5, t = r() * Math.PI * 2, u = r() * 2 - 1, s = Math.sqrt(1 - u * u); a.set([d * s * Math.cos(t), d * u, d * s * Math.sin(t)], i * 3) }
    return a
  }, [low])
  useFrame((_, dt) => { if (!reduced && ref.current) ref.current.rotation.y += dt * 0.03 })
  return <points ref={ref}><bufferGeometry><bufferAttribute attach="attributes-position" array={arr} count={arr.length / 3} itemSize={3} /></bufferGeometry><pointsMaterial color="#a78bfa" size={0.03} transparent opacity={0.7} sizeAttenuation /></points>
}

export default function Scene() {
  const low = typeof window !== 'undefined' && (window.innerWidth < 768 || (navigator.hardwareConcurrency || 8) <= 4)
  const reduced = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 55 }} dpr={low ? 1 : [1, 1.75]} gl={{ antialias: !low, powerPreference: 'high-performance' }}>
      <ambientLight intensity={0.4} />
      <pointLight position={[3, 3, 3]} intensity={30} color="#22D3EE" />
      <pointLight position={[-3, -2, 2]} intensity={30} color="#8B5CF6" />
      <Brain low={low} reduced={reduced} />
      <Particles low={low} reduced={reduced} />
    </Canvas>
  )
}
