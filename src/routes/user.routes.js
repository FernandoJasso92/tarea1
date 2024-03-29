const express = require('express');
const userController = require('./../controllers/user.controller');
const authMiddleware = require('./../middlewares/auth.middleware');

//middlewares
const validationMiddleware = require('./../middlewares/validations.middleware');
const userMiddleware = require('./../middlewares/user.middleware');

const router = express.Router();

router
  .route('/')
  .get(authMiddleware.protect, userController.findAllUsers)
  .post(validationMiddleware.createLoginValidation, userController.createUser);

router.post('/login', userMiddleware.existUserEmail, userController.login);

router.use(authMiddleware.protect);

router
  .use(userMiddleware.existUser)
  .route('/:id')
  .get(userController.findUser)
  .patch(userController.update)
  .delete(userController.delete);

module.exports = router;
