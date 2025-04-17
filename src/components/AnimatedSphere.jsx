import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial, OrbitControls, Environment } from '@react-three/drei';
import styled from 'styled-components';

const AnimationContainer = styled.div`
  width: 100%;
  height: 400px;
  position: relative;
`;

function AnimatedSphere3D() {
  const sphereRef = useRef();
  
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    sphereRef.current.position.y = Math.sin(t * 0.5) * 0.2;
    sphereRef.current.rotation.y += 0.005;
    sphereRef.current.rotation.z += 0.01;
  });
  
  return (
    <Sphere ref={sphereRef} args={[1, 64, 64]} position={[0, 0, 0]}>
      <MeshDistortMaterial
        color="#6d28d9"
        attach="material"
        distort={0.4}
        speed={1.5}
        roughness={0.2}
        metalness={0.8}
      />
    </Sphere>
  );
}

function AnimatedSphere() {
  return (
    <AnimationContainer>
      <Canvas camera={{ position: [0, 0, 4], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
        <AnimatedSphere3D />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
        <Environment preset="sunset" />
      </Canvas>
    </AnimationContainer>
  );
}

export default AnimatedSphere; 