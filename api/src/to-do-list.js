/*-----------------------------------------------------------------------------------------------------------------------------------------
  |  To do list ; by Pierrick DELRIEU, Kais ZEGHDOUD, Guillaume DUMAS, Méric CHENU                                                        |
  |                                                                                                                                       |           
  |---------------------------------------------------------------------------------------------------------------------------------------|*/
const express = require("express");
const res = require("express/lib/response");
const mysql = require("mysql");
const path = require("path");
bodyParser = require("body-parser");
const morgan = require("morgan")
const cors = require("cors")
const { sequelize } = require("./models")
const config = require("./config/config")



// Only requests coming from our front server will be accepted by the API
const corsOptions = {
    origin: 'http://localhost:8080'
}

const app = express();


app.use(morgan("combined"))

//Allow express to parse any json request sent in
app.use(bodyParser.json())
app.use(cors(corsOptions))

require('./routes')(app)

app.get("/", (req, res) => {
    res.send({
        message: "Hello"
    })
})
app.get("/status", (req, res) => {
    res.send({
        message: "status"
    })
})

sequelize.sync()
    .then(() => {

        app.listen(process.env.PORT || 8000)
        console.log(`Server started on port ${config.port}`)
    })
