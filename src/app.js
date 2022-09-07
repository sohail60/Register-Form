const express= require('express');
const app=express();
const path=require('path');
const bodyParser=require('body-parser');
require('./db/conn');
const Register=require('./models/register')
app.use(bodyParser.urlencoded({extended:true}));

// Static pages
const static_path=path.join(__dirname, '../public');
app.use(express.static(static_path));
app.set('view engine','ejs');

app.get('/', (req,res) => {
    res.render('index');
});

app.get('/register', (req,res) => {
    res.render('register');
});

app.get('/login', (req,res) => {
    res.render('login');
});

app.post('/register', async (req,res) => {
    try {
        const password=req.body.password;
        const confirmpassword=req.body.confirmpassword;
        
        if(password===confirmpassword){
            const user=new Register({
                name: req.body.name,
                email: req.body.email,
                password: password,
                confirmpassword: confirmpassword
            })

            const registered =await user.save();
            res.status(201).render('index');

        } else {
            res.send('Passwords are not matching');
        }

    } catch (error) {
        res.status(400).send(error);
    }
});

app.post('/login', async (req,res) => {
    try {
        const email=req.body.email;
        const password=req.body.password;

        const useremail= await Register.findOne({email: email});

        if(useremail.password===password){
            res.status(201).render('index')
        } else {
            res.send('Password not matching');
        }

    } catch (error) {
        res.status(400).send('Invalid Email');
    }
})

// Listening
const port=process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port no ${port}`);
});