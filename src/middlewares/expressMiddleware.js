import express from 'express';
import session from 'express-session';
import cookieParser from 'cookie-parser';
import {config} from '../../configs/index.js';
import path from 'path';
import { fileURLToPath } from 'url';
import ejs from 'ejs';
import dotenv from 'dotenv';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const setupMiddleware = (app) => {
  app.use(
    session({
      secret: config.sessionSecret,
      resave: false,
      saveUninitialized: true,
      cookie: {
        httpOnly: true,
        secure: config.nodeEnv === 'production',
        sameSite: 'Lax',
      },
    })
  );

  app.use(cookieParser());
  app.use(express.urlencoded({ extended: false }));
  app.use(express.json());
  app.use(express.static(path.join(__dirname, '../public')));

  app.set('views', path.resolve('src/views'));
  app.set('view engine', 'ejs');
};
