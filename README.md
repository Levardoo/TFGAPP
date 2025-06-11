# 📘 EventCred: Prototipo de Gestión de Eventos con Verifiable Credentials

**EventCred** es un prototipo desarrollado como Trabajo de Fin de Grado en el grado de ingeniería informática en la universidad de Málaga para demostrar la viabilidad técnica de las **Verifiable Credentials (VC)** y el **Selective Disclosure** en un flujo de inscripción y asistencia a eventos. No es una aplicación de producción, sino un entorno de pruebas para integrar estándares W3C de identidad autosoberana (SSI).

---

## 🚀 Características destacadas

- 👉 **Inscripción al evento** vía formulario web  
- ✅ **Confirmación de asistencia** (simulada)  
- 🔏 **Emisión de Verifiable Credential** firmada con JSON-LD y firmas ECDSA / Ed25519  
- 🔒 **Wallet local** que almacena VCs generadas  
- 🎯 **Selective Disclosure**: generación de una Verifiable Presentation parcial según atributos seleccionados  
- 📜 **Modelos compatibles**: JSON-LD + BBS+, SD-JWT

---
## 🧠 Fundamentos técnicos
Para el manejo de credenciales se utilizan bibliotecas como _@digitalbazaar/vc_ y _jsonld-signatures_,
implementaciones estándar del modelo W3C VC (https://www.w3.org/TR/vc-data-model-2.0/). La generación de SD‑JWT se fundamenta en el formato SD‑JWT VC DM, que permite la divulgación selectiva de atributos dentro de un JWT

--
## 📦 Estructura del repositorio

```
TFGAPP/
├── src/
│   ├── routes/
│   │   ├── register.js     # Registro y simulación de asistencia
│   │   ├── issue.js        # Emisión de credenciales
│   │   └── present.js      # Generación de presentaciones VC
│   ├── controllers/        # Lógica de negocio
│   └── schemas/            # Contextos JSON‑LD y esquemas VC
├── views/                  # Plantillas EJS (formularios y wallet)
├── .env.example            # Variables de entorno
├── package.json            # Dependencias y scripts
└── README.md               # Documentación actualizada

```

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
   npm run dev
2. **Acceder a la app**
Abre tu navegador en http://localhost:3001.


---
## 🧩 Flujo de uso
1. **Registro** -> llena el formulario con tus datos
2. **Emision** -> recibirás una VC firmada
3. **Almacenamiento** -> la credencial se guarda en una wallet local
4. **Selección**  -> elige atributos para crear una Verifiable Presentation con selection disclosure
5. **Presentación** -> recibe una presentación parcial para el verificador
---

## 🛠️ Tecnologías principales
1. **Express.js**: framework HTTP minimalista

2. **Digital Bazaar VC libraries (@digitalbazaar/vc, jsonld-signatures)**

3. **did-jwt**: generación de SD-JWT para selección

4. **EJS**: plantillas de servidor para formularios básicos

5. **GitHub Actions**: linting y formato (opcional)

## 🔗 Recursos útiles
- [@digitalbazaar/vc – biblioteca JS de VCs](https://enlace.com](https://github.com/digitalbazaar/vc))
- [SD‑JWT VC DM – formato de Selective Disclosure](https://github.com/danielfett/sd-jwt-vc-dm)
- [VC‑Data Model 2.0 – estándar W3C](https://www.w3.org/TR/vc-data-model-2.0/)



