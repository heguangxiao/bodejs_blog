const meRouter = require('./me');
const coursesRouter = require('./courses');
const searchRouter = require('./search');
const siteRorter = require('./site');

function route(app) {
    app.use('/me', meRouter);
    app.use('/courses', coursesRouter);
    app.use('/search', searchRouter);
    app.use('/', siteRorter);
}

module.exports = route;
