import mysql from 'mysql2';

async function getConnection() {
    const connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'evernet29',
        port: '3306',
        database: 'bileak'
    });

    return connection;
}

export {
    getConnection
};