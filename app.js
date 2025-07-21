import express from 'express';
import {PORT} from "./env.js";
import path from "path";

const app = express();

const staticPath = path.join(import.meta.dirname, "public");
app.use(express.static(staticPath))

app.get("/", (req, res) => {
   const homepage = path.join(import.meta.dirname, "public", "index.html")
   res.sendFile(homepage);
})

app.get("/logo", (req, res) => {
   const homepage = path.join(import.meta.dirname, "public", "image.jpeg");
   res.sendFile(homepage);
})



app.listen(PORT, () => {
    console.log(`Your server with port ${PORT} is running!`);
})