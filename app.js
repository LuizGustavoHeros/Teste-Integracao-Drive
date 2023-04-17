const express = require("express");
const cors = require("cors");
const uploadRouter = require('./src/routes/routerUpload')
const app = express();

app.get('/', (_, res) => {
    res.sendFile(`${__dirname}/index.html`);
  });


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(uploadRouter);

const conn = require("./src/config/dbConnect");
conn();

const routes = require("./src/routes/index")

app.use("/api", routes);

app.listen(3000, () => {
    console.log("Servidor online!!!!");
})