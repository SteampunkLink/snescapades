const allRanks = {
  A: [
    "Legend of Zelda: A Link to the Past",
    "Super Mario All-Stars",
    "Street Fighter II Turbo",
    "Super Castlevania IV",
    "TMNT IV: Turtles in Time",
    "Zombies Ate My Neighbors",
    "Soul Blazer",
    "The Lost Vikings",
    "Final Fantasy II",
    "Run Saber",
    "Out of this World",
    "Pocky & Rocky",
    "Space Megaforce",
    "Actraiser",
    "UN Squadron",
    "Super Mario Kart",
    "Cybernator",
    "Rock N' Roll Racing",
    "Top Gear 2",
    "Top Gear",
    "Star Fox",
    "Cool Spot",
    "Sunset Riders",
    "Lemmings",
    "Hook",
    "Goof Troop",
    "Super Off-Road",
    "Mario Paint",
    "Contra III",
    "Alien 3",
    "SimCity",
    "7th Saga",
    "Final FIght 2",
    "F-Zero",
    "Disney's Aladdin",
    "Super Mario World",
    "Clock Tower",
    "TMNT: Tournament Fighters",
    "Art of Fighting",
    "Metal Combat: Falcon's Revenge",
    "Mega Man X",
    "Skyblazer",
  ],
  B: [
    "BlaZeon The Bio-Cyborg Challenge",
    "Tiny Toons Buster Busts Loose",
    "The Magical Quest Starring Mickey Mouse",
    "Darius Twin",
    "Legend of the Mystical Ninja",
    "Yoshi's Cookie",
    "First Samurai",
    "B.O.B.",
    "Spanky’s Quest",
    "NCAA Basketball",
    "Tecmo Super NBA Basketball",
    "NHL 94",
    "Super Off-Road The Baja",
    "Rival Turf!",
    "Sonic Blast Man",
    "ShadowRun",
    "EVO: Search for Eden",
    "Addams Family",
    "Congo's Caper",
    "Axelay",
    "Musya",
    "Super Star Wars",
    "Irem Skins Game",
    "King of the Monsters",
    "On The Ball",
    "Super Double Dragon",
    "Push-Over",
    "Rocky Rodent",
    "Plok!",
    "Super Baseball Sim 1.000",
    "Super Turrican",
    "Tuff E Nuff",
    "World Heroes",
    "SimAnt",
    "Secret of Mana",
    "Ren & Stimpy: Veediots",
    "Troddlers",
    "Robocop Vs. Terminator",
    "Ranma 1/2 Hard Battle",
    "Pilotwings",
    "Inspector Gadget",
    "Lufia & the Fortress of Doom",
    "Super R-Type",
    "Ardy Lightfoot",
    "The Ninjawarriors",
  ],
  C: [
    "Ys III: Wanderers from Ys",
    "Super Buster Bros.",
    "Joe & Mac",
    "Magic Sword",
    "Dinocity",
    "Super Bomberman",
    "Rampart",
    "Operation Logic Bomb",
    "Batman Returns",
    "Hit the Ice",
    "Super Smash TV",
    "Imperium",
    "Desert Strike: Return to the Gulf",
    "Final Fantasy Mystic Quest",
    "Krusty’s Super Fun House",
    "Harley's Humongous Adventure",
    "Spiderman and the X-Men: Arcade’s Revenge",
    "Arcana",
    "Super James Pond",
    "Strike Gunner STG",
    "Super Bowling",
    "Aerobiz",
    "Super Conflict",
    "Where in Time is Carmen Sandiego",
    "Super Valis IV",
    "True Golf Classics: Pebble Beach",
    "Firepower 2000",
    "True Golf Classics: Waialai",
    "WWF Royal Rumble",
    "Super Black Bass",
    "Smart Ball",
    "Extra Innings",
    "Uncharted Waters",
    "Wing Commander",
    "Wing Commander: The Secret Missions",
    "Daffy Duck: The Marvin Missions",
    "Kendo Rage",
    "Lock On",
    "Pac-Attack",
    "BioMetal",
    "The Lawnmower Man",
    "Jurassic Park",
    "Total Carnage",
    "Out to Lunch",
    "Gradius III",
    "Battle Cars",
    "Metal Marines",
    "Soldiers of Fortune",
    "Side Pocket",
    "Barbie Super Model",
    "Lester the Unlikely",
    "Choplifter III",
  ],
  D: [
    "Bubsy: Claws Encounter of the Furred Kind",
    "Lagoon",
    "Brawl Brothers",
    "Cacoma Knight in Bizyland",
    "Cool World",
    "The Hunt for Red October",
    "Addams Family: Pugsly's Scavenger Hunt",
    "Taz-Mania",
    "Dungeon Master",
    "Battletoads in Battlemaniacs",
    "Tom & Jerry",
    "The Blues Brothers",
    "Super Widget",
    "Lethal Weapon",
    "Phalanx",
    "Prince of Persia",
    "Jeopardy!",
    "Paperboy 2",
    "Super Tennis",
    "Jimmy Connors Pro Tennis Tour",
    "Power Moves",
    "Mortal Kombat",
    "Super Ninja Boy",
    "Gods",
    "Raiden Trad",
    "Dragon's Lair",
    "The Adventures of Rocky and Bullwinkle and Friends",
    "Road Runner’s Death Valley Rally",
    "Fatal Fury",
    "King Arthur's World",
    "2020 Super Baseball",
    "Xardion",
    "Best of the Best: Championship Karate",
    "Skuljagger: Revolt of the Westicans",
    "American Gladiators",
    "Super Adventure Island",
    "Monopoly",
    "Captain Novocain",
    "Thomas the Tank Engine and Friends",
    "Faceball 2000",
    "Vegas Stakes",
    "Inindo: Way of the Ninja",
    "MechWarrior",
    "Outlander",
    "SimEarth",
    "Drakkhen",
    "Test Drive II: The Duel",
    "Mario is Missing",
    "Doomsday Warrior",
    "Wolf Child",
    "Alien vs. Predator ",
    "Gem fire",
    "Street Combat",
    "Aero the Acro-Bat",
    "Family Feud",
    "Paladin's Quest",
    "Super Caesers Palace",
    "Super Star Wars: The Empire Strikes Back",
    "Incredible Crash Dummies",
    "True Golf Classics: Wicked 18",
    "Pink Goes to Hollywood",
    "Clay Fighter",
    "Super Chase H.Q.",
    "Super Nova",
    "Battle Blaze",
    "Dig & Spike Volleyball",
    "Beethoven: The Ultimate Canine Caper",
    "Final Fight",
    "Hyperzone",
    "Populous",
    "Zool: Ninja of the Nth Dimension",
    "Flashback: The Quest for Identity",
  ],
  F: [
    "Race Drivin’",
    "Pit Fighter",
    "The Rocketeer",
    "The Wizard of Oz",
    "Robocop 3",
    "Last Action Hero",
    "RPM Racing",
    "Road Riot 4WD",
    "Home Alone",
    "Captain America and the Avengers",
    "The Aquatic Games",
    "Earth Defense Force",
    "Ultraman: Towards the Future",
    "Wings 2: Aces High",
    "Toys",
    "Bill Laimbeer’s Combat Basketball",
    "GunForce",
    "Goal!",
    "WWF Super Wrestlemania",
    "Kawasaki Carribean Challenge",
    "David Crane’s Amazing Tennis",
    "Thunder Spirits",
    "Space Football: One on One",
    "George Forman's KO Boxing",
    "Home Alone 2",
    "Wayne's World",
    "Family Dog",
    "Ka-Blooey",
    "Wordtris",
    "Actraiser 2",
    "Clue",
    "The Great Waldo Search",
    "Wheel of Fortune",
    "WarpSpeed",
    "Spindizzy Worlds",
    "Garry Kitchen’s Super Battletank",
    "Bart’s Nightmare",
    "Battletoads Double Dragon",
    "Chester Cheetah Too Cool to Fool",
    "The Combatribes",
    "California Games II",
    "NBA All-Star Challenge",
    "D-Force",
    "Super Strike Eagle",
    "Shanghai II: Dragon's Eye",
    "Cyber Spin",
    "Q*Bert 3",
    "Where in the World is Carmen Sandiego",
    "James Bond Jr.",
    "Cliff Hanger",
    "The Terminator",
    "Chuck Rock",
    "Bram Stoker's Dracula",
    "The Adventures of Dr. Franken",
    "Jim Power: Lost Dimension in 3D",
    "Dennis the Menace",
    "Mario's Time Machine",
    "The Chessmaster",
    "Super Battletank 2",
    "Super Solitaire",
    "Lethal Enforcers",
    "Super Ghouls and Ghosts",
    "Bugs Bunny's Rabbit Rampage",
    "Mickey's Ultimate Challenge",
    "Super Alfred Chicken",
    "Winter Olympic Games: Lillehammer '94",
    "T2: The Arcade Game",
    "X-Kaliber: 2097",
    "Super Troll Islands",
  ],
  U: [
    "Miracle Piano Teacher",
    "NFL Football",
    "Football Fury",
    "Capcom's MVP Football",
    "Super High Impact",
    "ABC Monday Night Football",
    "Nigel Mansell's Championship Racing",
    "Super Slam Dunk",
    "Street Fighter II",
    "Boxing Legends of the RIng",
    "Mecarobot Golf",
    "Redline F-1 Racer",
    "Romance of the Three Kingdoms II",
    "Utopia: Creation of a Nation",
    "World Soccer 94",
    "F1 Pole Position",
    "Nobunaga's Ambition",
    "Romance of the Three Kingdoms III",
    "Genghis Khan II: Clan of the Grey Wolf",
    "Hal’s Hole in One",
    "Super Bases's Loaded",
    "Riddick Bowe Boxing",
    "Brett Hull Hockey",
    "John Madden Football",
    "Turn and Burn: No Fly Zone",
    "Pro Sport Hockey",
    "Super Bases Loaded 2",
    "Bill Walsh College Football",
    "Sports Illustrated: Championship Football & Baseball",
  ],
};

export default allRanks;
