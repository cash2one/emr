/**
 * MedicalRecordController
 *
 * @description :: Server-side logic for managing Medicalrecords
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	addMedicalRecord: function(req,res){
		MedicalRecord.create({
			content:req.body['record_content'],
			patient:{id:req.body['record_patientId']},
			doctor:{id:req.user.id}
		}).exec(function createCB(err, created){
		  	if (!err) {
		  		res.send({error:0});
		  	} else {
		  		res.send({error:1});
		  	}
		});
	},
	getMedicalRecordById: function(req,res){
		// console.log(req.body['user_id']);
		MedicalRecord.find({
			id:req.body['record_id']
		}).populate('patient').exec(function findCB(err, record){
			// console.log(user);
			if(!err){
				res.send({
					error:0,
					record:record
				});
			} else {
				res.send({error:1});
			}
		});
	},
	updateMedicalRecord: function(req,res){

		MedicalRecord.update({
			id:req.body['record_id']
		},{
			content:req.body['record_content']
		}).exec(function afterwards(err, updated){
		  if (!err) {
		  	res.send({error:0});
		  } else {
		  	res.send({error:1});
		  }

		});
	}
};

