
// index.js
const express = require('express');
const app = express();
const PORT = 3000;


app.set('view engine', 'ejs')
app.use(express.json());

app.use(express.static("public"))
 

app.post('/vc/issue', async (req,res) => {
    const nuevoUsuario = req.body;
    res.json(vc);
}); 


const userRouter = require('./routes/users')
const eventsRouter = require('./routes/events')
const walletRouter = require('./routes/wallet')
const presentationRouter = require('./routes/presentation')
app.use('/users',userRouter)
app.use('/events',eventsRouter)
app.use('/wallet',walletRouter)
app.use('/presentation', presentationRouter)

function logger(req,res,next) {
  console.log(req.originalUrl)
  next()
}


app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
