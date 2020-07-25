const express = require('express');
const bodyParser = require('body-parser');
const date = require(__dirname +'/date.js');




const app = express();

const items= ["Drink", "Smoke", "Code"];           
const workItems = [];
const day = date.getDay();


 



app.use(bodyParser.urlencoded({extended: true}));
//accessing static files
app.use(express.static('public'));
app.set('view engine', 'ejs');





app.get('/', (req, res ) => {res.render('list', {listTitle: day, newListItems: items})});

app.get('/work', (req,res) => res.render('list', {listTitle: "Work List", newListItems: workItems}));

app.get('/about', (req, res) => res.render('about'));

//Path to find the views folder and targert list.ejs


app.post('/', (req, res) => {

    let item = req.body.newItem;
    let titleVal = req.body.list;
    /**
     * Refers to the name given to button in ejs
     */
    if (titleVal === 'Work List') {
    workItems.push(item);
    res.redirect('/work');
        /**
         * Instead of rendering after post we redirect to respective GET pages and make a fetch request there
         */
     
} else {
         items.push(item);
         res.redirect('/');
     }
});




app.listen(3000, () => console.log('server started on port 3000'));
