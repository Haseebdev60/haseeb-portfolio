import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import styled from 'styled-components';

const ParticlesContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  opacity: 0.5;
`;

function Particles({ count = 2000 }) {
  const mesh = useRef();
  const light = useRef();
  
  // Generate random particles
  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      const time = Math.random() * 100;
      const factor = 20 + Math.random() * 100;
      const speed = 0.01 + Math.random() / 200;
      const x = Math.random() * 2 - 1;
      const y = Math.random() * 2 - 1;
      const z = Math.random() * 2 - 1;
      
      temp.push({ time, factor, speed, x, y, z, mx: 0, my: 0 });
    }
    return temp;
  }, [count]);
  
  // Create the particle positions
  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      positions[i3] = particles[i].x * 10;
      positions[i3 + 1] = particles[i].y * 10;
      positions[i3 + 2] = particles[i].z * 10;
    }
    return positions;
  }, [count, particles]);
  
  useFrame((state) => {
    const { clock } = state;
    
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      const particle = particles[i];
      
      let { x, y, z } = particle;
      const t = particle.time + clock.elapsedTime * particle.speed;
      
      mesh.current.geometry.attributes.position.array[i3] = x + Math.sin(t) * particle.factor * 0.01;
      mesh.current.geometry.attributes.position.array[i3 + 1] = y + Math.cos(t) * particle.factor * 0.01;
      mesh.current.geometry.attributes.position.array[i3 + 2] = z + Math.sin(t) * particle.factor * 0.01;
    }
    
    mesh.current.geometry.attributes.position.needsUpdate = true;
    
    // Rotate light
    light.current.position.x = Math.sin(clock.elapsedTime * 0.2) * 20;
    light.current.position.y = Math.cos(clock.elapsedTime * 0.2) * 20;
  });
  
  return (
    <group>
      <pointLight ref={light} distance={40} intensity={8} color="#6d28d9" />
      <points ref={mesh}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={particlesPosition.length / 3}
            array={particlesPosition}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.1}
          color="#ffffff"
          transparent
          opacity={0.6}
          sizeAttenuation
        />
      </points>
    </group>
  );
}

function Particles3D() {
  return (
    <ParticlesContainer>
      <Canvas camera={{ position: [0, 0, 15], fov: 60 }}>
        <ambientLight intensity={0.1} />
        <Particles />
      </Canvas>
    </ParticlesContainer>
  );
}

export default Particles3D; 