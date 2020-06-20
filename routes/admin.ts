import express from 'express'

const router = express.Router();

router.get('/add-category', (req, res, next) => {
  res.send(
    `<html><body><form method="POST" action="/category" >
    <input type="text"name="product">    
    <button type="submit">add category</button>
    </form></body></html>`);
});

router.post('/category', (req, res, next) => {
  res.send(
    `<html><body>
    <h1>product added</h1>
    </body></html>`);
});

export default router;


