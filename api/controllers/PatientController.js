/**
 * PatientController
 *
 * @description :: Server-side logic for managing patients
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	

	order: function(req,res){
		var page = req.query['page'];
		if (!page) {
			page = 1;
		}
		
		Order.find({where: {patient:req.user.id}, skip: (page-1)*10, limit: 10, sort: 'createdAt DESC' }).populate('doctor').exec(function cb(err,orders){
			res.view('patient/order',{
				orders:orders
			});
		});

		// User.find({id:req.user.id}).populate('patientOrder',{where: {}, skip: (page-1)*10, limit: 10, sort: 'createdAt DESC' }).exec(function cb(err,user){
		// 	var orders = [];
		// 	user[0].patientOrder.forEach(function(thisOrder,index){
		// 	   	console.log("hehe"+index);
		// 		Order.find({id:thisOrder.id}).populate('doctor').exec(function(err,o){
		// 			orders.push(o[0]);
		// 		});

		// 	    if (index === user[0].patientOrder.length-1){
		// 	    	res.view('patient/order',{
		// 				orders:orders 
		// 			});
		// 	    }
				
		// 	})
		// });
	},
	record: function(req,res){


		MedicalRecord.find({ where: {
			patient: req.user.id
		}, sort: 'createdAt DESC' }).populate('doctor').exec(function cb(err,records){

			res.view('patient/record',{
				records: records
			});

		});

	},
	settings: function(req,res){
		res.view('patient/settings');
	}


};

