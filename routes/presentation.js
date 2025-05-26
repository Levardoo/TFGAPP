const express = require("express")
const router = express.Router();

// Simulación: credenciales guardadas en el backend (en un sistema real vendría de DB o sesión)

// Mostrar página para crear presentación (mostrar VCs)
router.get('/', (req, res) => {
  res.render('presentation/create', { });
});

// Recibir VCs seleccionadas y crear VP sin firma
router.post('/create', (req, res) => {
  const selectedVCs = req.body.selectedVCs; // asumiendo que es un array de VCs (JSON)

  if (!selectedVCs || selectedVCs.length === 0) {
    return res.status(400).send('No seleccionaste ninguna credencial');
  }

  // Crear VP básico (sin firma)
  const presentation = {
    '@context': ['https://www.w3.org/2018/credentials/v1'],
    type: ['VerifiablePresentation'],
    verifiableCredential: selectedVCs,
    holder: "did:example:usuario123" // o cualquier DID simulado
  };

  // Enviar presentación generada para mostrar o guardar
  res.render('presentation/show', { presentation: JSON.stringify(presentation, null, 2) });
});

module.exports = router