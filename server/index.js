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



app.listen(port, ()=>console.log("Corriendo por el puerto " + port));
