import React, { useState, useEffect } from 'react';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <style>{`
        /* Botón Principal - Animación Neon & Scale */
        .btn-neon-animated {
          transition: transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease !important;
        }
        
        .btn-neon-animated:hover {
          transform: translateY(-5px) scale(1.03);
          background-color: #FF0059 !important;
          box-shadow: 0 10px 30px rgba(255, 0, 89, 0.6) !important;
          color: #fff !important;
        }

        /* Botón Secundario (Hablemos) - AHORA SIN BORDE */
        .btn-no-border-animated {
          transition: transform 0.3s ease, color 0.3s ease, background-color 0.3s ease !important;
          border: none !important; /* Aseguramos que no tenga borde */
          background-color: transparent !important; /* Fondo transparente por defecto */
          opacity: 0.7; /* Ligeramente apagado para jerarquía */
        }

        .btn-no-border-animated:hover {
          transform: translateY(-5px);
          color: #fff !important; /* Se ilumina al hover */
          background-color: rgba(255, 255, 255, 0.05) !important; /* Fondo sutil al hover */
          opacity: 1; /* Opacidad total al hover */
        }
        
        .nav-link-custom {
          text-decoration: none !important;
        }

        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>

      <section id="inicio" style={styles.hero}>
        {/* --- COLUMNA IZQUIERDA: TEXTO --- */}
        <div style={styles.leftColumn}>
          <div 
            style={{
              ...styles.textContainer,
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateX(0)' : 'translateX(-40px)',
              transition: 'all 1.2s cubic-bezier(0.22, 1, 0.36, 1)'
            }}
          >
            <p style={styles.legend}>HOLA, MI NOMBRE ES</p>
            <h1 style={styles.title}>ISAAC ALONSO</h1>
            
            <div style={styles.subtitleContainer}>
              <h2 style={styles.subtitle}>
                Desarrollador <span style={styles.highlight}>Multiplataforma</span>
              </h2>
              <p style={styles.degree}>
                Técnico en Sistemas Microinformáticos y Redes
              </p>
            </div>

            <div style={styles.buttonContainer}>
              <a href="#proyectos" className="btn-neon-animated nav-link-custom" style={styles.primaryBtn}>
                EXPLORAR PROYECTOS
              </a>
              {/* Actualizado a la nueva clase sin borde */}
              <a href="#contacto" className="btn-no-border-animated nav-link-custom" style={styles.secondaryBtn}>
                HABLEMOS
              </a>
            </div>
          </div>
        </div>

        {/* --- COLUMNA DERECHA: VISUAL --- */}
        <div style={styles.rightColumn}>
          <div style={styles.rightContentImage}></div>
          <div style={styles.neonOverlay}></div>
        </div>
      </section>
    </>
  );
}

const styles = {
  // ... (hero, leftColumn, textContainer, legend, title se mantienen)
  hero: {
    height: '100vh',
    width: '100%',
    display: 'flex',
    backgroundColor: '#000',
    overflow: 'hidden',
    position: 'relative',
  },
  leftColumn: {
    flex: '1 1 50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0 5% 0 10%',
    zIndex: 10,
    background: 'linear-gradient(90deg, #000 85%, rgba(0,0,0,0) 100%)',
  },
  textContainer: { maxWidth: '550px', textAlign: 'left' },
  legend: {
    color: 'rgb(206, 206, 206)', 
    fontSize: '0.8rem',
    letterSpacing: '5px',
    fontWeight: '700',
    marginBottom: '10px',
    display: 'block',
  },
  title: {
    fontSize: 'clamp(3.5rem, 8vw, 6rem)',
    color: '#fff',
    margin: '0',
    fontWeight: '900',
    lineHeight: '0.85',
    letterSpacing: '-3px',
    textTransform: 'uppercase',
  },
  // SECCIÓN DE BORDES (3PX UNIFICADO)
  subtitleContainer: {
    marginTop: '35px',
    borderLeft: '3px solid rgba(255, 0, 89, 0.25)', 
    paddingLeft: '25px',
  },
  subtitle: { 
    fontSize: '1.55rem', 
    color: '#fff', 
    margin: 0,
    fontWeight: '600',
    display: 'inline-block', 
    position: 'relative',
    borderBottom: '3px solid rgba(255, 0, 89, 0.25)', 
    paddingBottom: '10px', 
  },
  degree: { 
    fontSize: '0.88rem', 
    color: 'rgb(206, 206, 206)', 
    marginTop: '18px', 
    textTransform: 'uppercase',
    letterSpacing: '1.2px',
    opacity: 0.65,
  },
  highlight: { 
    color: '#FF0059', 
    fontWeight: '700',
    textShadow: '0 0 15px rgba(255, 0, 89, 0.3)' 
  },
  // COLUMNA VISUAL
  rightColumn: {
    flex: '1 1 50%',
    position: 'relative',
    backgroundColor: '#4a001a',
    zIndex: 5,
    borderTopLeftRadius: '60px',
    borderBottomLeftRadius: '60px', 
    overflow: 'hidden',
  },
  rightContentImage: {
    position: 'absolute',
    top: 0, left: 0, width: '100%', height: '100%',
    background: 'linear-gradient(135deg, #FF0059 0%, #A9003B 40%, #1a0009 100%)',
    backgroundSize: '200% 200%',
    animation: 'gradientShift 8s ease infinite',
  },
  neonOverlay: {
    position: 'absolute',
    top: '15%', right: '15%', width: '350px', height: '350px',
    background: 'radial-gradient(circle, rgba(255, 0, 89, 0.12) 0%, rgba(0,0,0,0) 70%)',
    filter: 'blur(70px)',
  },
  // BOTONES
  buttonContainer: { display: 'flex', gap: '25px', marginTop: '60px', alignItems: 'center' },
  primaryBtn: {
    display: 'inline-block',
    backgroundColor: '#FF0059',
    color: '#fff',
    padding: '16px 32px',
    fontWeight: '800',
    fontSize: '0.8rem',
    letterSpacing: '1.5px',
    borderRadius: '0.2rem',
    boxShadow: '0 5px 20px rgba(255, 0, 89, 0.3)',
    cursor: 'pointer',
  },
  secondaryBtn: {
    display: 'inline-block',
    color: 'rgba(255, 255, 255, 0.7)',
    padding: '16px 32px',
    fontWeight: '800',
    fontSize: '0.8rem',
    letterSpacing: '1.5px',
    borderRadius: '0.2rem',
    cursor: 'pointer',
    /* border y background definidos en la clase CSS btn-no-border-animated */
  }
};