const express = require('express');
const next = require('next');
const compression = require('compression');
const path = require('path');

const routes = require('./routes');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dir: __dirname, dev });
const handle = app.getRequestHandler();
const handlerForCustomRoutes = routes.getRequestHandler(app);

const DEFAULT_PORT = 3000;
const port = process.env.PORT || DEFAULT_PORT;

app.prepare().
  then(() => {
    const server = express();

    server.use(compression());

    server.use('/assets/locales', express.static(path.join(__dirname, '/assets/locales')));
    server.get('/api/v1/flats', (req, res) => {
      const generator = require('./mocks/flatListGenerator.js');

      res.status(200).json(generator.generate(req.query.to || Number('5')));
    });
    server.use(handlerForCustomRoutes);

    server.get('*', (req, res) => handle(req, res));

    server.listen(port, (err) => {
      if (err) throw err;
      console.info(`> Ready on http://localhost:${port}`);
    });

    return server;
  }).
  catch((ex) => {
    console.error(ex.stack);
    throw ex.stack;
  });

module.exports = app;
