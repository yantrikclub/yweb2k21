// require("dotenv").config();
const express = require('express');
const path = require('path');
const compression = require('compression');

// const fs = require('fs');
const multer = require('multer');
const bcrypt = require('bcryptjs');
const passport = require('passport');
const flash = require("express-flash");
const session = require("express-session");
const methodOverride = require('method-override');

const initializePassport = require('./passport-config');
initializePassport(
    passport,
    email => users.find(user => user.email === email),
    id => users.find(user => user.id === id),
    
);



const users = [{id:"yantrik2k21-22", email:"yantrik.web@gmail.com", password:"$2a$10$4f9IdbSSbOjkzLjvt7LlI.b5ElmsAL7eCASHo7xINR0zC9NWs3b0C"}]

let initial_path = path.join(__dirname, "public");

const app = express();
app.use(express.urlencoded({extended:true}));
app.use(compression())
app.use(flash())
app.use(session({
    // secret: process.env.SESSION_SECRET,
    secret : "iloveyantrik",
    resave:false,
    saveUninitialized:false
}))
app.use(passport.initialize());
app.use(passport.session());
app.use(methodOverride('_method'));


app.set('views',"pages") //********** */
app.set('view engine','ejs') //*************** */


app.use(express.static(__dirname + "/public"));
app.use(express.static(path.join(__dirname,"server")));
app.get('/webauthlogin',checkNotAuthenticated,(req,res)=>{
    res.sendFile(path.join(__dirname,"server/login.html"));
})
app.post('/webauthlogin',checkNotAuthenticated,passport.authenticate('local',{
    successRedirect: '/webauth',
    failureRedirect: "/webauthlogin",
    failureFlash: true
}))



// =========================================
const sheetdata = require('./googlesheet.js')
app.get('/',async(req,res)=>{
    let data  = await sheetdata();
    let updata = data.sort((p1, p2) => (p1.status < p2.status) ? 1 : (p1.status > p2.status) ? -1 : 0);
    console.log(updata);
    let context = {
        upevent : updata
    }
    console.log(context)
    res.render('index.ejs',context)
})

app.get('/events',(req,res)=>{
    res.render('events.ejs')
})

app.get('/gallery',(req,res)=>{
    res.render('gallery.ejs')
})

app.get('/ourteam',(req,res)=>{
    res.render('team.ejs')
})

app.get('/blog',(req,res)=>{
    res.render('blog.ejs')
})
// =============================================================================================
// const storage1 = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, path.join(initial_path,"data/index"));
//     },
//     filename: (req, file, cb) => {
//         cb(null, file.originalname);
//     }
// });
// const storage2 = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, path.join(initial_path,"data/events"));
//     },
//     filename: (req, file, cb) => {
//         cb(null, file.originalname);
//     }
// });
// const storage3 = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, path.join(initial_path,"data/gallery"));
//     },
//     filename: (req, file, cb) => {
//         cb(null, file.originalname);
//     }
// });
// const storage4 = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, path.join(initial_path,"data/team"));
//     },
//     filename: (req, file, cb) => {
//         cb(null, file.originalname);
//     }
// });


// const upload1 = multer({ storage: storage1});
// const upload2 = multer({ storage: storage2});
// const upload3 = multer({ storage: storage3});
// const upload4 = multer({ storage: storage4});

// app.get('/webauth',checkAuthenticated,(req,res)=>{
//     res.sendFile(path.join(__dirname,"server/filemngr.html"))
// })



// app.post('/single/upeve', upload1.single('file'), (req, res)=> {
//     res.redirect('/webauth');
// });
// app.post('/single/eve', upload2.single('file'), (req, res) => {
//     res.redirect('/webauth');
// });
// app.post('/single/gal', upload3.single('file'), (req, res) => {
//     res.redirect('/webauth');
// });
// app.post('/single/team', upload4.single('file'), (req, res) => {
//     res.redirect('/webauth');
// });





// ------------------------------------------------------------------------------------
// let getrows = require('./googlesheet.js');
// app.get('/',async(req,res)=>{
//     let data = await getrows()
//     console.log(data)
//     // console.log(1000000)
//     res.send("hi there");
// })

app.get('/admin',(req,res)=>{
    // res.sendFile(path.join(initial_path,"pages/dashboard.html"));
    res.render('dashboard.ejs')
})

app.get('/blogs/blogs.html',(req,res)=>{
    // res.sendFile(path.join(initial_path,"pages/blogs.html"));
    res.render('blog.ejs');
})
app.get('/blogs/events.html',(req,res)=>{
    // res.sendFile(path.join(initial_path,"pages/events.html"));
    res.render('events.ejs')
})
app.get('/blogs/gallery.html',(req,res)=>{
    // res.sendFile(path.join(initial_path,"pages/gallery.html"));
    res.render('gallery.ejs')
})
app.get('/blogs/team.html',(req,res)=>{
    // res.sendFile(path.join(initial_path,"pages/team.html"));
    res.render('team.ejs')

})

app.get('/edit/:blog',(req,res)=>{
    // res.sendFile(path.join(initial_path,"pages/editor.html"));
    res.render('editor.ejs')

})
app.get('/blogs/:blog',(req,res)=>{
    // res.sendFile(path.join(initial_path,"pages/iblog.html"));
    res.render('iblog.ejs')

})
app.delete('/logout', (req, res) => {
    req.logOut();
    res.redirect('/webauthlogin');
  })



app.use((req,res)=>{
    // res.sendFile(path.join(initial_path,"pages/missing.html"));
    res.render('missing.ejs')

})

function checkAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
      return next()
    }
  
    res.redirect('/webauthlogin')
  }
  
  function checkNotAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
      return res.redirect('/webauth')
    }
    next()
  }




app.listen("8005",()=>{
    console.log('listening at port 8005');
})
