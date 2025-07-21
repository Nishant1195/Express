import express from 'express';
import {PORT} from "./env.js";
import path from "path";
import { log } from 'console';

const app = express();

const staticPath = path.join(import.meta.dirname, "public");
app.use("/",express.static(staticPath))

app.get("/profile/:username/article/:slug", (req, res) => {
   console.log(req.params);
   const formatedSlug = req.params.slug.replace("-", " ");
   res.send(`<h1>My name is ${req.params.username} and my article is ${formatedSlug}<h1>`);
})

app.get("/logo", (req, res) => {
   const homepage = path.join(import.meta.dirname, "public", "image.jpeg");
   res.sendFile(homepage);
})

app.get("/product", (req,res) => {
    console.log(req.query);
    res.send(`Searched product is ${req.query.search} & ${req.query.result}`);
})

// app.get("/message", (req, res) => {
//     console.log(req.query);
//     res.redirect("/");
// })
app.use(express.urlencoded({extended:true}));

app.post("/message", (req, res) => {
    console.log(req.body);
    res.redirect("/");
})

app.listen(PORT, () => {
    console.log(`Your server with port ${PORT} is running!`);
})