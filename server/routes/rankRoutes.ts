import express, { RequestHandler } from "express";
import allRanks from "../data/ranks";

const router = express.Router();

// GET /api/ranks?rank=:rank
// gets all rank lists
const getRanks: RequestHandler = (req, res, next) => {
  try {
    res.status(200).json(allRanks);
  } catch (error) {
    next(error);
  }
};

router.get("/", getRanks);

export default router;
