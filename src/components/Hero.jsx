import React from 'react';

export default function Hero() {
  return (
    <section style={styles.hero}>
      <div style={styles.content}>
        <p style={styles.welcome}>HOLA, MI NOMBRE ES</p>
        <h1 style={styles.title}>ISAAC ALONSO</h1>
        <h2 style={styles.subtitle}>
          Desarrollador <span style={styles.highlight}>Multiplataforma</span> & Sistemas
        </h2>
        <div style={styles.buttonContainer}>
          <a href="#proyectos" style={styles.primaryBtn}>Explorar Proyectos</a>
          <a href="#contacto" style={styles.secondaryBtn}>Hablemos</a>
        </div>
      </div>
    </section>
  );
}

const styles = {
  hero: {
    height: '100vh',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000',
    padding: '0 10%',
  },
  content: {
    textAlign: 'center',
    zIndex: 1,
  },
  welcome: {
    color: '#FF0059',
    fontSize: '1rem',
    letterSpacing: '4px',
    fontWeight: '600',
    marginBottom: '10px',
  },
  title: {
    fontSize: 'clamp(3rem, 10vw, 6rem)',
    color: '#fff',
    margin: '0',
    fontWeight: '900',
    lineHeight: '1',
  },
  subtitle: {
    fontSize: 'clamp(1rem, 3vw, 2rem)',
    color: 'rgba(255, 255, 255, 0.6)',
    marginTop: '20px',
    borderBottom: 'none', // Quitamos el borde fucsia que heredaba del index.css
  },
  highlight: {
    color: '#FF0059',
    textShadow: '0 0 15px rgba(255, 0, 89, 0.5)',
  },
  buttonContainer: {
    display: 'flex',
    gap: '20px',
    justifyContent: 'center',
    marginTop: '50px',
  },
  primaryBtn: {
    backgroundColor: '#FF0059',
    color: '#fff',
    padding: '15px 30px',
    textDecoration: 'none',
    fontWeight: 'bold',
    borderRadius: '4px',
    boxShadow: '0 0 20px rgba(255, 0, 89, 0.4)',
  },
  secondaryBtn: {
    border: '1px solid #FF0059',
    color: '#FF0059',
    padding: '14px 29px',
    textDecoration: 'none',
    fontWeight: 'bold',
    borderRadius: '4px',
  }
};