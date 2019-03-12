import express from 'express';
import path from 'path';
import homeRoute from './routes/index.route';
import studentRoute from './routes/students.route';

import swaggerUI from 'swagger-ui-express';
import swagDoc from '../config/swaggerDoc.json';


let app = express();

//set view engine
// app.set('views', path.join(__dirname, '../views'));
// app.set('view engine', 'pug');

//json and bodyparsing
//app.use(express.json());
//app.use(express.static(path.join(__dirname, 'puplic')));

app.use('/home', homeRoute);
app.use('/students', studentRoute);
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swagDoc, {explorer:true}));


//in the wild
app.get('*', (req, res) => {
    res.status(404).send('You are in the wild');
})

module.exports = app;
