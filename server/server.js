const express = require('express');
const {ApolloServer} = require('apollo-server-express');
const path = require('path');

const db = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
  });

app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
   
 });
