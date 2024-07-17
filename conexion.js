const mysql = require("mysql");
var mysqlConexion = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "bdonlywater",
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