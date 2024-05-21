import {
  monthEnum,
  playingWithPowerAlt,
  snescapadesAlt,
  theWrapAlt,
} from "../../utils";

const snescapadesEps = [
  {
    episodeTitle: "Jurassic Park Edition",
    episodeNumber: 1,
    length: "1:18:38",
    published: new Date(2023, monthEnum.sep, 30),
    embedURL:
      "https://podcasters.spotify.com/pod/show/honest-piranha/embed/episodes/Jurassic-Park-Edition-e2agnb5",
    youtubeURL: "https://youtu.be/Vw1gSmGUbf8?si=AdAMdUM9RWqpiLqh",
    image: "001_JurassicPark.jpg",
    blog: "001_jurassic_park.md",
    games: [0, 1, 2],
    altText: snescapadesAlt(
      "1st",
      "Dr. Grant from Jurassic Park",
      '"Jurassic Park", "Pink Goes to Hollywood" and "The Lawnmower Man"'
    ),
    topics: [
      "It's season 2 now!",
      "Unintentionally uncomfortable stage names",
      "Ocean Software Ltd.",
    ],
    isPublished: true,
  },
  {
    episodeTitle: "Aladdin Edition",
    episodeNumber: 2,
    length: "55:19",
    published: new Date(2023, monthEnum.oct, 12),
    embedURL:
      "https://podcasters.spotify.com/pod/show/honest-piranha/embed/episodes/Aladdin-Edition-e2agpqj",
    youtubeURL: "https://youtu.be/FA5PMD0G6eA?si=IPkEx2lG3VCdbtKx",
    image: "002_Aladdin.jpg",
    blog: "002_aladdin.md",
    games: [3, 4, 5],
    altText: snescapadesAlt(
      "2nd",
      "Aladdin from Disney's Aladdin",
      '"Aladdin", "Robocop vs. Terminator" and "Total Carnage"'
    ),
    topics: ["Shinji Mikami"],
    isPublished: true,
  },
  {
    episodeTitle: "Clock Tower Edition",
    episodeNumber: 3,
    length: "1:09:18",
    published: new Date(2023, monthEnum.oct, 31),
    embedURL:
      "https://podcasters.spotify.com/pod/show/honest-piranha/embed/episodes/Clock-Tower-Edition-e2b9j0g",
    youtubeURL: "https://youtu.be/OEXWU-aYYN8?si=_AR07Oez5_kTkdEW",
    image: "003_ClockTower.jpg",
    blog: "003_clock_tower.md",
    games: [9],
    altText: snescapadesAlt("3rd", "Jennifer from Clock Tower", "Clock Tower"),
    topics: ["Spooky games on the SNES...", "...and the lack thereof"],
    isPublished: true,
  },
  {
    episodeTitle: "Clay Fighter Edition",
    episodeNumber: 4,
    length: "1:02:50",
    published: new Date(2024, monthEnum.jan, 4),
    embedURL:
      "https://podcasters.spotify.com/pod/show/honest-piranha/embed/episodes/Clay-Fighter-Edition-e2e0j3q",
    youtubeURL: "https://youtu.be/wNXP6QcbzKM?si=_TkcHxybePq0n9vR",
    image: "004_ClayFighter.jpg",
    blog: "004_clay_fighter.md",
    games: [6, 7, 8],
    altText: snescapadesAlt(
      "4th",
      "Bad Mr. Frosty from Clay Fighter",
      '"Clay Fighter", "Out to Lunch", "Ranma 1/2 Hard Battle"'
    ),
    topics: ["Why was Elvis a thing in the 90s?"],
    isPublished: true,
  },
  {
    episodeTitle: "The Wrap: November 1993",
    episodeNumber: 5,
    length: "1:03:29",
    published: new Date(2024, monthEnum.jan, 11),
    embedURL:
      "https://podcasters.spotify.com/pod/show/honest-piranha/embed/episodes/The-Wrap-November-93-e2eap44",
    youtubeURL: "https://youtu.be/fezm_an3OQU?si=Y-0QgIlN2iZdAaXE",
    image: "005_Wrap_Nov-93.jpg",
    blog: "005_wrap_nov_93.md",
    games: [30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43],
    altText: theWrapAlt("5th", "November 1993"),
    topics: [],
    isPublished: true,
  },
  {
    episodeTitle: "Playing with Power: August 1991",
    episodeNumber: 6,
    length: "1:09:40",
    published: new Date(2024, monthEnum.jan, 19),
    embedURL:
      "https://podcasters.spotify.com/pod/show/honest-piranha/embed/episodes/TPlaying-with-Power-August-1991-e2em5cd",
    youtubeURL: "https://youtu.be/Ue1u3YG2L3g?si=tmu59oJeMIvYQAdw",
    image: "006_PWP_Aug-91.jpg",
    blog: "006_pwp_aug_91.md",
    games: [],
    altText: playingWithPowerAlt("6th", "August 1991"),
    topics: [
      "Nintendo Power Volume 27",
      "Megaman on Game Boy",
      "Cool Ninja Gaiden art",
      "Perhaps the best Nester comic ever?",
      "The curious case of Bill & Ted's phone booth.",
      "No SNES in Canada (yet)",
      "Bio Force Ape",
    ],
    isPublished: true,
  },
  {
    episodeTitle: "Super Mario World Edition",
    episodeNumber: 7,
    length: "40:48",
    published: new Date(2024, monthEnum.jan, 25),
    embedURL:
      "https://podcasters.spotify.com/pod/show/honest-piranha/embed/episodes/Super-Mario-World-Edition-e2ev63m",
    youtubeURL: "https://youtu.be/lNXWPwhixUI",
    image: "007_SuperMarioWorld.jpg",
    blog: "007_super_mario_world.md",
    games: [10, 11],
    altText: snescapadesAlt(
      "7th",
      "Mario from Super Mario World",
      '"Super Mario World" and "F-Zero"'
    ),
    topics: ["The Yamauchi Family"],
    isPublished: true,
  },
  {
    episodeTitle: "SimCity Edition",
    episodeNumber: 8,
    length: "55:39",
    published: new Date(2024, monthEnum.feb, 1),
    embedURL:
      "https://podcasters.spotify.com/pod/show/honest-piranha/embed/episodes/SimCity-Edition-e2f8q9p",
    youtubeURL: "https://youtu.be/HkZefzU1s0I",
    image: "008_SimCity.jpg",
    blog: "008_simcity.md",
    games: [12, 13, 14],
    altText: snescapadesAlt(
      "8th",
      "Dr. Wright from SimCity",
      '"SimCity", "Gradius III", and "Pilotwings"'
    ),
    topics: ["Maxis and Early God/City Sims"],
    isPublished: true,
  },
  {
    episodeTitle: "Playing with Power: December 1993",
    episodeNumber: 9,
    length: "1:27:14",
    published: new Date(2024, monthEnum.feb, 8),
    embedURL:
      "https://podcasters.spotify.com/pod/show/honest-piranha/embed/episodes/Playing-with-Power-December-93-e2fhsl2",
    youtubeURL: "https://youtu.be/IlzLSSCJE3U",
    image: "009_PWP_Dec-93.jpg",
    blog: "009_pwp_dec_93.md",
    games: [],
    altText: playingWithPowerAlt("9th", "December 1993"),
    topics: [
      "Nintendo Power Volume 55",
      "Super Power Stamps",
      "Cool Megaman X poster",
      "Star Fox finishing the fight",
      "American-made Megaman bosses",
      "Raya Systems",
      "Tetris 2",
    ],
    isPublished: true,
  },
  {
    episodeTitle: "Battle Cars Edition",
    episodeNumber: 10,
    length: "58:17",
    published: new Date(2024, monthEnum.feb, 18),
    embedURL:
      "https://podcasters.spotify.com/pod/show/honest-piranha/embed/episodes/Battle-Cars-Edition-e2g0ruj",
    youtubeURL: "https://youtu.be/hVj05CX_LQ8",
    image: "010_BattleCars.jpg",
    blog: "010_battle_cars.md",
    games: [15, 16, 17],
    altText: snescapadesAlt(
      "10th",
      "a spikey car from Battle Cars",
      '"Battle Cars", "Super Chase H.Q.", "Super Nova"'
    ),
    topics: ["Micheal Kogan, founder of Titus"],
    isPublished: true,
  },
  {
    episodeTitle: "Inspector Gadget Edition",
    episodeNumber: 11,
    length: "49:35",
    published: new Date(2024, monthEnum.feb, 22),
    embedURL:
      "https://podcasters.spotify.com/pod/show/honest-piranha/embed/episodes/Inspector-Gadget-Edition-e2g6s23",
    youtubeURL: "https://youtu.be/FdUfuxUBK-E",
    image: "011_InspectorGadget.jpg",
    blog: "011_inspector_gadget.md",
    games: [18, 19, 20],
    altText: snescapadesAlt(
      "11th",
      "Inspector Gadget from Inspector Gadget",
      '"Inspector Gadget", "The Adventures of Dr. Franken", and "Jim Power"'
    ),
    topics: [],
    isPublished: true,
  },
  {
    episodeTitle: "TMNT: Tournament Fighters Edition",
    episodeNumber: 12,
    length: "51:15",
    published: new Date(2024, monthEnum.feb, 29),
    embedURL:
      "https://podcasters.spotify.com/pod/show/honest-piranha/embed/episodes/TMNT-Tournament-Fighters-Edition-e2gg5rt",
    youtubeURL: "https://youtu.be/cUxfjpk_bhM",
    image: "012_TMNTTournamentFighters.jpg",
    blog: "012_tmnt_tournament_fighters.md",
    games: [21, 22, 23],
    altText: snescapadesAlt(
      "12th",
      "Aksa from TMNT: Tournament Fighters",
      '"TMNT: Tournament Fighters", "Art of Fighting", and "Battle Blaze"'
    ),
    topics: ["Eikichi Kawasaki and SNK"],
    isPublished: true,
  },
  {
    episodeTitle: "Lufia and the Fortress of Doom Edition",
    episodeNumber: 13,
    length: "50:41",
    published: new Date(2024, monthEnum.mar, 8),
    embedURL:
      "https://podcasters.spotify.com/pod/show/honest-piranha/embed/episodes/Lufia--the-Fortress-of-Doom-Edition-e2gr8u9",
    youtubeURL: "https://youtu.be/J--FjnlkqJI",
    image: "013_Lufia.jpg",
    blog: "013_lufia.md",
    games: [24, 25, 26],
    altText: snescapadesAlt(
      "13th",
      "the main four party members from Lufia",
      '"Lufia and the Fortress of Doom", "Soldiers of Fortune", and "Metal Marines"'
    ),
    topics: [],
    isPublished: true,
  },
  {
    episodeTitle: "The Wrap: December 1993",
    episodeNumber: 14,
    length: "1:05:34",
    published: new Date(2024, monthEnum.mar, 14),
    embedURL:
      "https://podcasters.spotify.com/pod/show/honest-piranha/embed/episodes/The-Wrap-December-93-e2h4144",
    youtubeURL: "https://youtu.be/9OnfPLGSUsY",
    image: "014_Wrap_Dec-93.jpg",
    blog: "014_wrap_dec_93.md",
    games: [44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56],
    altText: theWrapAlt("14th", "December 1993"),
    topics: [],
    isPublished: true,
  },
  {
    episodeTitle: "Playing with Power: September 1991 (Part 1)",
    episodeNumber: 15,
    length: "57:52",
    published: new Date(2024, monthEnum.mar, 22),
    embedURL:
      "https://podcasters.spotify.com/pod/show/honest-piranha/embed/episodes/Playing-with-Power-September-1991-Part-1-e2hesji",
    youtubeURL: "https://youtu.be/pWp5DQiwRgo",
    image: "015_PWP_Sept-91.jpg",
    blog: "015_pwp_sept_91_1.md",
    games: [],
    altText: playingWithPowerAlt("15th", "September 1991"),
    topics: [
      "Nintendo Power Volume 28",
      "Super Mario World",
      "Unmasking a power animal",
      "Star Wars",
    ],
    isPublished: true,
  },
  {
    episodeTitle: "Playing with Power: September 1991 (Part 2)",
    episodeNumber: 16,
    length: "53:46",
    published: new Date(2024, monthEnum.mar, 28),
    embedURL:
      "https://podcasters.spotify.com/pod/show/honest-piranha/embed/episodes/Playing-with-Power-September-1991-Part-2-e2hn991",
    youtubeURL: "https://youtu.be/djpD_crcy_c",
    image: "016_PWP_Sept-91.jpg",
    blog: "016_pwp_sept_91_2.md",
    games: [],
    altText: playingWithPowerAlt("15th", "September 1991"),
    topics: [
      "Nintendo Power Volume 28",
      "American Gladiators",
      "Becomeing a master of kicking",
      "Badly drawn Final Fight characters",
      "Game Boy stuff",
      "A chat with Bart Simpson",
    ],
    isPublished: true,
  },
  {
    episodeTitle: "U.N. Squadron Edition",
    episodeNumber: 17,
    length: "45:36",
    published: new Date(2024, monthEnum.apr, 4),
    embedURL:
      "https://podcasters.spotify.com/pod/show/honest-piranha/embed/episodes/UN-Squadron-Edition-e2i1ajb",
    youtubeURL: "https://youtu.be/3ycw8ITRaro",
    image: "017_UNSquadron.jpg",
    blog: "017_un_squadron.md",
    games: [27, 28, 29],
    altText: snescapadesAlt(
      "17th",
      "the three selectable characters from UN Squadron",
      '"UN Squadron", "Super R-Type", and "Drakkhen"'
    ),
    topics: [],
    isPublished: true,
  },
  {
    episodeTitle: "The Wrap: September 1991",
    episodeNumber: 18,
    length: "51:00",
    published: new Date(2024, monthEnum.apr, 11),
    embedURL:
      "https://podcasters.spotify.com/pod/show/honest-piranha/embed/episodes/The-Wrap-September-1991-e2i9mq4",
    youtubeURL: "https://youtu.be/pz_y82TkunY",
    image: "018_Wrap_Sept-91.jpg",
    blog: "018_wrap_sept_91_1.md",
    games: [57, 58, 59, 60, 61, 62, 63],
    altText: theWrapAlt("18th", "September 1991"),
    topics: [],
    isPublished: true,
  },
  {
    episodeTitle: "Playing with Power: January 1994 (Part 1)",
    episodeNumber: 19,
    length: "1:08:54",
    published: new Date(2024, monthEnum.apr, 18),
    embedURL:
      "https://podcasters.spotify.com/pod/show/honest-piranha/embed/episodes/Playing-with-Power-January-1994-Part-1-e2ikhi8",
    youtubeURL: "https://youtu.be/LSIRV2BN0Ps",
    image: "019_PWP_Jan-94.jpg",
    blog: "019_pwp_jan_94_1.md",
    games: [],
    altText: playingWithPowerAlt("19th", "January 1994"),
    topics: [
      "Nintendo Power Volume 56",
      "Megaman X",
      "Cool drawings",
      "Flashback",
      "Claymates",
      "Soldiers of Fortune",
      "Ninja Turtles",
      "An adorable Mario vs. Wario comic",
      "Games that didn't make it stateside",
    ],
    isPublished: true,
  },
  {
    episodeTitle: "Playing with Power: January 1994 (Part 2)",
    episodeNumber: 20,
    length: "53:27",
    published: new Date(2024, monthEnum.apr, 25),
    embedURL:
      "https://podcasters.spotify.com/pod/show/honest-piranha/embed/episodes/Playing-with-Power-January-1994-Part-2-e2irogn",
    youtubeURL: "https://youtu.be/Hb19gXbVsBo",
    image: "020_PWP_Jan-94.jpg",
    blog: "020_pwp_jan_94_2.md",
    games: [],
    altText: playingWithPowerAlt("19th", "January 1994"),
    topics: [
      "Nintendo Power Volume 56",
      "Remember those Magic Eye books?",
      "Stuff about SNES music",
      "Batman",
      "More Ninja Turtles",
      "Pogs!",
    ],
    isPublished: true,
  },
  {
    episodeTitle: "SNEScapades Special: Megaman X with Trevor",
    episodeNumber: 21,
    length: "1:58:10",
    published: new Date(2024, monthEnum.may, 1),
    embedURL:
      "https://podcasters.spotify.com/pod/show/honest-piranha/embed/episodes/SNEScapades-Special-Megaman-X-with-Trevor-e2j2v4u",
    youtubeURL: "https://youtu.be/StbpVkmLF5E",
    image: "021_Special_Trevor_MMX.jpg",
    blog: "021_special_trevor_mmx.md",
    games: [64, 45, 65],
    altText: `${snescapadesAlt(
      "21st",
      "Mega Man X",
      "Metal Combat: Falcon's Revenge, Knights of the Round, and Mega Man X"
    )} This card also has the word "Special" writen in a starry font and at the bottom it reads "With Special Guest Trevor from Catching up on Cinema" along with the Catching Up on Cinema podcast logo.`,
    topics: [
      "With Special Guest Trevor, from the Catching Up on Cinema podcast!",
    ],
    isPublished: true,
  },
  {
    episodeTitle: "Skyblazer Edition",
    episodeNumber: 22,
    length: "57:06",
    published: new Date(2024, monthEnum.may, 9),
    embedURL:
      "https://podcasters.spotify.com/pod/show/honest-piranha/embed/episodes/Skyblazer-Edition-e2jfsas",
    youtubeURL: "https://youtu.be/e_4pTteTawg",
    image: "022_Skyblazer.jpg",
    blog: "022_skyblazer.md",
    games: [66, 67, 68],
    altText: snescapadesAlt(
      "22nd",
      "Sky, the protagonist of Skyblazer",
      '"Skyblazer", "Zool: Ninja of the Nth Dimension", and "Lester the Unlikely"'
    ),
    topics: ["Gremlin Graphics"],
    isPublished: true,
  },
  {
    episodeTitle: "The Wrap: January 94",
    episodeNumber: 23,
    length: "32:34",
    published: new Date(2024, monthEnum.may, 16),
    embedURL:
      "https://podcasters.spotify.com/pod/show/honest-piranha/embed/episodes/The-Wrap-January-1994-e2jnbh4",
    youtubeURL: "https://youtu.be/hrmcKFKbvCg",
    image: "023_Wrap_Jan-94.jpg",
    blog: "023_wrap_jan_94.md",
    games: [69, 70, 71, 72, 73, 74],
    altText: theWrapAlt("23rd", "January 1994"),
    topics: ["Extreme Entertainment Group"],
    isPublished: true,
  },
  {
    episodeTitle: "Playing with Power: October 1991",
    episodeNumber: 24,
    length: "1:01:45",
    published: new Date(2024, monthEnum.may, 23),
    embedURL:
      "https://podcasters.spotify.com/pod/show/honest-piranha/embed/episodes/",
    youtubeURL: "",
    image: "024_PWP_Oct_91.jpg",
    blog: "024_pwp_oct_91.md",
    games: [],
    altText: playingWithPowerAlt("24th", "October 1991"),
    topics: [
      "Boomers loved Dr. Mario",
      "F-Zero Lore is everywhere (except in the game.)",
      "Original Star Trek on Original Nintendo",
      "What is Zombie Nation?",
      "Shatterhand",
      "That guy from Murphy Brown!",
    ],
    isPublished: false,
  },
  {
    episodeTitle: "Playing with Power: November 1991",
    episodeNumber: 25,
    length: "1:01:09",
    published: new Date(2024, monthEnum.may, 30),
    embedURL:
      "https://podcasters.spotify.com/pod/show/honest-piranha/embed/episodes/",
    youtubeURL: "",
    image: "",
    blog: "",
    games: [],
    altText: playingWithPowerAlt("25th", "November 1991"),
    topics: [],
    isPublished: false,
  },
  // {
  //   episodeTitle: "Final Fantasy II Edition",
  //   episodeNumber: 26,
  //   length: "",
  //   published: ,
  //   embedURL: "https://podcasters.spotify.com/pod/show/honest-piranha/embed/episodes/",
  //   youtubeURL: ,
  //   image: ,
  //   blog: ,
  //   games: [],
  //   altText: ,
  //   topics: [],
  //   isPublished: false,
  // },
  // {
  //   episodeTitle: ,
  //   episodeNumber: ,
  //   length: ,
  //   published: ,
  //   embedURL: "https://podcasters.spotify.com/pod/show/honest-piranha/embed/episodes/",
  //   youtubeURL: ,
  //   image: ,
  //   blog: ,
  //   games: [],
  //   altText: ,
  //   topics: [],
  //   isPublished: false,
  // },
];

export default snescapadesEps;
