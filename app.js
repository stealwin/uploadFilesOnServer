const express = require('express');

const app = express();

app.get('/', function (request,response) {
    response.send('Главная страница!');
})
app.get('/upload', function (request,response) {
    response.send('Загрузка файлов');
})
app.listen(3000, function () {
    console.log('Сервер запущен по порту 3000');
})