import express from 'express';
import path from 'path';
import render from './render-middleware';

const app = express();

app.use(express.static(path.resolve(__dirname, '../')));

app.use(render);

export {app};
