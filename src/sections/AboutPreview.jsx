import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Particles3D from '../components/Particles3D';

const AboutSection = styled.section`
  background-color: ${props => props.theme.cardBg};
  padding: 5rem 0;
  position: relative;
  overflow: hidden;
`;

const AboutContainer = styled.div`
  max-width: 100%;
  margin: 0 auto;
  padding: 0 2rem;
`;

const SectionTitle = styled.h2`
  text-align: center;
  margin-bottom: 3rem;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 4px;
    background-color: ${props => props.theme.accent};
    border-radius: 2px;
  }
`;

const AboutContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const AboutImage = styled(motion.div)`
  position: relative;
  
  img {
    width: 100%;
    border-radius: 8px;
    box-shadow: ${props => props.theme.shadow};
  }
  
  &::before {
    content: '';
    position: absolute;
    top: -20px;
    left: -20px;
    width: 100%;
    height: 100%;
    border: 4px solid ${props => props.theme.primary};
    border-radius: 8px;
    z-index: -1;
  }
  
  @media (max-width: 768px) {
    max-width: 400px;
    margin: 0 auto;
  }
`;

const AboutInfo = styled(motion.div)`
  @media (max-width: 768px) {
    text-align: center;
  }
`;

const AboutIntro = styled.h3`
  font-size: 1.75rem;
  margin-bottom: 1rem;
  
  span {
    color: ${props => props.theme.primary};
  }
`;

const AboutDescription = styled.p`
  margin-bottom: 2rem;
  color: ${props => props.theme.secondary};
`;

const SkillsContainer = styled.div`
  margin-bottom: 2rem;
`;

const SkillItem = styled.div`
  margin-bottom: 1.5rem;
`;

const SkillInfo = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
`;

const SkillName = styled.span`
  font-weight: 600;
`;

const SkillPercent = styled.span`
  color: ${props => props.theme.primary};
`;

const SkillBar = styled.div`
  height: 8px;
  background-color: ${props => props.theme.background};
  border-radius: 4px;
  overflow: hidden;
`;

const SkillProgress = styled(motion.div)`
  height: 100%;
  background-color: ${props => props.theme.primary};
  border-radius: 4px;
  width: ${props => props.percent}%;
`;

const AboutButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background-color: transparent;
  color: ${props => props.theme.primary};
  font-weight: 600;
  padding: 0.5rem 0;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    height: 2px;
    width: 100%;
    background-color: ${props => props.theme.primary};
    transform-origin: right;
    transform: scaleX(0);
    transition: transform 0.3s ease;
  }
  
  &:hover::after {
    transform-origin: left;
    transform: scaleX(1);
  }
`;

const AboutPreview = () => {
  return (
    <AboutSection id="about-preview">
      <Particles3D />
      <AboutContainer>
        <SectionTitle>About Me</SectionTitle>
        
        <AboutContent>
          <AboutImage
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" 
              alt="Your Name" 
            />
          </AboutImage>
          
          <AboutInfo
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <AboutIntro>
              I'm <span>Muhammad Haseeb</span>, a Web Developer
            </AboutIntro>
            
            <AboutDescription>
              I specialize in building modern, responsive websites and web applications. With over 5 years of experience in the industry, I have worked with various technologies and frameworks to deliver high-quality projects.
            </AboutDescription>
            
            <SkillsContainer>
              <SkillItem>
                <SkillInfo>
                  <SkillName>HTML & CSS</SkillName>
                  <SkillPercent>95%</SkillPercent>
                </SkillInfo>
                <SkillBar>
                  <SkillProgress 
                    percent={95}
                    initial={{ width: 0 }}
                    whileInView={{ width: '95%' }}
                    transition={{ duration: 1, delay: 0.1 }}
                    viewport={{ once: true }}
                  />
                </SkillBar>
              </SkillItem>
              
              <SkillItem>
                <SkillInfo>
                  <SkillName>JavaScript</SkillName>
                  <SkillPercent>90%</SkillPercent>
                </SkillInfo>
                <SkillBar>
                  <SkillProgress 
                    percent={90}
                    initial={{ width: 0 }}
                    whileInView={{ width: '90%' }}
                    transition={{ duration: 1, delay: 0.2 }}
                    viewport={{ once: true }}
                  />
                </SkillBar>
              </SkillItem>
              
              <SkillItem>
                <SkillInfo>
                  <SkillName>React</SkillName>
                  <SkillPercent>85%</SkillPercent>
                </SkillInfo>
                <SkillBar>
                  <SkillProgress 
                    percent={85}
                    initial={{ width: 0 }}
                    whileInView={{ width: '85%' }}
                    transition={{ duration: 1, delay: 0.3 }}
                    viewport={{ once: true }}
                  />
                </SkillBar>
              </SkillItem>
              
              <SkillItem>
                <SkillInfo>
                  <SkillName>Node.js</SkillName>
                  <SkillPercent>80%</SkillPercent>
                </SkillInfo>
                <SkillBar>
                  <SkillProgress 
                    percent={80}
                    initial={{ width: 0 }}
                    whileInView={{ width: '80%' }}
                    transition={{ duration: 1, delay: 0.4 }}
                    viewport={{ once: true }}
                  />
                </SkillBar>
              </SkillItem>
            </SkillsContainer>
            
            <AboutButton to="/about">
              Read More <FontAwesomeIcon icon={faArrowRight} />
            </AboutButton>
          </AboutInfo>
        </AboutContent>
      </AboutContainer>
    </AboutSection>
  );
};

export default AboutPreview; 