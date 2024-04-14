const express = require("express");
const app = express()
const path = require("path")
const {sequelize} = require('./models')
const RootRouters = require('./routers')
const cors = require('cors');
require('dotenv').config()

// setup app using json
app.use(express.json());

// Enable CORS for all routes
app.use(cors());

// // Apply rate limiting middleware
// const limiter = rateLimit({
//   windowMs: 10 * 60 * 2000, // 10 minutes
//   max: 2000, // Limit each IP to 100 requests per window (15 minutes)
//   // Other options like custom headers can be configured here
// });
// app.use(limiter);



// set up router
app.use('/api/v1/films',RootRouters)

const publicPathhDirectory = path.join(__dirname,"./public")
app.use("/public",express.static(publicPathhDirectory))

const port = 4000;
app.listen(port,async ()=>{
    console.log(`App listen on port localhost ${port}`);
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
})


