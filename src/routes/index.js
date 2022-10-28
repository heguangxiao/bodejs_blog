const searchRouter = require('./search');

function route(app) {
    app.get('/', (req, res) => {
        res.render('home');
    });

    app.get('/search', searchRouter);
    app.post('/search', (req, res) => {
        res.send(req.body);
    });
}

module.exports = route;
