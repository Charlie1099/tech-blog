const express = require("express");

const routes = require("./controllers")

//adding handlebars
const exphbs = require("express-handlebars");
const hbs = exphbs.create({});



const app = express();
const PORT = process.env.PORT || 3001;

const sequelize = require("./config/connection")
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//turns on routes
app.use(routes);

// turn on connetion to db and server
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log("Now listening"))
});

