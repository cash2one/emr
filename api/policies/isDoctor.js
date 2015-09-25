module.exports = function(req, res, next) {
    if ( req.isAuthenticated() && req.user.role == 1) {
        return next();
    }
    else{
        return res.redirect('/');
    }
};