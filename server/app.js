import express from 'express';
import path from 'path';
import homeRoute from './routes/index';

const app = express();

//set view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

//json and bodyparsing
app.use(express.json());
app.use(express.static(path.join(__dirname, 'puplic')));

app.use('/', homeRoute);

//in the wild
app.get('*', (req, res) => {
    res.status(400).send('You are in the wild');
})

module.exports = app;