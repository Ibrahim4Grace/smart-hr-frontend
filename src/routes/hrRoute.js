import { Router } from 'express';

import * as hrCtlr from '../controllers/hrController.js';

const hrRoute = Router();

hrRoute.get('/index', hrCtlr.hrIndexPage);
hrRoute.get('/employee-dashboard', hrCtlr.employeeDashboardPage);
hrRoute.get('/deals-dashboard', hrCtlr.dealsDashboardPage);
hrRoute.get('/chat', hrCtlr.chatPage);
hrRoute.get('/voice-call', hrCtlr.voiceCallPage);
hrRoute.get('/video-call', hrCtlr.videoCallPage);
hrRoute.get('/incoming-call', hrCtlr.incomingCallPage);
hrRoute.get('/call-history', hrCtlr.callHistoryPage);
hrRoute.get('/email', hrCtlr.emailPage);
hrRoute.get('/todo', hrCtlr.todoPage);
hrRoute.get('/notes', hrCtlr.notesPage);
hrRoute.get('/invoices', hrCtlr.invoicesPage);
hrRoute.get('/invoice-details', hrCtlr.invoiceDetailsPage);
hrRoute.get('/edit-invoices', hrCtlr.editInvoicePage);
hrRoute.get('/add-invoices', hrCtlr.addInvoicePage);
hrRoute.get('/contacts-grid', hrCtlr.contactPage);
hrRoute.get('/contact-details', hrCtlr.contactDetailsPage);
hrRoute.get('/clients-grid', hrCtlr.clientsGridPage);
hrRoute.get('/client-details', hrCtlr.clientsDetailsPage);
hrRoute.get('/projects-grid', hrCtlr.projectPage);
hrRoute.get('/tasks', hrCtlr.tasksPage);
hrRoute.get('/task-details', hrCtlr.tasksDetailsPage);
hrRoute.get('/task-board', hrCtlr.tasksboardPage);
hrRoute.get('/companies-grid', hrCtlr.companiesPage);
hrRoute.get('/deals-grid', hrCtlr.dealsPage);
hrRoute.get('/analytics', hrCtlr.analyticsPage);
hrRoute.get('/activity', hrCtlr.activityPage);
hrRoute.get('/employees', hrCtlr.employeesPage);
hrRoute.get('/employees-grid', hrCtlr.employeesGridPage);
hrRoute.get('/employee-details', hrCtlr.employeesdetailsPage);
hrRoute.get('/departments', hrCtlr.departmentsPage);
hrRoute.get('/tickets', hrCtlr.ticketsPage);
hrRoute.get('/ticket-details', hrCtlr.ticketDetailsPage);
hrRoute.get('/leaves', hrCtlr.leavesPage);
hrRoute.get('/leaves-employee', hrCtlr.leaveEmployeePage);
hrRoute.get('/leave-settings', hrCtlr.leaveSettingsPage);
hrRoute.get('/timesheets', hrCtlr.timesheetsPage);
hrRoute.get('/overtime', hrCtlr.overtimePage);
hrRoute.get('/promotion', hrCtlr.promotionPage);
hrRoute.get('/resignation', hrCtlr.resignationPage);
hrRoute.get('/termination', hrCtlr.terminationPage);
hrRoute.get('/taxes', hrCtlr.taxesPage);
hrRoute.get('/provident-fund', hrCtlr.providentFundsPage);
hrRoute.get('/expenses', hrCtlr.expensesPage);
hrRoute.get('/payments', hrCtlr.paymentsPage);
hrRoute.get('/estimates', hrCtlr.estimatesPage);
hrRoute.get('/budgets', hrCtlr.budgetsPage);
hrRoute.get('/budget-revenues', hrCtlr.budgetsRPage);
hrRoute.get('/employee-salary', hrCtlr.employeeSalaryRPage);
hrRoute.get('/payslip', hrCtlr.payslipRPage);
hrRoute.get('/payroll', hrCtlr.payrollRPage);
hrRoute.get('/asset', hrCtlr.assetPage);
hrRoute.get('/knowledgebase', hrCtlr.knowledgebasePage);
hrRoute.get('/knowledgebase-view', hrCtlr.knowledgebaseViewPage);
hrRoute.get('/knowledgebase-details', hrCtlr.knowledgebaseDetailsPage);
hrRoute.get('/users', hrCtlr.usersPage);
hrRoute.get('/roles-permissions', hrCtlr.rolesPermissionsPage);





export default hrRoute;
