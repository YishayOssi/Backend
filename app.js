import express from "express"
import cors from "cors"

const app = express();
const port = 3010

app.use(express.json())
app.use(cors())


app.use("/",(req, res, next) =>{
    console.log(req.method, req.url);
    next()
})


app.get("/name", (req, res)=>{
    res.json(req.method)
})



app.listen(port, ()=>{
    console.log(`http://localhost:${port}`);
})