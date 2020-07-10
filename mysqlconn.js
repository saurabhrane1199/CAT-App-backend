const mysql = require('mysql')


var conn = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "",
    database : "cat1"
});

var conn2 = mysql.createConnection({
    host : "sql12.freemysqlhosting.net",
    user : "sql12354005",
    password : "HiPUQu2jUd",
    database : "sql12354005"
});

conn2.connect( err => {
    if(err){
        console.log(err)
        return}
    console.log("MySQL Connection Succesful")
});

module.exports = conn2;
