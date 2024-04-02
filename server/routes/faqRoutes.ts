import express from "express";
import allFaqs from "../data/faqs";

const router = express.Router();

// GET /api/faqs
// gets all faqs
router.get("/", (req, res) => {
  res.status(200).json(allFaqs);
});

export default router;
