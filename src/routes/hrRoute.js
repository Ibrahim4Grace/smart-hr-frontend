import { Router } from 'express';

import * as hrCtlr from '../controllers/hrController.js';

const hrRoute = Router();

hrRoute.get('/index', hrCtlr.hrIndexPage);

export default hrRoute;
