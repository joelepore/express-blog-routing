const express = require('express');
const router = express.Router();
// Data
const posts = require('../data/posts');

// Index
router.get('/', (req, res) => {
  res.json(posts);
})
// Show
router.get('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const post = posts.find(post => post.id === id) ?? { result: 'Post not found' };
  res.json(post);
})

// Store
router.post('/', (req, res) => {
  res.send(`Rotta STORE: creo un nuovo post`);
})

// Update
router.put('/:id', (req, res) => {
  res.send(`Rotta UPDATE: modifico interamente il post con id ${req.params.id}`);
})

// Modify
router.patch('/:id', (req, res) => {
  res.send(`Rotta MODIFY: modifico parzialmente il post con id ${req.params.id}`);
})

// Destroy
router.delete('/:id', (req, res) => {
  res.send(`Rotta DESTROY: elimino il post con id ${req.params.id}`);
})

module.exports = router;