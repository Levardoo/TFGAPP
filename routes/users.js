const express = require("express")
const router = express.Router()


router.get('/',(req,res) => {
  res.send('User list')

})

router.get('/new', (req,res) =>{
    res.render("users/new", { firstName: "Test" })
  res.send('User New Form')
})

router.post('/', (req,res) =>{
    res.send('Create User')
})

// parametros dinámicos

router.route("/:id")
.get((req,res) =>{
    console.log(req.user)
    res.send(`User Get with id ${req.params.id}`)
})
.put((req,res) =>{
    req.params.id
    res.send(`Update User with id ${req.params.id}`)
})
.delete((req,res) =>{
    req.params.id
    res.send(`Delete user  with id ${req.params.id}`)
})

const users = [{ name: "Luis"}, { name: "Sergio" }]
router.param("id", (req,res,next,id) => {
    req.user = users[id]
    next()
})


module.exports = router