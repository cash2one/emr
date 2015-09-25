/**
 * 用户是否被授权
 * @param req
 * @param res
 * @param next
 * @returns {*}
 */
module.exports = function(req, res, next) {
    if (req.isAuthenticated()) {
    	var role = req.user.role;
    	switch(role){
    		case 0:
    			res.redirect('/admin');
    			break;
    		case 1:
    			res.redirect('/doctor');
    			break;
    		case 2:
    			res.redirect('/patient');
    			break;
    	}
    	return;
        // return next();
    }
    else{
        return res.redirect('/login');
    }
};