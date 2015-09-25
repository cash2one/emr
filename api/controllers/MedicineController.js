/**
 * MedicineController
 *
 * @description :: Server-side logic for managing medicines
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	
	
	getMedicineById: function(req,res){
		// console.log(req.body['user_id']);
		Medicine.find({id:req.body['medicine_id']}).exec(function findCB(err, medicine){
			// console.log(user);
			if(!err){
				res.send({
					error:0,
					medicine:medicine
				});
			} else {
				res.send({error:1});
			}
		});
	},
	updateMedicine: function(req,res){
		Medicine.update({
			id:req.body['medicine_id']
		},{
			name:req.body['medicine_name'],
			company:req.body['medicine_company'],
			price:req.body['medicine_price'],
			desc:req.body['medicine_desc']
		}).exec(function afterwards(err, updated){
			if (!err) {
				res.send({error:0});
			} else {
			  	res.send({error:1});
			}

		});
	},
	addMedicine: function(req,res){
		Medicine.create({
			name:req.body['medicine_name'],
			company:req.body['medicine_company'],
			price:req.body['medicine_price'],
			desc:req.body['medicine_desc']
		}).exec(function createCB(err, created){
		  	if (!err) {
		  		res.send({error:0});
		  	} else {
		  		res.send({error:1});
		  	}
		});
	},
	delMedicine: function(req,res){
		Medicine.destroy({
			id:req.body['medicine_id']
		}).exec(function deleteCB(err){
		  	if (!err) {
		  		res.send({error:0});
		  	} else {
		  		res.send({error:1});
		  	}
		});
	},
	searchMedicine: function(req,res){
		Medicine.find({
			name:{"contains":req.body['keyword']}
		}).exec(function findCB(err, medicines){
			if(!err){
				res.send({
					error:0,
					medicines:medicines
				});
			} else {
				res.send({error:1});
			}
		});
	}
};

