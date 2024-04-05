import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import userRoute from "./routes/userRoute.js";

dotenv.config({
    path: "./.env",
});

const app = express();

const port = process.env.PORT || 5000;

app.use("/user", userRoute);

app.listen(port, () => {
    console.log(`Server is running on port ${port} in Mode`.bgCyan.white);
});