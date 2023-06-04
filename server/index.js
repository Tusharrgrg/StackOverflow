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



const CONNECTION_URL = "mongodb+srv://gargtusu8216:OGCvbhBEfpCyx1vT@stack-overflow.kntvztr.mongodb.net/firstDatabase?retryWrites=true&w=majority";

mongoose.connect(CONNECTION_URL , {useNewUrlParser:true, useUnifiedTopology:true})
    .then(()=>app.listen(port, () => {
        console.log(`server running on port ${port}`);
      }))
    .catch((err)=>{
      console.log(err.message)
    })