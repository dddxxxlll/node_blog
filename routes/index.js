/**
 * Created by dxl on 2017/7/19.
 */
module.exports = function (app) {
    app.get('/', function (req, res) {
        res.redirect('/posts');
    });
    app.use('/signup', require('./signup'));
    app.use('/signin', require('./signin'));
    app.use('/signout', require('./signout'));
    app.use('/posts', require('./posts'));
    // 404page
    app.use(function (req, res) {
        if (!res.headersSent) {
            res.render('404');
        }
    });
};