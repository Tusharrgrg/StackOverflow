import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import userRoutes from './routes/users.js'
const app = express();

app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.get("/", (req, res) => {
  res.send("This is a stack overflow clone api");
});

app.use('/user',userRoutes)

const port = process.env.PORT || 5000;




mongoose.connect(CONNECTION_URL , {useNewUrlParser:true, useUnifiedTopology:true})
    .then(()=>app.listen(port, () => {
        console.log(`server running on port ${port}`);
      }))
    .catch((err)=>{
      console.log(err.message)
    })