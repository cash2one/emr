/**
* Medicine.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    // 药品
    name: {
      type: 'string',
      required: true,
      unique: true,
      minLength:1,
      maxLength:32
    },
    // 厂商
    company: {
      type: 'string',
      defaultsTo: '无',
      minLength:1,
      maxLength:255
    },
    // 价钱
    price: {
      type: 'float',
      defaultsTo: 0.0,
      minLength:0.0
    },
    // 介绍
    desc: {
      type: 'string',
      defaultsTo: '无',
      minLength:1,
      maxLength:255
    }
  }
};

