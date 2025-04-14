import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import http from 'http';
import { corsOptions, config } from './configs/index.js';
import { router } from './src/routes/index.js';



const app = express();

app.use(cors(corsOptions));

app.use(morgan('tiny'));
app.disable('x-powered-by');
// app.use(addRequestCountToLocals, addReturnCountToLocals, addWasteCountToLocals);

app.use(router);




const port = config.port || 3000;
app.listen(port, () => console.log(`Server started on port ${port}`));
