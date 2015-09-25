/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */


module.exports = {
	getUserById: function(req,res){
		// console.log(req.body['user_id']);
		User.find({id:req.body['user_id']}).exec(function findCB(err, user){
			// console.log(user);
			if(!err){
				res.send({
					error:0,
					user:user
				});
			} else {
				res.send({error:1});
			}
		});
	},
	updateUser: function(req,res){

		// 区分 管理员修改 和 普通用户自己修改
		var role = req.body['user_role'];
		if (!role) {
			role = req.user.role;
		}

		User.update({
			id:req.body['user_id']
		},{
			realName:req.body['user_realName'],
			sex:req.body['user_sex'],
			desc:req.body['user_desc'],
			role:role,
			age:req.body['user_age'],
			address:req.body['user_address'],
			phone:req.body['user_phone'],
			idCard:req.body['user_idCard']
		}).exec(function afterwards(err, updated){
		  if (!err) {
		  	res.send({error:0});
		  } else {
		  	res.send({error:1});
		  }

		});
	},
	getAllDoctors: function(req,res){

		
		User.find({role:1}).exec(function findCB(err, doctors){
			// console.log(user);
			if(!err){
				res.send({
					error:0,
					doctors:doctors
				});
			} else {
				res.send({error:1});
			}
		});
	}

};

