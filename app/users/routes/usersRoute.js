const express = require('express');
const router = express.Router();
const registerController = require('../controllers/registrationsController')
const loginController = require('../controllers/loginController')
const userController = require('../controllers/usersController')
const authMiddleware = require('../../../middlewares/authMiddlewares')

/**
   * @apiGroup User
    * @api {post} /api/user/register Register as a Home Owner
    * @apiSuccess {String} name 
    *  @apiSuccess {String} profilePic optional 
    *  @apiSuccess {String} email
    * @apiSuccess {Boolean} isHomeOwner
    * @apiSuccess {String} password 
   */


/**
* @apiGroup User
 * @api {post} /api/user/register(2) Register as a Contractor
 * @apiSuccess {String} name 
 *  @apiSuccess {String} profilePic optional 
 *  @apiSuccess {String} email
 * @apiSuccess {Boolean} isContractor
 * @apiSuccess {String} password 
 * @apiSuccess {Object[]} categoriesToWorkIn 
 *  @apiSuccess {ObjectId} categoriesToWorkIn.jobCategory
*/

router.post('/register',
    registerController.register)



/**
  * @apiGroup User
   * @api {post} /api/user/login Login For All Users
   * @apiSuccess {String} email 
   *  @apiSuccess {String} password 
  */

router.post('/login',
    loginController.login)

/**
* @apiGroup User
* @api {post} /api/user/resetPassEmail Forget Password
* @apiSuccess {String} email 
*/

router.post('/resetPassEmail',
    userController.sendResetPassEmail)
/**
* @apiGroup User
* @api {post} /api/user/pinConfirmation Reset Password Pin Confirmation
* @apiSuccess {ObjectId} id this id you can get from the response of  /api/user/resetPassEmail Forget Password API
* @apiSuccess {Number} pin this pin is in the email which is sent by /api/user/resetPassEmail Forget Password API
*/
router.post('/pinConfirmation',
    userController.pinConfirmation)
/**
* @apiGroup User
* @api {put} /api/user/newPassword/:userID New Password After The Pin Confirmation
* @apiSuccess {String} newPassword 
* @apiParam {ObjectId} userID this id you can get from the response of /api/user/pinConfirmation Reset Password Pin Confirmation API
*/

router.put('/newPassword/:userID',
    userController.resetPassword)

router.get('/contractorsRelatedToCate/:jobCategoryId',
    authMiddleware.Auth,
    userController.getContractorsRelatedToCate)

router.put('/addTags/:userId',
    userController.addTags)


router.put('/updateTags/:userId',
    userController.updateTags)

//to get a specific user
router.get('/getUser',
    authMiddleware.Auth,
    userController.getUser);

//to get a specific user
router.get('/medicalProfRequests',
    authMiddleware.Auth,
    authMiddleware.AdminAuth,
    userController.getMedicalProfessionalsRequests);

router.get('/getUserForAdmin/:userId',
    authMiddleware.Auth,
    authMiddleware.AdminAuth,
    userController.getUserForAdmin);



//to update a user
router.put('/updateUser',
    authMiddleware.Auth,
    userController.updateUser);

router.put('/approveMedRequest/:userId',
    authMiddleware.Auth,
    userController.approveMedicalProfRequest);

router.put('/disapproveMedRequest/:userId',
    authMiddleware.Auth,
    userController.disapproveMedicalProfRequest);
//---------------------------------------------------------------------------------------------------------------------------------//

//to get all homeowners
router.get('/commonUsers',
    authMiddleware.Auth,
    authMiddleware.AdminAuth,
    userController.getCommonUsers);
//to get all contractor
router.get('/medicalProfessionals',
    authMiddleware.Auth,
    authMiddleware.AdminAuth,
    userController.getAllMedicalProfessionals);


//to delete a homeowner
router.delete('/deleteUser/:userId',
    authMiddleware.Auth,
    authMiddleware.AdminAuth,
    userController.deleteUser);
//to change the password
router.post('/changePassword',
    authMiddleware.Auth,
    userController.changePassword);



module.exports = router;
