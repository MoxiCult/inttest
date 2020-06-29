const request = require('supertest');
const express = require('express');

const app = require('../app.js')

// posts 1 api test
request(app)
    .get('/posts/1/comments')
    .expect('Content-type', /json/)
    .expect('Content-Length', '1329')
    .expect(200)
    .end((err,res)=>{
        if(err){
            console.log(err)
        }
        else{ 
            console.log('Posts api connection test succeeded')
        }
    })

// album photos api test
request(app)
    .get('/album/1/photos')
    .expect('Content-type', /json/)
    .expect('Content-Length', '8929')
    .expect(200)
    .end((err,res)=>{
        if(err){
            console.log(err)
        }
        else{ 
            console.log('Album photos api connection test succeeded')
        }
    })

// user todo testing

request(app)
    .get('/users/1/todos')
    .expect('Content-type', /json/)
    .expect('Content-Length', '1670')
    .expect(200)
    .end((err,res)=>{
        if(err){
            console.log(err)
        }
        else{ 
            console.log('User todo api connection test succeeded')
        }
    })

// user posts testing

request(app)
    .get('/users/1/posts')
    .expect('Content-type', /json/)
    .expect('Content-Length', '2425')
    .expect(200)
    .end((err,res)=>{
        if(err){
            console.log(err)
        }
        else{ 
            console.log('User posts api connection test succeeded')
        }
    })