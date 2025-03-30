import { Router } from 'express';

import * as adminCtlr from '../controllers/adminController.js';

const adminRoute = Router();

adminRoute.get('/dashboard', adminCtlr.adminIndexPage);
adminRoute.get('/companies', adminCtlr.companiesPage);
adminRoute.get('/subscription', adminCtlr.subscriptionsPage);
adminRoute.get('/packages', adminCtlr.packagesPage);
adminRoute.get('/purchase-transaction', adminCtlr.purchaseTransactionPage);

export default adminRoute;
