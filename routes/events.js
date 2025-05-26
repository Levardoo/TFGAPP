
const express = require("express")
const router = express.Router()

const events = [
  {
    id: 1,
    name: "Conferencia Blockchain",
    hour: "14:30",
    date: "30-05-2025",
    site: "Palacio de ferias Málaga",
    description: "Un encuentro internacional para discutir el presente y futuro de la tecnología blockchain en Europa."
  },
  {
    id: 2,
    name: "Encuentro Web3 Europa",
    hour: "10:00",
    date: "12-06-2025",
    site: "IFEMA Madrid",
    description: "Evento sobre las oportunidades de negocio y desarrollo en torno al ecosistema Web3."
  },
  {
    id: 3,
    name: "Hackathon Identidad Digital",
    hour: "09:00",
    date: "20-06-2025",
    site: "Fira Barcelona",
    description: "Competencia de 48 horas para desarrollar soluciones basadas en identidad digital descentralizada (DID)."
  },
  {
    id: 4,
    name: "Foro sobre DIDs y VCs",
    hour: "11:45",
    date: "05-07-2025",
    site: "La Nave Madrid",
    description: "Charlas técnicas y mesas redondas sobre el uso práctico de DIDs y credenciales verificables."
  },
  {
    id: 5,
    name: "Jornadas Cripto y NFT",
    hour: "16:00",
    date: "15-07-2025",
    site: "Auditorio ADDA Alicante",
    description: "Exploración de casos de uso reales de criptomonedas, NFTs y contratos inteligentes."
  },
  {
    id: 6,
    name: "Taller Seguridad en Web3",
    hour: "13:00",
    date: "28-07-2025",
    site: "Universidad de Granada",
    description: "Taller práctico sobre amenazas comunes y buenas prácticas de seguridad en aplicaciones Web3."
  }
]


router.get('/',(req,res) =>{
    res.render('events/events', {events})
})

router.get('/:id',(req,res) =>{
    const evento = events.find(e => e.id === parseInt(req.params.id));
    if (!evento) {
      return res.status(404).send("Evento no encontrado");
    }
    res.render('events/event', { evento });
})




module.exports = router