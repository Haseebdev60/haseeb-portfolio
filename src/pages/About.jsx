import { useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faPalette, faMobile, faServer, faGraduationCap, faBriefcase } from '@fortawesome/free-solid-svg-icons';

const PageContainer = styled.div`
  padding-top: 80px; // For fixed navbar
`;

const AboutHeader = styled.section`
  background-color: ${props => props.theme.background};
  padding: 5rem 0;
  text-align: center;
`;

const AboutHeaderContent = styled.div`
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

const BioSection = styled.section`
  background-color: ${props => props.theme.cardBg};
  padding: 5rem 0;
`;

const BioContainer = styled.div`
  max-width: 100%;
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const BioImageContainer = styled(motion.div)`
  position: relative;
  
  img {
    width: 100%;
    border-radius: 10px;
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
    border-radius: 10px;
    z-index: -1;
  }
  
  @media (max-width: 768px) {
    max-width: 400px;
    margin: 0 auto;
  }
`;

const BioContent = styled(motion.div)`
`;

const SectionTitle = styled.h2`
  margin-bottom: 1.5rem;
  position: relative;
  display: inline-block;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 60px;
    height: 4px;
    background-color: ${props => props.theme.accent};
    border-radius: 2px;
  }
`;

const BioText = styled.div`
  margin-bottom: 2rem;
  
  p {
    margin-bottom: 1rem;
    color: ${props => props.theme.secondary};
  }
`;

const PersonalInfoList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem 2rem;
  margin-bottom: 2rem;
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

const PersonalInfoItem = styled.li`
  strong {
    margin-right: 0.5rem;
    color: ${props => props.theme.text};
  }
  
  span {
    color: ${props => props.theme.secondary};
  }
`;

const SkillsSection = styled.section`
  background-color: ${props => props.theme.background};
  padding: 5rem 0;
`;

const SkillsContainer = styled.div`
  max-width: 100%;
  margin: 0 auto;
  padding: 0 2rem;
`;

const SkillsCenterTitle = styled.h2`
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
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
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

const SkillList = styled.ul`
  list-style: disc;
  padding-left: 1.5rem;
  color: ${props => props.theme.secondary};
  
  li {
    margin-bottom: 0.5rem;
  }
`;

const ExperienceSection = styled.section`
  background-color: ${props => props.theme.cardBg};
  padding: 5rem 0;
`;

const ExperienceContainer = styled.div`
  max-width: 100%;
  margin: 0 auto;
  padding: 0 2rem;
`;

const ExperienceGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ExperienceColumn = styled.div``;

const ExperienceTitle = styled.h3`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
  
  svg {
    color: ${props => props.theme.primary};
  }
`;

const Timeline = styled.div`
  position: relative;
  padding-left: 2rem;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 2px;
    height: 100%;
    background-color: ${props => props.theme.primary}40;
  }
`;

const TimelineItem = styled(motion.div)`
  position: relative;
  padding-bottom: 2.5rem;
  
  &:last-child {
    padding-bottom: 0;
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -2rem;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background-color: ${props => props.theme.primary};
    border: 3px solid ${props => props.theme.cardBg};
  }
`;

const TimelineHeader = styled.div`
  margin-bottom: 1rem;
`;

const TimelineTitle = styled.h4`
  font-size: 1.25rem;
  margin-bottom: 0.25rem;
`;

const TimelineSubtitle = styled.h5`
  color: ${props => props.theme.primary};
  font-weight: 600;
  margin-bottom: 0.25rem;
`;

const TimelinePeriod = styled.p`
  color: ${props => props.theme.secondary};
  font-size: 0.875rem;
`;

const TimelineContent = styled.p`
  color: ${props => props.theme.secondary};
`;

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <PageContainer>
      <AboutHeader>
        <AboutHeaderContent>
          <PageTitle>
            About <span>Me</span>
          </PageTitle>
          <PageSubtitle>
            Learn more about me, my background, and what I do
          </PageSubtitle>
        </AboutHeaderContent>
      </AboutHeader>
      
      <BioSection>
        <BioContainer>
          <BioImageContainer
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" 
              alt="Your Name" 
            />
          </BioImageContainer>
          
          <BioContent
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <SectionTitle>Who am I?</SectionTitle>
            
            <BioText>
              <p>
                I'm Your Name, a web developer based in San Francisco, CA specializing in building exceptional digital experiences. I have been working in web development for over 5 years.
              </p>
              <p>
                My passion for web development started back in 2015 when I decided to try creating custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!
              </p>
              <p>
                Fast-forward to today, and I've had the privilege of working at an advertising agency, a start-up, and a tech company. My main focus these days is building accessible, inclusive products and digital experiences.
              </p>
            </BioText>
            
            <PersonalInfoList>
              <PersonalInfoItem>
                <strong>Name:</strong>
                <span>Your Name</span>
              </PersonalInfoItem>
              <PersonalInfoItem>
                <strong>Email:</strong>
                <span>example@yourwebsite.com</span>
              </PersonalInfoItem>
              <PersonalInfoItem>
                <strong>Age:</strong>
                <span>28</span>
              </PersonalInfoItem>
              <PersonalInfoItem>
                <strong>From:</strong>
                <span>San Francisco, CA</span>
              </PersonalInfoItem>
            </PersonalInfoList>
          </BioContent>
        </BioContainer>
      </BioSection>
      
      <SkillsSection>
        <SkillsContainer>
          <SkillsCenterTitle>My Skills</SkillsCenterTitle>
          
          <SkillsGrid>
            <SkillCard
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <SkillIcon>
                <FontAwesomeIcon icon={faCode} />
              </SkillIcon>
              <SkillTitle>Frontend Development</SkillTitle>
              <SkillList>
                <li>HTML, CSS, JavaScript, TypeScript</li>
                <li>React, Redux, Next.js</li>
                <li>Styled Components, Tailwind CSS</li>
                <li>Responsive Web Design</li>
                <li>Web Accessibility (WCAG)</li>
              </SkillList>
            </SkillCard>
            
            <SkillCard
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <SkillIcon>
                <FontAwesomeIcon icon={faServer} />
              </SkillIcon>
              <SkillTitle>Backend Development</SkillTitle>
              <SkillList>
                <li>Node.js, Express</li>
                <li>MongoDB, PostgreSQL</li>
                <li>RESTful APIs</li>
                <li>Authentication & Authorization</li>
                <li>Server Deployment</li>
              </SkillList>
            </SkillCard>
            
            <SkillCard
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <SkillIcon>
                <FontAwesomeIcon icon={faPalette} />
              </SkillIcon>
              <SkillTitle>UI/UX Design</SkillTitle>
              <SkillList>
                <li>Figma, Adobe XD</li>
                <li>Wireframing & Prototyping</li>
                <li>User Research</li>
                <li>Design Systems</li>
                <li>Usability Testing</li>
              </SkillList>
            </SkillCard>
            
            <SkillCard
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <SkillIcon>
                <FontAwesomeIcon icon={faMobile} />
              </SkillIcon>
              <SkillTitle>Mobile Development</SkillTitle>
              <SkillList>
                <li>React Native</li>
                <li>Expo</li>
                <li>Mobile UI/UX</li>
                <li>App Performance Optimization</li>
                <li>App Store Publishing</li>
              </SkillList>
            </SkillCard>
          </SkillsGrid>
        </SkillsContainer>
      </SkillsSection>
      
      <ExperienceSection>
        <ExperienceContainer>
          <SkillsCenterTitle>Experience & Education</SkillsCenterTitle>
          
          <ExperienceGrid>
            <ExperienceColumn>
              <ExperienceTitle>
                <FontAwesomeIcon icon={faBriefcase} /> Work Experience
              </ExperienceTitle>
              
              <Timeline>
                <TimelineItem
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <TimelineHeader>
                    <TimelineTitle>Senior Frontend Developer</TimelineTitle>
                    <TimelineSubtitle>Tech Company Inc.</TimelineSubtitle>
                    <TimelinePeriod>2021 - Present</TimelinePeriod>
                  </TimelineHeader>
                  <TimelineContent>
                    Led the development of the company's main product, improving performance by 40%. Mentored junior developers and implemented best practices.
                  </TimelineContent>
                </TimelineItem>
                
                <TimelineItem
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <TimelineHeader>
                    <TimelineTitle>Frontend Developer</TimelineTitle>
                    <TimelineSubtitle>Startup XYZ</TimelineSubtitle>
                    <TimelinePeriod>2019 - 2021</TimelinePeriod>
                  </TimelineHeader>
                  <TimelineContent>
                    Developed responsive web applications using React and Redux. Collaborated closely with designers and backend developers to implement new features.
                  </TimelineContent>
                </TimelineItem>
                
                <TimelineItem
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <TimelineHeader>
                    <TimelineTitle>Web Developer</TimelineTitle>
                    <TimelineSubtitle>Design Agency</TimelineSubtitle>
                    <TimelinePeriod>2017 - 2019</TimelinePeriod>
                  </TimelineHeader>
                  <TimelineContent>
                    Built websites for various clients using HTML, CSS, and JavaScript. Worked closely with designers to ensure pixel-perfect implementations.
                  </TimelineContent>
                </TimelineItem>
              </Timeline>
            </ExperienceColumn>
            
            <ExperienceColumn>
              <ExperienceTitle>
                <FontAwesomeIcon icon={faGraduationCap} /> Education & Certifications
              </ExperienceTitle>
              
              <Timeline>
                <TimelineItem
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <TimelineHeader>
                    <TimelineTitle>BS in Computer Science</TimelineTitle>
                    <TimelineSubtitle>University of Technology</TimelineSubtitle>
                    <TimelinePeriod>2013 - 2017</TimelinePeriod>
                  </TimelineHeader>
                  <TimelineContent>
                    Graduated with honors. Specialized in web technologies and human-computer interaction.
                  </TimelineContent>
                </TimelineItem>
                
                <TimelineItem
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <TimelineHeader>
                    <TimelineTitle>Full Stack Web Development</TimelineTitle>
                    <TimelineSubtitle>Coding Bootcamp</TimelineSubtitle>
                    <TimelinePeriod>2017</TimelinePeriod>
                  </TimelineHeader>
                  <TimelineContent>
                    Intensive 12-week program covering modern web development technologies and practices.
                  </TimelineContent>
                </TimelineItem>
                
                <TimelineItem
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <TimelineHeader>
                    <TimelineTitle>UX Design Certification</TimelineTitle>
                    <TimelineSubtitle>Design Institute</TimelineSubtitle>
                    <TimelinePeriod>2019</TimelinePeriod>
                  </TimelineHeader>
                  <TimelineContent>
                    Learned user experience design principles, user research methods, and prototyping techniques.
                  </TimelineContent>
                </TimelineItem>
              </Timeline>
            </ExperienceColumn>
          </ExperienceGrid>
        </ExperienceContainer>
      </ExperienceSection>
    </PageContainer>
  );
};

export default About; 