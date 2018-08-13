import mysql from 'mysql2';

const connection = mysql.createConnection({
    host:'localhost',
    user: 'root',
    password: 'evernet29',
    port: '3306',
    database: 'bileak'
});

export {connection};