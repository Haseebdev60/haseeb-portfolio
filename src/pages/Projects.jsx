import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt, faSearch } from '@fortawesome/free-solid-svg-icons';

// Project data (in a real app this would come from a database or API)
const allProjects = [
  {
    id: 1,
    title: 'E-commerce Website',
    category: 'web',
    description: 'A full-featured online store with cart, checkout, and payment integration. Implemented user authentication, product filtering, and responsive design.',
    image: 'https://images.unsplash.com/photo-1607082349566-187342175e2f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe'],
    github: 'https://github.com/',
    live: 'https://example.com/',
    featured: true,
  },
  {
    id: 2,
    title: 'Travel App',
    category: 'mobile',
    description: 'A mobile app for planning trips and discovering new destinations. Features include itinerary planning, location bookmarking, and offline maps.',
    image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1121&q=80',
    technologies: ['React Native', 'Firebase', 'Google Maps API', 'Expo'],
    github: 'https://github.com/',
    live: 'https://example.com/',
    featured: true,
  },
  {
    id: 3,
    title: 'Portfolio Website',
    category: 'web',
    description: 'A personal portfolio website showcasing projects and skills. Includes dark mode, animations, and responsive design.',
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=755&q=80',
    technologies: ['React', 'Styled Components', 'Framer Motion'],
    github: 'https://github.com/',
    live: 'https://example.com/',
    featured: true,
  },
  {
    id: 4,
    title: 'AI Content Generator',
    category: 'ai',
    description: 'An AI-powered application that generates content for blogs and social media. Uses machine learning to create human-like text based on prompts.',
    image: 'https://images.unsplash.com/photo-1677442340898-d83bcbec9e36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80',
    technologies: ['React', 'OpenAI API', 'Node.js', 'Express'],
    github: 'https://github.com/',
    live: 'https://example.com/',
    featured: true,
  },
  {
    id: 5,
    title: 'Task Management App',
    category: 'web',
    description: 'A productivity application for task management with features like drag-and-drop organization, priority levels, and deadline reminders.',
    image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80',
    technologies: ['React', 'Redux', 'Firebase', 'Material UI'],
    github: 'https://github.com/',
    live: 'https://example.com/',
    featured: false,
  },
  {
    id: 6,
    title: 'Weather Dashboard',
    category: 'web',
    description: 'A weather application that provides current and forecasted weather data for any location. Features interactive maps and detailed weather information.',
    image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    technologies: ['JavaScript', 'OpenWeatherMap API', 'HTML', 'CSS'],
    github: 'https://github.com/',
    live: 'https://example.com/',
    featured: false,
  },
  {
    id: 7,
    title: 'Fitness Tracker',
    category: 'mobile',
    description: 'A mobile application for tracking workouts, setting fitness goals, and monitoring progress over time. Includes exercise library and custom routines.',
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    technologies: ['React Native', 'Redux', 'Firebase', 'Health APIs'],
    github: 'https://github.com/',
    live: 'https://example.com/',
    featured: false,
  },
  {
    id: 8,
    title: 'Image Recognition Tool',
    category: 'ai',
    description: 'An application that uses machine learning to identify objects, scenes, and people in images. Features batch processing and detailed analysis.',
    image: 'https://images.unsplash.com/photo-1633412802994-5c058f151b66?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    technologies: ['Python', 'TensorFlow', 'React', 'Flask'],
    github: 'https://github.com/',
    live: 'https://example.com/',
    featured: false,
  },
];

const PageContainer = styled.div`
  padding-top: 80px; // For fixed navbar
`;

const ProjectsHeader = styled.section`
  background-color: ${props => props.theme.background};
  padding: 5rem 0;
  text-align: center;
`;

const ProjectsHeaderContent = styled.div`
  max-width: 100%;
  margin: 0 auto;
  padding: 0 2rem;
`;

const PageTitle = styled.h1`
  margin-bottom: 1.5rem;
  font-size: clamp(2.5rem, 5vw, 4rem);
  
  span {
    color: ${props => props.theme.primary};
  }
`;

const PageSubtitle = styled.p`
  font-size: 1.25rem;
  color: ${props => props.theme.secondary};
  margin-bottom: 2rem;
`;

const FiltersSection = styled.section`
  background-color: ${props => props.theme.cardBg};
  padding: 3rem 0;
`;

const FiltersContainer = styled.div`
  max-width: 100%;
  margin: 0 auto;
  padding: 0 2rem;
`;

const FilterOptions = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 2rem;
`;

const FilterButton = styled.button`
  padding: 0.5rem 1.5rem;
  border-radius: 30px;
  font-weight: 600;
  background-color: ${props => props.active ? props.theme.primary : props.theme.background};
  color: ${props => props.active ? 'white' : props.theme.text};
  transition: all 0.3s ease;
  box-shadow: ${props => props.theme.shadow};
  
  &:hover {
    transform: translateY(-2px);
    background-color: ${props => props.active ? props.theme.primary : props.theme.primary + '20'};
  }
`;

const SearchContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  position: relative;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 1rem 1.5rem 1rem 3rem;
  border-radius: 50px;
  border: none;
  background-color: ${props => props.theme.background};
  color: ${props => props.theme.text};
  box-shadow: ${props => props.theme.shadow};
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px ${props => props.theme.primary};
  }
`;

const SearchIcon = styled.div`
  position: absolute;
  left: 1.25rem;
  top: 50%;
  transform: translateY(-50%);
  color: ${props => props.theme.secondary};
`;

const ProjectsGridSection = styled.section`
  background-color: ${props => props.theme.background};
  padding: 5rem 0;
`;

const ProjectsContainer = styled.div`
  max-width: 100%;
  margin: 0 auto;
  padding: 0 2rem;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
  
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

const FeaturedBadge = styled.span`
  position: absolute;
  top: 1rem;
  left: 1rem;
  background-color: ${props => props.theme.accent};
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 30px;
  font-size: 0.75rem;
  font-weight: 600;
  z-index: 2;
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

const NoResults = styled.div`
  text-align: center;
  padding: 3rem;
  width: 100%;
  color: ${props => props.theme.secondary};
  
  h3 {
    margin-bottom: 1rem;
  }
`;

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProjects, setFilteredProjects] = useState(allProjects);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  useEffect(() => {
    let result = allProjects;
    
    // Apply category filter
    if (filter !== 'all') {
      result = result.filter(project => project.category === filter);
    }
    
    // Apply search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(project => 
        project.title.toLowerCase().includes(query) || 
        project.description.toLowerCase().includes(query) ||
        project.technologies.some(tech => tech.toLowerCase().includes(query))
      );
    }
    
    setFilteredProjects(result);
  }, [filter, searchQuery]);
  
  return (
    <PageContainer>
      <ProjectsHeader>
        <ProjectsHeaderContent>
          <PageTitle>
            My <span>Projects</span>
          </PageTitle>
          <PageSubtitle>
            Explore the projects I've worked on
          </PageSubtitle>
        </ProjectsHeaderContent>
      </ProjectsHeader>
      
      <FiltersSection>
        <FiltersContainer>
          <FilterOptions>
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
          </FilterOptions>
          
          <SearchContainer>
            <SearchIcon>
              <FontAwesomeIcon icon={faSearch} />
            </SearchIcon>
            <SearchInput
              type="text"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </SearchContainer>
        </FiltersContainer>
      </FiltersSection>
      
      <ProjectsGridSection>
        <ProjectsContainer>
          <ProjectsGrid>
            <AnimatePresence>
              {filteredProjects.length > 0 ? (
                filteredProjects.map(project => (
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
                      {project.featured && <FeaturedBadge>Featured</FeaturedBadge>}
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
                ))
              ) : (
                <NoResults>
                  <h3>No projects found</h3>
                  <p>Try adjusting your search or filter criteria</p>
                </NoResults>
              )}
            </AnimatePresence>
          </ProjectsGrid>
        </ProjectsContainer>
      </ProjectsGridSection>
    </PageContainer>
  );
};

export default Projects; 