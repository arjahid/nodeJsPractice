const express = require("express");
const app = express();
const port = 6455;

const middleware = (req, res, next) => {
    console.log("I am middleware");
    next();
};

app.get('/', middleware, (req, res) => {
    res.send("Hi, this is Jahid Hasan");
});

app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
});
