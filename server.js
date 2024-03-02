import 'dotenv/config'
import express, { json } from 'express'
import helmet from 'helmet'
import cors from 'cors'
import compression from 'compression'
import { addTodo, getTodoList, checkTodo } from './model/todo.js'

// créer un server
const app = express();

// ajouter les middlewares
app.use(helmet());
app.use(cors());
app.use(compression());
app.use(json());

// Ajouter les routes 
app.get('/api/todolist', (request, response) => {
    let todoList = getTodoList();
    response.status(200).json(todoList);
});

app.post('/api/todo', (request, response) => {
    addTodo(request.body.texte);
    response.status(201).end();
});

app.patch('/api/todo', (request, response) => {
    checkTodo(request.body.index);
    response.status(200).end();
});


// lancer server

app.listen(process.env.PORT);
console.log('serveur démarer : http://localhost:' + process.env.PORT)

