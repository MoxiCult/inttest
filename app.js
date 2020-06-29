const express = require('express')
const post1comments = require('./data/post1comments')
const app = express();
const port = 3000;

app.get('/',(req, res)=>{
    res.send('Welcome to my API testing app!')
});

app.get('/posts/1/comments', (req, res)=>{
    res.json(post1comments)
});

app.listen(port, ()=>console.log(`Supertest app listening at http://localhost:${port}`))


