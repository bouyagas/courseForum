const server = require('./server/server');
const port = process.env.port || process.env.argv || 3000;
server.listen(port, () => {
  console.log(`=====> 🌎 Listening on http//localhost:${port}`);
});
