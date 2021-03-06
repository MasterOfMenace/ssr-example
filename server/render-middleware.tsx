import {Request, Response} from 'express';
import React from 'react';
import {App} from '../src/App';
import {renderToString} from 'react-dom/server';

const getHtml = (reactHtml: string, script: string) => {
  return `
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <meta http-equiv="X-UA-Compatible" content="ie=edge">
          <title>Amazing React Application</title>
      </head>
      <body>
          <div id="root">${reactHtml}</div>
          <script src="/${script}"></script>
      </body>
      </html>
  `;
};

export default (req: Request, res: Response) => {
  const jsx = <App />;
  const reactHtml = renderToString(jsx);
  const html = getHtml(reactHtml, 'client.js');

  res.status(200).send(html);
};
