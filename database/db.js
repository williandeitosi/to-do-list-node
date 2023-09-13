const mongoose = require("mongoose");

// const USER_PASSWORD = w3aqnke8V5hHJreQ;

const connectToDb = () => {
  mongoose
    .connect(`mongodb+srv://williandeitosi:w3aqnke8V5hHJreQ@todolist.bwcydbz.mongodb.net/?retryWrites=true&w=majority`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("mongoDB Atlas Conectado!"))
    .catch((err) => console.log(err));
};

module.exports = connectToDb;
