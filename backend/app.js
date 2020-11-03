var express = require("express");
var app = express();

function randomInteger(min, max) {
   return Math.floor(Math.random() * (max - min + 1)) + min;

}

app.get("/pi/", (req, res, next) => {

    let piCalc = Math.PI.toFixed(randomInteger(1, req.query.random_limit));
    res.send("PiCalc: "  + piCalc);
    
    
});



app.listen(3000, () => {
 console.log("Server running on port 3000");
});

exports.randomInteger = randomInteger;