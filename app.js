const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config(); 

const apiRouter = require("./backend/router/api"); 
const bodyParser = require("body-parser");
const PORT = process.env.PORT ;

app.use(bodyParser.json()); 
app.use(express.json());    
app.use(cors());           
app.use("/api", apiRouter);
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

