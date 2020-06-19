
import express from 'express';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

// this will match /test/1 but not with /test123 !!!
app.use('/add-category', (req, res, next) => {
  res.send(
    `<html><body><form method="POST" action="/category" >
    <input type="text"name="product">    
    <button type="submit">add category</button>
    </form></body></html>`);
});

// app.post, get etc matches exactly. so /category/1 does not match to this!
// app.use on the other hand, matchs /category/1 also
app.post('/category', (req, res, next) => {
  res.send(
    `<html><body>
    <h1>product added</h1>
    </body></html>`);
});

// this matches /segment /segmenta /segment/a 
app.use('/', (req, res, next) => {
  res.send('every other request');
})

app.listen(9001);
