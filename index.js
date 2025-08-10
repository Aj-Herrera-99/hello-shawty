import "dotenv/config";
import express from "express";

const app = express();

app.use(express.static("public"));

app.get("/api/test", (req, res) => {
    res.send({ response: "Shawty, your testing is successful" });
});

const hostname = process.env.HOSTNAME || "127.0.0.1";
const port = process.env.PORT || 3000;
app.listen(port, hostname, () => {
    console.log("Server ascolta sulla porta: " + port);
    console.log(`URL: http://${hostname}:${port}/`);
});
