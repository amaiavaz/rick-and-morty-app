import express from 'express';
import cors from 'cors'
import { connection } from './config/db.js';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import jwt from 'jsonwebtoken';
import { verifyToken } from './middlewares/verifyToken.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const port = 4000;
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// app.use(express.urlencoded({extended:true}));

app.post("/api/register", (req, res) => {
  console.log(req.body);
  const {name, email, password} = req.body;

  let sql = 'INSERT INTO user (name, email, password) VALUES (?, ?, ?)';
  let values = [name, email, password];
  connection.query(sql, values, (err, result) => {
    if (err){
      console.log(err);
      res.status(500).json({message: "error fatal"});
    } else {
      res.status(200).json({message: "insercion ok"});
    }
  });
});

app.post("/api/login", (req, res) => {
  const {email, password} = req.body;

  let sql = 'SELECT * FROM user WHERE email = ?';
  connection.query(sql, [email], (err, result) => {
    if (err){
      res.status(500).json({message:err.message});
    } else {
      if (result.length) {
        if (result[0].password === password) {
          const payLoad = {id: result[0].user_id};
          const privateKey = "patata";
          const token = jwt.sign(payLoad, privateKey, {expiresIn: "30d"});
          res.status(200).json({token});
        } else {
          res.status(401).json({message:"credenciales incorrectas"});
        }
      } else {
        res.status(401).json({message:"credenciales incorrectas"});
      }
    }
  });
});

app.get('/api/getUser', verifyToken, (req, res) => {
  const {user_id} = req;
  let sql = 'SELECT * FROM user WHERE user_id = ?';

  connection.query(sql, [user_id], (err, result) => {
    if (err) {
      res.status(500).json({message:err.message});
    } else {
      res.status(200).json({user: result[0]});
    }
  });
});

app.listen(port, ()=>console.log("Corriendo por el puerto " + port));
