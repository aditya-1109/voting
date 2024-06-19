import express from "express";
import { router } from "./Router.js";
import mongoose from "mongoose";
const app=express();
app.use(express.json());

const dbConnect=mongoose.connect("mongodb://localhost:27017/Vote");

app.use("/api", router );

app.listen(3000);
console.log("app is listening at 3000");
dbConnect;