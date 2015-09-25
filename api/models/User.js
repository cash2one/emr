/**
* User.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

var bcrypt = require('bcrypt');

module.exports = {
  attributes: { 
    // 用户名
    username: {
      type: 'string',
      required: true,
      unique: true,
      minLength:1,
      maxLength:16
    },
    // 密码
    password: {
      type: 'string',
      required: true,
      minLength:6,
      maxLength:16
    },
    // 邮箱
    email: {
      type: 'email'
    },
    // 真名
    realName: {
      type: 'string',
      minLength:1
    },
    // 性别
    sex: {
      type: 'string',
      defaultsTo: 'm',
      minLength:1,
      maxLength:1
    },
    // 医生介绍
    desc: {
      type: 'string',
      defaultsTo: '无',
      minLength:1,
      maxLength:255
    },
    // 身份证号
    idCard: {
      type: 'string',
      defaultsTo: '000000',
      minLength:6,
      maxLength:20
    },
    // 电话
    phone: {
      type: 'string',
      minLength:4,
      maxLength:20
    },
    // 地址
    address: {
      type: 'string',
      defaultsTo: '无',
      minLength:1,
      maxLength:64
    },
    // 年龄
    age: {
      type: 'integer',
      defaultsTo: 0
    },
    // 是否管理员（默认为病人）
    // 0 管理员 1 医生 2 病人
    role: {
      type: 'integer',
      defaultsTo: 2
    },

    // relations
    patientOrder:{
      collection:"Order",
      via:"patient"
    },
    doctorOrder:{
      collection:"Order",
      via:"doctor"
    },

    patientMedicalRecord: {
      collection: "MedicalRecord",
      via: "patient"
    },
    doctorMedicalRecord: {
      collection: "MedicalRecord",
      via: "doctor"
    }


  },

  // 创建（注册）用户前，对用户密码加密
  beforeCreate: function (values, cb) {
    bcrypt.genSalt(10, function(err, salt) {
      bcrypt.hash(values.password, salt, function(err, hash) {
        if(err) return cb(err);
        values.password = hash;
        // 执行用户定义回调
        cb();
      });
    });
  }
};