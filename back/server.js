const express = require("express");
const router = require("./routes");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(cors());

app.use(router);

app.listen(4000,()=>console.log("server starting at https://localhost:4000"))