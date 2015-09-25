module.exports = function(req, res, next) {
    if ( req.isAuthenticated() && req.user.role == 0) {
        return next();
    }
    else{
        return res.redirect('/');
    }
};