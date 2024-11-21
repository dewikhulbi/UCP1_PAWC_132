const db = require('../db');

// Get all animals
exports.getAllAnimals = (req, res) => {
  db.query('SELECT * FROM animals', (err, results) => {
    if (err) {
      console.log(err);
      return res.status(500).send('Error retrieving animals');
    }
    res.render('index', { animals: results });
  });
};

// Show add animal form
exports.addAnimalForm = (req, res) => {
  res.render('form', { animal: null });  // Atau cukup mengirimkan { animal: null }
};


// Add new animal
exports.addAnimal = (req, res) => {
  const { name, species, age, description } = req.body;
  const query = 'INSERT INTO animals (name, species, age, description) VALUES (?, ?, ?, ?)';
  db.query(query, [name, species, age, description], (err, result) => {
    if (err) {
      console.log(err);
      return res.status(500).send('Error adding animal');
    }
    res.redirect('/');
  });
};

// Delete animal
exports.deleteAnimal = (req, res) => {
  const { id } = req.params;
  db.query('DELETE FROM animals WHERE id = ?', [id], (err, result) => {
    if (err) {
      console.log(err);
      return res.status(500).send('Error deleting animal');
    }
    res.redirect('/');
  });
};

// Show edit form
exports.editAnimalForm = (req, res) => {
  const { id } = req.params;
  db.query('SELECT * FROM animals WHERE id = ?', [id], (err, results) => {
    if (err) {
      console.log(err);
      return res.status(500).send('Error retrieving animal for edit');
    }
    res.render('form', { animal: results[0] });
  });
};

// Update animal data
exports.updateAnimal = (req, res) => {
  const { id } = req.params;
  const { name, species, age, description } = req.body;
  const query = 'UPDATE animals SET name = ?, species = ?, age = ?, description = ? WHERE id = ?';
  db.query(query, [name, species, age, description, id], (err, result) => {
    if (err) {
      console.log(err);
      return res.status(500).send('Error updating animal');
    }
    res.redirect('/');
  });
};
