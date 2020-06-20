
import express from 'express';
import bodyParser from 'body-parser';

import adminRoutes from './routes/admin';
import userRoutes from './routes/user';

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(adminRoutes);
app.use(userRoutes);

app.use((req, res, next) => {
  res.status(404).send('page not found');
})

app.listen(9001);
