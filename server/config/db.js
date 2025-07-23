import mysql from 'mysql2';

export const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'users_i_was'
})

connection.connect((err)=>{
    if(err){
        console.log(err);
    }else{
        console.log("conexión base de datos ok");
        
    }
})