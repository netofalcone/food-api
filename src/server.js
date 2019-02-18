import express from 'express';
import bodyParser from 'body-parser';

import db from './config/db';
import router from './routers/restaurant.router';

const app = express();
db.connect('food', 'localhost', '27017');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/public/index.html`);
});
app.use('/', router);

app.listen(3000, () => {});
