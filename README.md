# EventCred: Prototipo de Gestión de Eventos con Verifiable Credentials

**EventCred** es un prototipo desarrollado como Trabajo de Fin de Grado en el grado de ingeniería informática en la universidad de Málaga para demostrar la viabilidad técnica de las **Verifiable Credentials (VC)** y el **Selective Disclosure** en un flujo de inscripción y asistencia a eventos. No es una aplicación de producción, sino un entorno de pruebas para integrar estándares W3C de identidad autosoberana (SSI).

---

## 🚀 Características

- 👉 **Inscripción al evento** vía formulario web  
- ✅ **Confirmación de asistencia** (simulada)  
- 🔏 **Emisión de Verifiable Credential** firmada con JSON-LD y firmas ECDSA / Ed25519  
- 🔒 **Wallet local** que almacena VCs generadas  
- 🎯 **Selective Disclosure**: generación de una Verifiable Presentation parcial según atributos seleccionados  
- 📜 **Modelos compatibles**: JSON-LD + BBS+, SD-JWT

---

## 📦 Estructura del repositorio

- **TFGAPP/**
  - **src/**
    - **routes/**
      - `register.js` — Registro y simulación de asistencia  
      - `issue.js` — Emisión de credenciales  
      - `present.js` — Generación de presentaciones con selección  
    - **controllers/** — Lógica de negocio separada de rutas  
    - **schemas/** — Contextos JSON-LD y definiciones de VC  
    - `index.js` — Configuración y arranque de Express  
  - **views/** — Plantillas EJS para formularios y wallet  
  - `.env.example` — Variables de entorno de ejemplo  
  - `package.json` — Dependencias y scripts  
  - `README.md` — Documentación principal  



---

## ⚙️ Requisitos

- [Node.js](https://nodejs.org/) v18+  
- npm (incluido con Node.js)  
- Git  

---

## 🔧 Instalación y configuración

1. **Clonar el repositorio**  
   ```bash
   git clone https://github.com/Levardoo/TFGAPP.git
   cd TFGAPP
2. **Instalar dependencias**
   ```bash
   npm install
---
## ▶️ Uso
1. **Arrancar servidor**
   ```bash
   npm install
2. **Acceder a la app**
Abre tu navegador en http://localhost:3000.


---

## 🛠️ Tecnologías principales
1. **Express.js**: framework HTTP minimalista

2. **Digital Bazaar VC libraries (@digitalbazaar/vc, jsonld-signatures)**

3. **did-jwt**: generación de SD-JWT para selección

4. **EJS**: plantillas de servidor para formularios básicos

5. **GitHub Actions**: linting y formato (opcional)



