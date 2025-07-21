import express from 'express';
import {PORT} from "./env.js";
import path from "path";

const app = express();

const staticPath = path.join(import.meta.dirname, "public");
app.use("/",express.static(staticPath))

app.get("/profile/:userid", (req, res) => {
   console.log(req.params);
   res.send(`<h1>My name is ${req.params.userid}<h1>`);
})

app.get("/logo", (req, res) => {
   const homepage = path.join(import.meta.dirname, "public", "image.jpeg");
   res.sendFile(homepage);
})



app.listen(PORT, () => {
    console.log(`Your server with port ${PORT} is running!`);
})