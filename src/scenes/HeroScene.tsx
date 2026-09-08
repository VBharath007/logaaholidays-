import { useRef, type RefObject } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, Sparkles, SpotLight, Stars } from '@react-three/drei'
import * as THREE from 'three'

interface EnvironmentEffectsProps {
  accent: string
  scrollProgress: RefObject<number>
  reducedMotion: boolean
}

function EnvironmentEffects({ accent, scrollProgress, reducedMotion }: EnvironmentEffectsProps) {
  const groupRef = useRef<THREE.Group>(null)
  const lightRef = useRef<THREE.SpotLight>(null)
  const targetColor = useRef(new THREE.Color(accent))

  useFrame((state, delta) => {
    targetColor.current.set(accent)
    if (lightRef.current) {
      lightRef.current.color.lerp(targetColor.current, Math.min(delta * 2, 1))
    }

    if (groupRef.current) {
      const progress = scrollProgress.current ?? 0
      if (!reducedMotion) {
        groupRef.current.rotation.y += delta * 0.05
      }
      groupRef.current.position.y = -progress * 2
      groupRef.current.rotation.x = progress * 0.2
    }

    state.camera.position.z = 8 - (scrollProgress.current ?? 0) * 2
    state.camera.lookAt(0, 0, 0)
  })

  return (
    <group ref={groupRef}>
      {/* Volumetric light shining from top right */}
      <SpotLight
        ref={lightRef}
        position={[5, 10, 5]}
        angle={0.6}
        penumbra={1}
        intensity={2.5}
        color={accent}
        castShadow
        distance={20}
        volumetric
      />

      <Float speed={reducedMotion ? 0 : 1} rotationIntensity={reducedMotion ? 0 : 0.5} floatIntensity={reducedMotion ? 0 : 0.5}>
        <mesh>
          <icosahedronGeometry args={[2, 0]} />
          <meshBasicMaterial color={accent} wireframe transparent opacity={0.05} />
        </mesh>
      </Float>

      {!reducedMotion && (
        <>
          <Sparkles count={200} scale={12} size={1.5} speed={0.4} color={accent} opacity={0.8} />
          <Sparkles count={100} scale={15} size={2.5} speed={0.2} color="#ffffff" opacity={0.4} />
          <Stars radius={100} depth={50} count={2000} factor={4} saturation={0} fade speed={1} />
        </>
      )}
    </group>
  )
}

interface HeroSceneProps {
  accent: string
  scrollProgress: RefObject<number>
  reducedMotion: boolean
}

export function HeroScene({ accent, scrollProgress, reducedMotion }: HeroSceneProps) {
  return (
    <Canvas
      dpr={[1, 2]}
      shadows
      camera={{ position: [0, 0, 8], fov: 45 }}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.4} />
      <directionalLight position={[4, 5, 2]} intensity={1} color={accent} castShadow />
      <hemisphereLight args={['#ffffff', '#000000', 0.5]} />
      
      <EnvironmentEffects accent={accent} scrollProgress={scrollProgress} reducedMotion={reducedMotion} />
    </Canvas>
  )
}
