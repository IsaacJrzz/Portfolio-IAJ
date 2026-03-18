import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <nav style={styles.nav}>
      <div style={{ ...styles.wrapper, padding: isMobile ? '0.5rem 5%' : '0.6rem 10%' }}>
        <a href="/" style={{ display: 'flex', alignItems: 'center' }}>
          <img 
            src="/IAJlogo.png" 
            alt="Logo" 
            style={{ 
              height: isMobile ? '55px' : '75px', // <--- Logo más grande y presente
              width: 'auto',
              filter: 'drop-shadow(0 0 8px rgba(255, 0, 89, 0.4))', // Brillo neón sutil
              transition: '0.3s ease'
            }} 
          />
        </a>

        <div style={{ display: 'flex', gap: isMobile ? '20px' : '40px' }}>
          <a href="#proyectos" className="nav-link-custom" style={styles.link}>Proyectos</a>
          <a href="#contacto" className="nav-link-custom" style={styles.link}>Contacto</a>
        </div>
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    width: '100%',
    backgroundColor: 'rgba(10, 10, 10, 0.85)',
    backdropFilter: 'blur(12px)',
    WebkitBackdropFilter: 'blur(12px)',
    borderBottom: '2px solid rgba(255, 0, 89, 0.35)', // Línea más fina para mayor elegancia
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: 2000,
  },
  wrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    maxWidth: '100%',
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '0.9rem',
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: '1.5px',
    transition: '0.3s',
  }
};