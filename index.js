import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import morgan from 'morgan';
import path from 'path';
import { fileURLToPath } from 'url';

import { corsOptions, config } from './configs/index.js';
import { router } from './src/routes/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
// app.use(express.static(path.join(__dirname, '../public')));
app.use(express.static(path.join(__dirname, 'src', 'public'))); 


app.set('views', path.resolve('src/views'));
app.set('view engine', 'ejs');

app.use(cors(corsOptions));
app.use(morgan('tiny'));
app.disable('x-powered-by');




app.use(router);

const port = config.port || 3000;
app.listen(port, () => console.log(`Server started on port ${port}`));
