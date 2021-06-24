const express= require('express')
const app= express()
const port= process.env.PORT || 5000
const cors= require('cors')

app.use(express.json())
app.use(
    cors({
        origin: "*"
    })
)

app.post('/user',(req, res)=>{
    const userData= req.body
    res.send(userData)
    console.log(userData)
})

app.listen(port,(err)=>{
    console.log(`Server connect in localhost:`,port)
    console.log(`error:`, err)
})