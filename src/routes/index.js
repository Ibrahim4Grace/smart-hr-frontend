import express from 'express';
const router = express.Router();

import pageRoute from './pageRoute.js';
import authRoute from './authRoute.js';
import hrRoute from './hrRoute.js';

router.use('/', pageRoute);
router.use('/auth', authRoute);
router.use('/hr', hrRoute);

export { router };
