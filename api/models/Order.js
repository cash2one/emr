/**
* Order.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {


    orderDate: {
      type: 'string',
      required: true,
      defaultsTo: '2015-00-00'
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

