import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background-color: ${props => props.theme.navbarBg};
  backdrop-filter: blur(10px);
  padding: 1rem 0;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 100%;
  margin: 0 auto;
  padding: 0 2rem;
`;

const Logo = styled(Link)`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${props => props.theme.primary};
  display: flex;
  align-items: center;
  
  span {
    color: ${props => props.theme.text};
  }
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  
  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    right: ${props => (props.isOpen ? '0' : '-100%')};
    width: 250px;
    height: 100vh;
    background-color: ${props => props.theme.cardBg};
    flex-direction: column;
    justify-content: center;
    transition: right 0.3s ease;
    box-shadow: -2px 0 10px rgba(0, 0, 0, 0.1);
    z-index: 1001;
  }
`;

const NavLink = styled(Link)`
  font-weight: 500;
  position: relative;
  transition: color 0.3s ease;
  color: ${props => (props.active ? props.theme.primary : props.theme.text)};
  
  &::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: ${props => (props.active ? '100%' : '0')};
    height: 2px;
    background-color: ${props => props.theme.primary};
    transition: width 0.3s ease;
  }
  
  &:hover {
    color: ${props => props.theme.primary};
    
    &::after {
      width: 100%;
    }
  }
`;

const ThemeToggle = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${props => props.theme.cardBg};
  color: ${props => props.isDarkMode ? '#ffc107' : '#6c757d'};
  transition: all 0.3s ease;
  
  &:hover {
    transform: rotate(30deg);
  }
`;

const MenuButton = styled.button`
  display: none;
  font-size: 1.5rem;
  color: ${props => props.theme.text};
  
  @media (max-width: 768px) {
    display: block;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  font-size: 1.5rem;
  color: ${props => props.theme.text};
  display: none;
  
  @media (max-width: 768px) {
    display: block;
  }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  display: ${props => (props.isOpen ? 'block' : 'none')};
  
  @media (min-width: 769px) {
    display: none;
  }
`;

const Navbar = ({ toggleTheme, isDarkMode }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  useEffect(() => {
    // Close menu when route changes
    setMenuOpen(false);
    
    // Prevent scrolling when menu is open
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [menuOpen, location]);
  
  return (
    <>
      <Nav style={{ padding: isScrolled ? '0.7rem 0' : '1rem 0' }}>
        <NavContainer>
          <Logo to="/">
            Port<span>folio</span>
          </Logo>
          
          <MenuButton onClick={() => setMenuOpen(true)}>
            <FontAwesomeIcon icon={faBars} />
          </MenuButton>
          
          <NavLinks isOpen={menuOpen}>
            <CloseButton onClick={() => setMenuOpen(false)}>
              <FontAwesomeIcon icon={faTimes} />
            </CloseButton>
            
            <NavLink to="/" active={location.pathname === '/' ? 1 : 0}>
              Home
            </NavLink>
            <NavLink to="/about" active={location.pathname === '/about' ? 1 : 0}>
              About
            </NavLink>
            <NavLink to="/projects" active={location.pathname === '/projects' ? 1 : 0}>
              Projects
            </NavLink>
            <NavLink to="/contact" active={location.pathname === '/contact' ? 1 : 0}>
              Contact
            </NavLink>
            
            <ThemeToggle onClick={toggleTheme} isDarkMode={isDarkMode}>
              <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} />
            </ThemeToggle>
          </NavLinks>
        </NavContainer>
      </Nav>
      <Overlay isOpen={menuOpen} onClick={() => setMenuOpen(false)} />
    </>
  );
};

export default Navbar; 