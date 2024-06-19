import express from "express";
import { voteRepository } from "./Repository.js";

export const router=express.Router();

router.post("/questions/create", voteRepository.createQuestion);

router.post("/questions/:id/options/create",voteRepository.createOption);

router.post("/questions/:id/delete", voteRepository.DeleteQuestion);

router.post("/options/:id/delete", voteRepository.DeleteOption);

router.post("/options/:id/add_vote", voteRepository.AddVote);

router.post("/questions/:id",voteRepository.ViewQuestion);


