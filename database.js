const mongoose = require("mongoose");
const uri =
  "mongodb+srv://admin:admin@cluster0.dvbdi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("connection succesful");
  })
  .catch((err) => console.log("no connection"));
