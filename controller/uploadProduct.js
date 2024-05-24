const uploadProductPermission = require('../helpers/permission');
const productModel = require('../models/productModel');
async function UploadProductController(req, res) {
  try {
    const sessionUserId = req.userId;
    console.log(sessionUserId, 'sessionUserId');

    if (!uploadProductPermission(sessionUserId)) {
      throw new Error('Permmission denied');
    } else {
      const uploadProduct = new productModel(req.body);
      const saveProduct = await uploadProduct.save();

      res.status(201).json({
        message: 'Product uploaded successfully',
        data: saveProduct,
        error: false,
        success: true,
      });
    }
  } catch (err) {
    res.status(400).json({
      message: error.message || err,
      error: true,
      success: false,
    });
  }
}

module.exports = UploadProductController;
