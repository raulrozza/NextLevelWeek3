import express from 'express';
import cors from 'cors';
import { join } from 'path';

import './database/connection';
import 'express-async-errors';

import routes from './routes';
import errorHandler from './errors/handler';

const app = express();

app.use(cors());
app.use(express.json());

app.use(routes);
app.use('/uploads', express.static(join(__dirname, '..', 'uploads')));
app.use(errorHandler);

app.listen(5000, () => console.log('Server running'));
