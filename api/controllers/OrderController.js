/**
 * OrderController
 *
 * @description :: Server-side logic for managing orders
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	addOrder: function(req,res){

		Order.create({
			orderDate:req.body['order_orderDate'],patient:{id:req.body['order_patientId']},doctor:{id:req.body['order_doctorId']}
		}).exec(function createCB(err, created){
		  	if (!err) {
		  		res.send({error:0});
		  	} else {
		  		res.send({error:1});
		  	}
		});
	},
	updateOrderStatus: function(req,res){

		Order.update({
			id:req.body['order_id']
		},{
			status:req.body['order_status']
		}).exec(function afterwards(err, updated){
		  	if (!err) {
		  		res.send({error:0});
		  	} else {
		  		res.send({error:1});
		  	}
		});
	}
};

