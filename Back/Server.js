const express=require('express');
const bodyParser = require("body-parser");
const mainApi = require("./Routes/pve");
const cors=require('cors');
const app = express();

app.use(
    bodyParser.urlencoded({
      extended: false
    })
  );
  app.use(cors());
  app.use(bodyParser.json());

app.use("/api",mainApi);

app.get("/",(req,res)=>{
    res.send("hello");
})



const PORT=process.env.PORT || 5000;

app.listen(PORT,()=>{
    console.log("Server started at Port "+PORT);
})


