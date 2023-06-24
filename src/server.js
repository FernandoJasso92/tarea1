require('dotenv').config(); //configuro las env
const app = require('./app');
const { db } = require('./database/config');

//configuracion de la base de datos
db.authenticate()
  .then(() => console.log('Database authenticated... 🐢'))
  .catch((err) => console.log(err));

db.sync()
  .then(() => console.log('Database synced... 🦜'))
  .catch((err) => console.log(err));

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`server running on PORT ${PORT}...🐣`);
});
