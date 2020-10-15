const express = require("express");
const app = express();
const authRoute = require("./routes/auth");
const mongoose = require("mongoose");
const postRoute = require("./routes/posts");

mongoose
    .connect("mongodb://localhost/auth", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("connected");
    });

app.use(express.json());
app.use("/api/user", authRoute);
app.use("/api/posts", postRoute);

app.listen(3000, () => {
    console.log("hello");
});
