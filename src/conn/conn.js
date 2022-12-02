var mysql = require('mysql');

var con = mysql.createConnection({
    host : process.env.DB_HOST || 'containers-us-west-96.railway.app',
    user : process.env.DB_USER || 'root',
    password :process.env.DB_PASSWORD || 'RAWALfXwcy4jlAYnboCX',
    port : process.env.DB_PORT ||"6623",
    database :process.env.DB_NAME || 'railway'
});

con.connect((err) => {
    if(err) throw err;
    console.log('Database Connected..');
});

module.exports = con;