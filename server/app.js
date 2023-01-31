import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

import indexRoutes from './routes/index.routes.js';
import taskRoutes from './routes/tasks.routes.js';

const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(cors());
app.use(express.json());
app.use(morgan('tiny'));

app.use(indexRoutes);
app.use('/api', taskRoutes);
app.use(express.static(join(__dirname, '../client/dist')));

app.use((req, res, next) => {
  res.status(404).json({ message: 'Endpoint not found' });
});

export default app;