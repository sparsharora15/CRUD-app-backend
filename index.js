import  express  from "express";
import cors from "cors"

import userRoutes from "./routes/users.js"
 
const app = express();
const port = 5000;

app.use(cors());
app.use('/',userRoutes);

app.get('/',(req,res)=>{
    res.send("hello")
})
app.get('*',(req,res)=>res.send("Rout not exist"))

app.listen(port,()=>{
    console.log(`view port is listening at ${port}`);
})