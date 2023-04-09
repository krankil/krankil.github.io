const express = require("express");

const app = express();
app.get("/", (req, res) => {
    res.send('<p>Hello Nero</p>');
});
app.listen(3000);
