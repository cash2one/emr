/**
 * ServiceController
 *
 * @description :: Server-side logic for managing Services
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	record: function(req,res){
		// console.log(req.body['user_id']);
		MedicalRecord.find({
			id:req.query.id
		}).populate('patient').populate('doctor').exec(function findCB(err, record){
			// console.log(user);
			if(!err){

				var root = require('xmlbuilder').create('record');
				record[0].patient.password = undefined;
				// record[0].patient.patientOrder = undefined;
				// record[0].patient.doctorOrder = undefined;
				// record[0].patient.patientMedicalRecord = undefined;
				// record[0].patient.doctorMedicalRecord = undefined;
				record[0].doctor.password = undefined;
				// record[0].doctor.patientOrder = undefined;
				// record[0].doctor.doctorOrder = undefined;
				// record[0].doctor.patientMedicalRecord = undefined;
				// record[0].doctor.doctorMedicalRecord = undefined;
				
				root.ele(record[0]);

				res.send(root.end({ pretty: true, indent: '  ', newline: '\n' }));
			} else {
				res.send({error:1});
			}
		});
	}
};

