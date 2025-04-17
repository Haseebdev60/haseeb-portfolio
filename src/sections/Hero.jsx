import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import AnimatedSphere from '../components/AnimatedSphere';

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 2rem 0;
  position: relative;
  overflow: hidden;
`;

const HeroBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  background: ${props => props.theme.background};
  
  &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle, ${props => props.theme.primary}20 0%, transparent 70%);
    opacity: 0.5;
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: -50%;
    right: -50%;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle, ${props => props.theme.accent}20 0%, transparent 70%);
    opacity: 0.5;
  }
`;

const HeroContainer = styled.div`
  max-width: 100%; 
  width: 100%;
  margin: 0 auto;
  padding: 0 4rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    text-align: center;
    padding: 0 2rem;
  }
`;

const HeroContent = styled.div`
  @media (max-width: 992px) {
    order: 2;
  }
`;

const HeroPreTitle = styled(motion.p)`
  color: ${props => props.theme.primary};
  font-weight: 600;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-bottom: 1rem;
`;

const HeroTitle = styled(motion.h1)`
  font-size: clamp(2.5rem, 5vw, 4rem);
  margin-bottom: 1.5rem;
  line-height: 1.2;
  
  span {
    color: ${props => props.theme.primary};
  }
`;

const HeroDescription = styled(motion.p)`
  font-size: 1.25rem;
  margin-bottom: 2rem;
  color: ${props => props.theme.secondary};
  max-width: 600px;
  
  @media (max-width: 992px) {
    margin-left: auto;
    margin-right: auto;
  }
`;

const HeroCTA = styled(motion.div)`
  display: flex;
  gap: 1rem;
  
  @media (max-width: 992px) {
    justify-content: center;
  }
`;

const PrimaryButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background-color: ${props => props.theme.primary};
  color: white;
  border-radius: 4px;
  font-weight: 600;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${props => props.theme.primary}dd;
    transform: translateY(-2px);
  }
`;

const SocialLinks = styled(motion.div)`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
  
  @media (max-width: 992px) {
    justify-content: center;
  }
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: ${props => props.theme.text};
  background-color: ${props => props.theme.cardBg};
  transition: all 0.3s ease;
  
  &:hover {
    color: white;
    background-color: ${props => props.theme.primary};
    transform: translateY(-3px);
  }
`;

const HeroImage = styled(motion.div)`
  position: relative;
  
  @media (max-width: 992px) {
    order: 1;
    max-width: 400px;
    margin: 0 auto;
  }
`;

const ProfileImage = styled.img`
  width: 100%;
  border-radius: 10px;
  box-shadow: ${props => props.theme.shadow};
`;

const FloatingShape = styled(motion.div)`
  position: absolute;
  width: 40px;
  height: 40px;
  border-radius: 8px;
  background-color: ${props => props.color || props.theme.primary};
  opacity: 0.8;
  z-index: -1;
`;

const Hero = () => {
  return (
    <HeroSection id="home">
      <HeroBackground />
      
      <HeroContainer>
        <HeroContent>
          <HeroPreTitle
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Web Developer
          </HeroPreTitle>
          
          <HeroTitle
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Hi, I'm <span>Muhammad Haseeb</span>
          </HeroTitle>
          
          <HeroDescription
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            A passionate frontend developer creating beautiful, responsive websites and applications with modern technologies.
          </HeroDescription>
          
          <HeroCTA
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <PrimaryButton to="/projects">
              View My Work <FontAwesomeIcon icon={faArrowRight} />
            </PrimaryButton>
          </HeroCTA>
          
          <SocialLinks
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <SocialLink href="https://github.com/Haseebdev60" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} />
            </SocialLink>
            <SocialLink href="https://linkedin.com/in/muhammad-haseeb" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} />
            </SocialLink>
          </SocialLinks>
        </HeroContent>
        
        <HeroImage
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <FloatingShape
            color="#4dabf7"
            initial={{ x: -20, y: -20 }}
            animate={{ x: -15, y: -25 }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: 2,
            }}
          />
          <FloatingShape
            color="#ffa94d"
            style={{ right: -10, bottom: 20 }}
            initial={{ x: 0, y: 0 }}
            animate={{ x: 10, y: -10 }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: 2.5,
            }}
          />
          <ProfileImage src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="Muhammad Haseeb" />
          
          {/* 3D Animation */}
          <div style={{ position: 'absolute', top: '100%', left: 0, right: 0, marginTop: '2rem' }}>
            <AnimatedSphere />
          </div>
        </HeroImage>
      </HeroContainer>
    </HeroSection>
  );
};

export default Hero; 