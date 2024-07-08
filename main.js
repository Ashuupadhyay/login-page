const express=require("express");
const app=express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.set("view engine","ejs");
app.get("/" ,(req,res)=>{
      res.render("main.ejs");
}).listen(3001,()=>{
    console.log("done i am rnning")
});


