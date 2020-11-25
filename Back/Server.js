const express=require('express');
const BodyParser=require('body-parser');
const cors=require('cors');
const { urlencoded } = require('body-parser');
const app = express();

app.use(
    bodyParser.urlencoded({
      extended: false
    })
  );
  app.use(cors());
  app.use(bodyParser.json());

app.get("/",(req,res)=>{
    res.send("hello");
})



const PORT=process.env.PORT || 5000;

app.listen(PORT,()=>{
    console.log("Server started at Port "+PORT);
})


