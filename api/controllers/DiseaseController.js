/**
 * DiseaseController
 *
 * @description :: Server-side logic for managing diseases
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	
	getDiseaseById: function(req,res){
		// console.log(req.body['user_id']);
		Disease.find({id:req.body['disease_id']}).exec(function findCB(err, disease){
			// console.log(user);
			if(!err){
				res.send({
					error:0,
					disease:disease
				});
			} else {
				res.send({error:1});
			}
		});
	},
	updateDisease: function(req,res){
		Disease.update({
			id:req.body['disease_id']
		},{
			name:req.body['disease_name'],
			desc:req.body['disease_desc']
		}).exec(function afterwards(err, updated){
			if (!err) {
				res.send({error:0});
			} else {
			  	res.send({error:1});
			}

		});
	},
	addDisease: function(req,res){
		Disease.create({
			name:req.body['disease_name'],
			desc:req.body['disease_desc']
		}).exec(function createCB(err, created){
		  	if (!err) {
		  		res.send({error:0});
		  	} else {
		  		res.send({error:1});
		  	}
		});
	},
	delDisease: function(req,res){
		Disease.destroy({
			id:req.body['disease_id']
		}).exec(function deleteCB(err){
		  	if (!err) {
		  		res.send({error:0});
		  	} else {
		  		res.send({error:1});
		  	}
		});
	},
	searchDisease: function(req,res){
		Disease.find({
			name:{"contains":req.body['keyword']}
		}).exec(function findCB(err, diseases){
			if(!err){
				res.send({
					error:0,
					diseases:diseases
				});
			} else {
				res.send({error:1});
			}
		});
	}
	
};

