import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

const FooterContainer = styled.footer`
  background-color: ${props => props.theme.cardBg};
  color: ${props => props.theme.text};
  padding: 3rem 0;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.05);
`;

const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  width: 100%;
  max-width: 100%;
  margin: 0 auto;
  padding: 0 2rem;
`;

const FooterLogo = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  
  span {
    color: ${props => props.theme.primary};
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1.5rem;
`;

const SocialLink = styled.a`
  font-size: 1.5rem;
  color: ${props => props.theme.secondary};
  transition: all 0.3s ease;
  
  &:hover {
    color: ${props => props.theme.primary};
    transform: translateY(-3px);
  }
`;

const Copyright = styled.p`
  color: ${props => props.theme.secondary};
  text-align: center;
  margin: 0;
`;

const FooterNav = styled.div`
  display: flex;
  gap: 1.5rem;
  
  @media (max-width: 576px) {
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
  }
`;

const FooterLink = styled.a`
  color: ${props => props.theme.text};
  transition: color 0.3s ease;
  
  &:hover {
    color: ${props => props.theme.primary};
  }
`;

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <FooterContainer>
      <FooterContent>
        <FooterLogo>
          Port<span>folio</span>
        </FooterLogo>
        
        <SocialLinks>
          <SocialLink href="https://github.com/Haseebdev60" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} />
          </SocialLink>
          <SocialLink href="https://linkedin.com/in/muhammad-haseeb" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} />
          </SocialLink>
          <SocialLink href="https://twitter.com/haseebdev60" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} />
          </SocialLink>
        </SocialLinks>
        
        <FooterNav>
          <FooterLink href="#home">Home</FooterLink>
          <FooterLink href="#about">About</FooterLink>
          <FooterLink href="#projects">Projects</FooterLink>
          <FooterLink href="#contact">Contact</FooterLink>
        </FooterNav>
        
        <Copyright>
          &copy; {currentYear} Muhammad Haseeb. All rights reserved.
        </Copyright>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;