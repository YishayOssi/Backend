import express from "express";
import cors from 'cors';
import { CHECKPOINT_STATUS, INITIAL_MESSAGES } from "./data.js";
import { checkUserAndCreateToken, checkToken} from "./token.js";

const app = express();
const port = 3010;
app.use(cors());
app.use(express.json());


// middleware
app.use("/", (req, res, next) => {
  console.log(req.method, req.url);
  next();
});



app.post("/api/login", (req, res) => {
    const username = req.body.username
    const password = req.body.password;
    const result = checkUserAndCreateToken(username, password)

    if (!result) {
        return res.status(401).json({ message: "Unauthorized" });
    }
    res.json({token: result.token, operator: result.operator});
});


app.get("/api/status", checkToken, (req, res) => {
    res.send(CHECKPOINT_STATUS)
});


app.get("/api/messages", checkToken, (req, res) => {
    res.send(INITIAL_MESSAGES)
});


app.post("/api/messages", checkToken, (req, res) => {
    INITIAL_MESSAGES.push(req.body)
    res.send("new message...")
});







app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
