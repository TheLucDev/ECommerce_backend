const express = require('express');

const router = express.Router();
const userSignUpController = require('../controller/userSignUp');
const userSingInController = require('../controller/userSignIn');
const userDetailsController = require('../controller/userDetails');
const authToken = require('../middleware/authToken');
const userLogout = require('../controller/userLogout');
const AllUsers = require('../controller/allUsers');
const updateUser = require('../controller/updateUser');
const UploadProductController = require('../controller/uploadProduct');
const GetProductController = require('../controller/getProduct');
const UpdateProductController = require('../controller/updateProduct');

router.post('/signup', userSignUpController);
router.post('/signin', userSingInController);
router.get('/user-details', authToken, userDetailsController);
router.get('/userLogout', userLogout);

//admin panel
router.get('/all-user', authToken, AllUsers);
router.post('/update-user', authToken, updateUser);

//product
router.post('/upload-product', authToken, UploadProductController);
router.get('/get-product', GetProductController);
router.post('/update-product', authToken, UpdateProductController);

module.exports = router;
