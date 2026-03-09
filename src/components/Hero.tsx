import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';
import { motion } from 'framer-motion';

function ParticleField() {
  const ref = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const count = 2000;
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = 4 + Math.random() * 10;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      arr[i * 3]     = r * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      arr[i * 3 + 2] = r * Math.cos(phi);
    }
    return arr;
  }, []);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.04;
      ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.12) * 0.1;
    }
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled>
      <PointMaterial
        transparent
        color="#D72638"
        size={0.028}
        sizeAttenuation
        depthWrite={false}
        opacity={0.65}
      />
    </Points>
  );
}

function FloatingShape({
  position,
  rotSpeed,
  shape,
}: {
  position: [number, number, number];
  rotSpeed: [number, number, number];
  shape: 'ico' | 'torus' | 'oct';
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  const initY = position[1];

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += rotSpeed[0] * delta;
      meshRef.current.rotation.y += rotSpeed[1] * delta;
      meshRef.current.rotation.z += rotSpeed[2] * delta;
      meshRef.current.position.y = initY + Math.sin(state.clock.elapsedTime * 0.4) * 0.25;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      {shape === 'ico' && <icosahedronGeometry args={[1, 0]} />}
      {shape === 'torus' && <torusGeometry args={[0.9, 0.25, 6, 16]} />}
      {shape === 'oct' && <octahedronGeometry args={[1, 0]} />}
      <meshBasicMaterial color="#D72638" wireframe opacity={0.2} transparent />
    </mesh>
  );
}

function CameraRig() {
  useFrame((state) => {
    state.camera.position.x += (state.pointer.x * 1.5 - state.camera.position.x) * 0.03;
    state.camera.position.y += (state.pointer.y * 0.8 - state.camera.position.y) * 0.03;
    state.camera.lookAt(0, 0, 0);
  });
  return null;
}

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15, delayChildren: 0.3 } },
};
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const Hero: React.FC = () => {
  return (
    <div className="hero">
      <Canvas
        className="hero-canvas"
        camera={{ position: [0, 0, 8], fov: 60 }}
        style={{ pointerEvents: 'none' }}
      >
        <CameraRig />
        <ParticleField />
        <FloatingShape position={[4.5, 0.5, -2]} rotSpeed={[0.3, 0.5, 0.1]} shape="ico" />
        <FloatingShape position={[-5, -1.5, -1]} rotSpeed={[0.2, 0.3, 0.4]} shape="torus" />
        <FloatingShape position={[2.5, -3, -3]} rotSpeed={[0.4, 0.1, 0.3]} shape="oct" />
        <FloatingShape position={[-3, 2.5, -2]} rotSpeed={[0.1, 0.4, 0.2]} shape="ico" />
      </Canvas>

      <motion.div
        className="hero-inner"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.div className="hero-eyebrow" variants={item}>
          Senior Developer · Available for Opportunities
        </motion.div>
        <motion.h1 className="hero-heading" variants={item}>
          JOHN<br />
          <span className="accent">DOE</span>
        </motion.h1>
        <motion.p className="hero-sub" variants={item}>
          Full-stack engineer with 8+ years crafting scalable systems,
          immersive UIs, and cloud-native architectures. I ship products
          that perform.
        </motion.p>
        <motion.div className="hero-actions" variants={item}>
          <a href="#projects" className="btn btn-primary">View My Work →</a>
          <a href="#contact" className="btn btn-outline">Get In Touch</a>
        </motion.div>
        <motion.div variants={item} style={{ marginTop: '20px' }}>
          <span className="badge badge-red">Open to Work</span>
          <span className="badge badge-white" style={{ marginLeft: '8px' }}>Remote · On-site</span>
        </motion.div>
      </motion.div>

      <div className="hero-scroll">
        <div className="hero-scroll-line" />
        <span>Scroll</span>
      </div>
    </div>
  );
};

export default Hero;
