const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./db');
const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Сервер працює!');
});
app.get('/users', (req, res) => {
    db.query('SELECT * FROM users', (err, results) => {
        if (err) {
            res.status(500).send('Помилка запиту');
            return;
        }
        res.json(results);
    });
});
app.post('/users', (req, res) => {
    const { name, email } = req.body;
    db.query('INSERT INTO users (name, email) VALUES (?, ?)', [name,
        email], (err, result) => {
            if (err) {
                res.status(500).send('Помилка додавання користувача');
                return;
            }
            res.send('Користувач доданий');
        });
});

app.delete('/users/:id', (req, res) => {
    const userId = req.params.id;
    db.query('DELETE FROM users WHERE id = ?', [userId], (err, result) => {
        if (err) {
            res.status(500).send('Помилка видалення користувача');
            return;
        }
        res.send('Користувач видалений');
    });
});

app.put('/users/:id', (req, res) => {
    const userId = req.params.id;
    const { name, email } = req.body;
    db.query(
        'UPDATE users SET name = ?, email = ? WHERE id = ?',
        [name, email, userId],
        (err, result) => {
            if (err) {
                res.status(500).send('Помилка оновлення користувача');
                return;
            }
            res.send('Користувач оновлений');
        }
    );
});


app.listen(3000, () => {
    console.log(' Сервер запущено на http://localhost:3000');
});