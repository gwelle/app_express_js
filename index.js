// Description: This is the main file for the project.

const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const data = require('./posts.json') ; // Importer le fichier data.json

app.use(express.json()) ; // Middleware pour parser le body en JSON

let posts = [] ; // Mémoire local pour stocker des objets post

app.get('/', (req, res) => {
  //res.send('Welcome')
  return "Welcome" ;
})

app.get('/posts', (req, res) => {
    
    // Concaténer les deux tableaux
    // const data_posts = posts.concat(data) ;
    const data_posts = [...posts, ...data] ; 
    res.json(data_posts) ;
})

app.post('/posts/create', (req, res) => {

  posts = [...posts, req.body];
  res.send("Post added successfully ") ;
  
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})