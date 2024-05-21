const connectss= require('./Models/db-conn')
const express = require('express')
const users = require('./Models/Creatuser')
const cors = require('cors')
const { body, validationResult } = require('express-validator')
const bcrypt = require('bcryptjs')
const app = express()
app.use(cors({ origin: "http://localhost:3000" }))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
const jwttock = "mynamashish123445"
const jwt = require('jsonwebtoken')
const { default: mongoose } = require('mongoose')






//registation page
app.post('/registation', [
    body('email').isEmail(),
    body('name').isLength({ min: 5 }),
    body('password', "Incorrect Password").isLength({ min: 5 })
],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() })
        }
const salt = await bcrypt.genSalt(10)
const password = await bcrypt.hash(req.body.password, salt)
        try {
            const { name, email, location } = req.body
            const data = new users({
                name, email, location, password
            })
            const user = await data.save()
            res.json({ success: true })
        } catch (error) {
            console.log(error)
            res.json({ success: false })
        }
    })

//login page

app.post('/loginpage', [
    body('email').isEmail(),
    body('password', "Incorrect Password").isLength({ min: 5 })
],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() })
        }
        try {
            const { email , password } = req.body
            const user = await users.findOne({ email: email })
            if (!user) {
                return res.status(400).json({ errors: "enter correct email" })
            }
            const secpass = await bcrypt.compare(password ,user.password)
            if (!secpass) {
                return res.status(400).json({ errors: "enter correct password" })
            }
          const data ={user:{id:user.id}}
          const authtoken = jwt.sign(data,jwttock)
          return  res.json({ success: true,authtoken:authtoken })
        }
        catch (error) {
            console.log(error)
            res.json({ success: false })
        }
    })
app.post("/displaydata",async(req,res)=>{
try {
    

    const  fetchdata =await  mongoose.connection.db.collection("fooddata")
   const data= await fetchdata.find({}).toArray({}) 

    const  catedata =await  mongoose.connection.db.collection("catagres")
   const catdata= await catedata.find({}).toArray({}) 
   res.send(data)
} catch (error) {
    res.send(error)
}
})

app.listen(5000)