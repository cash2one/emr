/**
* MedicalRecord.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {


  	content:{
  		type: "string",
      	required: true,
  		defaultsTo: "空"
  	},
    status: {
      type: 'integer',
      defaultsTo: 0
    },

  	// relations
  	patient: {
  		model: "User"
  	}, 
  	doctor: {
  		model: "User"
  	}


  }
};

