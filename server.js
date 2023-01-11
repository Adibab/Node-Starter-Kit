const { response } = require("express");
const express = require("express");
const { request } = require("http");
const path = require("path");
const logger = require("./middleware/logger");
const router = require("./router/api/rappers");
const { route } = require("./router/api/rappers");
const bodyParser = require("body-parser");

const app = express();

app.listen(3000, function () {
  console.log("Server is listening on port 3000. Ready to accept requests!");
});

// init middleware
app.use(logger);

// to get static folder
// public is the folder name
// app.use((express.static(path.join(__dirname, "public"))))



// body parser middleware. The urlencoded method within body-parser tells body-parser to extract data from the <form> </form> element and add them to the body property in the request object.

app.use(express.json())
app.use(express.urlencoded({ extended: false  }))  
// app.use(bodyParser.urlencoded({extended: true}))
 

app.use("/api/rappers", require("./router/api/rappers"));







// req is the Request object, res is the Response object
// (these are just variable names, they can be anything but it's a convention to call them req and res)
app.get("/", function (req, res) {
  console.log(req);
  res.sendFile(__dirname + "/index.html");
});



