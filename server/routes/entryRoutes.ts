import express from "express";
import {
  getAllEntries,
  getOneSeries,
  getSeriesIndex,
  getOneEntry,
} from "../controllers/entryCtrl";

const router = express.Router();

router.get("/", getAllEntries);
router.get("/series/:series", getOneSeries);
router.get("/episode/:series/:epNum", getOneEntry);
router.get("/series", getSeriesIndex);

export default router;
