// const cookieSession = require('cookie-session');
const Express = require('express');
const App = Express();
const BodyParser = require('body-parser');
const path = require('path');
const PORT = process.env.PORT || 8080;

// Make sure we get proper information
App.use(BodyParser.urlencoded({ extended: false }));
App.use(BodyParser.json());

App.use(Express.static(path.join(__dirname, '../frontend/build')))


const feedingRoutes = require('./routes/feedings');

App.use('/api/feedings', feedingRoutes);

// Sample GET route
// App.get('/api/data', (req, res) => res.json({
//   message: "Seems to work!",
// }));

App.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/../frontend/build/index.html'))
})


App.listen(PORT, () => { 
  // eslint-disable-next-line no-console
  console.log(`Express seems to be listening on port ${PORT} so that's pretty good 👍`);
});