const express = require('express')
const post1comments = require('./data/post1comments')
const album1photos = require('./data/album1photos')
const users1todos = require('./data/users1todos')
const users1posts = require('./data/users1posts')

const app = express();
const port = 3000;

app.get('/',(req, res)=>{
    res.send('Welcome to my API testing app!')
});

app.get('/posts/1/comments', (req, res)=>{
    res.json(post1comments)
});

app.get('/album/1/photos', (req,res)=>{
    res.json(album1photos);
})

app.get('/users/1/todos', (req,res)=>{
    res.json(users1todos);
})

app.get('/users/1/posts', (req,res)=>{
    res.json(users1posts);
})

app.listen(port, ()=>console.log(`Supertest app listening at http://localhost:${port}`))

module.exports=app


