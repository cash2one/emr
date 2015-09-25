module.exports = function(req, res, next) {
    if ( req.isAuthenticated() && req.user.role == 2) {
        return next();
    }
    else{
        return res.redirect('/');
    }
};