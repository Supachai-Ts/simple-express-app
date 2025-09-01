const express = require("express");
const mysql = require("mysql");

const app = express();
const port = 4000;

// MySQL database connection configuration
const connection = mysql.createConnection({
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",          // user จริงของ MySQL
  password: process.env.DB_PASSWORD || "root",  // password จริงของ MySQL
  database: process.env.DB_NAME || "my_database", // ชื่อฐานข้อมูลจริง
  port: process.env.DB_PORT || 3306             // เพิ่ม port เผื่อกรณีไม่ได้ใช้ default
});

// Connect to MySQL database
connection.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL database:", err.stack);
    return;
  }
  console.log("Connected to MySQL database as id " + connection.threadId);
});

// Middleware to log request method and URL
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// Route handling
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/about", (req, res) => {
  res.send("About page");
});

