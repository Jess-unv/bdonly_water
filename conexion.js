const mysql = require("mysql");
var mysqlConexion = mysql.createConnection({
    host: "srv1247.hstgr.io",
    user: "u475816193_jess",
    password: "v4P7wMJoZ#",
    database: "u475816193_bdonlywater2",
    multipleStatements: true,
});

mysqlConexion.connect(
 (err) => {
    if(!err){
    console.log("se conecto ala base de datos Mysql");
    }
    else{
    console.log("no esta conectado error");
    }
    }
);

module.exports = mysqlConexion;
