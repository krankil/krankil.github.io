import express from "express";

const app = express();
app.get("/", (req, res) => {
    res.send('<p>Hello Rassu</p>');
});
app.listen(3000);
