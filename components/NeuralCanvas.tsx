'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import { useMemo, useRef } from 'react';
import * as THREE from 'three';

function NeuralParticles() {
  const count = 800;
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 60;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 40;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    return arr;
  }, []);

  const ref = useRef<THREE.Points>(null);

  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.rotation.y = clock.elapsedTime * 0.04;
      ref.current.rotation.x = Math.sin(clock.elapsedTime * 0.06) * 0.04;
    }
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled>
      <PointMaterial
        color="#22d3ee"
        size={0.18}
        sizeAttenuation
        transparent
        opacity={0.65}
        depthWrite={false}
      />
    </Points>
  );
}

function GridPlane() {
  const positions = useMemo(() => {
    const pts: number[] = [];
    const size = 30;
    const step = 3;
    for (let x = -size; x <= size; x += step) {
      pts.push(x, -size, -8, x, size, -8);
    }
    for (let y = -size; y <= size; y += step) {
      pts.push(-size, y, -8, size, y, -8);
    }
    return new Float32Array(pts);
  }, []);

  const ref = useRef<THREE.LineSegments>(null);
  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.rotation.z = clock.elapsedTime * 0.01;
    }
  });

  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    return geo;
  }, [positions]);

  return (
    <lineSegments ref={ref} geometry={geometry}>
      <lineBasicMaterial color="#22d3ee" transparent opacity={0.04} />
    </lineSegments>
  );
}

export default function NeuralCanvas() {
  return (
    <Canvas
      camera={{ position: [0, 0, 28], fov: 50 }}
      className="h-full w-full"
      gl={{ antialias: false, alpha: true }}
      dpr={[1, 1.5]}
    >
      <NeuralParticles />
      <GridPlane />
    </Canvas>
  );
}
