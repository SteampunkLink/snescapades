import express from "express";
import {
  getCardIds,
  getCard,
  returnDefaultCard,
} from "../controllers/cardCtrl";

const router = express.Router();

router.get("/", returnDefaultCard);
router.get("/list", getCardIds);
router.get("/:cardId", getCard);

export default router;
