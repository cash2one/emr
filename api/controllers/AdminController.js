/**
 * AdminController
 *
 * @description :: Server-side logic for managing admins
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	user: function(req,res){
		var page = req.query['page'];
		if (!page) {
			page = 1;
		}
		console.log(page);
		User.find({ where: {}, skip: (page-1)*10, limit: 10, sort: 'createdAt DESC' }).exec(function findCB(err, users){
			if(!err){
				res.view('admin/user',{
					users:users
				});
			}
		});
	},
	disease: function(req,res){
		var page = req.query['page'];
		if (!page) {
			page = 1;
		}
		console.log(page);
		Disease.find({ where: {}, skip: (page-1)*10, limit: 10, sort: 'name ASC' }).exec(function findCB(err, diseases){
			if(!err){
				res.view('admin/disease',{
					diseases:diseases
				});
			}
		});
	},
	record: function(req,res){


		MedicalRecord.find({ where: {
		}, sort: 'createdAt DESC' }).populate('patient').populate('doctor').exec(function cb(err,records){

			res.view('admin/record',{
				records: records
			});

		});

	},
	order: function(req,res){
		var page = req.query['page'];
		if (!page) {
			page = 1;
		}
		console.log(page);
		Order.find({ where: {}, skip: (page-1)*10, limit: 10, sort: 'createdBy DESC' }).populate('patient').populate('doctor').exec(function findCB(err, orders){
			if(!err){
				res.view('admin/order',{
					orders:orders
				});
			}
		});
	},
	medicine: function(req,res){
		var page = req.query['page'];
		if (!page) {
			page = 1;
		}
		console.log(page);
		Medicine.find({ where: {}, skip: (page-1)*10, limit: 10, sort: 'createdAt DESC' }).exec(function findCB(err, medicines){
			if(!err){
				res.view('admin/medicine',{
					medicines:medicines
				});
			}
		});
	}
};

