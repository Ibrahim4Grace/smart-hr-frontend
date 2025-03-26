import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import http from 'http';
import { corsOptions, config } from './configs/index.js';
import { router } from './src/routes/index.js';
import { setupMiddleware } from './src/middlewares/index.js';

// import {
//     appMiddleware,
//     addRequestCountToLocals,
//     addReturnCountToLocals,
//     addWasteCountToLocals,
//     errorHandler,
//     routeNotFound,
// } from './middlewares/index.js';

const app = express();

app.use(cors(corsOptions));

app.use(morgan('tiny'));
app.disable('x-powered-by');
// app.use(addRequestCountToLocals, addReturnCountToLocals, addWasteCountToLocals);
setupMiddleware(app);
app.use(router);
// app.use(appMiddleware);

// app.use(errorHandler, routeNotFound);

const port = config.port || 3000;
app.listen(port, () => console.log(`Server started on port ${port}`));
