import express from 'express';
import RegisterController from '../utils/RegisterController.js';
import LoginController from '../utils/LoginController.js';

const router = express.Router();

router.post('/register', RegisterController);

router.post('/login', LoginController);

export default router;