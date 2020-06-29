const request = require('supertest');
const express = require('express');

const app = require('../app.js')

request(app)
    .get('/posts/1/comments', ()=>{console.log('test')})
    .expect('Content-type', /json/)
    .expect('Content-Length', '1329')
    .expect(200)
    .end((err,res)=>{
        if(err){
            console.log(err)
        }
        else{ 
            console.log('success!')
        }
    })