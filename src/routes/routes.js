//mis rutas estarán aquí
const express = require('express');
const router = express.Router();


// routes
router.get('/', (req,res)=>{//index section
    res.render('index.ejs', {title: 'First website'});
})

router.get('/about', (req,res)=>{
    res.render('about.ejs', 
    {title: 'About Page'});
})

router.get('/contact', (req,res)=>{
    res.render('contact.ejs', {title: 'Contact Page'});
})

module.exports = router;