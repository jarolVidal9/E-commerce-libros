var mysql = require('mysql');

var con = mysql.createConnection({

    host : 'containers-us-west-96.railway.app',
    user : 'root',
    password : 'RAWALfXwcy4jlAYnboCX',
    database : 'railway',
    port :'6623'
});

con.connect((err) => {
    if(err) throw err;
    console.log('Database Connected..');
});

module.exports = con;