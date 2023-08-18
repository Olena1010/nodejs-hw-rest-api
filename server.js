const mongoose = require('mongoose');
const app = require('./app')


const DB_HOST = "mongodb+srv://Olena:WrP8c9nbLC7EmwFx@cluster0.82qjtoe.mongodb.net/db-contacts?retryWrites=true&w=majority"

mongoose.set('strictQuery', true);

mongoose.connect(DB_HOST)
  .then(() => {
    app.listen(3000)
  })
  .catch(error => {
    console.log(error.message);
    process.exit(1);
  });


// app.listen(3000, () => {
//   console.log("Server running. Use our API on port: 3000")
// })
// WrP8c9nbLC7EmwFx
// const DB_HOST = "mongodb+srv://Olena:WrP8c9nbLC7EmwFx@cluster0.82qjtoe.mongodb.net/db-contacts?retryWrites=true&w=majority"