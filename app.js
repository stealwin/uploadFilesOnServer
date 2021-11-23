const express = require('express');

const app = express();

app.set("view engine", "hbs");

app.get('/', function (request,response) {
    response.render("index",{
        title:"Главная страница",
        description:"Файловое хранилище",
    });
})
app.get('/upload', function (request,response) {
    response.render("upload");
})
app.listen(3000, function () {
    console.log('Сервер запущен по порту 3000');
})