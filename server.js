const express = require('express');
const fs = require('fs');

const app = express();
app.use(express.json());

const filePath = './tasks.json';

// TASK-4: Görevleri listeleme
app.get('/tasks', (req, res) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) return res.status(500).send('Dosya okunamadı.');
        res.json(JSON.parse(data));
    });
});



app.listen(3000, () => console.log('API 3000 portunda çalışıyor.'));
