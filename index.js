import { clear } from 'console';
import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';

const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.render('index.ejs');
})

app.get('/completed', (req, res) => {
    console.log("completed");
    res.render('index.ejs');
})

app.post('/submit', (req, res) => {
    const task = req.body.task;
    toDoList.add(task);
    console.log(toDoList);
    res.render("index.ejs", {todo: toDoList});
})

app.get('/completed/:id', (req, res) => {
    const task = req.params.id;
    toDoList.delete(task);
    console.log(toDoList);
    res.render("index.ejs", {todo: toDoList});
})

app.listen(port, () => {
    console.log(`This server is listening to the port ${port}`);
});

var toDoList = new Set();


if (toDoList) {
    for (const task of toDoList) {
      console.log(task);
    } 
} 