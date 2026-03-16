"use client"

import { useRef, Suspense } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { 
  Float, 
  MeshTransmissionMaterial, 
  Environment,
  useTexture,
  Preload
} from "@react-three/drei"
import * as THREE from "three"

interface CrystalProps {
  position?: [number, number, number]
  scale?: number
  rotationSpeed?: number
  color?: string
}

function Crystal({ 
  position = [0, 0, 0], 
  scale = 1, 
  rotationSpeed = 0.5,
  color = "#ffffff"
}: CrystalProps) {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      // Gentle rotation
      meshRef.current.rotation.y += 0.002 * rotationSpeed
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.1
      
      // Subtle floating motion
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.5) * 0.1
    }
  })

  return (
    <Float 
      speed={2} 
      rotationIntensity={0.5} 
      floatIntensity={1}
      position={position}
    >
      <mesh ref={meshRef} scale={scale}>
        {/* Icosahedron geometry for crystal-like shape */}
        <icosahedronGeometry args={[1, 1]} />
        <MeshTransmissionMaterial
          backside
          samples={16}
          thickness={0.5}
          roughness={0.05}
          transmission={1}
          ior={1.5}
          chromaticAberration={0.5}
          anisotropy={0.3}
          distortion={0.2}
          distortionScale={0.3}
          temporalDistortion={0.1}
          color={color}
        />
      </mesh>
    </Float>
  )
}

function CrystalCluster() {
  const groupRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (groupRef.current) {
      // Gentle overall rotation
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.1
    }
  })

  return (
    <group ref={groupRef}>
      {/* Main central crystal */}
      <Crystal position={[0, 0, 0]} scale={1.2} />
      
      {/* Smaller orbiting crystals */}
      <Crystal position={[1.5, 0.5, 0.5]} scale={0.4} rotationSpeed={1.5} />
      <Crystal position={[-1.2, -0.3, 0.8]} scale={0.3} rotationSpeed={2} />
      <Crystal position={[0.5, -0.8, -1]} scale={0.35} rotationSpeed={1.8} />
    </group>
  )
}

function GlassShard({ position, rotation, scale }: {
  position: [number, number, number]
  rotation: [number, number, number]
  scale: number
}) {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.z += 0.005
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + position[0]) * 0.05
    }
  })

  return (
    <mesh ref={meshRef} position={position} rotation={rotation} scale={scale}>
      <tetrahedronGeometry args={[0.3, 0]} />
      <MeshTransmissionMaterial
        backside
        samples={8}
        thickness={0.2}
        roughness={0}
        transmission={1}
        ior={2}
        chromaticAberration={1}
        color="#ffffff"
      />
    </mesh>
  )
}

function ScatteredShards() {
  const shards = [
    { position: [2, 1, -1] as [number, number, number], rotation: [0.5, 0.3, 0.2] as [number, number, number], scale: 0.8 },
    { position: [-2, -0.5, 1] as [number, number, number], rotation: [0.2, 0.5, 0.1] as [number, number, number], scale: 0.6 },
    { position: [1.5, -1, 1.5] as [number, number, number], rotation: [0.1, 0.2, 0.4] as [number, number, number], scale: 0.5 },
    { position: [-1.5, 1, -0.5] as [number, number, number], rotation: [0.3, 0.1, 0.5] as [number, number, number], scale: 0.7 },
  ]

  return (
    <>
      {shards.map((shard, i) => (
        <GlassShard key={i} {...shard} />
      ))}
    </>
  )
}

interface CrystalSceneProps {
  variant?: "single" | "cluster" | "scattered"
  className?: string
  background?: "transparent" | "black"
}

export function CrystalScene({ 
  variant = "cluster",
  className = "",
  background = "transparent"
}: CrystalSceneProps) {
  return (
    <div className={`w-full h-full ${className}`}>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        gl={{ 
          antialias: true, 
          alpha: background === "transparent",
          powerPreference: "high-performance"
        }}
        style={{ background: background === "transparent" ? "transparent" : "#000" }}
      >
        <Suspense fallback={null}>
          {/* Lighting */}
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <pointLight position={[-10, -10, -10]} intensity={0.5} color="#f0f" />
          <pointLight position={[10, -10, 10]} intensity={0.5} color="#0ff" />
          
          {/* Environment for reflections */}
          <Environment preset="night" />
          
          {/* Crystal variants */}
          {variant === "single" && <Crystal />}
          {variant === "cluster" && <CrystalCluster />}
          {variant === "scattered" && (
            <>
              <Crystal />
              <ScatteredShards />
            </>
          )}
          
          <Preload all />
        </Suspense>
      </Canvas>
    </div>
  )
}

// Lightweight version for hero background
export function CrystalBackground({ className = "" }: { className?: string }) {
  return (
    <div className={`absolute inset-0 opacity-60 ${className}`}>
      <CrystalScene variant="scattered" background="transparent" />
    </div>
  )
}

export default CrystalScene
