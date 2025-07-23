import express from 'express';
import cors from 'cors'
import { connection } from './config/db.js';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

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

app.listen(port, ()=>console.log("Corriendo por el puerto " + port));
