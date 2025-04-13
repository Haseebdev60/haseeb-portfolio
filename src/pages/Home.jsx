import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faCode, faPalette, faMobile } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

// Components
import Hero from '../sections/Hero';
import AboutPreview from '../sections/AboutPreview';
import ProjectsShowcase from '../sections/ProjectsShowcase';
import ContactSection from '../sections/ContactSection';

const PageContainer = styled.div`
  padding-top: 80px; // For fixed navbar
`;

const SkillsSection = styled.section`
  background-color: ${props => props.theme.background};
  padding: 5rem 0;
`;

const SkillsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
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

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const SkillCard = styled(motion.div)`
  background-color: ${props => props.theme.cardBg};
  border-radius: 8px;
  padding: 2rem;
  box-shadow: ${props => props.theme.shadow};
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
`;

const SkillIcon = styled.div`
  font-size: 2.5rem;
  color: ${props => props.theme.primary};
  margin-bottom: 1.5rem;
`;

const SkillTitle = styled.h3`
  margin-bottom: 1rem;
`;

const SkillDescription = styled.p`
  color: ${props => props.theme.secondary};
  margin-bottom: 1.5rem;
`;

const SkillsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

const SkillTag = styled.li`
  background-color: ${props => props.theme.background};
  color: ${props => props.theme.text};
  padding: 0.25rem 0.75rem;
  border-radius: 50px;
  font-size: 0.875rem;
`;

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageContainer>
      <Hero />
      
      <SkillsSection>
        <SkillsContainer>
          <SectionTitle>My Skills</SectionTitle>
          
          <SkillsGrid>
            <SkillCard
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <SkillIcon>
                <FontAwesomeIcon icon={faCode} />
              </SkillIcon>
              <SkillTitle>Frontend Development</SkillTitle>
              <SkillDescription>
                Building responsive and interactive user interfaces with modern frameworks and tools.
              </SkillDescription>
              <SkillsList>
                <SkillTag>React</SkillTag>
                <SkillTag>JavaScript</SkillTag>
                <SkillTag>TypeScript</SkillTag>
                <SkillTag>HTML/CSS</SkillTag>
                <SkillTag>Styled Components</SkillTag>
              </SkillsList>
            </SkillCard>
            
            <SkillCard
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <SkillIcon>
                <FontAwesomeIcon icon={faPalette} />
              </SkillIcon>
              <SkillTitle>UI/UX Design</SkillTitle>
              <SkillDescription>
                Creating beautiful, intuitive user experiences with a focus on usability and accessibility.
              </SkillDescription>
              <SkillsList>
                <SkillTag>Figma</SkillTag>
                <SkillTag>Adobe XD</SkillTag>
                <SkillTag>Prototyping</SkillTag>
                <SkillTag>User Research</SkillTag>
                <SkillTag>Design Systems</SkillTag>
              </SkillsList>
            </SkillCard>
            
            <SkillCard
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <SkillIcon>
                <FontAwesomeIcon icon={faMobile} />
              </SkillIcon>
              <SkillTitle>Mobile Development</SkillTitle>
              <SkillDescription>
                Developing cross-platform mobile applications with React Native for iOS and Android.
              </SkillDescription>
              <SkillsList>
                <SkillTag>React Native</SkillTag>
                <SkillTag>Expo</SkillTag>
                <SkillTag>Native APIs</SkillTag>
                <SkillTag>App Store Publishing</SkillTag>
                <SkillTag>Mobile UX</SkillTag>
              </SkillsList>
            </SkillCard>
          </SkillsGrid>
        </SkillsContainer>
      </SkillsSection>
      
      <AboutPreview />
      <ProjectsShowcase />
      <ContactSection />
    </PageContainer>
  );
};

export default Home; 