/**
 * DoctorController
 *
 * @description :: Server-side logic for managing doctors
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var moment = require('moment');


module.exports = {
	work: function(req,res){

		var today = moment().format("YYYY-MM-DD");
		// console.log(today);

		Order.find({ where: {
			doctor: req.user.id,     // 某医生
			status: 0,               // 预约了还没看病的
			orderDate: today         // 今天的日期String
		}, sort: 'createdAt DESC' }).populate('patient').exec(function cb(err,orders){

			res.view('doctor/work',{
				orders: orders
			});

		});

	},
	record: function(req,res){


		MedicalRecord.find({ where: {
			doctor: req.user.id
		}, sort: 'createdAt DESC' }).populate('patient').exec(function cb(err,records){

			res.view('doctor/record',{
				records: records
			});

		});

	},
	settings: function(req,res){
		res.view('doctor/settings');
	},
	edit: function(req,res){

		MedicalRecord.find({ where: {
			id: req.query.id
		}, sort: 'createdAt DESC' }).populate('patient').exec(function cb(err,record){
				if (record.length<1) {
					res.redirect("/doctor/record");
					return;
				}
				res.view('doctor/edit',{
				record: record
			});

		});
	}
};

