import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Box, OrbitControls, Environment } from '@react-three/drei';
import styled from 'styled-components';

const CanvasContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

function RotatingCube() {
  const meshRef = useRef();
  
  useFrame((state, delta) => {
    meshRef.current.rotation.x += delta * 0.2;
    meshRef.current.rotation.y += delta * 0.3;
  });
  
  return (
    <Box ref={meshRef} args={[2, 2, 2]} position={[0, 0, 0]}>
      <meshStandardMaterial 
        color="#6d28d9" 
        roughness={0.1}
        metalness={0.8}
      />
    </Box>
  );
}

function AnimatedCube() {
  return (
    <CanvasContainer>
      <Canvas camera={{ position: [5, 5, 5], fov: 25 }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
        <RotatingCube />
        <OrbitControls enableZoom={false} enablePan={false} />
        <Environment preset="sunset" />
      </Canvas>
    </CanvasContainer>
  );
}

export default AnimatedCube; 