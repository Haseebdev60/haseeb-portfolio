import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt, faPaperPlane, faCheck } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

const PageContainer = styled.div`
  padding-top: 80px; // For fixed navbar
`;

const ContactHeader = styled.section`
  background-color: ${props => props.theme.background};
  padding: 5rem 0;
  text-align: center;
`;

const ContactHeaderContent = styled.div`
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

const ContactSection = styled.section`
  background-color: ${props => props.theme.cardBg};
  padding: 5rem 0;
`;

const ContactContainer = styled.div`
  max-width: 100%;
  margin: 0 auto;
  padding: 0 4rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 2rem;
  }
`;

const ContactInfo = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const ContactHeading = styled.h2`
  font-size: 2rem;
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
  
  span {
    color: ${props => props.theme.primary};
  }
`;

const ContactDescription = styled.p`
  color: ${props => props.theme.secondary};
  margin-bottom: 2rem;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
`;

const ContactIcon = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.primary + '20'};
  color: ${props => props.theme.primary};
  border-radius: 50%;
  font-size: 1.25rem;
`;

const ContactDetails = styled.div`
  h3 {
    margin-bottom: 0.5rem;
    font-size: 1.25rem;
  }
  
  p {
    color: ${props => props.theme.secondary};
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  color: ${props => props.theme.text};
  background-color: ${props => props.theme.background};
  transition: all 0.3s ease;
  font-size: 1.25rem;
  
  &:hover {
    color: white;
    background-color: ${props => props.theme.primary};
    transform: translateY(-3px);
  }
`;

const ContactForm = styled(motion.form)`
  background-color: ${props => props.theme.background};
  padding: 2.5rem;
  border-radius: 10px;
  box-shadow: ${props => props.theme.shadow};
`;

const FormTitle = styled.h2`
  margin-bottom: 2rem;
  font-size: 1.75rem;
  
  span {
    color: ${props => props.theme.primary};
  }
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const FormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 600;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1px solid ${props => props.theme.text + '20'};
  border-radius: 4px;
  background-color: transparent;
  color: ${props => props.theme.text};
  transition: border-color 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: ${props => props.theme.primary};
  }
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1px solid ${props => props.theme.text + '20'};
  border-radius: 4px;
  background-color: transparent;
  color: ${props => props.theme.text};
  resize: vertical;
  min-height: 150px;
  transition: border-color 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: ${props => props.theme.primary};
  }
`;

const SubmitButton = styled.button`
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
    transform: translateY(-2px);
    background-color: ${props => props.theme.primary + 'dd'};
  }
  
  &:disabled {
    background-color: ${props => props.theme.secondary};
    cursor: not-allowed;
    transform: none;
  }
`;

const SuccessMessage = styled(motion.div)`
  padding: 1rem;
  background-color: #d4edda;
  color: #155724;
  border-radius: 4px;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  svg {
    color: #28a745;
  }
`;

const MapSection = styled.section`
  padding: 5rem 0;
  background-color: ${props => props.theme.background};
`;

const MapContainer = styled.div`
  max-width: 100%;
  margin: 0 auto;
  padding: 0 2rem;
`;

const MapTitle = styled.h2`
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

const MapIframe = styled.iframe`
  width: 100%;
  height: 450px;
  border: none;
  border-radius: 10px;
  box-shadow: ${props => props.theme.shadow};
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };
  
  return (
    <PageContainer>
      <ContactHeader>
        <ContactHeaderContent>
          <PageTitle>
            Get In <span>Touch</span>
          </PageTitle>
          <PageSubtitle>
            Feel free to contact me for any project or collaboration
          </PageSubtitle>
        </ContactHeaderContent>
      </ContactHeader>
      
      <ContactSection>
        <ContactContainer>
          <ContactInfo
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <ContactHeading>
                Let's talk about your <span>project</span>
              </ContactHeading>
              <ContactDescription>
                I'm interested in freelance opportunities – especially ambitious or large projects. However, if you have other requests or questions, don't hesitate to use the form or contact me directly.
              </ContactDescription>
            </div>
            
            <div>
              <ContactItem>
                <ContactIcon>
                  <FontAwesomeIcon icon={faMapMarkerAlt} />
                </ContactIcon>
                <ContactDetails>
                  <h3>Location</h3>
                  <p>123 Web Dev Street, San Francisco, CA 94107</p>
                </ContactDetails>
              </ContactItem>
              
              <ContactItem>
                <ContactIcon>
                  <FontAwesomeIcon icon={faEnvelope} />
                </ContactIcon>
                <ContactDetails>
                  <h3>Email</h3>
                  <p>example@yourwebsite.com</p>
                </ContactDetails>
              </ContactItem>
              
              <ContactItem>
                <ContactIcon>
                  <FontAwesomeIcon icon={faPhone} />
                </ContactIcon>
                <ContactDetails>
                  <h3>Phone</h3>
                  <p>+1 (123) 456-7890</p>
                </ContactDetails>
              </ContactItem>
            </div>
            
            <div>
              <h3>Follow Me</h3>
              <SocialLinks>
                <SocialLink href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faGithub} />
                </SocialLink>
                <SocialLink href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faLinkedin} />
                </SocialLink>
                <SocialLink href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faTwitter} />
                </SocialLink>
              </SocialLinks>
            </div>
          </ContactInfo>
          
          <ContactForm
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
          >
            <FormTitle>
              Send Me a <span>Message</span>
            </FormTitle>
            
            {isSubmitted && (
              <SuccessMessage
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <FontAwesomeIcon icon={faCheck} /> Thank you for your message! I'll get back to you soon.
              </SuccessMessage>
            )}
            
            <FormRow>
              <FormGroup>
                <Label htmlFor="name">Name</Label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </FormGroup>
              
              <FormGroup>
                <Label htmlFor="email">Email</Label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </FormGroup>
            </FormRow>
            
            <FormGroup>
              <Label htmlFor="subject">Subject</Label>
              <Input
                type="text"
                id="subject"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </FormGroup>
            
            <FormGroup>
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                name="message"
                placeholder="Your message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </FormGroup>
            
            <SubmitButton type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : (
                <>
                  Send Message <FontAwesomeIcon icon={faPaperPlane} />
                </>
              )}
            </SubmitButton>
          </ContactForm>
        </ContactContainer>
      </ContactSection>
      
      <MapSection>
        <MapContainer>
          <MapTitle>My Location</MapTitle>
          <MapIframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50470.22725710623!2d-122.43297063887928!3d37.77493068362628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2s!4v1682005824465!5m2!1sen!2s"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </MapContainer>
      </MapSection>
    </PageContainer>
  );
};

export default Contact; 