# ⚡ Isaac Alonso | Fullstack Software & Systems Architecture

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![Status](https://img.shields.io/badge/Status-En_Desarrollo-FF0059?style=for-the-badge)

Portfolio personal de alto impacto visual y rendimiento optimizado. Este proyecto no es solo una carta de presentación, sino un ejercicio de **ingeniería de frontend** y diseño de interfaces modernas bajo una estética **Cyber-Dark**.

---

## 🎨 Sistema de Diseño: Cyber-Dark Concept
El layout se ha estructurado utilizando una jerarquía visual de alto contraste para dirigir el flujo de atención del usuario (User Flow):

* **Core Layers:** Implementación de `Pure Black` (#000000) y `Carbon Deep` (#232323) para generar profundidad y reducir la fatiga visual.
* **High-Voltage Accents:** Uso de `Electric Fuchsia` (#FF0059) para llamadas a la acción (CTAs) y `Cherry Glow` (#A9003B) para estados interactivos.
* **Glassmorphism:** Navegación persistente con desenfoque de fondo real (`backdrop-filter`) para una experiencia inmersiva y futurista.

## 🚀 Stack Tecnológico
Para garantizar una experiencia fluida y un despliegue eficiente, se han seleccionado las siguientes herramientas:

* **React 18:** Arquitectura basada en componentes funcionales y Hooks para una gestión de estado ágil y predecible.
* **Vite:** Tooling de última generación que permite un ciclo de desarrollo ultrarrápido y un empaquetado de producción optimizado.
* **Vanilla CSS Architecture:** Uso exhaustivo de **Variables CSS (Custom Properties)** y **Flexbox/Grid**. Se ha evitado el uso de frameworks externos para maximizar el control sobre el *bundle size* y demostrar dominio técnico en estilos nativos.

## 🛠️ Características Técnicas
* **Responsive Typography:** Implementación de funciones `clamp()` para una escalabilidad fluida sin depender exclusivamente de media queries.
* **Fixed Hybrid Navigation:** Barra de navegación con detección de viewport y efectos de neón dinámicos.
* **Component-Driven Development (CDD):** Estructura de archivos organizada por componentes desacoplados (`Navbar`, `Hero`, `ProjectCard`), facilitando el mantenimiento y la escalabilidad.
* **Zero-Latency Scroll:** Optimización de las propiedades de desbordamiento (`overflow`) para garantizar una navegación vertical fluida a 100vh.

## 📁 Estructura del Proyecto
```bash
src/
 ├── components/       # Componentes de UI reutilizables y aislados
 ├── assets/           # Recursos estáticos (Logos, imágenes)
 ├── App.jsx           # Orquestador principal de la aplicación
 └── index.css         # Definición del sistema de diseño y variables globales