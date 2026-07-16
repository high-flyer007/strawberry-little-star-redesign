"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, RoundedBox, Sphere } from "@react-three/drei";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import Image from "next/image";

function FloatingCluster() {
  const group = useRef<THREE.Group | null>(null);

  useFrame(({ mouse, clock }) => {
    if (!group.current) return;
    group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, mouse.x * 0.28, 0.04);
    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, mouse.y * 0.12, 0.04);
    group.current.position.y = Math.sin(clock.elapsedTime * 0.7) * 0.08;
  });

  return (
    <group ref={group}>
      <Float speed={1.6} rotationIntensity={0.8} floatIntensity={1.4}>
        <RoundedBox args={[1.2, 1.2, 1.2]} radius={0.18} position={[-1.8, 0.5, 0.4]}>
          <meshStandardMaterial color="#ff6f7d" roughness={0.32} metalness={0.08} />
        </RoundedBox>
      </Float>

      <Float speed={1.2} rotationIntensity={0.9} floatIntensity={1.2}>
        <RoundedBox args={[1.05, 0.3, 1.5]} radius={0.08} position={[1.35, -0.1, 0]} rotation={[0.3, -0.45, -0.18]}>
          <meshStandardMaterial color="#6ecf8f" roughness={0.4} metalness={0.05} />
        </RoundedBox>
      </Float>

      <Float speed={1.1} rotationIntensity={0.7} floatIntensity={0.9}>
        <mesh position={[0.55, 1.25, -0.9]} rotation={[0.4, 0.2, 1.2]}>
          <coneGeometry args={[0.2, 1.3, 5]} />
          <meshStandardMaterial color="#f6bd60" roughness={0.35} />
        </mesh>
      </Float>

      <Float speed={1.7} rotationIntensity={0.6} floatIntensity={1.3}>
        <mesh position={[2.2, 0.95, -1.3]}>
          <torusGeometry args={[0.26, 0.09, 16, 100]} />
          <meshStandardMaterial color="#8ac6ff" roughness={0.28} metalness={0.16} />
        </mesh>
      </Float>

      <Float speed={1.5} rotationIntensity={0.4} floatIntensity={1.1}>
        <Sphere args={[0.34, 32, 32]} position={[-0.5, 1.45, -1.1]}>
          <meshStandardMaterial color="#fff0b5" roughness={0.18} metalness={0.05} />
        </Sphere>
      </Float>

      <Float speed={1.1} rotationIntensity={0.5} floatIntensity={1.1}>
        <Sphere args={[0.18, 32, 32]} position={[0.1, -0.95, 0.65]}>
          <meshStandardMaterial color="#b79cff" roughness={0.2} metalness={0.06} />
        </Sphere>
      </Float>

      <Float speed={0.9} rotationIntensity={0.4} floatIntensity={0.8}>
        <mesh position={[-2.45, -0.95, -1.4]} rotation={[0, 0, -0.75]}>
          <capsuleGeometry args={[0.13, 0.5, 8, 16]} />
          <meshStandardMaterial color="#4ca3ff" roughness={0.3} metalness={0.06} />
        </mesh>
      </Float>
    </group>
  );
}

export function HeroScene() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="absolute inset-4 overflow-hidden rounded-[1.8rem]">
      <Image
        src="/images/strawberry-school/hero.jpeg"
        alt="Happy children learning in classroom"
        fill
        priority
        // className="object-cover"
        className="object-cover transition-transform duration-700 hover:scale-[1.03]"
      />

      {/* Soft overlay for better blending */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-white/10" />
    </div>
  );
}
