const express = require('express')
const mysql=require('mysql2')
const app = express()  
const cors= require('cors')
var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors());
app.use(express.json())

app.get('/', (req, res) => {
  res.send('hello world')
})

var db = mysql.createPool({
  host: "localhost",
  user: "root",
  password:"Aravind202@",
  database:"lms_db"
});

app.get("/api/get/course/:cou",(req,res)=>{
   const cor=req.params.cou;

  const sqlselect=`SELECT * FROM course WHERE courseName="${cor}"`
  db.query(sqlselect,(err,result)=>{ 
    if(err) console.log(err)
      res.send(result);
  })

})



// app.post("/api/feedback",(req,res)=>{
//   console.log(req);

//   const name= req.body.name;
//   const email=req.body.email
//   const message=req.body.message;
  

//   const sqlInsert="INSERT INTO feedback (Name,Email,Message) VALUES (?,?,?) ;"
//   db.query(sqlInsert,[name,email,message],(err,result)=>{
//       if(err) console.log(err)
//        else{
//           console.log("value Inserted ");
//        }
//   })

// });

app.listen(3001,()=>{
  console.log("Server Running in port 3001")
})