import { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text3D, Float, PresentationControls, Environment, useMatcapTexture } from '@react-three/drei';
import styled from 'styled-components';

const ModelContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

function AnimatedText() {
  const [matcapTexture] = useMatcapTexture('7B5254_E9DCC7_B19986_C8AC91', 256);
  const textRef = useRef();
  
  useFrame((state) => {
    if (textRef.current) {
      textRef.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.3) * 0.1;
    }
  });
  
  return (
    <Float 
      speed={1.5} 
      rotationIntensity={0.5} 
      floatIntensity={1.5}
    >
      <Text3D
        ref={textRef}
        font="/fonts/inter_bold.json"
        size={1.5}
        height={0.2}
        curveSegments={5}
        bevelEnabled
        bevelThickness={0.05}
        bevelSize={0.02}
        bevelOffset={0}
        bevelSegments={4}
      >
        MH
        <meshMatcapMaterial matcap={matcapTexture} />
      </Text3D>
    </Float>
  );
}

function AnimatedModel() {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  
  useEffect(() => {
    // Create fonts directory if it doesn't exist
    const createFontsDirectory = async () => {
      try {
        // Load Inter Bold font from Google Fonts
        const fontResponse = await fetch('https://fonts.googleapis.com/css2?family=Inter:wght@700&display=swap');
        setFontsLoaded(true);
      } catch (error) {
        console.error('Error loading fonts:', error);
      }
    };
    
    createFontsDirectory();
  }, []);
  
  if (!fontsLoaded) {
    return <div>Loading 3D elements...</div>;
  }
  
  return (
    <ModelContainer>
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
        <PresentationControls
          global
          rotation={[0, 0, 0]}
          polar={[-Math.PI / 4, Math.PI / 4]}
          azimuth={[-Math.PI / 4, Math.PI / 4]}
          config={{ mass: 2, tension: 500 }}
          snap={{ mass: 4, tension: 1500 }}
        >
          <AnimatedText />
        </PresentationControls>
        <Environment preset="city" />
      </Canvas>
    </ModelContainer>
  );
}

export default AnimatedModel; 