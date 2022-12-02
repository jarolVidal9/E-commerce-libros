var mysql = require('mysql2');

var con = mysql.createConnection({
    host : 'containers-us-west-96.railway.app',
    user : 'root',
    password :'RAWALfXwcy4jlAYnboCX',
    port :"6623",
    database : 'railway'
});

con.connect((err) => {
    if(err) throw err;
    console.log('Database Connected..');
});

module.exports = con;