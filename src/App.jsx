import React from "react";
import "./index.css"; 
// Importamos el Navbar y el nuevo Hero
import Navbar from "./components/Navbar"; 
import Hero from "./components/Hero"; // <-- IMPORTAMOS EL HERO
import ProjectCard from "./components/ProjectCard";

export default function App() {
  return (
    <div className="app-wrapper">
      {/* 1. La barra de navegación se queda arriba, pegada (sticky) */}
      <Navbar />

      {/* 2. El HERO: Lo ponemos AQUÍ, FUERA del container.
             Al estar justo después del Navbar (que es sticky),
             el Hero empezará justo debajo y ocupará 100vh. */}
      <Hero /> 

      {/* 3. El contenedor para el resto del contenido (Proyectos, etc.) */}
      <div className="container">
        {/* Ya no necesitamos el <header> viejo con "Isaac/Desarrollador React",
            porque el Hero ya cumple esa función con un diseño mucho mejor.
            Lo hemos borrado para limpiar el código. */}

        <section id="proyectos">
          <h2>Mis Proyectos</h2>
          <div style={{ marginTop: '30px' }}>
            <ProjectCard 
              titulo="Portfolio Eléctrico" 
              desc="Diseño basado en Hot Fuchsia y Carbon Black." 
            />
            <ProjectCard 
              titulo="Dashboard Admin" 
              desc="Próximo proyecto con gráficas y datos." 
            />
          </div>
        </section>
      </div>
    </div>
  );
}