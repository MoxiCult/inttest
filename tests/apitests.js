const request = require('supertest');
const express = require('express');

const app = express();

request(app)
    .get('/posts/1/comments')
    .expect('Content-type', '/json/')
    .expect(200)
    .end((err,res)=>{
        if(err) console.log(err);
    })