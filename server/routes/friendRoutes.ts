import express from "express";
import allFriends from "../data/friends";

const router = express.Router();

// GET /api/friends
// gets all friends
router.get("/", (req, res) => {
  const friends = allFriends.filter((friend) => !!friend.url);
  res.status(200).json(friends);
});

export default router;
