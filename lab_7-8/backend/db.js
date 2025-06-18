require("dotenv").config();
const mysql = require("mysql2");
const connection = mysql.createConnection({
    host: process.env.DB_HOST || "sql12.freesqldatabase.com",
    user: process.env.DB_USER || "sql12783399",
    password: process.env.DB_PASSWORD || "fHSW1B4PWr",
    database: process.env.DB_NAME || "sql12783399",
    port: process.env.DB_PORT || 3306,
});
connection.connect((err) => {
    if (err) {
        console.error("Помилка підключення до бази:", err);
        return;
    }
    console.log("Підключено до бази даних MySQL");
});
module.exports = connection;
