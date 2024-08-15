const allGames = [
  {
    gameTitle: "Jurassic Park",
    manualURL: "https://archive.org/details/jurassic-park-usa-rev-1",
    mobyURL: "https://www.mobygames.com/game/38365/jurassic-park/",
    rank: "C",
  },
  {
    gameTitle: "Pink Goes to Hollywood",
    manualURL:
      "https://archive.org/details/pink-goes-to-hollywood-usa/mode/2up",
    mobyURL: "https://www.mobygames.com/game/141848/pink-goes-to-hollywood/",
    rank: "D",
  },
  {
    gameTitle: "The Lawnmower Man",
    manualURL: "https://archive.org/details/lawnmower-man-the-usa/mode/2up",
    mobyURL: "https://www.mobygames.com/game/20334/the-lawnmower-man/",
    rank: "C",
  },
  {
    gameTitle: "Disney's Aladdin",
    manualURL: "https://archive.org/details/disneys-aladdin-usa",
    mobyURL: "https://www.mobygames.com/game/43932/disneys-aladdin/",
    rank: "A",
  },
  {
    gameTitle: "Robocop vs. The Terminator",
    manualURL: "https://archive.org/details/robo-cop-versus-the-terminator-usa",
    mobyURL:
      "https://www.mobygames.com/game/10381/robocop-versus-the-terminator/",
    rank: "B",
  },
  {
    gameTitle: "Total Carnage",
    manualURL: "https://archive.org/details/total-carnage-usa",
    mobyURL: "https://www.mobygames.com/game/15506/total-carnage/",
    rank: "C",
  }, // 5
  {
    gameTitle: "Clay Fighter",
    manualURL: "https://archive.org/details/clay-fighter-usa",
    mobyURL: "https://www.mobygames.com/game/8630/clay-fighter/",
    rank: "D",
  },
  {
    gameTitle: "Out to Lunch",
    manualURL: "https://archive.org/details/out-to-lunch-usa/mode/2up",
    mobyURL:
      "https://www.mobygames.com/game/12837/pierre-le-chef-is-out-to-lunch/",
    rank: "C",
  },
  {
    gameTitle: "Ranma 1/2: Hard Battle",
    manualURL: "https://archive.org/details/ranma-1-2-hard-battle-usa",
    mobyURL: "https://www.mobygames.com/game/30977/ranma-12-hard-battle/",
    rank: "B",
  },
  {
    gameTitle: "Clock Tower",
    manualURL: "",
    mobyURL: "",
    rank: "A",
  },
  {
    gameTitle: "Super Mario World",
    manualURL: "https://archive.org/details/super-mario-world-usa",
    mobyURL: "https://www.mobygames.com/game/6591/super-mario-world/",
    rank: "A",
  }, //10
  {
    gameTitle: "F-Zero",
    manualURL: "https://archive.org/details/f-zero-usa",
    mobyURL: "https://www.mobygames.com/game/6630/f-zero/",
    rank: "A",
  },
  {
    gameTitle: "Gradius III",
    manualURL: "https://archive.org/details/gradius-iii-usa",
    mobyURL: "https://www.mobygames.com/game/12034/gradius-iii/",
    rank: "C",
  },
  {
    gameTitle: "Pilotwings",
    manualURL: "https://archive.org/details/pilotwings-usa",
    mobyURL: "https://www.mobygames.com/game/6632/pilotwings/",
    rank: "B",
  },
  {
    gameTitle: "SimCity",
    manualURL: "https://archive.org/details/sim-city-usa",
    mobyURL: "https://www.mobygames.com/game/848/simcity/",
    rank: "A",
  },
  {
    gameTitle: "Battle Cars",
    manualURL: "https://archive.org/details/battle-cars-usa",
    mobyURL: "https://www.mobygames.com/game/32593/battle-cars/",
    rank: "C",
  }, //15
  {
    gameTitle: "Super Chase H.Q.",
    manualURL: "https://archive.org/details/super-chase-h.-q-pal",
    mobyURL:
      "https://www.mobygames.com/game/13230/super-chase-criminal-termination/",
    rank: "D",
  },
  {
    gameTitle: "Super Nova",
    manualURL: "https://archive.org/details/super-nova-usa",
    mobyURL: "https://www.mobygames.com/game/10513/super-nova/",
    rank: "D",
  },
  {
    gameTitle: "The Adventures of Dr. Franken",
    manualURL: "https://archive.org/details/adventures-of-dr-franken-the-usa",
    mobyURL:
      "https://www.mobygames.com/game/9328/the-adventures-of-dr-franken/",
    rank: "F",
  },
  {
    gameTitle: "Jim Power: Lost Dimension in 3D",
    manualURL:
      "https://archive.org/details/jim-power-the-lost-dimension-in-3-d-usa/mode/2up",
    mobyURL:
      "https://www.mobygames.com/game/31047/jim-power-the-lost-dimension-in-3d/",
    rank: "F",
  },
  {
    gameTitle: "Inspector Gadget",
    manualURL: "https://archive.org/details/inspector-gadget-usa",
    mobyURL: "https://www.mobygames.com/game/21517/inspector-gadget/",
    rank: "B",
  }, //20
  {
    gameTitle: "Art of Fighting",
    manualURL: "https://archive.org/details/art-of-fighting-usa",
    mobyURL: "https://www.mobygames.com/game/13035/art-of-fighting/",
    rank: "A",
  },
  {
    gameTitle: "Battle Blaze",
    manualURL: "https://archive.org/details/battle-blaze-usa",
    mobyURL: "https://www.mobygames.com/game/27479/battle-blaze/",
    rank: "D",
  },
  {
    gameTitle: "TMNT: Tournament Fighters",
    manualURL:
      "https://archive.org/details/teenage-mutant-ninja-turtles-tournament-fighters-usa",
    mobyURL:
      "https://www.mobygames.com/game/31025/teenage-mutant-ninja-turtles-tournament-fighters/",
    rank: "A",
  },
  {
    gameTitle: "Metal Marines",
    manualURL: "https://archive.org/details/metal-marines-pal",
    mobyURL: "https://www.mobygames.com/game/4620/metal-marines/",
    rank: "C",
  },
  {
    gameTitle: "Soldiers of Fortune",
    manualURL: "https://archive.org/details/soldiers-of-fortune-usa",
    mobyURL: "https://www.mobygames.com/game/933/soldiers-of-fortune/",
    rank: "C",
  }, //25
  {
    gameTitle: "Lufia and the Fortress of Doom",
    manualURL: "https://archive.org/details/lufia-the-fortress-of-doom-usa",
    mobyURL: "https://www.mobygames.com/game/9980/lufia-the-fortress-of-doom/",
    rank: "B",
  },
  {
    gameTitle: "UN Squadron",
    manualURL: "https://archive.org/details/u.-n.-squadron-usa/mode/2up",
    mobyURL: "https://www.mobygames.com/game/8061/un-squadron/",
    rank: "A",
  },
  {
    gameTitle: "Super R-Type",
    manualURL: "https://archive.org/details/super-r-type-usa",
    mobyURL: "https://www.mobygames.com/game/7148/super-r-type/",
    rank: "B",
  },
  {
    gameTitle: "Drakkhen",
    manualURL: "https://archive.org/details/drakkhen-usa/mode/2up",
    mobyURL: "https://www.mobygames.com/game/1969/drakkhen/",
    rank: "D",
  },
  {
    gameTitle: "Championship Pool",
    manualURL: "https://archive.org/details/championship-pool-usa",
    mobyURL: "https://www.mobygames.com/game/32633/championship-pool/",
    rank: "D",
  }, //30
  {
    gameTitle: "Actraiser 2",
    manualURL: "https://archive.org/details/act-raiser-2-usa/mode/2up",
    mobyURL: "https://www.mobygames.com/game/6797/actraiser-2/",
    rank: "F",
  },
  {
    gameTitle: "BioMetal",
    manualURL: "https://archive.org/details/bio-metal-pal",
    mobyURL: "https://www.mobygames.com/game/18616/biometal/",
    rank: "C",
  },
  {
    gameTitle: "International Tennis Tour",
    manualURL:
      "https://archive.org/details/international-tennis-tour-pal/mode/2up",
    mobyURL: "https://www.mobygames.com/game/18298/davis-cup-tennis/",
    rank: "C",
  },
  {
    gameTitle: "Lamborghini American Challenge",
    manualURL:
      "https://archive.org/details/lamborghini-american-challenge-pal/mode/2up",
    mobyURL:
      "https://www.mobygames.com/game/783/lamborghini-american-challenge/",
    rank: "B",
  },
  {
    gameTitle: "NHL Stanley Cup",
    manualURL: "https://archive.org/details/nhl-stanley-cup-usa/mode/2up",
    mobyURL: "https://www.mobygames.com/game/18919/nhl-stanley-cup/",
    rank: "U",
  }, //35
  {
    gameTitle: "Steel Talons",
    manualURL: "https://archive.org/details/steel-talons-usa/mode/2up",
    mobyURL: "https://www.mobygames.com/game/23332/steel-talons/",
    rank: "C",
  },
  {
    gameTitle: "Super Battleship",
    manualURL: "https://archive.org/details/super-battleship-usa/mode/2up",
    mobyURL:
      "https://www.mobygames.com/game/40960/super-battleship-the-classic-naval-combat-game/",
    rank: "F",
  },
  {
    gameTitle: "Super Putty",
    manualURL: "https://archive.org/details/super-putty-usa/mode/2up",
    mobyURL: "https://www.mobygames.com/game/7697/putty/",
    rank: "D",
  },
  {
    gameTitle: "Terminator 2: Judgement Day",
    manualURL:
      "https://archive.org/details/terminator-2-judgment-day-eu/mode/2up",
    mobyURL:
      "https://www.mobygames.com/game/48822/t2-terminator-2-judgment-day/",
    rank: "F",
  },
  {
    gameTitle: "Tecmo Super Bowl",
    manualURL: "https://archive.org/details/tecmo-super-bowl-usa",
    mobyURL: "https://www.mobygames.com/game/16868/tecmo-super-bowl/",
    rank: "C",
  }, //40
  {
    gameTitle: "Time Slip",
    manualURL: "https://archive.org/details/time-slip-usa/mode/2up",
    mobyURL: "https://www.mobygames.com/game/40103/time-slip/",
    rank: "D",
  },
  {
    gameTitle: "Tony Meola's Sidekicks Soccer",
    manualURL: "https://archive.org/details/tony-meolas-sidekicks-soccer-usa",
    mobyURL:
      "https://www.mobygames.com/game/40681/tony-meolas-sidekicks-soccer/",
    rank: "U",
  },
  {
    gameTitle: "We're Back: A Dinosaur's Story",
    manualURL: "https://archive.org/details/were-back-a-dinosaurs-story-usa",
    mobyURL:
      "https://www.mobygames.com/game/38686/were-back-a-dinosaurs-story/",
    rank: "D",
  },
  {
    gameTitle: "Mario's Time Machine",
    manualURL:
      "https://archive.org/details/marios-time-machine-usa_202008/mode/2up",
    mobyURL: "https://www.mobygames.com/game/12156/marios-time-machine/",
    rank: "F",
  },
  {
    gameTitle: "Metal Combat: Falcon's Revenge",
    manualURL: "https://archive.org/details/metal-combat-falcons-revenge-usa",
    mobyURL:
      "https://www.mobygames.com/game/25705/metal-combat-falcons-revenge/",
    rank: "A",
  }, //45
  {
    gameTitle: "Beethoven: The Ultimate Canine Caper",
    manualURL:
      "https://archive.org/details/beethoven-the-ultimate-canine-caper-usa",
    mobyURL: "https://www.mobygames.com/game/32371/beethovens-2nd/",
    rank: "D",
  },
  {
    gameTitle: "World Soccer 94",
    manualURL: "https://archive.org/details/striker-pal/page/1/mode/2up",
    mobyURL: "https://www.mobygames.com/game/12380/striker/",
    rank: "U",
  },
  {
    gameTitle: "ABC Monday Night Football",
    manualURL: "https://archive.org/details/abc-monday-night-football-usa",
    mobyURL: "https://www.mobygames.com/game/66349/abc-monday-night-football/",
    rank: "U",
  },
  {
    gameTitle: "Barbie Super Model",
    manualURL: "https://archive.org/details/barbie-super-model-usa",
    mobyURL: "https://www.mobygames.com/game/20584/barbie-super-model/",
    rank: "C",
  },
  {
    gameTitle: "Dig and Spike Volleyball",
    manualURL: "https://archive.org/details/dig-spike-volleyball-usa/mode/2up",
    mobyURL: "https://www.mobygames.com/game/39885/dig-spike-volleyball/",
    rank: "D",
  }, //50
  {
    gameTitle: "Dennis the Menace",
    manualURL: "https://archive.org/details/dennis-the-menace-usa",
    mobyURL: "https://www.mobygames.com/game/13239/dennis-the-menace/",
    rank: "F",
  },
  {
    gameTitle: "F1 Pole Position",
    manualURL: "https://archive.org/details/f-1-pole-position-usa",
    mobyURL: "https://www.mobygames.com/game/44675/f1-pole-position/",
    rank: "U",
  },
  {
    gameTitle: "Genghis Khan 2: Clan of the Grey Wolf",
    manualURL:
      "https://archive.org/details/genghis-khan-2-clan-of-the-grey-wolf-usa",
    mobyURL:
      "https://www.mobygames.com/game/1927/genghis-khan-ii-clan-of-the-gray-wolf/",
    rank: "U",
  },
  {
    gameTitle: "Nobunaga's Ambition",
    manualURL:
      "https://archive.org/details/nobunagas-ambition-usa/page/n1/mode/2up",
    mobyURL: "https://www.mobygames.com/game/5825/nobunagas-ambition/",
    rank: "U",
  },
  {
    gameTitle: "Romance of the Three Kingdoms III",
    manualURL:
      "https://archive.org/details/romance-of-the-three-kingdoms-iii-dragon-of-destiny-usa",
    mobyURL:
      "https://www.mobygames.com/game/1928/romance-of-the-three-kingdoms-iii-dragon-of-destiny/",
    rank: "U",
  }, //55
  {
    gameTitle: "Side Pocket",
    manualURL: "https://archive.org/details/side-pocket-usa",
    mobyURL:
      "https://www.mobygames.com/game/17479/side-pocket/credits/nes/?autoplatform=true",
    rank: "C",
  },
  {
    gameTitle: "Populous",
    manualURL: "https://archive.org/details/populous-usa",
    mobyURL: "https://www.mobygames.com/game/613/populous/",
    rank: "D",
  },
  {
    gameTitle: "Super Bases Loaded",
    manualURL: "https://archive.org/details/super-bases-loaded-usa",
    mobyURL: "https://www.mobygames.com/game/50309/super-bases-loaded/",
    rank: "U",
  },
  {
    gameTitle: "The Chessmaster",
    manualURL: "https://archive.org/details/chessmaster-the-usa",
    mobyURL: "https://www.mobygames.com/game/32636/the-chessmaster/",
    rank: "F",
  },
  {
    gameTitle: "HyperZone",
    manualURL: "https://archive.org/details/hyperzone-usa",
    mobyURL: "https://www.mobygames.com/game/25327/hyperzone/",
    rank: "D",
  }, //60
  {
    gameTitle: "Hal's Hole-in-One",
    manualURL: "https://archive.org/details/hals-hole-in-one-golf-usa/mode/2up",
    mobyURL: "https://www.mobygames.com/game/18648/hole-in-one/",
    rank: "U",
  },
  {
    gameTitle: "Final Fight",
    manualURL: "https://archive.org/details/final-fight-usa",
    mobyURL: "https://www.mobygames.com/game/9836/final-fight/",
    rank: "D",
  },
  {
    gameTitle: "Ultraman: Towards the Future",
    manualURL: "https://archive.org/details/ultraman-towards-the-future-usa",
    mobyURL: "https://www.mobygames.com/game/44344/ultraman/",
    rank: "F",
  },
  {
    gameTitle: "Knights of the Round",
    manualURL: "https://archive.org/details/knights-of-the-round-usa",
    mobyURL: "https://www.mobygames.com/game/13449/knights-of-the-round/",
    rank: "",
  },
  {
    gameTitle: "Mega Man X",
    manualURL: "https://archive.org/details/mega-man-x-usa-rev-1",
    mobyURL: "https://www.mobygames.com/game/1334/mega-man-x/",
    rank: "A",
  }, // 65
  {
    gameTitle: "Zool: Ninja of the Nth Dimension",
    manualURL:
      "https://archive.org/details/zool-ninja-of-the-nth-dimension-usa",
    mobyUrl: "https://www.mobygames.com/game/5776/zool/",
    rank: "D",
  },
  {
    gameTitle: "Lester the Unlikely",
    manualURL: "https://archive.org/details/lester-the-unlikeley-usa/mode/2up",
    mobyURL: "https://www.mobygames.com/game/11666/lester-the-unlikely/",
    rank: "C",
  },
  {
    gameTitle: "Skyblazer",
    manualURL: "https://archive.org/details/sky-blazer-usa/mode/2up",
    mobyURL: "https://www.mobygames.com/game/10512/skyblazer/",
    rank: "A",
  },
  {
    gameTitle: "Riddick Bowe Boxing",
    manualURL: "https://archive.org/details/riddick-bowe-boxing-usa",
    mobyURL: "https://www.mobygames.com/game/32596/riddick-bowe-boxing/",
    rank: "U",
  },
  {
    gameTitle: "Brett Hull Hockey",
    manualURL: "https://archive.org/details/brett-hull-hockey-usa",
    mobyURL: "https://www.mobygames.com/game/39886/brett-hull-hockey/",
    rank: "U",
  }, // 70
  {
    gameTitle: "Choplifter III",
    manualURL: "https://archive.org/details/choplifter-iii-usa/mode/2up",
    mobyURL:
      "https://www.mobygames.com/game/17678/choplifter-iii-rescue-survive/",
    rank: "C",
  },
  {
    gameTitle: "Super Battletank 2",
    manualURL: "https://archive.org/details/super-battletank-2-usa",
    mobyURL: "https://www.mobygames.com/game/40117/super-battletank-2/",
    rank: "F",
  },
  {
    gameTitle: "Super Solitaire",
    manualURL: "https://archive.org/details/super-solitaire-usa",
    mobyURL: "https://www.mobygames.com/game/32615/super-solitaire/",
    rank: "F",
  },
  {
    gameTitle: "Lethal Enforcers",
    manualURL: "https://archive.org/details/lethal-enforcers-usa",
    mobyURL: "https://www.mobygames.com/game/15901/lethal-enforcers/",
    rank: "F",
  },
  {
    gameTitle: "Final Fantasy II",
    manualURL: "https://archive.org/details/final-fantasy-ii-usa-rev-1",
    mobyURL: "https://www.mobygames.com/game/4572/final-fantasy-ii/",
    rank: "A",
  }, // 75
  {
    gameTitle: "Darius Twin",
    manualURL: "https://archive.org/details/darius-twin-usa",
    mobyURL: "https://www.mobygames.com/game/17484/darius-twin/",
    rank: "B",
  },
  {
    gameTitle: "ActRaiser",
    manualURL: "https://archive.org/details/act-raiser-usa/mode/2up",
    mobyURL: "https://www.mobygames.com/game/6704/actraiser/",
    rank: "A",
  },
  {
    gameTitle: "Super Ghouls N' Ghosts",
    manualURL: "https://archive.org/details/super-ghoulsn-ghosts-usa",
    mobyURL: "https://www.mobygames.com/game/6730/super-ghouls-n-ghosts/",
    rank: "F",
  },
  {
    gameTitle: "Bill Laimbeer's Combat Basketball",
    manualURL:
      "https://archive.org/details/bill-lambeers-combat-basketball-usa",
    mobyURL:
      "https://www.mobygames.com/game/15686/bill-laimbeers-combat-basketball/",
    rank: "F",
  },
  {
    gameTitle: "John Madden Football",
    manualURL: "https://archive.org/details/john-madden-football-usa",
    mobyURL: "https://www.mobygames.com/game/14459/john-madden-football-92/",
    rank: "U",
  }, // 80
  {
    gameTitle: "Paperboy 2",
    manualURL: "https://archive.org/details/paperboy-2-usa",
    mobyURL: "https://www.mobygames.com/game/4020/paperboy-2/",
    rank: "D",
  },
  {
    gameTitle: "RPM Racing",
    manualURL: "https://archive.org/details/r.-p.-m.-racing-usa",
    mobyURL: "https://www.mobygames.com/game/36226/rpm-racing/",
    rank: "F",
  },
  {
    gameTitle: "Super Tennis",
    manualURL: "https://archive.org/details/super-tennis-usa",
    mobyURL: "https://www.mobygames.com/game/6596/super-tennis/",
    rank: "D",
  },
  {
    gameTitle: "True Golf Classics: Waialae",
    manualURL:
      "https://archive.org/details/true-golf-classics-waialae-country-club-usa",
    mobyURL:
      "https://www.mobygames.com/game/26665/true-golf-classics-waialae-country-club/",
    rank: "C",
  },
  // {
  //   gameTitle: ,
  //   manualURL: ,
  //   mobyURL: ,
  //   rank: ,
  // }, // 85
];

export default allGames;
