const mongoose = require("mongoose");

// const USER_PASSWORD = w3aqnke8V5hHJreQ;

const connectToDb = () => {
  mongoose
    .connect(process.env.DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("mongoDB Atlas Conectado!"))
    .catch((err) => console.log(err));
};

module.exports = connectToDb;
