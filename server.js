import express from "express"
import router from './routes/blog.routes.js';
const app = express();





app.use(express.json())
app.use("/posts", router)
app.listen(3000,(err)=>{
    if (err) {
        console.log(err)
    }
    else{
        console.log("start on port 3000")
    }
})
