const express = require('express')
const app = express()

app.set('view-engine', 'ejs')

app.get('/',(req,res) => {
    res.render('index.ejs', { name: ' User'})
})

app.get('/login',(req,res) => {
    res.render('login.ejs')
})

app.listen(3000)