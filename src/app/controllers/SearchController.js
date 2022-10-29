class SearchController {
    // [GET] /search
    index(req, res) {
        res.render('search');
    }

    // [GET] /search/:slug
    show(req, res) {
        res.send('aaaaa');
    }
}

module.exports = new SearchController();
