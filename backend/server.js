// const cookieSession = require('cookie-session');
const Express = require('express');
const App = Express();
// const BodyParser = require('body-parser');
const path = require('path');
const PORT = process.env.PORT || 8080;

App.listen(PORT, () => { 
  // eslint-disable-next-line no-console
  console.log(`Express seems to be listening on port ${PORT} so that's pretty good 👍`);
});
