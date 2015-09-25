/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes map URLs to views and controllers.
 *
 * If Sails receives a URL that doesn't match any of the routes below,
 * it will check for matching files (images, scripts, stylesheets, etc.)
 * in your assets directory.  e.g. `http://localhost:1337/images/foo.jpg`
 * might match an image file: `/assets/images/foo.jpg`
 *
 * Finally, if those don't match either, the default 404 handler is triggered.
 * See `api/responses/notFound.js` to adjust your app's 404 logic.
 *
 * Note: Sails doesn't ACTUALLY serve stuff from `assets`-- the default Gruntfile in Sails copies
 * flat files from `assets` to `.tmp/public`.  This allows you to do things like compile LESS or
 * CoffeeScript for the front-end.
 *
 * For more information on configuring custom routes, check out:
 * http://sailsjs.org/#!/documentation/concepts/Routes/RouteTargetSyntax.html
 */

module.exports.routes = {


  'get /': [{
    policy: 'isAuthenticated'
  }],

  // UserController  *** *** *** *** *** *** *** *** *** ***
  // - xml
  'get /service/record'     :    'ServiceController.record',



  // UserController  *** *** *** *** *** *** *** *** *** ***
  // - json
  'post /api/user/getUserById'    :    'UserController.getUserById',
  'post /api/user/getAllDoctors'  :    'UserController.getAllDoctors',
  'post /api/user/updateUser'     :    'UserController.updateUser',


  // DiseaseController  *** *** *** *** *** *** *** *** *** ***
  // - json
  'post /api/disease/getDiseaseById'  :    'DiseaseController.getDiseaseById',
  'post /api/disease/updateDisease'   :    'DiseaseController.updateDisease',
  'post /api/disease/addDisease'      :    'DiseaseController.addDisease',
  'post /api/disease/delDisease'      :    'DiseaseController.delDisease',
  'post /api/disease/searchDisease'   :    'DiseaseController.searchDisease',


  // MedicineController  *** *** *** *** *** *** *** *** *** ***
  // - json
  'post /api/medicine/getMedicineById'  :    'MedicineController.getMedicineById',
  'post /api/medicine/updateMedicine'   :    'MedicineController.updateMedicine',
  'post /api/medicine/addMedicine'      :    'MedicineController.addMedicine',
  'post /api/medicine/delMedicine'      :    'MedicineController.delMedicine',
  'post /api/medicine/searchMedicine'   :    'MedicineController.searchMedicine',


  // OrderController  *** *** *** *** *** *** *** *** *** ***
  // - json
  'post /api/order/addOrder'            :   'OrderController.addOrder',
  'post /api/order/updateOrderStatus'   :   'OrderController.updateOrderStatus',


  // MedicalRecordController  *** *** *** *** *** *** *** *** *** ***
  // - json
  'post /api/medicalRecord/addMedicalRecord'       :   'MedicalRecordController.addMedicalRecord',
  'post /api/medicalRecord/getMedicalRecordById'   :   'MedicalRecordController.getMedicalRecordById',
  'post /api/medicalRecord/updateMedicalRecord'    :   'MedicalRecordController.updateMedicalRecord',

  // AuthController  *** *** *** *** *** *** *** *** *** ***
  // - login
  'get  /login'    :   { view: 'passport/login' },
  'post /login'    :   'AuthController.login',
  'get  /logout'   :   'AuthController.logout',

  // - register
  'get  /register' :   { view: 'passport/register'},
  'post /register' :   'AuthController.register',

  // PatientController  *** *** *** *** *** *** *** *** *** ***
  // - order
  'get /patient'            :    '/patient/order',
  'get /patient/order'      :    'PatientController.order',
  'get /patient/record'     :    'PatientController.record',
  'get /patient/settings'   :    'PatientController.settings',


  // DoctorController  *** *** *** *** *** *** *** *** *** ***
  // - order
  'get /doctor'               :    '/doctor/work',
  'get /doctor/work'          :    'DoctorController.work',
  'get /doctor/record'        :    'DoctorController.record',
  'get /doctor/record/edit'   :    'DoctorController.edit',
  'get /doctor/settings'      :    'DoctorController.settings',


  // AdminController  *** *** *** *** *** *** *** *** *** ***
  // - index
  'get /admin'            :   '/admin/user',
  'get /admin/user'       :   'AdminController.user',
  'get /admin/disease'    :   'AdminController.disease',
  'get /admin/order'      :   'AdminController.order',
  'get /admin/record'     :   'AdminController.record',
  'get /admin/medicine'   :   'AdminController.medicine'

};
