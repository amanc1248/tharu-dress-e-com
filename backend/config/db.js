// Create connection
import express from "express";
import mysql from "mysql";

//create connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "dasa",
});
// Connect
db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log("MySql Connected...");
});
export default db;
