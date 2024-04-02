import { marioCards } from "./cards/superMario";
import { mario2Cards } from "./cards/superMario2";
import { zeldaCards } from "./cards/zelda";
import { zelda2Cards } from "./cards/zelda2";

export const defaultCard = {
  id: "0000",
  game: "",
  title: "",
  screen: 0,
  type: "long",
  directory: "mario",
  directions: [],
  pictures: [],
  groups: [],
  locations: [],
};

const allCards = [
  {
    cardCategoryIndex: "m1",
    cardGameTitle: "Super Mario Bros.",
    cards: marioCards,
  },
  {
    cardCategoryIndex: "m2",
    cardGameTitle: "Super Mario Bros. 2",
    cards: mario2Cards,
  },
  {
    cardCategoryIndex: "z1",
    cardGameTitle: "The Legend of Zelda",
    cards: zeldaCards,
  },
  {
    cardCategoryIndex: "z2",
    cardGameTitle: "Zelda 2: The Adventures of Link",
    cards: zelda2Cards,
  },
];

export default allCards;
