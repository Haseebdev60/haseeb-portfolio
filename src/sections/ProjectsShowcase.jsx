import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt, faArrowRight } from '@fortawesome/free-solid-svg-icons';

// Project data (in a real app this would come from a database or API)
const projects = [
  {
    id: 1,
    title: 'E-commerce Website',
    category: 'web',
    description: 'A full-featured online store with cart, checkout, and payment integration.',
    image: 'https://images.unsplash.com/photo-1607082349566-187342175e2f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    github: 'https://github.com/',
    live: 'https://example.com/',
  },
  {
    id: 2,
    title: 'Travel App',
    category: 'mobile',
    description: 'A mobile app for planning trips and discovering new destinations.',
    image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1121&q=80',
    technologies: ['React Native', 'Firebase', 'Google Maps API'],
    github: 'https://github.com/',
    live: 'https://example.com/',
  },
  {
    id: 3,
    title: 'Portfolio Website',
    category: 'web',
    description: 'A personal portfolio website showcasing projects and skills.',
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=755&q=80',
    technologies: ['React', 'Styled Components', 'Framer Motion'],
    github: 'https://github.com/',
    live: 'https://example.com/',
  },
  {
    id: 4,
    title: 'AI Content Generator',
    category: 'ai',
    description: 'An AI-powered application that generates content for blogs and social media.',
    image: 'https://images.unsplash.com/photo-1677442340898-d83bcbec9e36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80',
    technologies: ['React', 'OpenAI API', 'Node.js', 'Express'],
    github: 'https://github.com/',
    live: 'https://example.com/',
  },
];

const ProjectsSection = styled.section`
  background-color: ${props => props.theme.background};
  padding: 5rem 0;
`;

const ProjectsContainer = styled.div`
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

const FilterButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
`;

const FilterButton = styled.button`
  padding: 0.5rem 1.5rem;
  border-radius: 30px;
  font-weight: 600;
  background-color: ${props => props.active ? props.theme.primary : props.theme.cardBg};
  color: ${props => props.active ? 'white' : props.theme.text};
  transition: all 0.3s ease;
  box-shadow: ${props => props.theme.shadow};
  
  &:hover {
    transform: translateY(-2px);
    background-color: ${props => props.active ? props.theme.primary : props.theme.primary + '20'};
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 3rem;
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

const ProjectCard = styled(motion.div)`
  background-color: ${props => props.theme.cardBg};
  border-radius: 10px;
  overflow: hidden;
  box-shadow: ${props => props.theme.shadow};
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const ProjectImage = styled.div`
  height: 200px;
  overflow: hidden;
  position: relative;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }
  
  ${ProjectCard}:hover img {
    transform: scale(1.1);
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0) 100%);
  }
`;

const ProjectCategory = styled.span`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background-color: ${props => props.theme.primary};
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 30px;
  font-size: 0.75rem;
  font-weight: 600;
  z-index: 2;
  text-transform: uppercase;
`;

const ProjectContent = styled.div`
  padding: 1.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const ProjectTitle = styled.h3`
  margin-bottom: 0.5rem;
  font-size: 1.25rem;
`;

const ProjectDescription = styled.p`
  color: ${props => props.theme.secondary};
  margin-bottom: 1.5rem;
  font-size: 0.9rem;
  flex: 1;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

const TechItem = styled.span`
  background-color: ${props => props.theme.background};
  color: ${props => props.theme.text};
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.75rem;
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const ProjectLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
  color: ${props => props.theme.text};
  transition: color 0.3s ease;
  
  &:hover {
    color: ${props => props.theme.primary};
  }
`;

const ViewMoreContainer = styled.div`
  text-align: center;
  margin-top: 3rem;
`;

const ViewMoreButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background-color: transparent;
  border: 2px solid ${props => props.theme.primary};
  color: ${props => props.theme.primary};
  font-weight: 600;
  padding: 0.75rem 2rem;
  border-radius: 4px;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${props => props.theme.primary};
    color: white;
    transform: translateY(-2px);
  }
`;

const ProjectsShowcase = () => {
  const [filter, setFilter] = useState('all');
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);
  
  return (
    <ProjectsSection id="projects-showcase">
      <ProjectsContainer>
        <SectionTitle>Recent Projects</SectionTitle>
        
        <FilterButtons>
          <FilterButton 
            active={filter === 'all'} 
            onClick={() => setFilter('all')}
          >
            All
          </FilterButton>
          <FilterButton 
            active={filter === 'web'} 
            onClick={() => setFilter('web')}
          >
            Web
          </FilterButton>
          <FilterButton 
            active={filter === 'mobile'} 
            onClick={() => setFilter('mobile')}
          >
            Mobile
          </FilterButton>
          <FilterButton 
            active={filter === 'ai'} 
            onClick={() => setFilter('ai')}
          >
            AI
          </FilterButton>
        </FilterButtons>
        
        <ProjectsGrid>
          <AnimatePresence>
            {filteredProjects.map(project => (
              <ProjectCard
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5 }}
                layout
              >
                <ProjectImage>
                  <img src={project.image} alt={project.title} />
                  <ProjectCategory>{project.category}</ProjectCategory>
                </ProjectImage>
                
                <ProjectContent>
                  <ProjectTitle>{project.title}</ProjectTitle>
                  <ProjectDescription>{project.description}</ProjectDescription>
                  
                  <TechStack>
                    {project.technologies.map((tech, index) => (
                      <TechItem key={index}>{tech}</TechItem>
                    ))}
                  </TechStack>
                  
                  <ProjectLinks>
                    <ProjectLink href={project.github} target="_blank" rel="noopener noreferrer">
                      <FontAwesomeIcon icon={faGithub} /> Code
                    </ProjectLink>
                    <ProjectLink href={project.live} target="_blank" rel="noopener noreferrer">
                      <FontAwesomeIcon icon={faExternalLinkAlt} /> Live Demo
                    </ProjectLink>
                  </ProjectLinks>
                </ProjectContent>
              </ProjectCard>
            ))}
          </AnimatePresence>
        </ProjectsGrid>
        
        <ViewMoreContainer>
          <ViewMoreButton to="/projects">
            View All Projects <FontAwesomeIcon icon={faArrowRight} />
          </ViewMoreButton>
        </ViewMoreContainer>
      </ProjectsContainer>
    </ProjectsSection>
  );
};

export default ProjectsShowcase; 