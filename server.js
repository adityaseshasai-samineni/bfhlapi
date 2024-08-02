let express = require('express');
let bodyparser = require('body-parser');
let cors = require('cors');
let app = express();

app.use(bodyparser.json());

app.use(bodyparser.urlencoded({ extended: false }));
app.use(cors());
let port = process.env.PORT || 8080;
let back = require('./back/back');
app.use("/", back);
app.listen(port, () => {
    console.log("Server listening port no:- ", port);
});
