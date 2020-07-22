const express = require('express');
const bodyParser = require('body-parser');
const date = require(__dirname +'/date.js');




const app = express();
const items= ["Buy food", "Cook Food", "Eat Food"];           
const workItems = [];


app.use(bodyParser.urlencoded({extended: true}));
//accessing static files
app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {


const day = date.getDate();

//Path to find the views folder and targert list.ejs
res.render('list', {listTitle: day, newListItems: items});


app.post('/', (req, res) => {
    const item = req.body.newItem;
    items.push(item); 
    res.redirect('/');
    
});


});
app.get('/work', (req,res) => 
 res.render('list', {listTitle: "Work List", newListItems: workItems}));

 app.post('/work', (req, res) => { 
 const item = req.body.newItem;
 workItems.push(item);
 res.redirect('/work');
});

app.listen(3000, () => console.log('server started on port 3000'));
