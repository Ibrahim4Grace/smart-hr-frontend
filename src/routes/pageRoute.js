import { Router } from 'express';

import * as pageCtlr from '../controllers/pageController.js';

const pageRoute = Router();
pageRoute.get('/', pageCtlr.indexPagee);

export default pageRoute;
