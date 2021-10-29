const express = require('express');
const mongoose = require('mongoose');
const stuffRoutes = require('./routes/stuff');
const app = express();


mongoose.connect('mongodb+srv://youzerssif:BdS2PyhgLKB6Bo94@cluster0.pngvp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

app.use(express.urlencoded({
    extended: true
  }));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

app.use(express.json());
app.use('/api/stuff', stuffRoutes);

module.exports = app;