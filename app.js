const express = require('express');
const app = express();
const animalRoutes = require('./routes/animalRoutes'); // Pastikan pathnya benar

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Menggunakan route yang sudah dibuat
app.use('/', animalRoutes); // Mengarahkan ke rute yang sudah dibuat

// Pastikan Anda menambahkan pengaturan lain di sini seperti view engine dan port
app.set('view engine', 'ejs');
app.set('views', './views');
// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
