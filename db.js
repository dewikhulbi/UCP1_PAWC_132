const mysql = require('mysql2');

// Buat koneksi ke database MySQL
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',       // Ganti dengan username MySQL Anda
  password: '',       // Ganti dengan password MySQL Anda
  database: 'zooDB'  // Ganti dengan nama database Anda
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err.stack);
    return;
  }
  console.log('Connected to the database');
});

module.exports = db;
