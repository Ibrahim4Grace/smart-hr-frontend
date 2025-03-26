import { Router } from 'express';

import * as authCtlr from '../controllers/authController.js';

const authRoute = Router();

authRoute.get('/register', authCtlr.registerPage);
authRoute.get('/forget-password', authCtlr.forgetPasswordPage);
authRoute.get('/otp', authCtlr.otpPage);
authRoute.get('/reset-password', authCtlr.resetPasswordPage);
authRoute.get('/login', authCtlr.authPage);

export default authRoute;
