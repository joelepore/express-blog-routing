// Express
const express = require('express');
const app = express();
const port = 3000;
// Routers
const postsRouter = require('./routers/posts');
// Data
const posts = require('./data/posts');

app.use(express.static('public'));
app.use('/posts', postsRouter);

app.get('/', (req, res) => {
  res.send(`<h1>Server del mio blog</h1>`)
})

app.get('/bacheca', (req, res) => {
  res.json({
    posts,
    totalPosts: posts.length
  });
})

app.listen(port, () => console.log(`Listening on port ${port}`));