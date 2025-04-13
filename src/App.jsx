import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import './App.css'

// Components
import Navbar from './components/Navbar'
import Footer from './components/Footer'

// Pages
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'

const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme.background};
  color: ${props => props.theme.text};
  transition: all 0.3s ease;
`

const lightTheme = {
  background: '#f8f9fa',
  text: '#212529',
  primary: '#0d6efd',
  secondary: '#6c757d',
  accent: '#fd7e14',
  cardBg: '#ffffff',
  navbarBg: 'rgba(255, 255, 255, 0.8)',
  shadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
}

const darkTheme = {
  background: '#121212',
  text: '#f8f9fa',
  primary: '#4dabf7',
  secondary: '#adb5bd',
  accent: '#ffa94d',
  cardBg: '#1e1e1e',
  navbarBg: 'rgba(18, 18, 18, 0.8)',
  shadow: '0 4px 6px rgba(0, 0, 0, 0.3)'
}

function App() {
  const [theme, setTheme] = useState(lightTheme)
  const [isDarkMode, setIsDarkMode] = useState(false)
  
  useEffect(() => {
    const savedTheme = localStorage.getItem('portfolio-theme')
    if (savedTheme === 'dark') {
      setTheme(darkTheme)
      setIsDarkMode(true)
    }
  }, [])
  
  const toggleTheme = () => {
    const newTheme = isDarkMode ? lightTheme : darkTheme
    setTheme(newTheme)
    setIsDarkMode(!isDarkMode)
    localStorage.setItem('portfolio-theme', isDarkMode ? 'light' : 'dark')
  }

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <AppContainer>
          <Navbar toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </AppContainer>
      </Router>
    </ThemeProvider>
  )
}

export default App
