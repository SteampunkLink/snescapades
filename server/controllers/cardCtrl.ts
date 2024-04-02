import { RequestHandler } from "express";
import allCards, { defaultCard } from "../data/cards";

// GET /api/cards
// returns the default card
export const returnDefaultCard: RequestHandler = (req, res, next) => {
  try {
    res.status(200).json(defaultCard);
  } catch (error) {
    next(error);
  }
};

// GET /api/cards/list
// returns the card ids
export const getCardIds: RequestHandler = (req, res, next) => {
  const gamesArr = [];
  const screensArr = [];
  try {
    for (let i = 0; i < allCards.length; i++) {
      gamesArr.push(allCards[i].cardGameTitle);
      let singleGameScreenArr = [];
      for (let j = 0; j < allCards[i].cards.length; j++) {
        const screenOjb = {
          value: allCards[i].cards[j].id,
          display: `Screen ${allCards[i].cards[j].screen} - ${allCards[i].cards[j].title}`,
        };
        singleGameScreenArr.push(screenOjb);
      }
      screensArr.push(singleGameScreenArr);
    }
    res.status(200).json({ gamesArr, screensArr });
  } catch (error) {
    next(error);
  }
};

interface getCardParams {
  cardId: string;
}

// GET /api/cards/:cardId
// returns a single card
export const getCard: RequestHandler<getCardParams, unknown, unknown, unknown> =
  (req, res, next) => {
    try {
      const index = req.params.cardId;
      if (!index) {
        throw new Error("Card not found");
      }
      if (index === "0000") {
        res.status(200).json(defaultCard);
      } else {
        const gameIdx = index.substring(0, 2);
        const selectedCardCategory = allCards.find(
          (cat) => cat.cardCategoryIndex === gameIdx
        );
        if (!selectedCardCategory) {
          throw new Error("Card not found");
        }
        const selectedCard = selectedCardCategory.cards.find(
          (card) => card.id === index
        );
        if (!selectedCard) {
          throw new Error("Card not found");
        }
        res.status(200).json(selectedCard);
      }
    } catch (error) {
      next(error);
    }
  };
