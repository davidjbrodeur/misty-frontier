
let faction_catchphrase = " -> [FACTION] wants [MOTIVATION] but [OBSTACLE]. Therefore [ACTIVITY TO SURMOUNT OBSTACLE]."

let settlement_catchphrase = " -> The dungeon level is home (although not originally) to one species of monsters that uses it as a settlement area. They are more numerous, have places to perform all their things, etc. They use the dungeon layout to their advantage. They don't come from the dungeon, but rather from another settlement they had which connects from the inside to the dungeon (i.e. the level is double: one half is the dungeon proper, the other half is the settlement/cavern systems of the inhabitants of this level). "

let demonic_shrine_effect_desc = "-> The user gets a Dark Corruption(+1). Roll a d6, on a 5+, the user also gets a random mutation (as per the curse)."

const wilderness_exploration = 
{
    "camp_event": {
        2: "A monster approaches the camp because of the fire/noise.",
        3: "Infighting/conflict (someone stole true or false, someone is pissing others off, etc.)",
        4: "Demand a higher pay",
        5: "Tell a useful rumour.",
        6: "Nothing",
        7: "Nothing",
        8: "Nothing",
        9: "Find something of value (treasure, plant, etc.)",
        10: "camp_omen",
        11: "find another hireling in the wood that wants to join and help",
        12: "One of them is a veteran and kills a hostile creature (+1 next wilderness roll)"
    },
    "camp_omen": {
        2: "The moon is larger and brighter than usual. It seems to dominate the sky, and cast harsh, pale shadows.",
        3: "Animals go wild. Horses buck and have wide, scared eyes. Dogs bark fiercely and pull at their leashes.",
        4: "A PC wakes up in the morning with a cut across their palm that wasn't there before.",
        5: "The flames of nearby candles flicker out completely, but a moment later they return.",
        6: "A raven caws angrily at the party before flying away. More are seen periodically, perching and watching.",
        7: "The clouds are gray and full of rain. And yet it does not rain. Though thunder rumbles, not a drop lands.",
        8: "The campfire goes out in the middle of the night. There is no wind. It is difficult to restart as darkness closes in.",
        9: "The clouds are gray and full of rain. And yet it does not rain. Though thunder rumbles, not a drop lands.",
        10: "A strong wind that was blowing all day suddenly stops. The world is still for a few moments before life continues.",
        11: "The players hear distant, sourceless harp music. When pointed out or mentioned, it stops",
        12: "The fog gets higher, a hireling starts screaming and runs away never to be seen again."
    },
    "entering_or_searching_hex" : {
        2: "region unique monster",
        3: "hex type monster",
        4: "hex key monster patrol",
        5: "party_loss",
        6: "nothing",
        7: "nothing",
        8: "nothing",
        9: "monster_omen",
        10: "npc",
        11: "adventure_seeds",
        12: "Party find secret hex location if any. Otherwise, give a hint on a secret of adjacent hex."
    }, 
    "adventure_seeds" : {
        2 : "Sword in the Pond: You find a pond. 10ft deep in the center of the pond is a sword glowing. Inside the pond a water elemental patiently waits. The sword is also curse",
        3 : "Cocooned: This area of the forest has heavy webbing. Throughout the webbing you find cocooned humanoid bodies waiting to be eaten. In this area lurks Giant Spiders sneaking about ready to attack via the treetop canopies.",
        4 : "Wagon Trouble: Two horses are recently slain on the road. A dozen yards away is the remnants of the wagon. Four human bodies are scattered about. If disturbed they animate as zombies and attack.",
        5 : "Mad Dwarf: An Insane Dwarf has started construction on a staircase to the Sun. He tries to enlist the Player Characters to help him finish his project. He claims that the Sun is a perfect mining opportunity.",
        6 : "Sinkhole: Part of the forest has a recent sinkhole. Dozens of feet into the earth you notice stone chambers leading to a dungeon from the ancient past.",
        7 : "Knights on Patrol: A band of Knight are searching the forest. They have a warrant out for the arrest of a suspected murderer. One of the Players Characters fits the description of the murderer.",
        8 : "The Well: A lonesome well in the middle of the forest. If you listen closely you can hear screams echo from down below.",
        9 : "Cauldron: The group bumps into a young child. The Child claims that a group of them got kidnap by a witch. All his friend are currently being prepped by the Witch to be cooked in a Cauldron. He was able to escape and was looking for help.",
        10 : "Caged: Dozens of human sized cages form a circle. Inside the cages are the skeletal remains of criminals. They were left to starve in these cages. One cage has a lone half-orc on the brink of death. He pleads for the group to save him.",
        11 : "Blind Man: A lone human with no eyes has lost his way. He also doesn't know who he is.",
        12 : "Charles le chasseur"
    },
    "party_loss" : {
        2: "A thick and ominous fog in difficult terrain assail the party. One of the hireling (or PC) gets lost.",
        3: "A thick and ominous fog covers the land. The party gets lost (roll 1d6 for direction where 1 is north).",
        4: "The party gets bogged down in difficult terrain and loses 1 AP.",
        5: "Party gets enfogged and has to stop for the day.",
        6: "The party gets bogged down in difficult terrain and loses 1 AP.",
        7: "The party gets bogged down in difficult terrain and loses 1 AP.",
        8: "The party gets bogged down in difficult terrain and loses 1 AP.",
        9: "Party gets enfogged and has to stop for the day.",
        10: "Food gets spoiled. Fatigue for next day.",
        11: "Bad weather/water/ration starts a disease problem in the party (4+).",
        12: "The party finds a ruins while lost (-1 AP)."
    }, 
    "normal_weather_roll" : {
        2: "Thunderstorm",
        3: "Thunderstorm",
        4: "Wind and cloud",
        5: "Wind and cloud",
        6: "Clear",
        7: "Clear",
        8: "Clear",
        9: "Sunny",
        10: "Sunny",
        11: "Heatwave",
        12: "Heatwave"
    }, 
    "cold_weather_roll" : {
        2: "Snowstorm",
        3: "Snowstorm",
        4: "Snow",
        5: "Snow",
        6: "Wind and cloud",
        7: "Wind and cloud",
        8: "Wind and cloud",
        9: "Sunny",
        10: "Sunny",
        11: "Snow melt",
        12: "Snow melt"
    }, 
    "hot_weather_roll" : {
        2: "Sandstorm",
        3: "Sandstorm",
        4: "High winds",
        5: "High winds",
        6: "Sunny with clouds",
        7: "Clear",
        8: "Clear",
        9: "Heatwave",
        10: "Heatwave",
        11: "Heatwave",
        12: "Heatwave"
    },
    "mountain_hex_encounters":{
        2 : "NPC",
        3 : "men_type",
        4 : "Wyvern",
        5 : "animal_type",
        6 : "orc_type",
        7 : "animal_type",
        8 : "orc_type",
        9 : "Hill Giant",
        10 : "Stone Giant",
        11 : "Roc",
        12 : "Red Dragon"
    },
    "swamp_hex_encounters":{
        2 : "NPC",
        3 : "men_type",
        4 : "Troll",
        5 : "animal_type",
        6 : "orc_type",
        7 : "undead_type-type",
        8 : "undead_type-type",
        9 : "Ogre-type",
        10 : "Lycan-type",
        11 : "Flyer-type",
        12 : "undead_type"
    },
    "jungle_hex_encounters":{
        2 : "NPC",
        3 : "men_type",
        4 : "Troll",
        5 : "animal_type",
        6 : "orc_type",
        7 : "undead_type-type",
        8 : "undead_type-type",
        9 : "men_type",
        10 : "Lycan-type",
        11 : "Flyer-type",
        12 : "undead_type"
    },
    "desert_hex_encounters":{
        2 : "NPC",
        3 : "men_type",
        4 : "Skeletons (4d6)",
        5 : "Scorpions",
        6 : "Giant Insects",
        7 : "animal_type",
        8 : "Nomads",
        9 : "Fire Giants",
        10 : "Genie Caravan",
        11 : "Flyer-type",
        12 : "Blue dragon"
    },
    "snow_hex_encounters":{
        2 : "NPC",
        3 : "men_type",
        4 : "1d6 frost salamander",
        5 : "2d6 Winter Wolf",
        6 : "orc_type",
        7 : "1d3 Polar Bear",
        8 : "1d6 Yeti",
        9 : "1d6 Stone Giant",
        10 : "1d3 Frost Giant",
        11 : "1 Rhemoraz",
        12 : "White dragon"
    },
    "wasteland_hex_encounters":{
        2 : "NPC",
        3 : "men_type",
        4 : "men_type",
        5 : "men_type",
        6 : "men_type",
        7 : "men_type",
        8 : "undead_type",
        9 : "undead_type",
        10 : "undead_type",
        11 : "Lycan",
        12 : "Lich"
    },
    "forest_hex_encounters":{
        2 : "NPC",
        3 : "men_type",
        4 : "Troll",
        5 : "animal_type",
        6 : "orc_type",
        7 : "animal_type",
        8 : "Woodland-type",
        9 : "Ogre-type",
        10 : "Lycan-type",
        11 : "Woodland-type",
        12 : "Green dragon"
    },
    "plains_hex_encounters":{
        2 : "NPC",
        3 : "men_type",
        4 : "NPC",
        5 : "animal_type",
        6 : "orc_type",
        7 : "animal_type",
        8 : "orc_type",
        9 : "Ogre-type",
        10 : "Lycan-type",
        11 : "Flyer-type",
        12 : "undead_type"
    },
    "hills_hex_encounters":{
        2 : "NPC",
        3 : "men_type",
        4 : "Wyvern",
        5 : "animal_type",
        6 : "orc_type",
        7 : "animal_type",
        8 : "orc_type",
        9 : "Hill Giant",
        10 : "Stone Giant",
        11 : "Roc",
        12 : "Red Dragon"
    },
    "water_hex_encounters":{
        2 : "NPC",
        3 : "men_type",
        4 : "orcish_type",
        5 : "animal_type",
        6 : "swimmer_type",
        7 : "swimmer_type",
        8 : "swimmer_type",
        9 : "ogre",
        10 : "lycan_type",
        11 : "flyer_type",
        12 : "undead_type"
    },
    "rural_hex_encounters":{
        2 : "NPC",
        3 : "men_type",
        4 : "NPC",
        5 : "animal_type",
        6 : "orc_type",
        7 : "animal_type",
        8 : "men_type",
        9 : "Lycan-type",
        10 : "orc_type",
        11 : "Flyer-type",
        12 : "undead_type"
    },
    "urban_hex_encounters":{
        2 : "NPC",
        3 : "men_type",
        4 : "men_type",
        5 : "men_type",
        6 : "men_type",
        7 : "men_type",
        8 : "undead_type",
        9 : "undead_type",
        10 : "undead_type",
        11 : "Lycan",
        12 : "Lich"
    },
    "men_type" : {
        2 : "Necromancer",
        3 : "Lord",
        4 : "Cavemen",
        5 : "Nomads/Hunters",
        6 : "Brigands",
        7 : "Bandits",
        8 : "Berserkers",
        9 : "Hero group",
        10 : "Superhero",
        11 : "Wizard",
        12 : "High Priest"
    },
    "animal_type" : {
        2 : "Giant Ants",
        3 : "Giant Toads",
        4 : "Giant Beetles",
        5 : "Giant Snakes",
        6 : "Giant Scorpions",
        7 : "Spiders",
        8 : "Giant Centipedes",
        9 : "Carnivorous Apes",
        10 : "Giant Boars",
        11 : "Giant Lizards",
        12 : "Giant Weasels"
    },
    "swimmer_type" : {
        2 : "Pirates",
        3 : "Mermen",
        4 : "Giant Water Snake",
        5 : "Giant Crab",
        6 : "Giant Eel",
        7 : "Giant Crayfish",
        8 : "Giant Shark",
        9 : "Sea Hag",
        10 : "Nymph",
        11 : "Water Elemental",
        12 : "Storm Giant"
    },
    "woodland_type" : {
        2 : "Dinosaur",
        3 : "Unicorn",
        4 : "Giant Bear",
        5 : "Manticore",
        6 : "Dryad",
        7 : "Cavemen",
        8 : "Werebear",
        9 : "Treant",
        10 : "Centaurs",
        11 : "Medusa Lair",
        12 : "Minotaur Lair"
    },
    "undead_type" : {
        2 : "vampire",
        3 : "ghost",
        4 : "4d6 skeletons",
        5 : "2d6 ghouls",
        6 : "1d6 zombies",
        7 : "1d6 skeleton",
        8 : "1d6 zombies",
        9 : "2d6 ghouls",
        10 : "4d6 zombies",
        11 : "black knight",
        12 : "lich"
    },
    "unique_hex_encounters" : {
        0 : "Far away Wizard-king and his archmage friend arrive in a haste on horses, near death. They ask X of the player (transport something, shelter them, etc.), knowning they are pursued and almost dead. They are pursued by their own population because they dabbled in a forgotten (and forbidden) art of magic. They say that they did it for the good of all, and are unapologitical about it.",
        1 : "A group of priests burst out of a backalley while a group of thief pursues them. Behind, a evil high priest is lying dead. He's actually an undead and will pursue later the player if they steal anything from them. He made a pact with dark forces.",
        2 : "A normal man that his wife and daughter have been killed by a (unique) monster. He has been tracking it for a decade. He possess a vast variety of monsters head proving his worth",
        3 : "A hunter tired of animals will chat will chat with the players and offer to sleep with them at night if they agree. During the night he will flee and will now target the players as his next prey. ",
        4 : "Group of dwarf/human from afar are looking to prospect mountains and hills for new mines",
        5 : "A man chained to a rock on top of a hill, let there to die. 1/6 he is evil, otherwise it's just a cruel punishment. ",
        6 : "Mimic masquerading as floating crates or crates",
        7 : "A ranger has been tracking something for three days that murdered an entire village. The tracks seem to warp and change every few miles.",
        8 : "A floating and mobile crystal fields. At night, they dissapear. ",
        9 : "A renowed elven swordsman in a hidden cabin. He no long takes students.",
        10 : "A caravan of orcish slaves. If good reaction, they can take new slaves or sell them",
        11 : "A shifting mirage city",
        12 : "The animated skeleton of a giant is roaming",
        13 : "A local lord is patrolling with his retinue and will friendily joust the players",
        14 : "A local wizard is patrolling and will geas",
        15 : "A man in a black robe with a great book and a beautiful ring full of red rubies will tell the player he is a great wizard and they need to bow before him and offer him a toll. Otherwise, he will unleash powerful flames (fireball) on them. He is actually a level 1 apprentice that stole a ring from his master. There is one fireball charge left (unknown to him)",
        16 : "A friendly ogre is injured on the side of the road in a small cave. If healed, he will accompany the players for the rest of this adventure. ",
        17 : "An ancient ranger has set up a camp and will gladly accept the players and nourish them. He will give them some tips. The next day, he dissapeared. If asked about in the region, people will tell them that he was a legendary ranger and died 25-30 years ago. ",
        18 : "A group of mercenaries are trying to capture an elemental (as per the land, generally a water elemental in a river) for the local wizard. They have a magical net to capture it. The elemental promises the player a reward if they side with him. The bandits says the wizard will pay a lot of money for the elemental. ",
        19 : "A roaming giant will help the player if they pay him with fruits. He is less intelligent than normal giants, but more friendly. He doesn't want to kill people so he flew his clan. ",
        20 : "A roaming blind druid is looking for a rare plant in the area that is without smell. He will help the player if they help him. ",
        21 : "They find the body of a man with a shovel and a chest with a hole dug. There is no trace of what killed him. In the chest, there are some minor treasure and a couple of books, one of which has been torned down. The book speaks of psionics. ",
        22 : "A wagon surrounded by decomposing humanoid corpses wearing rainbow colored cloaks. The wagon contains a hidden compartment which holds 4d6 x 100 doses of drugs (each doses sells 2GP) inside.",
    },
    "quests" : {
        0 : "Go explore area X and come back to me with a detailed map",
        1 : "Go explore dungeon X and come back to me with a detailed map",
        2 : "Go scout megadungeon X and come back to me with detailed information",
        3 : "Go find X plant",
        4 : "Go find X magical item in Y dungeon/megadungeon",
        5 : "Go find X magical item",
        6 : "Go clear X dungeon",
        7 : "Go clear X megadungeon",
        8 : "Go plant this magical item in X region (/w Y complication)",
        9 : "Go plant this magical item in X dungeon",
        10 : "Clear his tower of X, Y, Z monster (ideally resistant to magic)",
        11 : "Go to another mage tower X to negociate Y from him",
        12 : "Go to another mage tower X to kill him",
        13 : "Go to another mage tower X to steal Y from him",
        14 : "Go defeat Warlord X to teach him a lesson",
        15 : "Go close the demon portal/undead artefact/faerie circle at X",
        16 : "Go steal/kill something from the faerie circle at X",
        17 : "Go clear all of Y creature in the area (infestation)",
        18 : "Go kill X creature",
        19 : "Go capture X creature",
    },
    "simple_unique_encounter_ideas": {
        0: "https://drive.google.com/file/d/13fualfLEV_VaahBTaZtRggEUVtWIQXoc/view"
    }
}

const generalities = 
{
    "general_roll": {
        2: "Catastrophic failure (No AND): something bad happen",
        3: "Catastrophic failure (No AND): something bad happen",
        4: "Failure (No): The action doesn't work",
        5: "Failure (No): The action doesn't work",
        6: "Partial failure (No, but): The action barely fails, UNLESS the character sacrifice something (time, object, etc.)",
        7: "Partial failure (No, but): The action barely fails, UNLESS the character sacrifice something (time, object, etc.)",
        8: "Partial failure (No, but): The action barely fails, UNLESS the character sacrifice something (time, object, etc.)",
        9: "Success (Yes): Work accordingly",
        10: "Success (Yes): Work accordingly",
        11: "Great success (Yes AND): Work accordingly with a small extra",
        12: "Great success (Yes AND): Work accordingly with a small extra"
    },
    "reaction_roll": {
        2: "Hostile, cruelty, destruction // PCs are seen as threat",
        3: "Hostile, cruelty, destruction // PCs are seen as threat",
        4: "Needs are more important than PCs // End of negotiations or no negotiations",
        5: "Needs are more important than PCs // End of negotiations or no negotiations",
        6: "As per needs or leave // Leave or entertain bargain for needs",
        7: "As per needs or leave // Leave or entertain bargain for needs",
        8: "As per needs or leave // Leave or entertain bargain for needs",
        9: "Favourable, curiosity, evasion // Open to negotiation or exchange",
        10: "Favourable, curiosity, evasion // Open to negotiation or exchange",
        11: "Curiosity and help // Service or help",
        12: "Curiosity and help // Service or help"
    },
    "monster_needs": {
        0: "Safety: lost, hurt, running away from threat, without light, etc.",
        1: "Sustenance: hunting, hungry, eating, preparing food",
        2: "Comfort: link with own species (mating), warming, nap, shelter, relax play",
        3: "Territory: patrolling, tracking, conquering, exploring",
        4: "Catharsis: play, sadism, anger, desperation, revenge, corruption",
        5: "Luxury: looking for gold, items, alcohol, slaves",
        6: "Knowledge: looking for direction, lore, spying neighbours",
        7: "Allies or assistance: they need help for (reroll)",
        8: "Actualisation of the self: ideology, religion, training, cult",
    },
    "what" : {
        2: "In a temporary place/camp",
        3: "In a temporary place/camp",
        4: "Patrolling",
        5: "Patrolling",
        6: "In a small ruin/lair/cavern",
        7: "In a small ruin/lair/cavern",
        8: "In a small ruin/lair/cavern",
        9: "Hunting/eating",
        10: "Hunting/eating",
        11: "Settling, living or resting",
        12: "Settling, living or resting"
    },
    "how" : {
        2: "Combat with another monster (reroll monster_type)",
        3: "Being greatly injured",
        4: "Being cursed/magically affected",
        5: "Being seditious with its own group/race/type",
        6: "Being related to another monster (looking for, hunting, checking, talking) (reroll monster_type)",
        7: "Chilling",
        8: "Being related to another monster (looking for, hunting, checking, talking) (reroll monster_type)",
        9: "Looking for his own group/race/type",
        10: "Being diseased",
        11: "Being dead",
        12: "Combat with another monster (reroll monster_type)"
    },
    "where" : {
        2: "Fake treasure",
        3: "Traps",
        4: "Tricks",
        5: "Guarded treasure",
        6: "Nothing of value",
        7: "Nothing of value",
        8: "Nothing of value",
        9: "Guarded treasure",
        10: "Guarded treasure",
        11: "Hidden treasure",
        12: "Open treasure"
    },
    "monster_omen" : {
        2: "Unabandonned lair of",
        3: "Abandonned lair of",
        4: "Body of",
        5: "Sound in the distance of",
        6: "Markings of",
        7: "Path of",
        8: "Hunter looking for",
        9: "Humanoids running away from",
        10: "Lair/ruin/house destroyed by",
        11: "Animal/human bodies left by",
        12: "Treasure abandonned by"
    },
    "disease":{
        2: "Smallpox: This disease is extremely infectious (2+ on a dice). It takes 12 months minus Toughness score to fully recover from it. Symptoms include intense rash and fever. The scars will lower Reaction and Courage permanently by 1. It is treatable with magical and natural health with a high survival rate amongst adventurers (2+ on a dice)",
        3: "Yellow Fever: Generally more frequent in jungle and swamp areas, it is contracted by mosquitoes. There is a small chance (6+ on a dice) to spread it to others. Symptoms include intense fatigue and fever with a small (6+ on a dice) chance of lapsing into a coma for 1d6 days. Afterwards, the bearer is immune",
        4: "Malaria: Generally more frequent in tropical area or temperate swamp and humid places. It causes intense pain, fatigue and fever. Rare herbs known as king’s herb can treat it with great efficiency. Otherwise, it will come back every once in a while to affect the host",
        5: "Cholera: Generally transmitted through flies, food or water that has been infected. It is highly contagious and virulent. It will spread at an exponential rate in a group. Some type of activities or location will help the spreading: ship, cell, siege, garrison, inadequate water, and so on. Symptoms include vomiting, watery stools, fatigue, dehydration. If not treated rapidly, consider it as being a weak poison (death in 2d6 days)",
        6: "Crud: Heat rash or jungle rot. Generation irritation and unpleasantness. 1/6 the character can't sleep at night and becomes fatigued (-1 to all rolls)",
        7: "Grippe: Causes fever, fatigue and body ache. -1 to all rolls",
        8: "Spotted Fever: A type of disease generally transmitted by ticks (2+ on a dice that it is carrying the disease). It causes severe fever (6+ on a dice that the fever will kill if untreated) and a chance of mentally affecting the character with a mild form of insanity (6+ on a dice), lowering Courage score by 1.",
        9: "Dysentry: Generally caused by water and food being corrupted or stored in bad conditions. It causes vomiting, intestinal problem, fever, dehydration and fatigue. In very bad condition, it can become worst and cause coma or death",
        10: "Turberculosis: This disease can be contracted in humid and damp places, including dungeons, but also in cities (6+ on a dice). It is a very intense disease that has a high rate of casualty (3+ without treatment, 5+ with treatment and rest). Even if survived, there is a 50% chance of losing 1 Toughness",
        11: "Typhoid Fever: Generally contacted by parasites in unclean conditions such as cities, siege, food shortage and so on. It is a very intense fever and fatigue that can lead to death (3+ on a dice)",
        12: "Leprosy: This disease affect skin and general immunity system. It has a high fatality rate (2+ on a dice after 3 days if not cured). Those who die from leprosy cannot be Raised Dead. Mummy have a high chance to give this disease on every contact (2+ on a dice)"
    },
    "curse_transformation" : {
        2: "New limb // new eye",
        3: "Skin color // beak",
        4: "Fur // claws",
        5: "Cyclop // big head",
        6: "Small head // new fingers",
        7: "Fangs // feotid odour",
        8: "Horns // black eyes",
        9: "Transparent skin // large eyes",
        10: "Leather skin // large ears",
        11: "Long arms // long legs",
        12: "Long neck // long torso"
    },
    "desecration_curse":{
        2: "Leprosy",
        3: "Deafness",
        4: "Blindness",
        5: "Cause low morale to NPC",
        6: "Permanent hunger",
        7: "Face rot (-2 reaction)",
        8: "Impossible to enter temples",
        9: "Arrows fly towards victim",
        10: "Almost perpetual sleep",
        11: "Petrification",
        12: "Cannibalism (can only eat flesh)"
    },
    "distance" : {

    },
    "oracle_subject" : {
        0 : "99. Anger",
        1 : "100. Information",
        2 : "Goals",
        3 : "2. Dreams",
        4 : "3. Environment",
        5 : "4. Outside",
        6 : "5. Inside",
        7 : "6. Reality",
        8 : "7. Allies",
        9 : "8. Enemies",
        10 : "9. Evil",
        11 : "10. Good",
        12 : "11. Emotions",
        13 : "12. Opposition",
        14 : "13. War",
        15 : "14. Peace",
        16 : "15. The innocent",
        17 : "16. Love",
        18 : "17. The spiritual",
        19 : "18. The intellectual",
        20 : "19. New ideas",
        21 : "20. Joy",
        22 : "21. Messages",
        23 : "22. Energy",
        24 : "23. Balance",
        25 : "24. Tension",
        26 : "25. Friendship",
        27 : "26. The physical",
        28 : "27. A project",
        29 : "28. Pleasures",
        30 : "29. Pain",
        31 : "30. Possessions",
        32 : "31. Benefits",
        33 : "32. Plans",
        34 : "33. Lies",
        35 : "34. Expectations",
        36 : "35. Legal matters",
        37 : "36. Bureaucracy",
        38 : "37. Business",
        39 : "38. A path",
        40 : "39. News",
        41 : "40. Exterior factors",
        42 : "41. Advice",
        43 : "42. A plot",
        44 : "43. Competition",
        45 : "44. Prison",
        46 : "45. Illness",
        47 : "46. Food",
        48 : "47. Attention",
        49 : "48. Success",
        50 : "49. Failure",
        51 : "50. Travel",
        52 : "51. Jealousy",
        53 : "52. Dispute",
        54 : "53. Home",
        55 : "54. Investment",
        56 : "55. Suffering",
        57 : "56. Wishes",
        58 : "57. Tactics",
        59 : "58. Stalemate",
        60 : "59. Randomness",
        61 : "60. Misfortune",
        62 : "61. Death",
        63 : "62. Disruption",
        64 : "63. Power",
        65 : "64. A burden",
        66 : "65. Intrigues",
        67 : "66. Fears",
        68 : "67. Ambush",
        69 : "68. Rumor",
        70 : "69. Wounds",
        71 : "70. Extravagance",
        72 : "71. A representative",
        73 : "72. Adversities",
        74 : "73. Opulence",
        75 : "74. Liberty",
        76 : "75. Military",
        77 : "76. The mundane",
        78 : "77. Trials",
        79 : "78. Masses",
        80 : "79. Vehicle",
        81 : "80. Art",
        82 : "81. Victory",
        83 : "82. Dispute",
        84 : "83. Riches",
        85 : "84. Status quo",
        86 : "85. Technology",
        87 : "86. Hope",
        88 : "87. Magic",
        89 : "88. Illusions",
        90 : "89. Portals",
        91 : "90. Danger",
        92 : "91. Weapons",
        93 : "92. Animals",
        94 : "93. Weather",
        95 : "94. Elements",
        96 : "95. Nature",
        97 : "96. The public",
        98 : "97. Leadership",
        99 : "98. Fame",
    },
    "oracle_action" : {
        0 : "1. Attainment",
        1 : "2. Starting",
        2 : "3. Neglect",
        3 : "4. Fight",
        4 : "5. Recruit",
        5 : "6. Triumph",
        6 : "7. Violate",
        7 : "8. Oppose",
        8 : "9. Malice",
        9 : "10. Communicate",
        10 : "11. Persecute",
        11 : "12. Increase",
        12 : "13. Decrease",
        13 : "14. Abandon",
        14 : "15. Gratify",
        15 : "16. Inquire",
        16 : "17. Antagonise",
        17 : "18. Move",
        18 : "19. Waste",
        19 : "20. Truce",
        20 : "21. Release",
        21 : "22. Befriend",
        22 : "23. Judge",
        23 : "24. Desert",
        24 : "25. Dominate",
        25 : "26. Procrastinate",
        26 : "27. Praise",
        27 : "28. Separate",
        28 : "29. Take",
        29 : "30. Break",
        30 : "31. Heal",
        31 : "32. Delay",
        32 : "33. Stop",
        33 : "34. Lie",
        34 : "35. Return",
        35 : "36. Immitate",
        36 : "37. Struggle",
        37 : "38. Inform",
        38 : "39. Bestow",
        39 : "40. Postpone",
        40 : "41. Expose",
        41 : "42. Haggle",
        42 : "43. Imprison",
        43 : "44. Release",
        44 : "45. Celebrate",
        45 : "46. Develop",
        46 : "47. Travel",
        47 : "48. Block",
        48 : "49. Harm",
        49 : "50. Debase",
        50 : "51. Overindulge",
        51 : "52. Adjourn",
        52 : "53. Adversity",
        53 : "54. Kill",
        54 : "55. Disrupt",
        55 : "56. Usurp",
        56 : "57. Create",
        57 : "58. Betray",
        58 : "59. Agree",
        59 : "60. Abuse",
        60 : "61. Oppress",
        61 : "62. Inspect",
        62 : "63. Ambush",
        63 : "64. Spy",
        64 : "65. Attach",
        65 : "66. Carry",
        66 : "67. Open",
        67 : "68. Carelessness",
        68 : "69. Ruin",
        69 : "70. Extravagance",
        70 : "71. Trick",
        71 : "72. Arrive",
        72 : "73. Propose",
        73 : "74. Divide",
        74 : "75. Refuse",
        75 : "76. Mistrust",
        76 : "77. Deceive",
        77 : "78. Cruelty",
        78 : "79. Intolerance",
        79 : "80. Trust",
        80 : "81. Excitement",
        81 : "82. Activity",
        82 : "83. Assist",
        83 : "84. Care",
        84 : "85. Negligence",
        85 : "86. Passion",
        86 : "87. Work hard",
        87 : "88. Control",
        88 : "89. Attract",
        89 : "90. Failure",
        90 : "91. Pursue",
        91 : "92. Vengeance",
        92 : "93. Proceedings",
        93 : "94. Dispute",
        94 : "95. Punish",
        95 : "96. Guide",
        96 : "97. Transform",
        97 : "98. Overthrow",
        98 : "99. Oppress",
        99 : "Change"
    },
    "general_theme": {
        2: "Religious.",
        3: "Ancient/lore/history.",
        4: "Magic.",
        5: "Strife.",
        6: "Art.",
        7: "Economy.",
        8: "Survival.",
        9: "Strife.",
        10: "Ancient/lore/history.",
        11: "Magic.",
        12: "Religious."
    },
    "triple_oracle": {},
    "pregame_checklist": {
        0: "Do:\r\n    Roll domain event (per game)\r\n    Roll region event (per month)\r\n    Roll world event (per six month)\r\n    If necessary, make a domain move\r\nRefresh:\r\n    Dungeon content lists (riddles, unique room, etc.)\r\n    Rumour table\r\n    Information on each player (name, goal, intent, levelup, details)\r\n    Information on the party (goals and intent)\r\n    Refresh domain based on last player activity\r\nReady: \r\n    The current party objective\r\n    Treasure map\r\n    Unique random interesting NPC\r\n    One ruin\/dungeon\r\n    The current megadungeon level\r\n    The next megadungeon level\r\n    One very cool unique outdoor event ready\r\nMaterial:\r\n    Notebook\r\n    Working website\r\n    Owlbear rodeo\r\n    Discord\r\n    Physical AD&D DMG"
    },
    "precampaign_checklist": {
        0: "Meta-Information:\r\n    - Campaign concept in one sentence\r\n    - Campaign region:\r\n        - Terrain type predominance\r\n        - Regional hook\/uniqueness\r\n        - Oddity\/plot twist\r\n    - Region map\r\n    - Factions\r\n        - One evil faction, one criminal faction, the prime faction of the initial village\/town (covenant), one neutral or supportive faction and one extra faction\r\n        - [FACTION] want(s) [MOTIVATION], but [OBSTACLE]. Therefore, [PLAN OR METHOD OF SURMOUNTING OBSTACLE].\r\n        - Details for each:\r\n            - One enemy faction\r\n            - One ally faction\r\n            - Their reaction to adventurers (the party)\r\n            - One secret\r\n            - Something they are known for\r\n            - Resources (people, object, location, etc.)\r\nCrawford-method (try to put each element at least one day of march from one another):\r\n    - Place population center (1 per region on a strategic location as the \'capital\' of the region).\r\n        - Court\r\n        - Leader(s)\r\n        - Origin, activity, obstacle\r\n        - Initial resources, building, etc. \r\n    - Place market towns or hammlets if necessary\r\n    - Place a bunch of ruins in strategic but abandonned locations. Possible to have them in water areas (sinked, pirate troves on sea caverns, etc.). Ancient and now forgotten\/destroyed settlements, temples, etc. These are 5-level dungeons. Put in them a shrine and a good treasure. \r\n    - Establish resources (including obstacles)\r\n    - Lairs. These are shrines protected by unique monsters (THE minotaur, THE hydra, THE medusa, etc.). If I don\'t have more ideas of unique monsters, either pimp up a normal one or use: https:\/\/docs.google.com\/spreadsheets\/d\/1d-NAi8Mf1W1Q71_fxzIJoqcdXtsjIla3vAAY_5tywaM\/edit#gid=214513084\r\n    - Shortcuts, roads and blocked paths\r\n    - Hall of infamy\r\nStarting-town:\r\n    - Leader(s)\r\n    - Faction (if any)\r\n    - Goal(s)\r\n    - Origin, obstacle, activity\r\n    - Answer the following question: \r\n        What is the starting town called?\r\n        What is the name of the local inn? Who runs it?\r\n        Who do we meet in that inn?\r\n        What is the name of the main road?\r\n        What is the local river?\r\n        A local forest\r\n        The nearby hills\r\n        Two nearby villages\r\n        A distant city\r\n        Who rules the area?\r\n        Who are the town elders?\r\n        Who\'s the local expert on the Arcane?\r\n        Who\'s the local religious expert?\r\n        Who knows the most about the area\'s history?\r\n        Who knows the most about the local geography?\r\n        Who are the local low-level monster tribe?\r\n        A slightly farther off mid-level monster tribe\r\n        Who is the local evil boss?\r\n        What do they want?\r\n        What will happen if they get it?\r\n        Mightiest wizard in the land\r\n        Greatest warrior in the land\r\n        Richest person in the land\r\n        Special or very talented blacksmith in the land\r\n        Special healer or magical healer\r\n        Magical school or guild\r\n        Alchemist shop\r\n        Sage guild\r\n        Mercenary guild\r\n        Important laws on weapon carrying, magic and so on\r\n        Swordmaster\/Weapon master\r\n        Everyone in my world knows ...\t\r\n        Very few people know ...\t\r\n        No one knows ...\t\r\n        Who are the local low-level monsters?\t\t\t\t\r\n        A slightly futher off mid-level moster tribe:\t\t\t\t\r\n        Who is the local Evil Boss?\t\t\t\t\r\n        What do they want?\t\t\t\t\t\t\r\n        What will happen if they get it?\t\t\r\n        What is the name of the main road?\t\r\n        What is the local river?\t\r\n        A local forest?\t\r\n        The nearby hills\t\r\n        Two nearby villages\t\r\n        A distant city\t\r\nInitial-dungeon:\r\n    - Lore\r\n    - First level\r\n    - Second level idea\r\nLinks:\r\n    - Links between faction, ruins, megadungeon and BBEG\r\n    - Links between faction and faction\r\n    - Links between ruins, resources, towns, BBEG and megadungeon\r\n    - Links around hexes with important locations (settlements, lairs, ruins): instead of having a wizard tower and then on the next hex a griffon lair and then on the next hex a group of bandits, have the griffon be the pet of the wizard and the bandits wanting the eggs of the griffon for a safe passage across the shortcut in the mountains. Create a living world with triggers and clues. \r\nInfo:\r\n    - Hide secret and powers\r\n    - Put artefact somewhere with full lore\r\n    - Create rumour table\r\n    - Fictional map of the area for players (make it interesting with names like \'The Forest of the Iron Wights\' instead of \'Green Forest\'; for this, use the dark souls overworld dungeon generator I have) + initial blurb\r\n    - List all important aspects (bbeg plans & location, lieutenants, megadungeon, lore, artefacts, hidden location of lair and ruins, etc.) as bullet points. For each, create 3 clues (3-clue-rule). Destroy a random number of them. Then put all of the rest into: rumours, lairs, ruins, megadungeon, npc, etc."
    },
    "injury_roll": {
        2: "Death",
        3: "Important Arm Injury: -1 F, -1 S, can't carry anything in one of the two arm (no two-handed, no off-hand, no shield, no secondary torche)",
        4: "Important Arm Injury: -1 F, -1 S, can't carry anything in one of the two arm (no two-handed, no off-hand, no shield, no secondary torche)",
        5: "Important Leg Injury: -2 Mv, Jump and Climb, can't Charge or Rush",
        6: "Important Leg Injury: -2 Mv, Jump and Climb, can't Charge or Rush",
        7: "Minor Injury: Stays at 0 W until the next Rest (each hit is a new injury roll)",
        8: "Minor Injury: Stays at 0 W until the next Rest (each hit is a new injury roll)",
        9: "Minor Injury: Stays at 0 W until the next Rest (each hit is a new injury roll)",
        10: "Minor Injury: Stays at 0 W until the next Rest (each hit is a new injury roll)",
        11: "War Scar: The character is injured until the next night of sleep (see Minor Injury) and gets a certain reputation with any hirelings with the party",
        12: "Protected by the Gods: No injury, gains back conscience after the fight and wins +1 Fa"
    }
}
/*

Add equipment list in there

Really go with "crwaford method" for the overview.

'Escaping the dungeon' roll: https://thealexandrian.net/wordpress/2149/roleplaying-games/escaping-the-dungeon

Add to pre-game check that I need to run, once a month, the overall AER game turn

World creation: https://beyondfomalhaut.blogspot.com/2016/09/blog-dirt-cheap-sandbox.html
- Work by region (aka big hex) that contains smaller hex (normal traveling hex) that contains smaller hex (aka pointcrawl hex for DM use only)
- Add villages (with obstacles), lairs, etc. that are all intertwined: one group of men must pay taxes to bandits from another hex; a group of wood creatures suffer raids from orcs, etc.
- Make sure each power center (hammlet, city, lair, etc.) is controlled by a faction. Then add in obstacles and activities. Make sure each of these generate at least one rumour/possible plot. 
- Big hexes should be mini-settings in themselves where the players will have opportunity to come back. Small hexes (lairs, ruins, etc.) should be small one-page dungeon. 
- Make adventuring party, factions, cults, etc. 
- Rumours, legends, etc. 
- Transform basic plots ("the BBEG wants X") into situations ("Y is happening right now")
- Based 1 city = 4 towns, 5 ruins, 4 resources, 4 lairs

- Add a step at the beginning to creature the layers of history (3 or 4) in the region

- All factions should require stuff from lairs, ruins and the megadungeon. Have AT LEAST one sub-objective in there

For stocking important hexes (ruins,lairs, etc.), use the method of "throwing dice around" and make a pointcrawl out of the hex

Should also make a brief underworld hexmap (or huge-ass souslike pointcrawl?)

Other notes:
- Maybe all hexes without adventure should be with roads/paths/etc. ("You find an old road that seems to go north. You follow them and your travel is quick and painless. After a few miles and hours of marching, it dies out". )
- All hexes with "adventures" should have a "pointcrwal" structure within my notes. 
- Add a step that you create wilderness encounters baised on lair, ruin, factions. 
- Should make it clear that "exploring/searching an hex" takes a whole day of work AND it changes the scope of the game. If previously it was all about just "going through the hex in a somewhat straight line", now you decide to follow small paths, explore around, get a hold of higher hills to see better what's in the hex, etc. It should be clear to player that "searching the hex" changes the scope and is different than both dungeone xploration and hexcrwaling. 

- Dice roll for entering an hex should be about: finding tracks of creatures living in it, seeing what's in the hex through a high vantage point, stumbling on secrets or roads, encounter creatures, getting lost, etc. So maybe just switch it up into bigger categories like 'danger', 'discovery', 'choice', 'context', etc. and roll in there afterwards. 
- Each region should have a name and a wandering encounter table. Unique monsters in it (lair) should be unique. 
- Always roll twice and see if both can be tackled together: if not, keep the first result. 
*/

const underground_exploration = 
{
    "underground_turn":{
        2: "Enemy patrol ambush.",
        3: "Enemy patrol closing in.",
        4: "Enemy patrol in a nearby room.",
        5: "Noise coming from a random direction.",
        6: "Nothing.",
        7: "Nothing.",
        8: "Nothing.",
        9: "Noise coming from a random direction.",
        10: "Enemy patrol in a nearby room.",
        11: "Enemy patrol closing in.",
        12: "NPC closing in."
    },
    "dungeon_random_encounter" : {
        2: "alarm",
        3: "ambush",
        4: "patrol moving towards player",
        5: "lights out (wind, fog, roof with water collapse, etc.)",
        6: "Nothing.",
        7: "Nothing.",
        8: "Nothing",
        9: "Noise from elsewhere (door, rock, roar, voice, etc.)",
        10: "unique_dungeon_encounter",
        11: "accidentally reveal secrets in the room, if any",
        12: "find a friendly npc (prisoner, escape, etc.)"
    }, 
    "unique_dungeon_encounter" : {
        2: "Under a loose bit of cobblestone on the ground, you see what appears to be a small tunnel. If you reach inside or stick around too long, a living crawling hand jumps out of the hole and attacks. This living hand has been hoarding rings and jewelry in this tunnel.",
        3: "The group finds a long forgotten coin hoard. All is not as it seems, some of the coins are tiny-sized mimics (maybe individuals, maybe swarms), that adhere to and attack those that try to gather the treasure.",
        4: "A crumbling wall with a small tunnel bore through its base hides the resting room for a peaceful Goblin who knows the dungeon well and will give directions or hints in trade for an interesting item.",
        5: "The ceiling is completely covered with horrid insects - dark, silent and unseen except for the occasional masonry dust they knock loose.",
        6: "flying swords that attack party members with swords",
        7: "old man walking around. if they don't look at him for one moment, he dissapear (ghost)",
        8: "1 ogre with a displacer beast pet carrying a bag of giant frogs",
        9: "Two ogres are arguing about food. One wants to eat a human that they captured. The other doesn't want to do it because it's too dangerous to be around humans for too long because they might be rescued by their friends.",
        10: "A group of 2d6 orcs are celebrating their defeat of a group of humans. They are drunk and attack the players if they get too close.",
        11: "A hole in the wall, about the height of human shoulders. There is something shiny on the deep end of the hole, however to reach that, you would have to reach inside, and it's deep enough to swallow your arm up he shoulder. If you reach inside, something bites you, causing 1d4 piercing damage. If you reach inside again, nothing bites you and you are free to take the shiny thing. It's a single goldpiece.",
        12: "The ghost of an adventurer that became lost in the dungeon years ago."
    }
}

const downtime_and_domain = 
{
    "carousing":{
        2: "disease",
        3: "Made an enemy by speaking too much (1-2 an official, 3-4 a merchant, 5-6 a smuggler)",
        4: "Contracted a huge debt (1d6 * 10 GP) to a criminal organization (gambling, booze, etc.)",
        5: "Lost at gambling (1d6 * 10SP)",
        6: "Solid headache hangover",
        7: "Solid headache hangover",
        8: "Solid headache hangover with an extra 1d6 * 10 SP in pocket",
        9: "rumours",
        10: "Gambled and won 1d6GP",
        11: "Made friend with 1-2 an official, 3-4 a merchant, 5-6 a smuggler",
        12: "Traded story with an old man and received a treasure map in exchange"
    },
    "domain_events_overview":{
        2: "Curse: a curse has befallen the domain",
        3: "Disease: a disease is propagating",
        4: "Food shortage: a grain silo has burned down/been infested",
        5: "Monster: a new lair is making trouble",
        6: "Followers: new group of adventurer/followers wants to join in",
        7: "Mercenaries: new group of armed mercenaries wants to join in",
        8: "Specialists: some far away specialists/trainer wants to join in",
        9: "Migration: new families arrives in the domain",
        10: "Discovery: ruins and artefacts are discovered",
        11: "Gifts: the population gifts the lord",
        12: "Blessings: the gods blesses the domain"
    },   
    "monster_type":{ // https://docs.google.com/spreadsheets/d/1ET8DTWlVJNWyjvRDrp_uvp8P25QUOQi5QbYnWOvIS4o/edit#gid=1111363162
        2: "dragon_type",
        3: "abheration_type",
        4: "lycan_type",
        5: "ogre_type",
        6: "animal_type",
        7: "orc_type",
        8: "human_type",
        9: "undead_type_type",
        10: "giant_type",
        11: "flyer_type",
        12: "mythological_type"
    },
    "world_event":{ 
        2 : "Divine Intervention (vs a plague, invasion, problem, etc.)",
        3 : "Demonic Incursion (1-3 a cult achieved their goal; 4-6 a mine somewhere dug too deep and awakened something)",
        4 : "A new prophecy or legend arises",
        5 : "New major discovery (1- Ancient and legendary race 2- Ancient and legendary race ruins/city 3- New monster 4- New land 5- Otherwordly subject 6- Ancient technological marvel)",
        6 : "Depletion of a major resource (1-2 mineral 3-4 animal/food 5-6 water)",
        7 : "Nothing",
        8 : "Massive Invasion (1-3 nomand/tribe/sea people against a kingdom, 4-6 a kingdom against another kingdom)",
        9 : "Cataclysmic Disaster (1- meteorite crash 2- huge hurricane and tornado 3- army of undead 4- massive famine and drought 5- magical firestorm 6- major plague and disease)",
        10 : "Fall of a mythical leader",
        11 : "Rise of a mythical leader",
        12 : "Rebellion, revolution, overthrow (1-3 popular movement 4-5 plotted by one kingdom against another 6 demonic)"
    }, 
    "assassin_result" : {
        2 : "Caught, turn back on his employer in the next month",
        3 : "Caught, tortured, tells about the plot",
        4 : "Caught, evade saying anything",
        5 : "Caught, evade saying anything, come back to master",
        6 : "No clear shot, nothing made, suspicions in the target entourage",
        7 : "No clear shot, nothing made, nothing known",
        8 : "Injure bodyguard and learn about the place (further attempt at +1), not caught",
        9 : "Dies attempting, injure target for 1 turn",
        10 : "Injure target for 1 turn",
        11 : "Wound target for 1d3+1 turn",
        12 : "Target save or dies. If passes, previous results. "
    },
    "settlement_obstacles":{ 
        2 : "cult preaching",
        3 : "plague",
        4 : "famine",
        5 : "riots",
        6 : "corrupt official",
        7 : "trade disruption",
        8 : "flooding",
        9 : "undead in cemetaries",
        10 : "prophecy of doom",
        11 : "internal strife",
        12 : "raid"
    }, 
    "regional_event": { // https://docs.google.com/spreadsheets/d/1ET8DTWlVJNWyjvRDrp_uvp8P25QUOQi5QbYnWOvIS4o/edit#gid=2008862648
        2: "world_event",
        3: "regional_event_disruption",
        4: "regional_event_discovery",
        5: "regional_event_political",
        6: "regional_event_mundane",
        7: "regional_event_mundane",
        8: "regional_event_mundane",
        9: "regional_event_political",
        10: "regional_event_discovery",
        11: "regional_event_disruption",
        12: "Reroll monster, 1d6 orcs are figthing it."
    }, 
    "regional_event_mundane" : {
        2 : "important wedding",
        3 : "funeral for someone important",
        4 : "noteworthy criminal is executed",
        5 : "tax increase, people not happy",
        6 : "a seasonal festival has taken big importance for the region (people investing will gain more influence/roll)",
        7 : "special feast bigger than normal held at court (1-2 anniversary of a ruler 3-4 anniversary of an event 5-6 birth of an importance npc)",
        8 : "nomad circus in the region (can be convinced to come to specific locations for bonus in social; require military asset to be assigned as security)",
        9 : "booming economy in a random settlement (+1 economy)",
        10 : "special tournament held in capital",
        11 : "important criminal or evil force (at random) has been captured and there will be a trial",
        12 : "bountinful land and/or animal"
    },
    "regional_event_political" : {
        2 : "new treaty signed between factions/domains",
        3 : "regional leader calls for important meeting to discuss the future and new developments (will require an herald/ambassador as a lord; random obstacle is destroyed next turn)",
        4 : "new trade route established with external",
        5 : "population boon and migration (create new settlement)",
        6 : "An assassin is sent after: 1-3 A guard captain or an important soldier 4-5: A magistrate/court wizard/priest of improtance 6: The regional owner If the domain owner recently attacked brigands or was a nuisance to a criminal activity, add +2 to the dice roll.  For the effect, see the Assassinate Event above. ",
        7 : "old grudges between domain/settlements",
        8 : "border dispute (1-3 external 4-6 internal)",
        9 : "new nomination for an important position",
        10 : "sudden dissaperance of a lord",
        11 : "someone from exterior claims regional inheritance",
        12 : "great tournament to find a new knight sponsered by a lady"
    },
    "regional_event_disruption" : {
        2 : "iron shortage (all prices up, more upkeep, nothing to buy for equip/wep)",
        3 : "disease is spreading (settlement ST or obstacle)",
        4 : "A very heinous, corrupted and disgusting crime has been committed and discovered in the capital. The whole region population is in shock (-1 to all SST)",
        5 : "People are roaring because of a witch that cursed someone. All domain with witch in their assets or wizard in an important position must do a ST or there will be riots (1 light infantry unit will pop and try to hang the person). ",
        6 : "disrupted harmony, temples are weird, people are feeling dreadful",
        7 : "monster migration (1-2 orcs 3-4 ogres 5 giant 6 a dragon)",
        8 : "food shortage, bad weather",
        9 : "pirate sea battle",
        10 : "caravan raids",
        11 : "crime wave",
        12 : "cult"
    },
    "regional_event_discovery" : {
        2 : "comet sigthing",
        3 : "eclipse sigthing",
        4 : "An holy men is traveling and helping the poor. +1 to everyone ST",
        5 : "group of adventurer clear a dungeon",
        6 : "ancient text discovery (new maps, new research)",
        7 : "ancient road discovered and then put into shape by regional owner",
        8 : "group of adventurer find a new dungeon",
        9 : "A tribe from afar comes into the region seeking to find the corpse and resting place of one of their ancestor, a great monster hunter. Create a new Place with 1d3 light infantry asset in it. ",
        10 : "earthquake shatter mountain and reveal temple",
        11 : "sinkhole discover ruins",
        12 : "new discovered shrine"
    },
    "domain_event":{ 
        2: "regional_event",
        3: "domain_event_statescraft",
        4: "domain_event_social",
        5: "domain_event_economy",
        6: "domain_event_mundane",
        7: "domain_event_mundane",
        8: "domain_event_mundane",
        9: "domain_event_military",
        10: "domain_event_social",
        11: "domain_event_statescraft",
        12: "domain_event_social"
    }, 
    "domain_event_mundane" : {
        2 : "justice (1-2: criminal that require a trial  3-4: a duel needs to be reviewed and adjudicated  5-6: a dispute between two important members (1-2 merchant, 3-4 guards, 5-6 small nobles or religious))",
        3 : "investigation (People (50%) or livestock (50%) are missing.  1-2: Passing threat (50%) or something that will rule itself out in the next month (50%) 3-4: Bandits, will contact leader to ask for ransom in the next month. May develop into an obstacle. 5-6: ST or monster Obstacles)",
        4 : "festival (1-2: People want to celebrate more a specific approaching holiday this year 3-4: People are celebrating more a festival and wants to prolong it. - Wealth, + Social 5-6: People wants a tournament organized where knights compete)",
        5 : "great talent (Roll a random specialist. Someone is revealed to be very talented and wants to join your court to provide this service.)",
        6 : "loyalty",
        7 : "hardwork",
        8 : "tax problem",
        9 : "criminal circle",
        10 : "smuggling circle",
        11 : "gifts",
        12 : "Something of value has been stolen (ancient map/treasury/magic item). 50% it is the domain owner items (not carried). It is stolen by: 1-2: thieves 3-4: cultists 5-6: political enemy or outside enemy (as per)"
    },
    "domain_event_statescraft" : {
        2 : "subaltern problems (1-3 infight, possible rebellion)",
        3 : "new ambassador from outside (He wants to learn more about the place. 1/6 he will steal something because he is a spy. Otherwise, he will give a treasure at the end (50% chance an actual treasure resource, 50% a player treasure including 50% of a magical item))",
        4 : "special visit (1: Great artist. He can (for gold) create a lasting piece of art that will enhance the domain owner fame.  2: Wizard. He will share spells and knowledge. 3: Knight errant elect to stay in the domain for 1d3 turn. He acts as a hero/unit of paladin. 4: Another domain leader coming to chat. They will be positive in their reaction.  5: Random specialist. He can temporarily lend his services if needed. 6: Wandering bard. He can be used to share a message to people or agitate populations. )",
        5 : "challenge (A local warlord/captain/bandit lord challenges the domain owner. 1-2: Single combat 3-4: Claim ownership and will rebel 5-6: Wants a portion of the domain)",
        6 : "trade matter (1-3: trade is damaged or problematic make WST, 4-5: new resource possibility for a good, +1 treasure 6: new trade is signed with another place (access to trade route if not already, if so, +1 treasure))",
        7 : "liege matter (1: need to build a fortification at a critical point and/or protect it 2: provide military service for an expedition (1d3 units) 3: tax (50%) or loan (50%) demanded. 1d3 treasure (or more depending on the size of the domain) 4: festival in honor of X (costly) 5: grant a new title 6: grant a gift (might be a location depending on how the loyalty goes))",
        8 : "diplomatic matter (1-2: a local mayor/leader ask to build something new (random building), or else the people will be unhappy (ST) 3-4: another domain ruler ask for a duel/joust IOT (50% prove worthiness, 50% fun and game to ciment an alliance with him) 5-6:  a group of (1-2 barbarian/primitives, 3-4 bandits, 5-6 mercenaries) wants to reform and sign a pact with you to become one of your force)",
        9 : "alliance & war discussion with external",
        10 : "one of your ambassador wants to go out and bring back info (1-3 he does, 4-5 he brings back gift, 6 he leaves and never return)",
        11 : "ancient hero pledges to the domain owner (family ties, land ties, alignment, etc.)",
        12 : "new followers"
    },
    "domain_event_economy" : {
        2 : "new settlement",
        3 : "new workshop",
        4 : "gods blessings",
        5 : "new crops",
        6 : "road matters (A nearby route has been broken. Extends movement and cause WST. Cause: 1-2: Quake 3-4: Sinkhole (50% it will create a discovery event) 5-6: Magical anomaly)",
        7 : "destruction (A fire/flood will target either crops/food (50%) or a random building assets (50%). 2/6 it is human-made (enemy, bandit), 2/6 it is magical, 2/6 it is natural)",
        8 : "wealth matters ( 1-3: PovertyST.  Grain problems (33% vermine 33% cave-in 33% fire). If failed, will bring famine.  4-6: IgnoranceST. Badly built building need repair and maintenance. If failed, will break. )",
        9 : "old treasure is found by s found by: 1-2: Peasants 3-4: Local militia 5-6: Hunters",
        10 : "trade stuff",
        11 : "gifts",
        12 : "exotic merchant visit"
    },
    "domain_event_military" : {
        2 : "undead matter (1: Ghost in the nearest ruin 2: Vengeful spirit in the nearest village cimetary 3: Small mine with a ghost 4: Ghouls at night in a village 5: Sights of zombies near the road 6: Skeleton are stoling corpses If not dealt with, becomes an obstacle",
        3 : "migration (If you accept them in your village etc., DST. If it works, they integrate well and you gain a random trait of the people. If it doesn't work, you will gain another event next turn to check again for obstacle. You can put them in a Place to transform it into a Location (village) if you dish out some treasure to start them off. If you refuse them, Disorder check to see if they steal/pillage)",
        4 : "assassin (An assassin is sent after: 1-3 A guard captain or an important soldier 4-5: A magistrate/court wizard/priest of improtance 6: The domain owner If the domain owner recently attacked brigands or was a nuisance to a criminal activity, add +2 to the dice roll.  For the effect, see the Assassinate Event above. )",
        5 : "garrison problem (The garrison is in uproar because of: 1-2: Corruption (not paid) 3-4: No action/not enough battle looting 5-6: Don't trust their leader)",
        6 : "mercenary company / group",
        7 : "dungeon raids",
        8 : "military matters (1-3: UprisingST. Bandits (50%) or monsters (50%) are creeping in. If failed, will create a new lair of monster.  4-6: DisorderST. Discontent within a local militia or mercenary group. If failed, will create unrest. )",
        9 : "local ruin clearing",
        10 : "henchmen",
        11 : "A spy is discovered.  1-3: It will reveal nothing 4-5: It will reveal his master 6: It will help the owner now. It has been sent by: 1-2: middle class of the domain to make sure they can track the domain owner 3-4: cultists of a secret cabal 5-6: political enemy or outside enemy (if any)",
        12 : "nomadic raids"
        },
    "domain_event_social" : {
        2 : "social matter (1-3: DespairST. There are speaks of a local dark sorcerer (1/6 true). If failed, will bring unrest (if true also, will bring a 50% a sorcerer alone 50% a cult). 4-6: CorruptionST. A local official (mayor, guard, tax collector) is said to have dabled in corruption and blackmail. If failed, will put an obstacle.)",
        3 : "death matters (Someone important in the community died and is replaced: 1: priest 2: a member of the servants 3: a mayor 4: a guard captain 5: a random elder 6: someone near the domain owner (i.e. follower or specialist))",
        4 : "archaeology matter (An archeologist/cartographer is interested in working for a while in your region. For 1 treasure (or the equivalent) and hosting (1 W upkeep for his stuff and 1 M upkeep for his protection), he will draw a map and help gather information around)",
        5 : "Something is discovered by peasants in one of the hex of the domain by  1-2: Peasants 3-4: Local militia 5-6: Hunters 1-2: Treasure (see opposite) 3: Mini-Dungeon 4: Dungeon 5: Ruins 6: a perfect horse/useful animal",
        6 : "curse (1-2: On a community 3-4: On a location/terrain 5-6: On the domain ruler If not dealt with, becomes an obstacle. Roll in the curses to determine which one and why. )",
        7 : "ancient discovery (1-2: An ancient monument is discovered. Count as a monument asset. 3-4: A shrine to the gods is discovered. Act as a shrine building. )",
        8 : "hearsays abound (Travellers have been passing through. 1d6 extra rumours)",
        9 : "Migration - If you accept them in your village etc., DST. If it works, they integrate well and you gain a random trait of the people. If it doesn't work, you will gain another event next turn to check again for obstacle. You can put them in a Place to transform it into a Location (village) if you dish out some treasure to start them off. If you refuse them, Disorder check to see if they steal/pillage",
        10 : "history (Fragments of an ancient map can be used (normal magical item treasure map) or sold for 1 treasure to merchants)",
        11 : "religious fervor (there is a religious fervor and more people give offering and become monk/paladins. +1 for 1d6 turn to your Social if you have a Temple of any level. Also easier to recruit templars and religious specialists)",
        12 : "prophecy (Someone received visions from the gods. 50% true, 50% false 1: A virgin girl in the countryside (2+ true) 2: A Paladin (100% true) 3: A merchant or small noble (6+ true) 4: Someone officiating rituals (i.e. a leader; 4+) 5: An old man/elder (4+) 6: A poor man without house or family (3+ true))"
    }
}
/* 
Add more events
Put them on a normal scale (not 2d6)
More ideas:
- Great robbery
- Desecration of a place
- Graveyard turn-over
- Prisoner's pardon
- Procession of ghosts
- Royal audience day
- Wild boar hunt
- 
*/

const underground_content_creation = 
{
    "level_theme" : {
        2: "environmental_theme",
        3: "environmental_theme",
        4: "traps_theme",
        5: "traps_theme",
        6: "boss_theme",
        7: "faction_theme",
        8: "faction_theme",
        9: "environmental_theme",
        10: "crypt",
        11: "maze",
        12: "settlement" + settlement_catchphrase
    },
    "faction_theme" : {
        2: "cult war" + faction_catchphrase,
        3: "cult war" + faction_catchphrase,
        4: "leadership war" + faction_catchphrase,
        5: "leadership war" + faction_catchphrase,
        6: "treasure war" + faction_catchphrase,
        7: "treasure war" + faction_catchphrase,
        8: "survival war" + faction_catchphrase,
        9: "survival war" + faction_catchphrase,
        10: "personal war revenge" + faction_catchphrase,
        11: "personal war hostage" + faction_catchphrase,
        12: "alliance" + faction_catchphrase
    }, 
    "environmental_theme" : {
        2: "cold & snow",
        3: "smoke",
        4: "ooze",
        5: "fungi & mold",
        6: "water",
        7: "fire",
        8: "water",
        9: "wind",
        10: "darkness",
        11: "glass & crystal",
        12: "death & decay"
    }, 
    "traps_theme" : {
        2: "mimic fest",
        3: "vietnam style traps on each body, treasure, door, etc.",
        4: "teleporters",
        5: "shifting maze",
        6: "half monsters roll are replaced by traps, event wandering monsters get stuck on traps",
        7: "lots of levers and mechanical doors",
        8: "many altars and statues that provide blessings and curses aka diablo 1",
        9: "sen's fortress (physical traps)",
        10: "doors and keys",
        11: "non-eucledian space", 
        12: "ancient and magical, full of puzzles and riddles"
    },
    "boss_theme" : {
        2: "a slayer/hunter/paladin that turned hollow and now guards the remnant of a great monster (and entrance to another level)",
        3: "a ghost that hunts the level and is extremely difficult to die (must break a crystal, etc.): he never runs but he always move forward towards the players non-stop (he's slower than them)",
        4: "boss is a mastermind that got advantage over other monsters (mind control, hostage, environmental bonus, etc.)",
        5: "boss is not hostile. It's mostly just a figurehead of the level where all other monster and factions interact with (e.g. Daughter of Chaos in Dark Souls). Sometimes have a personal bodyguard boss (e.g. Demons Souls)",
        6: "two bosses that each want to kill the other, see factions",
        7: "boss has a sidekick/pet/companion that complements him",
        8: "boss and retinue have invaded from outside or below",
        9: "boss is a prisoner of the level, might even be against other monsters",
        10: "boss is an inventor/wizard and trap oriented",
        11: "boss is fake, it's just a group of smaller creatures playing tricks", 
        12: "boss is an evil adventuring party"
    }, 
    "dungeon_downtime_event" : {
        2: "refurbish_event",
        3: "refurbish_event",
        4: "refurbish_event",
        5: "refurbish_event",
        6: "More treasure.",
        7: "Nothing.",
        8: "Less treasure.",
        9: "refurbish_oddities",
        10: "refurbish_oddities",
        11: "refurbish_oddities",
        12: "refurbish_oddities"
    }, 
    "refurbish_event": {
        2: "cave-in now blocks one of the main entrance or main paths to lower levels",
        3: "new tunnels create new sublevel (and monsters) and new entrances",
        4: "huge earthquake changes layout of the dungeon horizontally and vertically",
        5: "water sink parts of the dungeon",
        6: "another lair or faction decide to invade one level",
        7: "a nearby powerful monster invade and changes monster configuration",
        8: "rebellion of monsters",
        9: "invasion from lower level",
        10: "a group of monsters loot the place and decide to go to another dungeon",
        11: "new alliance in the dungeon",
        12: "new defenses in the dungeon (traps, doors, guards, magical defence)"
    },
    "refurbish_oddities" : {
        2: "assassins/hitmen from the dungeon (or its allies) are sent out after the players",
        3: "a new enigmatic leader joins the dungeon",
        4: "a powerful leader from another dungeon/faction/settlement takes interest in the dungeon and meddles in its affair (he may send a party of good/evil adventurers to do work in it)",
        5: "a prisonner from the dungeon has been rescued (or a monster taken captive) and new informations can be gained on the dungeon",
        6: "dungeon forces have performed raids and captured peasants/adventurers",
        7: "another group of adventurers goes in to kill and loot",
        8: "a unique and powerful npc/monster was seen near the dungeon recently",
        9: "the body of a powerful monster was fond near a new dungeon entrance",
        10: "a map (1-3 false, 4-6 true) of the dungeon has been found and is being sold",
        11: "new entrance has been discovered by adventurers",
        12: "a meteorite is said to have recently fallen on the dungeon"
    },
    "5rd_entrance": {
        2: "the entrance is collapsed (collapsed bridge, collapsed building, rock fall) and dangerous",
        3: "deadly trap entrance",
        4: "alarm",
        5: "multiple entrance but most lead to dead-ends",
        6: "key/password",
        7: "npc",
        8: "aggressive guardian",
        9: "atmosphere/only open special time/music",
        10: "entry with no visible exit (pit, mouth that shuts, teleporter, bottom of a lake, etc.)",
        11: "underwater/river entrance",
        12: "concealed entrance" 
    },
    "5rd_roleplay": {
        2: "riddle",
        3: "puzzle",
        4: "challenge",
        5: "permanent npc (ghost, golem, wandering spirit) that can offer help if you help them (set them to rest, restore them, repair them, give them something, etc.)",
        6: "impermanent npc (villain, adventurer, etc.) that has 4+ of betraying",
        7: "tricks",
        8: "a prisoner/rebel of the dungeon willing to help",
        9: "known npc/figure ally to dungeon",
        10: "puzzle/challenge to stop an alarm/reinforcement",
        11: "a neutral powerful monster",
        12: "someone willing to do something for the right price"
    },
    "5rd_setback": {
        2: "teleport",
        3: "pit",
        4: "maze change",
        5: "illusions",
        6: "chute.",
        7: "door/chest (but the key is elsewhere)",
        8: "booby trap",
        9: "mimic",
        10: "shortest way is blocked (but can be opened from the other side)",
        11: "environmental feature that blocks",
        12: "timer trap"
    }, 
    "5rd_climax": {
        2: "baddies links with goodies elsewhere",
        3: "unexpected power or enemies",
        4: "boss that uses items to get an advantage",
        5: "only the opponent has information about something (1-3 false, 4-6 true)",
        6: "environmental_boss",
        7: "boss_theme",
        8: "negotiating boss (hostage, information, etc.)",
        9: "many cues to vanquish/weaken boss are elsewhere in the dungeon",
        10: "spawn fight",
        11: "pet boss",
        12: "duel boss (or another unusual settling, such as a wager)"
    },
    "5rd_reward and revelation": {
        2: "a rival comes in for treasure",
        3: "misunderstanding (enemies and party could have been allies)",
        4: "minions try to peace out with treasures",
        5: "a strong final guardian lets them take a small reward or fight them for everything",
        6: "a secret is revealed for the dungeon (new level, new treasure, new shortcut, etc.)",
        7: "lore_dump",
        8: "find npcs to recover (promised reward, important npc, etc.)",
        9: "cool treasure (artefact, shrine, etc.)",
        10: "something that leads elsewhere (map, key, etc.)",
        11: "large amount of cursed treasure",
        12: "everything starts to crumble indiana jones style"
    },
    "environmental_boss": {
        2: "fight over bridge",
        3: "portal fight",
        4: "ledges fight",
        5: "fight with floor (web, rickety, rotting floorboard, pits, etc.)",
        6: "fight with fire",
        7: "fight with traps",
        8: "fight with explosives/spores",
        9: "darkness fight",
        10: "falling ice/stalagmites/etc.",
        11: "wall of spikes",
        12: "magic stuff that boosts the opponents"
    },
    "lore_dump" : {
        2: "dark revelation about a local important npc",
        3: "dark revelation about a festival/ruin/location important to normal people",
        4: "dark revelation about a legend",
        5: "more info about an artefact",
        6: "more info about the region history",
        7: "more info about megadungeon (access, purpose, etc.)",
        8: "map",
        9: "shrine emplacement",
        10: "access to an npc",
        11: "something about game mechanic",
        12: "something about gods"
    },
    "dungeon_room_description": {
        2: "cells, kernel or prison",
        3: "crypt",
        4: "shrine",
        5: "crafting and maintenance",
        6: "storage",
        7: "empty/beyond recognition",
        8: "makeshift quarters for inhabitants",
        9: "barrack/guardroom",
        10: "chapel",
        11: "library/study",
        12: "laboratory"
    },
    "dungeon_lore_what" : {
        2 : "Settlement",
        3 : "Subterranean delving",
        4 : "Tower or fortification",
        5 : "Temple",
        6 : "Crypt or tomb complex",
        7 : "Crypt or tomb complex",
        8 : "Crypt or tomb complex",
        9 : "Temple",
        10 : "Subterranean delving",
        11 : "Tower or fortification",
        12 : "Natural caverns"
    },
    "dungeon_lore_where" : {
        2 : "Beneath a city",
        3 : "Graveyard",
        4 : "In a chasm",
        5 : "In the open",
        6 : "Mountain",
        7 : "Island/Coast cave",
        8 : "Beneath a city",
        9 : "Graveyard",
        10 : "In a chasm",
        11 : "In the open",
        12 : "Mountain"
    },
    "dungeon_lore_hook" : {
        2 : "Clearing Ruins: Settlers plan to move into an abandoned settlement or stronghold. Before they arrive, the PCs need to scout the area and clear out any monsters or other dangers that are present. The ruins need not be in a remote area—they could even be within (or beneath) a major settlement.",
        3 : "Contacting a Lost Civilisation: The PCs discover a long-lost race in a fantastic location. They may have once been human, but are now adapted to their strange environment. For example, they may have reverted to bestial behaviour or may be adapted to subterranean life, with pale skin and infravision.",
        4 : "Destroy an ancient evil (re-awakened because of a cult, someone dug too deep, etc.)",
        5 : "Investigating/Scouting an outpost (evil/chaos)",
        6 : "Rescuing prisoners or Escaping (as prisoners)",
        7 : "Visiting a lost shrine (item, curse, etc.) to recover ruins/artefacts",
        8 : "Exploring the unknown (hired to map out, given a map as a treasure, etc.)",
        9 : "Visiting a sacred site: In order to consult with an oracle, remove a curse, or find a holy relic, the PCs must journey to a sacred site (e.g. a shrine or temple). The exact location of the site is usually a matter of conjecture.",
        10 : "Recently destroyed by an unknown force",
        11 : "The area had been sealed shut for centuries and now the curse has lifted no one knows what's inside",
        12 : "escapes from it tells gruesome stories (or the players are the escapees)"
    },
    "dungeon_lore_purpose" : {
        2 : "Vault",
        3 : "Prison",
        4 : "Library/Research/Knowledge",
        5 : "Fortress/Castle/Stronghold/HQ",
        6 : "Temple/Religion (corrupted temple, forgotten god, destroyed demon cult, demon cult, destroyed legit religion, nature/druid)",
        7 : "Crypt/Tomb (unknown race, dragons, somewhat recent human, ancient empire, giants, undeads)",
        8 : "death trap",
        9 : "mine",
        10 : "gate(planar)/path to somewhere else/etc.",
        11 : "Laboratory",
        12 : "maze"
    },
    "dungeon_lore_importance" : {
        2 : "An artefact is rumoured to be there",
        3 : "An ancient king built/used it previously and it has a significance for people of the region (and also his treasures)",
        4 : "An ancient evil has been awakened there (or elsewhere and went there), people are very afraid of what might happen",
        5 : "A faction (from inside or outside) took residence there and are conducting raids on the region",
        6 : "A traitor (or someone that comitted an horrible crime) decided to go there to hide and he's using it as a base of operation or something",
        7 : "Deep within is supposed to be an answer to something important (related to the gods, to an impending doom, to a problem in the region, etc.)",
        8 : "treasure or resources",
        9: "A holy site built in ancient times by a religion which still exists today. It was ceremonially sealed to mark the end of some forgotten religious schism. What few pilgrims still visit must be content to make their prayers at the entrance",
        10: "A defense built by a subterranean civilization. They dug ever upwards, not realizing until too late that eventually the solid earth would give way to a terrifying sky. Believing they had discovered hell, they built this place to prevent any horrible surface creatures from reaching the wholesome lands below.",
        11: "The death palace of an ancient conqueror queen who demanded that each of her subject people’s build a grand home for her. This particular one was filled with confusing corridors and traps, in the express hope that she might visit someday.", 
        12: "the dungeon is alive with a will and a mind: it brings people in and moves around the earth",
    },
    "dungeon_lore_location" : {
        2: "beneath a city",
        3: "beneath a ruin",
        4: "graveyard",
        5: "beneath a kurgan",
        6: "in a chasm",
        7: "in the normal terrain",
        8: "under ruins",
        9: "in a grotto",
        10: "on a hill",
        11: "on a mountain",
        12: "on a small island/coast cave"
    },
    "generic_room_dressing" : {
        0 : "Throne room",
        1 : "Antechamber",
        2 : "Amphitheather",
        3 : "Audience hall",
        4 : "Courtroom",
        5 : "Great Hall",
        6 : "Bestiary/kernel",
        7 : "Cage",
        8 : "Cell",
        9 : "Oubliette",
        10 : "Prison",
        11 : "Stockade",
        12 : "Arena",
        13 : "Banquet",
        14 : "Gallery",
        15 : "Maze",
        16 : "Museum",
        17 : "Pool",
        18 : "Bathroom",
        19 : "Bedroom",
        20 : "Dormitory",
        21 : "Reception",
        22 : "Foyer",
        23 : "Salon",
        24 : "Armory",
        25 : "Barrack",
        26 : "Guardroom",
        27 : "Gymnasium",
        28 : "Interrogation",
        29 : "Training",
        30 : "Chapel",
        31 : "Crypt",
        32 : "Embalming Chamber",
        33 : "Meditation chamber",
        34 : "Shrine",
        35 : "Temple",
        36 : "Classroom",
        37 : "Divination chamber",
        38 : "Laboratory",
        39 : "Library",
        40 : "Observatory",
        41 : "Study",
        42 : "Kitchen",
        43 : "Forge",
        44 : "Office",
        45 : "Garage",
        46 : "Workshop",
        47 : "Service room",
        48 : "Clear and earthy",
        49 : "Foggy and salty",
        50 : "Smoky",
        51 : "Hazy and dank, moldy",
        52 : "Stale, obscured",
        53 : "Dusty and dry",
        54 : "Chlorine and difficult to breath",
        55 : "Putrid and damp",
        56 : "Yellow Mold/slime",
        57 : "Fire/cold",
        58 : "Activated repeating trap",
        59 : "Huge gap/hole",
        60 : "cave-in",
        61 : "Trick",
        62 : "bridge",
        63 : "vermin/fungi",
        64 : "Toxicity that needs to be purified",
        65 : "flooding",
        66 : "altar, statue, etc.",
        67 : "arch, pillars, etc. (peut cacher la vue)",
        68 : "oil, stuff inflammable, etc.",
        69 : "ropes, ladder, etc.",
        70 : "fireplace, fourneau, etc.",
        71 : "decoration (fresco, mosaic, etc.)",
        72 : "food, waste, latrine, etc.",
        73 : "plants/fungi, animals, etc.",
        74 : "instruments, tools, etc.",
        75 : "bath, pool, etc.",
        76 : "water (fountain, etc.)",
        77 : "holes in wall/floor",
        78 : "Stuck/inaccessible door/trap",
        79 : "barricade",
        80 : "used trap",
        81 : "scratch on walls etc.",
        82 : "furniture with equipements on/in",
        83 : "writings",
        84 : "strange substance",
        85 : "magical",
        86 : "magical automation (unseen servant, etc.)",
        87 : "protection (protective shield sur une porte, corridor, coffre)",
        88 : "physical effect (fire door, items floating, no gravity)",
        89 : "visual effect (no shadows, etc.)",
        90 : "visual illusion (illusory door/angles, etc.)",
        91 : "auditory illusion (sounds, music, etc.)",
        92 : "magical utility (magical lights, etc.)",
        93 : "antimagic field (general, or specific like anti-divination, etc.)",
        94 : "Markings",
        95 : "Hieroglyph",
        96 : "Mosaics",
        97 : "Corpses",
        98 : "Pile of wood",
        99: "nothing"
    },
    "dungeon_room_challenge" : {
        0 : "Wraith/Ghost that cannot be hurt by any weapon forged by mortal hands",
        1 : "Glass sphere full of gems and venomous snakes",
        2 : "Ladder that climb up through a fog of unconsciousness",
        3 : "Invincible carbuncle turtle with a gem on its forehead. When it sees someone, it hide its head.",
        4 : "The chest can only be opened if it falls 1000'",
        5 : "The chest can only be opened inside a stomach.",
        6 : "To open the door, you need to fill a bowl of water that's standing in volcanic heat (i.e. all water will evaporate).",
        7 : "Underground door that only open with sunlight.",
        8 : "Key for a lock at the bottom of an acid lake.",
        9 : "A long underwater tunnel",
        10 : "A huge gem that blocks a volcano from erupting.",
        11 : "A beast whose back hide is impervious to all weapon",
        12 : "Diamond dust mixed with normal flour. Nobody will take it if it's still mixed.",
        13 : "Magical basilisk that will return to flesh all the monsters put to stone previously",
        14 : "Door that require a live eye to be sacrified on it to open",
        15 : "Moat full of crocodile",
        16 : "Completely silent room (even for players). There is a countdown (water is filling).",
        17 : "Knight and Knave",
        18 : "Treasure on an alarm",
        19 : "Everything is an illusion: the treasure chest (invisible), the furniture, the monsters",
        20 : "Door made of a tree. The more you chop, the more it grows.",
        21 : "A wind tunnel extinguish all flame and pushes people up to 300 lbs",
        22 : "A treasure is up the the air (about 50-60 feet). The room is in a cone shape and is dripping with a thick and slimy liquid.",
        23 : "Alarm",
        24 : "Animating Object",
        25 : "Falling Blocks",
        26 : "Illusions",
        27 : "Shifting Architecture",
        28 : "Strange Waters",
        29 : "Teleports",
        30 : "Trapdoors",
        31 : "Voices",
        32 : "Invisible bridge leading to a treasure",
        33 : "Appearing/dissapearing bridge at random intervals",
        34 : "Treasure stuck on a monster (maybe a sword in the mouth)",
        35 : "A treasure withold a trap from springing",
        36 : "Demon trapped with a treasure in a pentagram (forcefield) with a lever nearby that open it",
        37 : "Mislabeled potion",
        38 : "Vines and ropers limbs the only way of going over a pit of monsters",
        39 : "Chest with coins that damages others when you pick them up",
        40 : "A trap that makes the character invisible, silenced and paralyzed",
        41 : "Maze with invisible wards",
        42 : "A very visible chest in the middle of the room on a pedestal with a ray of light on it. There is no trap and it's a treasure. Opening it DEACTIVATE the next door trap.",
        43 : "Tesseract Room",
        44 : "Altar that reduce anything put on it by 1/3",
        45 : "A firewall with a lever inside that closes the firewall",
        46 : "Body (treasure) of an adventurer at the bottom of a poisonned spike trap",
        47 : "Illusionary fire wall",
        48 : "A winter monster in here. The room is crazy cold. Frozen particles that sticks to people slow and them down. A treasure is covered in ice.",
        49 : "A wooden door on the ground all splintered, but there is still another wooden door on the frame... (mimic)",
        50 : "A room with an unusual light source (like a torch in a tube in the floor or something) with a lot of shadows. One or more of those shadows are living, and hungry.",
        51 : "A room with a man hanging at the far end, his wrists and ankles in shackles, chained to the wall and over the door. Walking closer to him tightens the chains (like a rack). He screams in pain and begs for mercy every time they tighten. Could be an illusion- you decide how much to mess with your characters' sense of right and wrong.",
        52 : "In a corridor: a massive, tsumani-style tidal wave immediately rises up to crush the characters. Run away in fear or face it- Turns out to be illusion.",
        53 : "A room with a hyper-aging field in it (turns 1 minute into one year). Inside the field, the room has given way to a lush forest with flowers that bloom, turn to fruit and drop all in the space of a minute. There's a door on the other side.",
        54 : "A simple looking room with a locked door and a key on a pedestal. When the characters pick up the key and try to insert it into the lock, it crumbles to dust the instant it touches the keyhole. The real key is still in the room, but it's hidden somewhere, either under the pedestal",
        55 : "Ghoulish Prisoners http://castletriskelion.blogspot.com/2016/03/upper-dungeons-level-three-28-ghoulish.html",
        56 : "Door of Shadow (https://www.youtube.com/watch?v=A7i5MdIt4Q8)",
        57 : "Pacifist Door",
        58 : "Monsters with different random wands fighting in the room (both between themselves and against the player)",
        59 : "All weapons are animated in the room",
        60 : "A machine that switches body but you can't switch reverse (Stargate)",
        61 : "Antimagic room",
        62 : "Altar that produces food. 50% it's not edible",
        63 : "A big mouth monster chained near a huge stone door. If fed, it will open the door",
        64 : "A goblin under an illusion spell uses his newfound power to appear as a dragon to request (weird and trivial) things of the party.",
        65 : "All players entering the room will speak one random language for one hour and lose all other language they already had",
        66 : "One way door (forcefield)",
        67 : "A altar of the god will QUEST the player that touches it",
        68 : "One magical orb in the room will attract all metal (super magnet)",
        69 : "A treasure on an altar behind a forcefield. You need to deactivate it with a lever. However, it will spawn one completely random creature.",
        70 : "Room filled with smoke and smog. Can't breathe or see. 1/6 there is a monster",
        71 : "A treasure (ideally a weapon) holds a whole block and stone structure. Taking it will make everything crumble.",
        72 : "Fake countdown room with useless levers",
        73 : "The room is full of invisible and illusionary stuff. However, mirrors will present the true state of the room.",
        74 : "Amaunator style room with a patterns/riddle on the ground on plates",
        75 : "Two level room. The second level has a treasure or a door. There is a scale (putting weight will put the other side of the scale higher).",
        76 : "Color creation mirror puzzle (red, blue, yellow and the door is green).",
        77 : "The Beholder Puzzle",
        78 : "Match the painting: there is a painting of the room with one small difference (an object at a specific spot). The object need to be found and placed.",
        79 : "There is a pit with spikes at the bottom with a rope going over it. If you grab the rope, it will activate another trap in the room for the rest of the adventurer.",
        80 : "A richly decorated door with a lion's face door knocker. However there is no knocking ring: the door only opens when knocked.",
        81 : "Paint me red to open me (blood works)",
        82 : "There is a painting of a room. Whoever sleeps or rest in the room will be transported to the room in the picture (somewhere else in the dungeon).",
        83 : "(Door or treasure) only opens when there is no light",
        84 : "The Gushing Door, this door opens easily but it's been enchanted so that when it's opened it spews a powerful jet of water that pushes anyone infront of it back. So the players need someway to push against the stream or evade it.",
        85 : "There are three doors: one green, one blue, one red. Nothing special about them.",
        86 : "Two gargoyles beside a door. They always look at the people and will extend their claw towards anyone approaching the door. However they don't attack.",
        87 : "Gives direction (50% its a false giver)",
        88 : "A flyer gem that gets away from adventurers",
        89 : "Lock one exit, unlock the other",
        90 : "Door: Every third time used, it casts a spell on any who pass",
        91 : "Door: Is rotten",
        92 : "Door: Is invisible",
        93 : "Oddities door: is hot",
        94 : "Oddities door: is magnetized",
        95 : "Oddities door: door vanishes when closed",
        96 : "Oddities door: is a mirror",
        97 : "Oddities door: is a curtain of darkness",
        98 : "Magic Mouth Riddles (https://docs.google.com/spreadsheets/d/1pfa6ATwSThuScW2wM_k8zJ0uKYyY3ZracoO3By3k_Es/edit#gid=0)",
        99 : "Magic Mouth Riddles (http://dndspeak.com/2018/11/100-riddles-and-their-answers/)"
    },
    "unique_traps" : {
        0 : "Open pit onto deadly spikes. Both sides of the pit are sloped into it and greased up.",
        1 : "Concealed pit into piranha-filled water.",
        2 : "Metal sword audibly humming, hooked up to electric charge.",
        3 : "Green Devil Face with gaping mouth. Anything going into the mouth is annihilated.",
        4 : "A fishing rod propped up and cast into a lake. The rod is covered in fast-acting glue and tension on the line triggers a springboard beneath the victim, casting them into the lake.",
        5 : "A column of light. When a being enters they are frozen, and an evil duplicate of them is conjured. The victim is only freed when the duplicate is killed.",
        6 : "Walls dotted with arrow-slots. Any movement in front of them fires the arrow, but each hole only has one arrow.",
        7 : "Upside-down spiked pit on the ceiling. Gravity is reversed under the pit.",
        8 : "Clusters of bright orange fungus growing on one or more corpses. Any disturbance triggers a deadly spore explosion.",
        9 : "Glass vials of green slime hung from a ceiling, a guard with a crossbow watching from behind a barricade.",
        10 : "Two panes of glass blocking passage, filled with deadly bugs.",
        11 : "Shimmering, thick air that slows all movement down to a quarter of normal. Guards with missile weapons waiting around the corner.",
        12 : "Glossy, friction-less floor and spiked walls.",
        13 : "A metal room filled with crushed remains, visible moving parts to floor, and a sealed door leading forward. Two buttons. One opens the door, the other seals all doors and commences the crushing process.",
        14 : "A peephole blocked up with glass fragments. Breaking the fragments releases a toxic gas.",
        15 : "Giant chomping blade that must be passed through to progress. Visible pressure plate on either side. Blades are triggered when a pressure plate is released, unless the other plate is also depressed. Going slow poses no risk.",
        16 : "Stuck door with a gold snake-head handle. The handle will bite and poison anybody putting their hand near, unless they slip a coin into its mouth, allowing safe passage through the door.",
        17 : "Disguised springboard, launching the victim straight up into the air. There is a hanging bar they can grab to avoid the fall, but weight on the bar triggers the release of giant spiders onto it, and rained down onto anyone below.",
        18 : "Room dusted with a deadly white powder. Any rapid movement disturbs the powder, sending it into the air and then the lungs of anybody breathing nearby. Hidden pressure plate in the center of the room triggers a loud siren, alerting any nearby threats.",
        19 : "Locked door, key visible in a stinky fountain. The liquid is fast-acting acid, the key made from a special resistant ceramic.",
        20 : "Rope bridge primed to split in the middle when the majority of the crossing weight has passed the mid-point. The characters can grab their half of the bridge and climb back up easily enough.",
        21 : "Damp, underwater tunnel with glowing treasure at a visible dead end. A pressure plate halfway through triggers flooding of the tunnel. A normal human could get back to the tunnel exit with breath to spare, but not if they try to grab the treasure first.",
        22 : "Two doors in sequence. First sprays anybody passing through with highly flammable liquid. Second spits out a flash of flame, harmless on its own but enough to ignite the liquid.",
        23 : "Sloped walkway in a freezing cold room. Pressure plate halfway up releases a flood of water down the slope, freezing near instantly.",
        24 : "Haunted pots, audible screaming within, placed on wobbly plinths on an uneven floor. Any sort of weight on the floor is sure to release at least one angry wraith.",
        25 : "Pool of lava, a metal idol partially submerged in the center. It's glowing hot, but valuable.",
        26 : "Big metal skull with a gem in its open, toothy mouth. Obviously it bites anything put inside.",
        27 : "Quicksand, just like in cartoons.",
        28 : "Giant spider lair, huge boulders suspended in the highest webs. Too much disturbance might release a boulder, fire will definitely release them all.",
        29 : "Bear trap.",
        30 : "Sealed door with two identical handles on the adjacent wall. One releases snakes from above, the other opens the door.",
        31 : "Hidden jet spraying you with disgusting smelling liquid. Not harmful in itself, but might attract scent-based creatures or warn inhabitants that you've been poking around where you shouldn't have.",
        32 : "Pressure plate triggers part of the floor to move down, slowly transporting the victim into the now-visible lair of a horrible monster.",
        33 : "Giant cauldron filled with treasure. Any weight added to the cauldron causes the lid to slam shut and a fire to spark to life underneath it."
    },
    "dungeon_room_type" : {
        2 : "dungeon_room_unique",
        3 : "dungeon_room_special",
        4 : "dungeon_room_traps",
        5 : "dungeon_room_treasures",
        6 : "dungeon_room_treasures",
        7 : "EMPTY",
        8 : "dungeon_room_monsters",
        9 : "dungeon_room_monsters",
        10 : "dungeon_room_other",
        11 : "dungeon_room_traps",
        12 : "dungeon_room_challenge",
    },
    "dungeon_room_other" : {
        2 : "dungeon_broken_access",
        3 : "dungeon_markings",
        4 : "dungeon_camping_spot",
        5 : "dungeon_clue",
        6 : "monster_clue",
        7 : "monster_clue",
        8 : "monster_clue",
        9 : "dungeon_clue",
        10 : "camping_spot",
        11 : "dungeon_markings",
        12 : "broken_access",
    },
    "dungeon_broken_access" : {
        2 : "Blocked well/pit",
        3 : "Cave-in corridor",
        4 : "Cave-in stairs",
        5 : "Cave-in door",
        6 : "Flooded/Lava/Magic/etc. corridor-slope",
        7 : "Magically sealed door",
        8 : "Blocked well/pit",
        9 : "Cave-in corridor",
        10 : "Cave-in stairs",
        11 : "Cave-in door",
        12 : "Flooded/Lava/Magic/etc. corridor-slope",
    },
    "dungeon_markings" : {
        2 : "X was here",
        3 : "Something insulting about another race from someone of a race",
        4 : "Message warning against something unexistant (or not existant anymore)",
        5 : "Message warning against something",
        6 : "Message warning against something down",
        7 : "Religious/lore markings",
        8 : "X was here",
        9 : "Something insulting about another race from someone of a race",
        10 : "Message warning against something unexistant (or not existant anymore)",
        11 : "Message warning against something",
        12 : "Message warning against something down",
    },
    "dungeon_camping_spot" : {
        2 : "Doors that can be locked from within",
        3 : "Small abandonned camp with a fire spot in the center",
        4 : "Fireplace (or equivalent) and bed furnitures",
        5 : "Some food equipment/fire and leftover food",
        6 : "Utility room (kitchen, artisan room, etc.) that's self-preserved",
        7 : "Assembly/meeting room with barricade material",
        8 : "Doors that can be locked from within",
        9 : "Small abandonned camp with a fire spot in the center",
        10 : "Fireplace (or equivalent) and bed furnitures",
        11 : "Some food equipment/fire and leftover food",
        12 : "Utility room (kitchen, artisan room, etc.) that's self-preserved",
    },
    "dungeon_clue" : {
        2 : "Slits to see into another room",
        3 : "Slits/cage to see a level below (or something about it)",
        4 : "Room with observation points or observation on other room/sector/level",
        5 : "Journal about layout",
        6 : "Journal about fluff",
        7 : "Journal about traps",
        8 : "Slits to see into another room",
        9 : "Slits/cage to see a level below (or something about it)",
        10 : "Room with observation points or observation on other room/sector/level",
        11 : "Journal about layout",
        12 : "Journal about fluff",
    },
    "dungeon_monster_clue" : {
        2 : "Markings of random monster",
        3 : "Parts of a random monster",
        4 : "Journal telling of a random monster",
        5 : "Journal telling of a fixed monster",
        6 : "Equipment used to kill/attack or broken by a random monster",
        7 : "Corpse(s) of a random monster",
        8 : "Markings of random monster",
        9 : "Parts of a random monster",
        10 : "Journal telling of a random monster",
        11 : "Journal telling of a fixed monster",
        12 : "Equipment used to kill/attack or broken by a random monster",
    },
    "dungeon_room_monsters" : {
        2 : "dead", 
        3 : "dungeon_monster_tactical",
        4 : "dungeon_monster_environmental_impairement", 
        5 : "dungeon_environmental_danger",
        6 : "Resting/Eating",
        7 : "Normal",
        8 : "Resting/Eating", 
        9 : "dungeon_monster_level_design",
        10 : "Normal",
        11 : "Prisoner",
        12 : "Figthing another monster",
    },
    "dungeon_monster_level_design" : {
        2 : "Cluster of rooms combat",
        3 : "Fithing near/inside a loop (monster can encircle)",
        4 : "Monsters have high ground",
        5 : "Layout: wall, statues, pillars, porticulises, arrow slits",
        6 : "Ongoing traps: swinging axe blades, stinging vines, spike pits, etc.",
        7 : "Ladders and platforms with monsters",
        8 : "Cluster of rooms combat",
        9 : "Fithing near/inside a loop (monster can encircle)",
        10 : "Monsters have high ground",
        11 : "Layout: wall, statues, pillars, porticulises, arrow slits",
        12 : "Ongoing traps: swinging axe blades, stinging vines, spike pits, etc.",
    },
    "dungeon_monster_environmental_impairement" : {
        2 : "Fog/weather/etc. that prevent vision, spell, missile",
        3 : "Pots of oil, water, beer that can be pushed over or moved easily",
        4 : "Submerged monster and/or underwater combat",
        5 : "A boss/leader is out of sight or behind heavy cover/ledge/high ground",
        6 : "Players are locked with the monsters and the lever is on the other side of the room or behind them (the door to this room should be a portculis with a lever)",
        7 : "Wind coming from somewhere that shut off torches (or underwater fight with no water)",
        8 : "Fog/weather/etc. that prevent vision, spell, missile",
        9 : "Pots of oil, water, beer that can be pushed over or moved easily",
        10 : "Submerged monster and/or underwater combat",
        11 : "A boss/leader is out of sight or behind heavy cover/ledge/high ground",
        12 : "Players are locked with the monsters and the lever is on the other side of the room or behind them (the door to this room should be a portculis with a lever)",
    },
    "dungeon_environmental_danger" : {
        2 : "Roof/ceiling is falling down (icicles, stalagmites, etc.) which causes division and damage",
        3 : "Fragile floor (cobweb, rotten wood, ladders, etc.)",
        4 : "Cliffs and ledges (people that fall over can be picked up like in Vermintide)",
        5 : "The more you stay, the worst it is: closing walls, rising water, falling rocks, earth tremors, creeping lava, acid geysers, gusting winds, lightning surges",
        6 : "Interact in a stark manner with one element (fire, water, air, earth, etc.) to open a door.",
        7 : "Yellow mold all over the place. Monster is immune to it or inside of it.",
        8 : "Roof/ceiling is falling down (icicles, stalagmites, etc.) which causes division and damage",
        9 : "Fragile floor (cobweb, rotten wood, ladders, etc.)",
        10 : "Interact with levers to open door, lift bridges, etc.",
        11 : "Explosive fungus/statue heads/flasks that causes 1-2 poison 3-4 confusion 5-6 sleep",
        12 : "Flame engulfed room: (1-3) magical, (4-6) non-magical. Monster is immune to it or inside of it.",
    },
    "dungeon_monster_tactical" : {
        2 : "Ambush",
        3 : "Reinforcements",
        4 : "Using a magic item (wands, etc.) or traps",
        5 : "Altered terrain (grease, oil, spell, etc.)",
        6 : "Players have to intervene to: stop a ritual, get a treasure that's being lowered into destruction/acid/lava/etc., stopping an execution, etc. ",
        7 : "A third party is upset about the fight and attack both sides",
        8 : "Ambush",
        9 : "Reinforcements",
        10 : "Using a magic item (wands, etc.) or traps",
        11 : "Altered terrain (grease, oil, spell, etc.)",
        12 : "Players have to intervene to: stop a ritual, get a treasure that's being lowered into destruction/acid/lava/etc., stopping an execution, etc. ",
    },
    "dungeon_room_special": {
        2 : "dungeon_room_npc",
        3 : "dungeon_room_adventurers",
        4 : "dungeon_monsters_interactive",
        5 : "dungeon_monsters_interaction",
        6 : "dungeon_monster_native",
        7 : "dungeon_weird",
        8 : "dungeon_environmental_danger",
        9 : "dungeon_room_slowdown",
        10 : "dungeon_room_challenge",
        11 : "dungeon_room_leveldesign",
        12 : "dungeon_room_magical",
    },
    "dungeon_weird" : {
        2 : "Moaning walls",
        3 : "Altar of sacrifice",
        4 : "Blindness/darkness/anti-magic room",
        5 : "Shapechanging or shapealtering magic. (e.g. The more you walk into this room, the smaller you get. The more you walk out, the more you regain your form).",
        6 : "Room full of blood/bones/etc.",
        7 : "Droning noise and/or special visions",
        8 : "Moaning walls",
        9 : "Altar of sacrifice",
        10 : "Blindness/darkness/anti-magic room",
        11 : "Shapechanging or shapealtering magic. (e.g. The more you walk into this room, the smaller you get. The more you walk out, the more you regain your form).",
        12 : "Room full of blood/bones/etc.",
    },
    "dungeon_room_leveldesign" : {
        2 : "Door shifting mechanism",
        3 : "Hourglass pit with corridors aka FF7",
        4 : "Room rotate",
        5 : "Trapdoor to hidden area or another level",
        6 : "One way teleport/door",
        7 : "Walking in means you walk backward in the dungeon",
        8 : "Door shifting mechanism",
        9 : "Hourglass pit with corridors aka FF7",
        10 : "Room rotate",
        11 : "Trapdoor to hidden area or another level",
        12 : "One way teleport/door",
    },
    "dungeon_room_npc" : {
        2 : "Talking wall/statue",
        3 : "Ghost",
        4 : "Dying adventurer with information",
        5 : "Non-treathening monster exchanging information",
        6 : "Random monsters guarding prisoner(s)",
        7 : "NPC figthing off a random monster",
        8 : "Talking wall/statue",
        9 : "Ghost",
        10 : "Dying adventurer with information",
        11 : "Non-treathening monster exchanging information",
        12 : "Random monsters guarding prisoner(s)",
    },
    "dungeon_room_adventurers" : {
        2 : "Injured, coming from below",
        3 : "Uninjured, coming from below",
        4 : "Stuck in a trap/special",
        5 : "Prisoners",
        6 : "In combat with monsters",
        7 : "Possessed, parasited, spies, etc.",
        8 : "Injured, coming from below",
        9 : "Uninjured, coming from below",
        10 : "Stuck in a trap/special",
        11 : "Prisoners",
        12 : "In combat with monsters",
    },
    "dungeon_monsters_interactive" : {
        2 : "Riddle monster (ghoul, sphinx, living statue, etc.)",
        3 : "Golem guarding a door/treasure",
        4 : "Monster prisoners",
        5 : "Monster merchant",
        6 : "Monster trying to solve a dungeon puzzle",
        7 : "Gauth protecting a corridor or Beholder protecting a treasure",
        8 : "Riddle monster (ghoul, sphinx, living statue, etc.)",
        9 : "Golem guarding a door/treasure",
        10 : "Monster prisoners",
        11 : "Monster merchant",
        12 : "Monster trying to solve a dungeon puzzle",
    },
    "dungeon_monsters_interaction" : {
        2 : "Dealing",
        3 : "Slaving/herding",
        4 : "Post-fight",
        5 : "Faction fight",
        6 : "Working together to defend/find",
        7 : "Two groups trying to get out of the dungeon and/or opening a new way",
        8 : "Dealing",
        9 : "Slaving/herding",
        10 : "Post-fight",
        11 : "Faction fight",
        12 : "Working together to defend/find",
    },
    "dungeon_monster_native" : {
        2 : "Roper/Piercer",
        3 : "Slime/Pudding",
        4 : "Gelatinous Cube",
        5 : "Insects/Crawler eating at corpses/leftovers",
        6 : "Giant rats/animals wandering around or stuck in something",
        7 : "Crypt with skeletons/ghous/mummy",
        8 : "Roper/Piercer",
        9 : "Slime/Pudding",
        10 : "Gelatinous Cube",
        11 : "Insects/Crawler eating at corpses/leftovers",
        12 : "Giant rats/animals wandering around or stuck in something",
    },
    "dungeon_room_slowdown" : {
        2 : "Animating objects",
        3 : "Wind tunnel (slows down and cost torches)",
        4 : "Illusionary walls, doors, etc. that creates a small maze/lost of time",
        5 : "A illusonary (strong) monster projected through a crystal",
        6 : "Treasure that is clearly trapped/hidden behind something dangerous/etc. so that by not taking in the danger, you also don't take in the treasure",
        7 : "Swampy corridor that takes time (1/6 there is a hidden monster in it)",
        8 : "Animating objects",
        9 : "Wind tunnel (slows down and cost torches)",
        10 : "Illusionary walls, doors, etc. that creates a small maze/lost of time",
        11 : "A illusonary (strong) monster projected through a crystal",
        12 : "Treasure that is clearly trapped/hidden behind something dangerous/etc. so that by not taking in the danger, you also don't take in the treasure",
    },
    "dungeon_room_magical" : {
        2 : "Talking statues",
        3 : "Strange waters with (1-3) beneficial or (4-6) detrimental effects",
        4 : "Teleport",
        5 : "A treasure/lever/something to be filled with water is inside/amidst molten lava/flame/ice",
        6 : "Door locked and require sunlight/special blood/thing to be opened",
        7 : "Beneficial pool of refreshing water",
        8 : "Talking statues",
        9 : "Strange waters with (1-3) beneficial or (4-6) detrimental effects",
        10 : "Teleport",
        11 : "A treasure/lever/something to be filled with water is inside/amidst molten lava/flame/ice",
        12 : "Door locked and require sunlight/special blood/thing to be opened",
    },
    "dungeon_traps" : {
        2 : "dungeon_room_traps",
        3 : "dungeon_corridor_traps",
        4 : "dungeon_door_traps",
        5 : "dungeon_feature_traps",
        6 : "dungeon_false_treasure_traps",
        7 : "dungeon_door_traps",
        8 : "dungeon_room_traps",
        9 : "dungeon_corridor_traps",
        10 : "dungeon_special_traps",
        11 : "dungeon_feature_traps",
        12 : "dungeon_false_treasure_traps",
    },
    "dungeon_room_traps" : {
        2 : "Falling blocks",
        3 : "Gas: (1-3) poisonous, (4-6) sleeping",
        4 : "Harmless mist with door closing and locking",
        5 : "Pit: (1-3) snakes, (4-6) spike",
        6 : "Scything blade from the ceiling",
        7 : "Slides",
        8 : "Falling blocks",
        9 : "Gas: (1-3) poisonous, (4-6) sleeping",
        10 : "Harmless mist with door closing and locking",
        11 : "Pit: (1-3) snakes, (4-6) spike",
        12 : "Scything blade from the ceiling",
    },
    "dungeon_corridor_traps" : {
        2 : "Wall/Statue spear/halberd",
        3 : "Sandwich wall or ceiling",
        4 : "Spiked floor",
        5 : "Wall-long scythes",
        6 : "Wall-long darts",
        7 : "Slides",
        8 : "Wall/Statue spear/halberd",
        9 : "Sandwich wall or ceiling",
        10 : "Spiked floor",
        11 : "Wall-long scythes",
        12 : "Wall-long darts",
    },
    "dungeon_door_traps" : {
        2 : "Electrified door",
        3 : "Spike pit underneath doormat",
        4 : "Handle needle",
        5 : "Spear through ceiling",
        6 : "Spear through door",
        7 : "Handle chopper",
        8 : "Handle needle",
        9 : "Spike pit underneath doormat",
        10 : "Spear through door",
        11 : "Spear through ceiling",
        12 : "Electrified door",
    },
    "dungeon_feature_traps" : {
        2 : "Poisonous plants on touch",
        3 : "Statue spear/halberd in the center of the room",
        4 : "Wall statue that you put your hand in the mouth (chopper or needle)",
        5 : "False door with alarm",
        6 : "Touch a (something) to become invisible, mute, paralyzed",
        7 : "Something animate and attack when touched",
        8 : "Poisonous plants on touch",
        9 : "Statue spear/halberd in the center of the room",
        10 : "Wall statue that you put your hand in the mouth (chopper or needle)",
        11 : "False door with alarm",
        12 : "Touch a (something) to become invisible, mute, paralyzed",
    },
    "dungeon_false_treasure_traps" : {
        2 : "Darts (1d6)",
        3 : "Flask inside that shatter and explode (1), poison gas (2), blind (3-4), sleeping gas (5-6)",
        4 : "Poison (1-3) or paralysis (4-6) needle",
        5 : "Spray of (1-3) poison, (4-6) attractiveness-to-monsters",
        6 : "Hidden snake/scorpion/rot grub",
        7 : "Ceiling/floor/wall spikes on activation",
        8 : "Darts (1d6)",
        9 : "Flask inside that shatter and explode (1), poison gas (2), blind (3-4), sleeping gas (5-6)",
        10 : "Poison (1-3) or paralysis (4-6) needle",
        11 : "Spray of (1-3) poison, (4-6) attractiveness-to-monsters",
        12 : "Hidden snake/scorpion/rot grub",
    },
    "dungeon_special_traps" : {
        2 : "Water getting inside",
        3 : "Sand getting inside",
        4 : "Equipment destroy (rust powder, rust monster pit trap)",
        5 : "Fatigue (gas)",
        6 : "Spoil food (insects, liquid, rot grub, etc.)",
        7 : "Wind tunnel",
        8 : "Water getting inside",
        9 : "Sand getting inside",
        10 : "Equipment destroy (rust powder, rust monster pit trap)",
        11 : "Fatigue (gas)",
        12 : "Spoil food (insects, liquid, rot grub, etc.)",
    },
    "dungeon_treasure_room" : {
        2 : "dungeon_guarded_treasure",
        3 : "dungeon_special_chest",
        4 : "dungeon_hidden_treasure",
        5 : "dungeon_unguarded_treasure",
        6 : "dungeon_trapped_treasure",
        7 : "dungeon_guarded_treasure",
        8 : "dungeon_trapped_treasure",
        9 : "dungeon_unguarded_treasure",
        10 : "dungeon_hidden_treasure",
        11 : "Normal unguarded chest",
        12 : "dungeon_guarded_treasure",
    },
    "dungeon_treasure_guarded" : {
        2 : "Monsters protect the treasure",
        3 : "Monsters protect the door to a treasure room",
        4 : "Monsters unaware of the treasure",
        5 : "Monsters are the treasure",
        6 : "Monsters put there specifically to protect the treasure",
        7 : "Hidden monster (mimic, gargoyle, living statue, elemental of coins, etc.)",
        8 : "Monsters protect the treasure",
        9 : "Monsters protect the door to a treasure room",
        10 : "Monsters unaware of the treasure",
        11 : "Monsters are the treasure",
        12 : "Monsters put there specifically to protect the treasure",
    },
    "dungeon_treasure_hidden" : {
        2 : "Hidden under floor",
        3 : "Hidden over ceiling",
        4 : "Hidden in a double treasure bottom",
        5 : "Hidden behind moving wall/furniture",
        6 : "Hidden behind illusory wall",
        7 : "Hidden under water",
        8 : "Hidden under floor",
        9 : "Hidden over ceiling",
        10 : "Hidden in a double treasure bottom",
        11 : "Hidden behind moving wall/furniture",
        12 : "Hidden behind puzzle",
    },
    "dungeon_treasure_trapped" : {
        2 : "Darts (1d6)",
        3 : "Flask inside that shatter and explode (1), poison gas (2), blind (3-4), sleeping gas (5-6)",
        4 : "Poison (1-3) or paralysis (4-6) needle",
        5 : "Spray of (1-3) poison, (4-6) attractiveness-to-monsters",
        6 : "Hidden snake/scorpion/rot grub",
        7 : "Ceiling/floor/wall spikes on activation",
        8 : "Darts (1d6)",
        9 : "Flask inside that shatter and explode (1), poison gas (2), blind (3-4), sleeping gas (5-6)",
        10 : "Poison (1-3) or paralysis (4-6) needle",
        11 : "Spray of (1-3) poison, (4-6) attractiveness-to-monsters",
        12 : "Hidden snake/scorpion/rot grub",
    },
    "dungeon_treasure_unguarded" : {
        2 : "Difficult to reach under rocks/cave-in/behind bars/etc.",
        3 : "In the middle of a pool of acid/lava/blood",
        4 : "Must sacrifice an item to get it",
        5 : "When you take the treasure, all doors closes and locks",
        6 : "You can see but cannot reach",
        7 : "Choice treausre (i.e. you pick one treasure and the other one sink)",
        8 : "Difficult to reach under rocks/cave-in/behind bars/etc.",
        9 : "In the middle of a pool of acid/lava/blood",
        10 : "Must sacrifice an item to get it",
        11 : "When you take the treasure, all doors closes and locks",
        12 : "You can see but cannot reach",
    },
    "dungeon_treasure_special" : {
        2 : "Cursed chest and/or if you take this, you get marked and will get haunted/pursued/etc.",
        3 : "What you take is taken from someone else",
        4 : "What you take does damage to someone else",
        5 : "Require smething unique or special to be opened (e.g. full moon light, blood of a particular creature, etc.)",
        6 : "Whatever you take is also dangerous to you (e.g. a glass sphere filled with snakes and treasures)",
        7 : "Summon monster (ghosts, spirits, raise skeletons, etc.)",
        8 : "Cursed chest and/or if you take this, you get marked and will get haunted/pursued/etc.",
        9 : "What you take is taken from someone else",
        10 : "What you take does damage to someone else",
        11 : "Require smething unique or special to be opened (e.g. full moon light, blood of a particular creature, etc.)",
        12 : "Whatever you take is also dangerous to you (e.g. a glass sphere filled with snakes and treasures)",
    },
    "dungeon_room_salt" : {

    },
    "dungeon_room_unique" : {
        2 : "UNDERWATER SWORD: Sword stuck in a pound/lake/fountain in a rock. It's underwater, the water is clear. There is a skeleton hand stuck on the pommel. If players try to take it out, it sticks to the hand. It requires a total of 30 strength to be lifted out. ",
        3 : "For more details see: https://www.prismaticwasteland.com/blog/my-favorite-trap",
        4 : "SLEEPY WALL: A wall that needs to be climbed that's full of mushrooms that when touched, liberate spores that put you asleep. ",
        5 : "SKELETON AMBUSH: It's basically just a skeleton whistling and walking through the woods while holding a scythe and a bag of coins. The twist is that there's an evil adventuring party using the skeleton as bait to attack and rob people. The skeleton isn't undead but is actually animated through a series of minor illusion",
        6 : "SKELETAL PORTCULLUS: A door drop on the party separating it in two. Each side gets attacked by xd6 skeletons. ",
        7 : "The players find an important door they have to go through, but a massive pillar has fallen directly into it, jamming it and blocking the way.",
        8 : "There's a simple-looking room with a locked door and a key on a pedestal. When the characters pick up the key and try to insert it into the lock, it crumbles to dust the instant it touches the keyhole. The real key is still in the room, but it's hidden somewhere—under the pedestal, under a brick in the floor, etc. The options are endless.",
        9 : "Two electrified handles are attached to opposite sides of a 30-foot chamber. This works like the chains in #21, except the characters need to form a conductive link to power the door and get it to open.",
        10 : "The dungeon features a room with an unusual light source (like a torch in a tube in the floor) with a lot of shadows. One or more of those shadows are living—and hungry.",
        11 : "The characters reach a tricky junction: In one room is a trap/challenge and a locked, unbreakable door but no key. In the other is the key, but it's set on a pedestal in the middle of a cluster of ominous-looking statues of armed warriors who are all staring at it. Whether or not the statues come to life when the key is taken is up to you.",
        12 : "a seemingly-normal hall with a pressure plate half-way down. When activated, the floor is covered in a Grease spell and the entire hall tilts at a 45 degree downward angle. Cue PC's sliding into whatever room or nasty thing you want at the bottom. ",
    },
    "dungeon_room_salt" : {
        2 : "interactible levers and such that can close/open a nearby door",
        3 : "magical comfort (clear water, fireplace, etc.)",
        4 : "very elaborate objects (furnitures, weapons, etc.)",
        5 : "an unpowered shrine",
        6 : "Fountain (50% it has an effect)",
        7 : "Frescoes/mosaic in good conditions",
        8 : "Library with books",
        9 : "collapsed wall/ceiling/etc.",
        10 : "artistry (ancient rug, painting, statues, etc.)",
        11 : "useful equipment, items, weapons",
        12 : "dead bodies of a recent fight with items on them",
    },
    "dungeon_effects" : {
        2 : "Ages (1d10 year)",
        3 : "Reverse Gender",
        4 : "Animate user weapon",
        5 : "Appear/Disappear",
        6 : "Antimagic (in the room)",
        7 : "Directs towards...",
        8 : "Enlarges/Reduces user",
        9 : "Gaseous",
        10 : "Greases",
        11 : "Release coins/gems",
        12 : "Teleports",
    },
    "dungeon_monster_levelone" : {
        2 : "Group of adventurers",
        3 : "Demon (Manes)",
        4 : "Berserkers",
        5 : "Orcish",
        6 : "Giant Ants",
        7 : "Giant Beetles (fire)",
        8 : "Bandits",
        9 : "Skeleton",
        10 : "Giant Rats",
        11 : "Giant Rats",
        12 : "Zombie",
    },
    "dungeon_monster_leveltwo" : {
        2 : "Group of adventurers",
        3 : "Demon (Lemures)",
        4 : "Troglodyte",
        5 : "Orcish",
        6 : "Giant Toads",
        7 : "Giant Centipede",
        8 : "Ogre",
        9 : "Orcish",
        10 : "Giant Rats",
        11 : "Giant Badgers",
        12 : "Ochre Jelly",
    },
    "dungeon_monster_levelthree" : {
        2 : "Group of adventurers",
        3 : "Demon (Lemures)",
        4 : "Troglodyte",
        5 : "Orcs",
        6 : "Large Spiders",
        7 : "Giant Spiders",
        8 : "Gelatinous Cube",
        9 : "Wererats",
        10 : "Giant Weasel",
        11 : "Giant Lizard",
        12 : "Ochre Jelly",
    },
    "dungeon_monster_levelfour" : {
        2 : "Group of adventurers",
        3 : "Demon (Hellhound)",
        4 : "Werewolf",
        5 : "Ogres",
        6 : "Giant insect",
        7 : "Giant insect",
        8 : "Gargoyle",
        9 : "Blink Dog",
        10 : "Giant Constrictor Snake",
        11 : "Carnivorous Ape",
        12 : "Gelatinous Cube",
    },
    "dungeon_monster_levelfive" : {
        2 : "Group of adventurers",
        3 : "Demon (Imp)",
        4 : "Doppleganger",
        5 : "Orcish/ogre-ish/giant-ish",
        6 : "Giant Spider",
        7 : "Cockatrice",
        8 : "Displacer Beast",
        9 : "Minotaur",
        10 : "Giant Lizard",
        11 : "Giant Poisonnous Snake",
        12 : "Gelatinous Cube",
    },
    "dungeon_monster_levelsix" : {
        2 : "Group of adventurers",
        3 : "Djinni",
        4 : "Weretiger",
        5 : "Ogre-Magi / Ogre",
        6 : "Phase Spider",
        7 : "Carrion Crawler",
        8 : "Medusa",
        9 : "Werebear",
        10 : "Wight",
        11 : "Basilisk",
        12 : "Green Slime",
    },
    "dungeon_room_wall_oddities" : {
        2 : "surface act like water",
        3 : "unstable surface",
        4 : "covered (vegetation, skin, etc.)",
        5 : "trampoline",
        6 : "molten",
        7 : "absorbs sound",
        8 : "rebound spell",
        9 : "strange material (metal, block of ice, etc.)",
        10 : "strange mosaic",
        11 : "caltrops (invisible)",
        12 : "electrified",
    },
    "dungeon_room_unique_salt" : {
        0 : "A much-worn digging tool made of a sharpened human femur. In a pinch it would also serve as a light club or short sword.",
        1 : "An image of the attractive mate of the gaoler. It might be a photograph, an engraving or cameo, even a magical image trapped in a small gem. It has become valuable as gaol currency, but the gaoler suspects its existence, so whoever is caught with it will suffer.",
        2 : " A set of three matching cups and a ball, very worn. The ball is the receptacle of a con man's soul, who used to run the game.",
        3 : " A section of rope 2d6x feet long, made from woven hair (if you roll a 6 on either of the dice, roll again and add the result to the length. Continue until you roll something other than a 6).",
        4 : " Hiding in the straw ticking of a dungeon bed is the mad spider familiar of a deceased former prisoner, desperate to escape to it can resurrect its former master. It appears to have a cunning plan.",
        5 : " Tied to the leg of a dungeon bed is a length of twine, hidden by being covered by dirt from the floor. It leads beyond the cell, and is attached to one of the following (roll 1d6) 1-2: The leg of another prisoner's bed; 3-4: a small bell in the guard's quarters; 5: a small bell in the Warden's quarters; 6: the collar of a trained rat that belongs to the one whose bed the string is attached to.",
        6 : " An iron maiden, a terrible torture device that the gaolers call Lucinda, supposedly after the spirit of the one who haunts the device.",
        7 : " A small but wickedly sharp knife that once belonged to the torturer or surgeon who works for the dungeon. It is easily hidden, but not particularly effective as a weapon.",
        8 : "9. A torn fold of parchment bearing the last will and testament of a former inhabitant of the cell. leaving all their worldly belongings to the bearer of the document. That person is identified only by a set of initials. Curiously, the parchment is notarized and witnessed by a lawyer, and could well be a legitimate document.",
        9 : "0. A shiv made from one of the wooden spoons allowed to prisoners at meal times.",
        10 : "11. A loose brick is actually a trigger to open a passage in the wall, which eads down a winding, crumble of staricase, to a glowing pentacle on the floor of a small chamber that stinks of brimstone.",
        11 : "12. A satin ribbon, still smelling faintly of perfume, in a color known to be favored by the gaoler's wife.",
        12 : "13. A section of brick wall slightly different from its surroundings. Rumor abounds as to what, if anything is behind it (roll 1d4): 1:Nothing; 2: A way to freedom; 3: A corpse (animate or not) walled in while alive; 4: A secret cell for the King's forgotten twin brother.",
        13 : "14. A coin of the realm, struck with the name and semblance of a ruler never known to have taken the throne.",
        14 : "15. A broken set of manacles in a pool of blood. The lie where they fell (some incongruous place like the middle of a room, the end of a hallway, etc.). No one touches them after what happened last time.",
        15 : "16. The roots of a massive tree, the Hanging Oak, run just behind the walls and beneath the floor here, projecting a knobbly knuckle through the surface on occasion. Some say that the Hanging Oak speaks to those who caress the root in just the right way.",
        16 : "17. A terrible scream of agony occasionally resounds, coming from beyond a particular wall. Everyone knows that that wall is backed only by hundreds of feet of uncut stone and earth. There is a 3 in 6 chance that the scream can only be heard by a select few.",
        17 : "18. A flap of bloody cloth, folded around three severed fingers, relatively fresh. The bloody ends have gnaw marks.",
        18 : "19. A simple copper ring, green with corrosion. If cleaned, it has an inscribed code that, if deciphered, reveals an escape route. There is a 2 in 6 chance that this ring is an elaborate trap to secure secret sacrifices for a cult of demonologists.",
        19 : "20. Spots of blood appear mysteriously on a wall or floor. If they are not cleaned off, over the course of several days they spell out a message from something from the beyond (roll 1d6): 1: The ghost of a slain torture victim; 2: A mystic attempting to send a message to his former lover, who once inhabited this cell; 3: A demon drawn by the incredible suffering of the dungeon; 4: A guard, who uses the spot as a place to administer secret punishments to deserving prisoners; 5: The offering of a mad guard to his devilish master; 6: A vampire who has recently been incarcerated, or hired as one of the guards;",
        20 : "21. A set of manacles bound to the wall, instill a persistent vision of the sacred sword of a holy warrior tortured to death there.",
        21 : "22. 1d6x bricks scattered throughout the dungeon have imprints of footsteps embossed into their surface. If they are collected and laid out in the correct pattern, they lead somewhere else entirely.",
        22 : "23. A leather thong, on which there is a token made of wolf hair and a fang, bound with the sinew of an elk. When held or worn, the token causes an intense longing to run with the pack under the moonlight, to hunt prey and savage it with fang and claw.",
        23 : "24. Hidden in a waste bucket (it might be a prisoner's latrine or the receptacle for amputations), is a demon's binding stone.",
        24 : "25. A massive and ponderous executioner's axe, black and bloodied, drips fresh blood on the morning of an execution.",
        25 : "26. A tall brazier made of brass and iron standing on sturdy tripod legs. The brazier is full of unlit coals, with 1d4 implements of torture (e.g. pokers, tongs, etc.) trust within waiting to be heated. If the coals are lit, the brazier animates, skittering on its iron legs and always staying at the side of whoever started the blaze.",
        26 : "27. A rat with a small parchment note tied to its body with a simple leather thong. The rat is either a trained rat running messages between prisoners, an intelligent rat gathering paper with which to line its nest, or a messenger from from the were-rat king who rules the sewers under the dungeon.",
        27 : "28. All the bars in this section of the dungeon, be they the bars of a cadge, cell, or window, resonate like perfectly tuned chimes when strike. Prisoners with musical skill play tunes upon them from time to time. Others have leaned to use specific pitches and rhythms to send coded messages through the dungeon and to listeners creeping in the alley outside.",
        28 : "29. A crude graffiti likeness of one of the party members is sketched onto the wall of the dungeon. Throughout the dungeon there are 1d4x other likenesses of the party member, each one drawn being killed in a different way.",
        29 : "30. A cell sits empty, its only contents a moldy straw mattress, overturned bucket, locked restraints hanging from the wall, pile of rags that were once clothes, and a mound of human skin sloughed off like a snake's.",
        30 : "31. A platter of the finest food rests on a clean linen cloth. Mouth-watering aroma makes it almost impossible to resist. There is a tradition in this dungeon: If a noble prisoner is to be executed, he can have his last meal delivered to his fellow inmates. If one of them eats of the repast, that one is executed in the noble's place. Of course, newer prisoners are unlikely to know about the tradition.",
        31 : "32. There is a hallway in the dungeon in which the shadows of those who pass act out the crimes for which their owners are incarcerated.",
        32 : "33. A key of elaborate design, with a strange glyph inscribed on the gem that is its fob. It appears at random intervals (usually remaining in a single spot for 1d6 minutes) before disappearing and appearing somewhere else, possibly miles distant. It can open a single door of the bearer's choosing, but will never again respond to that person. Alas, there are nearly always at least two locked doors between the dungeon and freedom.",
        33 : "34. A set of leg chains that has a severed foot in one manacle, with the other manacle appearing to have been chewed open by something than can bite through iron.",
        34 : "35. A version of a local Inquistor's holy symbol, perverted to the worship of its most dire demonic foe.",
        35 : "36. A horse stands alone in an empty cell, a chain around its neck bolted firmly to the cell wall. The horse is blindfolded and muzzled, but otherwise appears mundane in every way.",
        36 : "37. Whenever someone dies within the dungeon for any reason, all light sources flicker and dim for the briefest of moments, normal illumination returning just before the dungeon is plunged into total darkness.",
        37 : "38. A cake sits unattended. There is a file baked inside containing a floor plan of the dungeon and an elaborate escape plan. (I plan to expand this oddity to include results for every meaning of file and phial)",
        38 : "39. A torturer is asleep on the job, stretched out on a rack for a nap. A brazier normally used to heat implements of torture burns nearby, keeping him toasty and warm in the otherwise dank dungeon.",
        39 : "40. A live peacock struts through the dungeon. The peacock is either the cherished pet of an eccentric warden, the avatar of a goddess of mercy sent to bless worthy prisoners with freedom or an end to their suffering, the animal companion of a mentalist employed as an interrogator, or a mundane peacock who supplies feathers for the dreaded tickle torture.",
        40 : "Bloody rivulets on the floor",
        41 : "Leering skulls embedded in the wall",
        42 : "A petrified hand reaching up from the floor",
        43 : "Burning violet braziers",
        44 : "A huge draconic skull",
        45 : "rotted floorboards covered in yellow mold",
        46 : "A gemstone eye that always seems to follow someone",
        47 : "A pile of dismembered hands",
        48 : "Bubbling vats of thick liquid",
        49 : "Statue of the Red Lady",
        50 : "The heart of a chicken floats suspended in a briny solution, beating lazily. If the heart if removed from its vat and begins to grow like a monstrous tumor, (gibbering mouther).",
        51 : "A shimmering, irregular stone rests in what appears to be a golden box. The stone is a flawed philosophers stone. Anything touching the stone turns to iron pyrite, commonly known as fool's gold. Even casual contact triggers this transformation.",
        52 : "pièce rempli de cadavre encore en état",
    },
    "dungeon_riddles" : {
        0 : "Time existed before me, but history can only begin after my creation (Writing)",
        1 : "Some are cherished, some are hated, and even if lost they remain with you [memories",
        2 : "They arrive every night whether invited or not. They can be seen, but not heard or touched. If one falls the rest keep moving [stars]",
        3 : "I have towns without people, forests without trees, and rivers without water [map]",
        4 : "Passed from parent to child, and shared between siblings, though it is used more by others [name]",
        5 : "What always runs but never walks. Often murmurs, never talks. Has a bed but never sleeps. An open mouth that never eats? [river]",
        6 : "My life can be measured in hours, I only serve to be devoured. Slim, I am quick. Fat, I am slow. Wind is my foe [candel]",
        7 : "What goes through a door but never goes in or comes out? [keyhole]",
        8 : "Man walks over, man walks under, in times of war he burns asunder [bridge]",
        9 : "One by one we fall from heaven down into the depths of past, And our world is ever upturned so that yet some time we’ll last. [hourglass]",
        10 : "Alive without breath, As cold as death, Clad in mail never clinking, Never thirsty, ever drinking",
        11 : "I go around in circles, But always straight ahead Never complain, No matter where I am led.",
        12 : "If you feed me, I will live, but if you make me drink, I will die. What am I? [Fire.]",
        13 : "What can you keep when not needed and throw when it is needed? [An anchor.]",
        14 : "I can fly but not in the sky. I bid adieu at night and say hello in the morning. I am a part of you, and I follow as you lead. I dress in black and flee the light. But without it, I wouldn't exist. What am I? [A shadow.]",
        15 : "What breaks by naming it? [Silence.]",
        16 : "A flat stone wall stands in their path. On it is inscribed: I run smoother than most any rhyme; I love to fall but cannot climb. The wall cannot be destroyed by most attacks, but splashing water on it causes it to crumble into wet sand.",
        17 : "one dungeon corridor leads to a dead end. There's no traps in this dead end. It's just the wrong way, and the other way leads to where they need to go. But inscribed on the wall of this dead end, in giant letters, is 'OVERTHINKING'.",
    },
    "dungeon_level_checklist": {
        0: "Things to gain: \r\n    - A shrine (at least one)\r\n    - Knowledge\r\n    - A treasure\r\nDanger: \r\n    - Something to be killed\r\n    - Something to kill the party (aka traps and tricks)\r\nLevel design: \r\n    - Shortcut to another level, or to the exit (can be a magic pool, a teleporter, an elevator, a gate, a door that\'s hidden from the other side, etc.)\r\n    - More than one entry\r\n    - 3D \/ elevation shift\r\n    - Loop\r\n    - A landmark (for navigation)\r\n    - Something atmospheric\r\nSomething to interact with \/ to experiment with\r\nSomeone to talk to (prisoner, ghost, machine, demon, statue\/painting, adventuring party, etc.)\r\nA secret that the players probably won\'t find\r\nA secret the players will probably find"
    }
}

const npc = 
{
    "npc_who_role": { 
        2: "cultist",
        3: "thief",
        4: "scholar",
        5: "knight",
        6: "soldier",
        7: "adventurer",
        8: "mercenary",
        9: "hunter",
        10: "slave",
        11: "warrior",
        12: "wizard"
    }, 
    "npc_who_personality": { 
        0: "cynical",
        1: "simple minded",
        2: "transparent",
        3: "greedy",
        4: "caring",
        5: "brash",
        6: "fearful",
        7: "brave",
        8: "sarcastic",
        9: "opportunistic",
        10: "gloomy",
        11: "ridicule",
        12: "mad"
    },
    "npc_when_why": { 
        2: "for dark reasons",
        3: "for challenge",
        4: "for loot",
        5: "for revenge",
        6: "as a prisoner",
        7: "with his party",
        8: "as a slave",
        9: "to survive wilderness/somewhere else",
        10: "by chance",
        11: "to pillage",
        12: "as a punishment"
    },
    "npc_what": { 
        2: "almost dead",
        3: "crazed/berserk (magical or not)",
        4: "ambushing",
        5: "exploring",
        6: "injured",
        7: "resting/eating",
        8: "figthing/post-fight",
        9: "patroling",
        10: "taking care of a dead comrade/npc",
        11: "sleeping",
        12: "finding a treasure"
    },
    "people_values" : {
        0 : "Domination",
        1 : "Envy",
        2 : "Fanaticism",
        3 : "Greed",
        4 : "Hatred",
        5 : "Hedonism",
        6 : "Ignorance",
        7 : "Obedience",
        8 : "Treachery",
        9 : "Violence",
        10 : "Beauty",
        11 : "Compassion",
        12 : "Courage",
        13 : "Excellence",
        14 : "Honesty",
        15 : "Honor",
        16 : "Justice",
        17 : "Knowledge",
        18 : "Loyalty",
        19 : "Selflessness"
    },
    "people_desire" : {
        0 : "Creation",
        1 : "Expansion",
        2 : "Knowledge",
        3 : "Peace",
        4 : "Reform",
        5 : "Rescue",
        6 : "Restoration",
        7 : "Stasis",
        8 : "Unity",
        9 : "War",
        10 : "Wealth",
        11 : "Worship",
    },
    "people_attitude_strangers" : {
        0 : "Oblivious",
        1 : "Frightened",
        2 : "Hateful",
        3 : "Exploitative",
        4 : "Indifferent",
        5 : "Hospitable",
        6 : "Welcoming",
        7 : "Reverent",
    },
    "npc_gifts" : {
        2 : "A special and unique weapon that's super beautiful and well-made (not magical, but +1 or something equivalent)",
        3 : "A pet (1-2 hawk, 3-4 attack dog, 5-6 messenger owl)",
        4 : "Unique warhorse",
        5 : "A special chariot or boat (as per climate and location)",
        6 : "A small piece of land",
        7 : "A group of exceptionally trained hirelings",
        8 : "A special and unique weapon that's super beautiful and well-made (not magical, but +1 or something equivalent)",
        9 : "A pet (1-2 hawk, 3-4 attack dog, 5-6 messenger owl)",
        10 : "Unique warhorse",
        11 : "A special chariot or boat (as per climate and location)",
        12 : "A small piece of land",
    },
    "court": {
        0: "https://docs.google.com/spreadsheets/d/1d-NAi8Mf1W1Q71_fxzIJoqcdXtsjIla3vAAY_5tywaM/edit#gid=1576217076"
    },
    "leader_fame_fighter" : {
        2 : "Reroll, but at sea/coastal",
        3 : "Held up a collapsing structure (Bridge, Wall, Burning Hut, etc.) as civilians fled",
        4 : "Helped hunt and slew a dangerous creature (dragon, giant, purple wurm)",
        5 : "Slew a Gigantic (normal animal: Crab, Boar, etc.) to feed a starving oppressed village",
        6 : "Rescued a Maiden trapped in a (Tower, Cave, Dungeon, Block of Ice, etc.)",
        7 : "Fought in the front of a past and bloody conflict against (orcs, ogres, giants)",
        8 : "Held off (number) men from pursuing a retreating army.",
        9 : "Entered a burning building to rescue (an important treasure, childrens)",
        10 : "Wrestled a (minotaur, giant bear, werebear)",
        11 : "Oversaw the building and protection of bridges and/or homes and was a much efficient ruler",
        12 : "It is said that he never has been bested in (duel, mounted joust, bow contest, etc.)",
    },
    "leader_fame_cleric" : {
        2 : "Found and used an ancient relic of the gods to slay a demon",
        3 : "Protected an Abbey from Raiders",
        4 : "Received visions from the gods.",
        5 : "Accomplished any amazing feat at a very young age (like before teens). Reroll in the fighter list and downplay it a bit.",
        6 : "Built a church",
        7 : "Cured diseases",
        8 : "Drove away undead",
        9 : "Killed an evil necromancer",
        10 : "Rescued and healed a drowning person",
        11 : "Went on a quest to find some rare item or herb that helped a village through a plague",
        12 : "Brought down corrupt nobles",
    },
    "leader_fame_mage" : {
        2 : "Found a huge amount of treasure and gave it all away",
        3 : "Beat an evil wizard in an epic magic duel",
        4 : "Stepped in front of a innocent bystander to take the impact from a powerful magical spell",
        5 : "Tricked a group of (Orcs, Bandits, Gnolls, etc.) into going a different direction, thereby saving a town from being razed",
        6 : "Created a magical barrier that kept out an onslaught of (devils, elementals, demons, [outsiders])",
        7 : "Banished a demon",
        8 : "Fought off elementals that attacked a settlement",
        9 : "Torched a orcish camp to the ground to liberate people",
        10 : "Discovered long lost knowledge in a dungeon",
        11 : "One of his creation (golem, living armor, homonculus) saved someone (or a village) from creatures (or a fire)",
        12 : "Summoned a demon",
    },
    "leader_goal_fighter" : {
        2 : "Occult",
        3 : "Power",
        4 : "Social Position",
        5 : "Family/Tribe",
        6 : "Riches",
        7 : "Glory",
        8 : "Land",
        9 : "Vengeance",
        10 : "Duty",
        11 : "Necessity",
        12 : "Gods",
    },
    "leader_goal_cleric" : {
        2 : "Riches",
        3 : "Vengeance",
        4 : "Social Position",
        5 : "Occult",
        6 : "Knowledge",
        7 : "Gods",
        8 : "Duty",
        9 : "Necessity",
        10 : "Land",
        11 : "Power",
        12 : "Family/Tribe",
    },
    "leader_goal_mage" : {
        2 : "Family/Tribe",
        3 : "Social Position",
        4 : "Vengeance",
        5 : "Land",
        6 : "Occult",
        7 : "Knowledge",
        8 : "Power",
        9 : "Riches",
        10 : "Glory",
        11 : "Necessity",
        12 : "Duty",
    },
    "leader_oddities_fighter" : {
        2 : "Have a flying mount: pegasi if Law, griffon if Neutral or Chaos",
        3 : "Armour made of a special monster scales (basilisk, dragon, etc.)",
        4 : "Burnt by a dragon (face and arm)",
        5 : "Abnormally tall and strong",
        6 : "Possess a very exotic and strange weapon (1-2 it's mithril or silver, 3-5 it's magical, 6 it's artefact/sentient)",
        7 : "Unique bloodline with heroes/gods in it",
        8 : "Possess something (tattoo, banner, throne with skulls, etc.) to note each X he killed (dragons, orcs, humans, etc.) ",
        9 : "Have a pet animal: 1-2: Lion 3-4: Great Eagle 5-6: Pair of wolves",
        10 : "Criminal branding on the neck",
        11 : "Extremely old but still firm",
        12 : "Head of a big dragon in his throne room",
    },
    "leader_oddities_clericmage" : {
        2 : "Made weird experimentation on flesh, including on oneself, which changed their body composition",
        3 : "Cursed and physically weak, always coughing, etc.",
        4 : "Burnt by a magical explosion (acid) on the face",
        5 : "One eye is a magical jewel",
        6 : "Classical wizard look (color as per the school, huge cloak, huge hat, etc.)",
        7 : "Have a pet familiar: Quasit, Owl, Weasel, Pseudo Dragon",
        8 : "Covered with scars",
        9 : "Body covered with ceremonial/magical tattoo (see the Mummy)",
        10 : "Fought with a vampire and still has the mark of the vampire on his neck",
        11 : "Wears a huge special trinket with a chain on his neck",
        12 : "Has a cane with the skull of a lich he fought on it",
    },
    "leader_bodyguard_fighter" : {
        2 : "A group of Ogre with an Ogre-Magi captain on great beast (thundertusk)",
        3 : "A pack of trusted orcish warg-riders",
        4 : "A handful of giants",
        5 : "A group of lansquenets",
        6 : "A group of berserkers",
        7 : "Elite Trained Knight all with the same special armour that doesn't show their face. That armour has one special feature (resistance to something, made out of a rare metal/animal hide, etc.)",
        8 : "A group of dedicated elite archer rangers with a special enchanted cloak",
        9 : "Questing Knights (warhammer)",
        10 : "A small band of Griffon Riders",
        11 : "Conan, Guts, etc. (i.e. one very badass bodyguard)",
        12 : "Reroll on the Cleric table",
    },
    "leader_bodyguard_cleric" : {
        2 : "Roll on the Mage table",
        3 : "Fanatical cultists with a leader",
        4 : "A group of death cleric that deal with ancient rituals and maintenance of the dead",
        5 : "A giant eagle",
        6 : "Papal swiss guard with polearms",
        7 : "A group of paladins that survived at least one encounter with a greater demon. They are immune to charm and evil taint. ",
        8 : "A single powerful paladin with a holy avenger",
        9 : "A group of gish/elves with an oriental monk attitude (i.e. elvish jedi)",
        10 : "A small band of Pegasi Riders",
        11 : "A group of flagellant-type that worship relics",
        12 : "A unicorn mount",
    },
    "leader_bodyguard_mage" : {
        2 : "An undead death knight",
        3 : "Two hellhounds",
        4 : "Ogre-magi twins",
        5 : "A pack of gargoyles-rider goblins",
        6 : "A group of eyeball homunculus with small magical laser as a weapon",
        7 : "A group of enuch nomadic warriors",
        8 : "A golem",
        9 : "Group of crazy alchemist that manipulate metal and stuff",
        10 : "An eldricht knight",
        11 : "A doppleganger that take the same apperance",
        12 : "An arcane trickster assassin",
    },
}

const wilderness_content_creation = {
    "region_settling": {
        2 : "Nomads that became sedentary",
        3 : "Peaceful migration into a wilderness",
        4 : "Conquest of primitive/nomadic people (1-3 they are still here, 4-6 they were exterminated or left)",
        5 : "Slow mixing of another population from elsewhere (d8 to determine direction of each)",
        6 : "A group of people settled here fleeing an ancient evil",
        7 : "People always lived here and have a deep relationship with the environment and nature",
        8 : "Nomads that became sedentary",
        9 : "Peaceful migration into a wilderness",
        10 : "Conquest of primitive/nomadic people (1-3 they are still here, 4-6 they were exterminated or left)",
        11 : "Slow mixing of another population from elsewhere (d8 to determine direction of each)",
        12 : "A group of people settled here fleeing an ancient evil"
    },
    "region_important_event" : {
        2 : "Huge battle against an ancient evil was fought here (dragon, lich, evil NPC lord, etc.)",
        3 : "A natural catastrophe happened (meteorite, etc.)",
        4 : "A plague almost wiped out everyone",
        5 : "A great hero was born here and did mythical stuff that changed the world",
        6 : "Something divine happened here (a prophecy, a prophet, a sign of the gods, a relic was forged here, etc.)",
        7 : "They made a pact in the region with a powerful creature (dragon, etc.) or race of monsters (giants, etc.)",
        8 : "Huge battle against an ancient evil was fought here (dragon, lich, evil NPC lord, etc.)",
        9 : "A natural catastrophe happened (meteorite, etc.)",
        10 : "A plague almost wiped out everyone",
        11 : "A great hero was born here and did mythical stuff that changed the world",
        12 : "Something divine happened here (a prophecy, a prophet, a sign of the gods, a relic was forged here, etc.)"
    },
    "region_culture_inspiration" : {
        0 : "Ancient Greco-Roman",
        1 : "Ancient Cambodia/Southeast Asia (i.e. Lost Izalith)",
        2 : "Historical China",
        3 : "Historical India",
        4 : "Historical Japan",
        5 : "Middle East",
        6 : "Medieval Africa",
        7 : "Medieval Continental Europe (i.e. Astora)",
        8 : "Medieval Constantinople (i.e. Anor Londo)",
        9 : "Pre-Columbian New-World",
        10 : "Pre-modern tribal",
        11 : "Roll twice and stitch together",
    },
    "region_culture_authority" : {
        0 : "Anarchy",
        1 : "Caste Leader",
        2 : "Clan Elders",
        3 : "Democracy",
        4 : "Feudal Lordship",
        5 : "Godly Monarchy / Lordship",
        6 : "Monarchy",
        7 : "Dual Kingship",
        8 : "Magocracy",
        9 : "Oligarchy",
        10 : "Tyranny",
        11 : "Theocracy",
    },
    "region_flora_special" : {
        0 : "Carnivorous",
        1 : "Colonial or hive-like",
        2 : "Gelatinous/Tentacular",
        3 : "Geometric in structure",
        4 : "Grows in alien matter",
        5 : "Jewel-colored",
        6 : "Largely parasitic",
        7 : "Like prehistoric cycads",
        8 : "Mobile",
        9 : "Nauseating in hue",
        10 : "Sentient to a degree",
        11 : "Produces strange drugs",
        12 : "Produces strange music",
        13 : "Resembles animals",
        14 : "Spongy and moss-like",
        15 : "Strangely fragrant",
        16 : "Symbiotic with animals",
        17 : "Vine-like and creeping",
        18 : "Violently invasive",
        19 : "Corrupted by the Abyss",
    },
    "region_fauna_special" : {
        0 : "Avian or feathered",
        1 : "Made of strange stuff",
        2 : "Has human traits, such as voice",
        3 : "Dead but still moving",
        4 : "Feeds largely on carrion",
        5 : "Ghostly or semi-tangible",
        6 : "Insatiably voracious",
        7 : "Inscribed with glyphs",
        8 : "Insecte or arthropodic",
        9 : "Intelligent as humans",
        10 : "Made of light or fog",
        11 : "Metallic or artificial",
        12 : "Warped and tormented by the Abyss",
        13 : "Parasitic on each other",
        14 : "Piscine or crablike",
        15 : "Plotting against humans",
        16 : "Reptilian or serpentine",
        17 : "Ressemble humans",
        18 : "Warped in its shape",
        19 : "Warm or hive entities",
    },
    "region_oddities" : {
        0 : "Birthplace of monsters",
        1 : "Comes from strange sources",
        2 : "Found where it shouldn’t be",
        3 : "Ignites in unclean flames",
        4 : "Induces a great emotion",
        5 : "Induces madness",
        6 : "Is a home for dark things",
        7 : "Is a road to evil places",
        8 : "Is a slow poison",
        9 : "Is a strange color",
        10 : "Is acidic or noxious",
        11 : "Ancient ruin remnant",
        12 : "Sentient places",
        13 : "Issues terrible commands",
        14 : "Made of something strange",
        15 : "Murderously dangerous",
        16 : "Punishes those who offend",
        17 : "Scours or wounds",
        18 : "Serves dark powers",
        19 : "Whispers something",
    },
    "region_important_element" : {
        0 : "Caverns",
        1 : "Clouds",
        2 : "Earth",
        3 : "Earthquakes",
        4 : "Fog",
        5 : "Geysers",
        6 : "Hills",
        7 : "Lakes",
        8 : "Lightning",
        9 : "Rain",
        10 : "Rivers",
        11 : "Seas",
        12 : "Seasons",
        13 : "Shores",
        14 : "Sky",
        15 : "Stars",
        16 : "Storms",
        17 : "Thunder",
        18 : "Tides",
        19 : "Wind",
    },
    "region_special_terrain" : {
        0 : "Airless Rock",
        1 : "Arid Badland",
        2 : "Blasted Waste",
        3 : "Desert",
        4 : "Endless Sea",
        5 : "Forest",
        6 : "Glassed-over",
        7 : "Icy waste",
        8 : "Island Archipelago",
        9 : "Jungle",
        10 : "Landless Sky",
        11 : "Moorland",
        12 : "Mountains",
        13 : "Plains",
        14 : "River",
        15 : "Savannah",
        16 : "Swamp",
        17 : "Tundra",
        18 : "Underwater",
        19 : "Volcanic",
    },
    "overdungeon_map": {},
    "city_origin" : {
        2 : "Ancestral Land",
        3 : "Ancient Industry",
        4 : "Defensible Site",
        5 : "Ethnocentrists",
        6 : "Innovators",
        7 : "Outcasts",
        8 : "Rebels",
        9 : "Religious Community",
        10 : "Survivors",
        11 : "Trading Hub",
        12 : "Roll 2",
    },
    "city_activities" : {
        2 : "Councils",
        3 : "Destined Conquerors",
        4 : "Education Tradition",
        5 : "Expert Artisans",
        6 : "Martial Traditions",
        7 : "Missionary Zeal",
        8 : "Mutual Defense",
        9 : "Production Center",
        10 : "Strong Society",
        11 : "Vigorous Trade",
        12 : "Roll 2",
    },
    "city_obstacles" : {
        0 : "Bad Reputation",
        1 : "Class Hatred",
        2 : "Contaminated Land",
        3 : "Corrupt Leadership",
        4 : "Crushed Spirits",
        5 : "Demagogue",
        6 : "Destructive Customs",
        7 : "Disunity",
        8 : "Ethnic Feuding",
        9 : "Exception Poverty",
        10 : "Flooding",
        11 : "Mercenary Populace",
        12 : "Monsters",
        13 : "Perviasive Hunger",
        14 : "Recurrent Sickness",
        15 : "Rioutous Thugs",
        16 : "Secret Society",
        17 : "Raiders",
        18 : "Cult",
        19 : "Xenophobia",
    },
    "city_guilds": {
        0: "https://docs.google.com/spreadsheets/d/1d-NAi8Mf1W1Q71_fxzIJoqcdXtsjIla3vAAY_5tywaM/edit#gid=516116775"},
    "resources_obstacles" : {
        2 : "Cursed",
        3 : "Contaminated Land",
        4 : "Failed Settlement",
        5 : "Hazardous Resource",
        6 : "Monsters",
        7 : "Raiders",
        8 : "Recalcitrant Locals",
        9 : "Recurrent Sickness",
        10 : "Not Taken Care Of",
        11 : "Flooding",
        12 : "Harsh Conditions",
    },  
    "resources_type" : {
        2 : "Fertile Land",
        3 : "Good Fishing",
        4 : "Good Hunting",
        5 : "Good Mine",
        6 : "Good Timber",
        7 : "Lush Pasture",
        8 : "Medicinal Plants",
        9 : "Defensible Terrain",
        10 : "Old Monuments",
        11 : "Sorcerous Materials",
        12 : "Good stones and marbles",
    },
    "ruins_type" : {
        2 : "Abandonned Town",
        3 : "Ancient Settlement",
        4 : "Borken Temple",
        5 : "Crumbled Fortress",
        6 : "Dwarven Hold",
        7 : "Empty Tower",
        8 : "Failed Colony",
        9 : "Forsaken Outpost",
        10 : "Lost Mine",
        11 : "Plundered City",
        12 : "Prehuman Ruins",
    },
    "ruins_trait" : {
        2 : "Ancient Armory",
        3 : "Buried Treasure",
        4 : "Commanding Location",
        5 : "Forgotten Sorceries",
        6 : "Glorious Dead",
        7 : "Willing recruits",
        8 : "Lost Techniques",
        9 : "Pre-Exile Relics",
        10 : "Rich Resources",
        11 : "Scattered Heirs",
        12 : "Seat of Legitimacy",
    },
    "ruins_obstacles" : {
        2 : "Ancient Curse",
        3 : "Angry Dead",
        4 : "Dark Wizards",
        5 : "Disputed Possession",
        6 : "Exiled Lord",
        7 : "Human Raiders",
        8 : "Monsters",
        9 : "Cult",
        10 : "Taboo Land",
        11 : "Things From Below",
        12 : "Dragon",
    },
    "lair_monster" : {
        2 : "Dragon",
        3 : "Medusa",
        4 : "Cyclop",
        5 : "Lord stronghold (probably evil, like Death Knight)",
        6 : "Werebear",
        7 : "Giant spiders",
        8 : "Minotaur",
        9 : "Vampire",
        10 : "Lich",
        11 : "Sphinx",
        12 : "Balrog",
    },
    "lair_recent_activity" : {
        2 : "None",
        3 : "Cult of followers",
        4 : "Made an alliance with another baddy",
        5 : "Raid",
        6 : "Sent a delegation to the region lord asking for things",
        7 : "Has fought and won over another monster",
        8 : "None",
        9 : "Cult of followers",
        10 : "Made an alliance with another baddy",
        11 : "Raid",
        12 : "Sent a delegation to the region lord asking for things",
    },
    "lair_end_goal" : {
        2 : "Greed",
        3 : "Hatred",
        4 : "Healing one of its condition (or curse)",
        5 : "Being left alone",
        6 : "Protecting an artefact",
        7 : "Protecting its lair (territorial)",
        8 : "Greed",
        9 : "Hatred",
        10 : "Healing one of its condition (or curse)",
        11 : "Being left alone",
        12 : "Protecting an artefact",
    },
    "lair_fame" : {
        2 : "Killed a legendary hero long ago",
        3 : "Toppled a kingdom",
        4 : "Stole a powerful artefact",
        5 : "Possess a grand treasure",
        6 : "Is very ancient and nobody knows its origin",
        7 : "Was a great leader previously",
        8 : "Killed a legendary hero long ago",
        9 : "Toppled a kingdom",
        10 : "Stole a powerful artefact",
        11 : "Possess a grand treasure",
        12 : "Is very ancient and nobody knows its origin",
    },
    "lair_location" : {
        2 : "Cavern",
        3 : "Ancient Ruin",
        4 : "Chasm",
        5 : "Mountain Camp",
        6 : "Well Preserved Stronghold",
        7 : "Dungeon",
        8 : "Cavern",
        9 : "Ancient Ruin",
        10 : "Chasm",
        11 : "Mountain Camp",
        12 : "Well Preserved Stronghold",
    },
    "faction_method": "[FACTION (name + type)] want(s) [MOTIVATION], but [OBSTACLE]. Therefore, [ACTIVITY TO SURMOUNT OBSTACLE]. [FACTION] has influence over [WHAT], is situated primarly [WHERE] and has a [SYMBOL]. https://docs.google.com/spreadsheets/d/1d-NAi8Mf1W1Q71_fxzIJoqcdXtsjIla3vAAY_5tywaM/edit#gid=941868129",
    "hex_type" : {
        2 : "unique hex/ideas",
        3 : "hex_sub_element",
        4 : "hex_natural",
        5 : "run two encounter and create an aftermath",
        6 : "Nothing",
        7 : "Nothing",
        8 : "Nothing",
        9 : "hex_landmark",
        10 : "hex_landmark",
        11 : "empty place (village, ruin, etc.)",
        12 : "small hammlet of people surviving",
    },
    "hex_natural" : {
        2 : "Elevation up landmark (peak, mountain, very tall tree, etc.)",
        3 : "Elevation down landmark (sinkhole, sharp cliffs, caverns, etc.)",
        4 : "Water landmark (waterfall, huge swamp, small island on a river/lake, completely dried out, an oasis, etc.)",
        5 : "Passage feature (ancient road, blocked path, magical tree wall, etc.)",
        6 : "Vegetation (unique tree, magical glade, fruit trees, etc.)",
        7 : "Corrupted landmark (nature corrupted, radiation, magical explosion, demonic incursion, etc.)",
        8 : "Elevation up landmark (peak, mountain, very tall tree, etc.)",
        9 : "Elevation down landmark (sinkhole, sharp cliffs, caverns, etc.)",
        10 : "Water landmark (waterfall, huge swamp, small island on a river/lake, completely dried out, an oasis, etc.)",
        11 : "Passage feature (ancient road, blocked path, magical tree wall, etc.)",
        12 : "Vegetation (unique tree, magical glade, fruit trees, etc.)",
    },
    "hex_landmark" : {
        2 : "Castle that sunk under a swamp or island",
        3 : "Castle that sunk under the ground",
        4 : "natural (waterfall, etc.)",
        5 : "bridge / aqueduct",
        6 : "pillars / obelisk",
        7 : "tower",
        8 : "Monument or vista",
        9 : "observatory on hill/mountain",
        10 : "Destroyed or crumbled keep",
        11 : "Battlefield or graveyard",
        12 : "magical/weird",
    },
    "hex_landmark_content" : {
        2 : "Disadvantage (trap, trick, disease, monster)",
        3 : "Advantage (tools, vision around, map, information, a NPC, etc.)",
        4 : "Hidden Treasure",
        5 : "Open Treasure",
        6 : "Guarded Treasure",
        7 : "Trapped Treasure",
        8 : "Disadvantage (trap, trick, disease, monster)",
        9 : "Advantage (tools, vision around, map, information, a NPC, etc.)",
        10 : "Hidden Treasure",
        11 : "Open Treasure",
        12 : "Guarded Treasure",
    },
    "hex_monster_subelement" : {
        2 : "In a camp",
        3 : "In a lair/ruins",
        4 : "Hunting (food or reroll another creature)",
        5 : "Patrolling",
        6 : "Settling or living (nomadic life)",
        7 : "Resting very temporarily (1-2 days)",
        8 : "In a camp",
        9 : "In a lair/ruins",
        10 : "Hunting (food or reroll another creature)",
        11 : "Patrolling",
        12 : "Settling or living (nomadic life)",
    },
    "hex_monster_doingwhat" : {
        2 : "Combat with another monster",
        3 : "Being dead",
        4 : "Being magical or magically affected",
        5 : "Being seditious with its own group",
        6 : "Being related to another monster",
        7 : "Injured",
        8 : "Combat with another monster",
        9 : "Being dead",
        10 : "Being magical or magically affected",
        11 : "Being seditious with its own group",
        12 : "Being related to another monster",
    },
    "hex_shortcut_type" : {
        2 : "hex_unique_road_encounter",
        3 : "ferry",
        4 : "nest of a huge flying creature (giant eagle, roc, etc.)",
        5 : "half-broken bridge or pass",
        6 : "blocked by a huge gate/contraption that needs to be fixed/activated in a nearby dungeon/ruin/lair (can also be magical such as a forcefield)",
        7 : "Easy to fix, normal shortcut",
        8 : "blocked by a group of bandits/raiders/orcs",
        9 : "physically blocked (landslide, sinkhole, etc.)",
        10 : "blocked by a toll monster (ogre, giant, etc.)",
        11 : "blocked by a sphinx with riddles",
        12 : "a creature lives underneath the road",
    },
    "hex_unique_road_encounter" : {
        2 : "crazy guy with fireball ring event",
        3 : "A wandering cleric begs the heroes to recover a relic for them.",
        4 : "The road crests a hill, and spread out before the group is a stunning, sweeping vista of the land beyond. A painter sits nearby, capturing the scene, and asks the group to pose for his foreground.",
        5 : "A bridge is missing. Where it used to be is now a ferry service, for a sizable fee. The ferry looks like it might consist of bridge parts, and only takes a few travelers at a time.",
        6 : "tons of corpses, destroyed caravans, etc. with no signs of threat",
        7 : "A row of severed heads on spikes and a warning sign claiming, “Dis Rode Belong Negan”",
        8 : "A bridle ties a well-groomed speckled horse to a nearby tree. The horse is fitted with an elegant but empty saddle. Who does it belong to? Do the PCs take it?",
        9 : "A ranger stops by the group and gives them advice on the trail ahead, including places to camp and a tavern where they can get good rates if they mention his name. All his advice is impeccable, but when they mention his name at the tavern, they’re told he died years ago on that very road.",
        10 : "A traveling minstrel challenges the wisest looking member of the party to a storytelling contest.",
        11 : "A wizened tinker sells charms from his cart: dried frogs, finger bones, cat skulls, and the like. Leaving him, you turn to find he is eerily out of sight altogether",
        12 : "A majestic elk sprints past with something golden caught in its antlers.",
    },
    "covenant": "Create a covenant using one of the aspect of God in the shrines. Follow this to add info: https://docs.google.com/spreadsheets/d/18jzyOcctDytnv4V_lZ6fCNzyh0xkEVhIzrYU4zE2pfA/edit#gid=1557177057",
    "region_unique_resource" : {
        2 : "Magical ember",
        3 : "Plant",
        4 : "Mineral",
        5 : "Incense/tree",
        6 : "Special type of water (water taken from where a giant died in the last year etc.)",
        7 : "Ancient species bones/bone powder",
        8 : "Magical ember",
        9 : "Plant",
        10 : "Mineral",
        11 : "Incense/tree",
        12 : "Special type of water (water taken from where a giant died in the last year etc.)",
    },
    "region_unique_resource_why" : {
        2 : "It burns under direct sunlight",
        3 : "Shines under a moonlight and because black under sunlight",
        4 : "Emits a buzzing sound and irradiate those nearby (cannot be kept for too long)",
        5 : "It has a strong and purifying smell",
        6 : "It glimmers under certain angle, and under others it's almost invisible",
        7 : "So fragile it can break to wind",
        8 : "It burns under direct sunlight",
        9 : "Shines under a moonlight and because black under sunlight",
        10 : "Emits a buzzing sound and irradiate those nearby (cannot be kept for too long)",
        11 : "It has a strong and purifying smell",
        12 : "It glimmers under certain angle, and under others it's almost invisible",
    },
    "region_unique_resource_what" : {
        2 : "Enhance magical weapon",
        3 : "Create some form of divinatory drug",
        4 : "Create some kind of poison/coating to kill (a mythical or powerful creature like Giants, Dragons, etc.)",
        5 : "Protect against (1-2 magic, 3 undead, 4 demons, 5 elemental, 6 a random type of monsters that's common (lycanthrope, giants, etc.))",
        6 : "Can be transformed to heal HP or disease (sniffed, smoked, dranked, etc.)",
        7 : "Uncurse or protect against curses",
        8 : "Enhance magical weapon",
        9 : "Create some form of divinatory drug",
        10 : "Create some kind of poison/coating to kill (a mythical or powerful creature like Giants, Dragons, etc.)",
        11 : "Protect against (1-2 magic, 3 undead, 4 demons, 5 elemental, 6 a random type of monsters that's common (lycanthrope, giants, etc.))",
        12 : "Can be transformed to heal HP or disease (sniffed, smoked, dranked, etc.)",
    },
    "region_unique_resource_where" : {
        2 : "On (or inside) a mythical creature",
        3 : "Deep within caverns without sunlight where it is plenty dangerous",
        4 : "Only deep within dungeons where there are weird magic",
        5 : "Deep in the ocean",
        6 : "On top of the tallest mountains",
        7 : "Deep within volcanoes",
        8 : "On (or inside) a mythical creature",
        9 : "Deep within caverns without sunlight where it is plenty dangerous",
        10 : "Only deep within dungeons where there are weird magic",
        11 : "Deep in the ocean",
        12 : "On top of the tallest mountains",
    },
    "region_unique_resource_how" : {
        2 : "A gift from the gods",
        3 : "An elemental plane mix-up",
        4 : "A magical experiment gone wrong",
        5 : "Dark energies",
        6 : "Demons",
        7 : "Something heroic and mythical from the dawn of time",
        8 : "A gift from the gods",
        9 : "An elemental plane mix-up",
        10 : "A magical experiment gone wrong",
        11 : "Dark energies",
        12 : "Demons",
    },
}
/* 
https://docs.google.com/spreadsheets/d/192BEizypviHx1unUksej7NWUpw0XnGpuxfxLhHGKYiI/edit#gid=337082836
Add landmarks that gives location of other lairs, ruins, bosses, shortcuts, etc. and some that have telescope/clairvoyance on other area for more info
*/
const shrine = 
{
    "shrine_type": {
        0: "demonic_shrine (too much demonic shrine will result in not being able to use normal shrine)",
        1: "demonic_shrine (too much demonic shrine will result in not being able to use normal shrine)",
        2: "broken",
        3: "shrine",
        4: "shrine",
        5: "shrine"
    },
    "demonic_shrine_effect" : {
        0 : "S +2" + demonic_shrine_effect_desc,
        1 : "T +2" + demonic_shrine_effect_desc,
        2 : "W +2" + demonic_shrine_effect_desc,
        3 : "A +2" + demonic_shrine_effect_desc,
        4 : "roll on the special traits table of chargen" + demonic_shrine_effect_desc,
        5 : "Mv +2" + demonic_shrine_effect_desc,
        6 : "weapon boost" + demonic_shrine_effect_desc,
        7 : "magic item" + demonic_shrine_effect_desc,
        8 : "roll twice" + demonic_shrine_effect_desc,
    },
    "demonic_shrine_req" : {
        0 : "pride",
        1 : "covetousness/greed",
        2 : "lust",
        3 : "anger",
        4 : "gluttony",
        5 : "envy",
        6 : "sloth",
        7 : "false worship",
        8 : "require to be in a demonic covenant (any)",
        9 : "possession",
    },
    "shrine": { // first time = free bonus, second time = you need to drop the monster part on the altar. if you do so first time, you get double level up. the max is two level up. Can't be used if the target has Dark Corruption or is possessed
        0: "S	Combat	red = Galnos, power (Shaddai, mountain). ",
        1: "T	Survival	brown = nmrotijos, immortal (El Olam, everlasting).",
        2: "W	Survival	brown = ?, healer (Rapha, healer). ",
        3: "A	Combat	red = deksteros, right (tsidkenu, the righteousness). ",
        4: "C	Leadership	white = regh, king (El Elyon, majesty).",
        5: "Mv Survival	brown = Ameika, friend (Raah, friend).  ",
        6: "Everyone gains Mi	Combat	red = weikpotis, leader (Sabaoth, lord of armies)",
        7: "Everyone gains Fa	Leadership	white = pags, peace (Shalom, peace)",
        8: "Everyone gains Wi	Leadership	white = domiaghar, giver of fear (Elohim/Eloah, strong/fear)",
        9: "shrine of saweljos (the sun), everyone receives one random stats and one random heroic stat (1-3 mi, 4-5 wi, 6 fa).",
        10: "the shrine of judges. on first use, you can take a vow (Defend the weak and the fatherless; uphold the cause of the poor and the oppressed. (Ps 82)) and you gain paladin powers as long as you follow it (spend Wi for healing touch, reroll Fa against spells and evil, spend Wi to sense chaos, spend Wi to imbue your sword and dispel magic on target). also gain +1 Wi on first use. and everyone receives a random other boost (reroll)",
        11: "the shrine of judgment. if you have demonc shrine or wield demonic power, you get a curse. otherwise, you gain a random +1. everyone in the room is affected."
    },
    "shrine_use" : {
        2 : "hammer and anvil: destroy something of chaos or sacrifice something of value",
        3 : "moon: sleep on it",
        4 : "black tablet: inscribe your name",
        5 : "candle: light it",
        6 : "fountain: drink",
        7 : "crystal of light: touch",
        8 : "fixed bell: ring it",
        9 : "words written: recite",
        10 : "small hole: make a libation with wine",
        11 : "bird: sing a song or recite a poem",
        12 : "pool: immerge yourself in it"
    },
    "shrine_desc" : {
        2 : "altough the altar is cleared, everything else in the room screams blasphemy (the altar couldn't be desecrated)",
        3 : "under a slab of stone, needs to be pulled out",
        4 : "underwater",
        5 : "on the ceiling",
        6 : "on a wall",
        7 : "dusty but clean, no sign of recent activity",
        8 : "decorated with flowers",
        9 : "under a broken statue",
        10 : "permanent incense and candles in the room",
        11 : "enclosed in a small dome",
        12 : "pristine, almost magical; no one seems to have been here ever"
    },
    "shrine_quote" : {
        0: "https://capitalizemytitle.com/random-bible-verse-generator/book/Psalms"
    },
    "saints_shrine_rules": {
        0: "the party can only have one active shrine at any point. as long as they follow the saints oath, they have a passive bonus. they can also use an active power, but then lose the active bonus until they go back to civilization to make some sorts of sacrifice/prayer. whenever a shrine is generated, take note of it as it is unique and cannot show up again in the campaign. when it appears, make sure there is an accompanying picture showing what the saints did (some sort of icon) and a clear depiction of what is the oath/requirement of the party. shrines can be desecrated and broken down. they need to be restored. new one can be constructed. source: https://espharel.blogspot.com/2019/12/osr-shrines-and-patron-saints.html"
    },
    "saints_shrine": {

    },
    /* 

saint name + title

Saints to use:
- Abraham
- Moses
- David
- Jacob
- Joseph
- Solomon
- Elijah
- Elisha
- Adam & Eve
- Noah
- Isaac
- Aaron
- Joshua
- Samson
- Samuel
- Esther
- Job
- Daniel
- Maccabees
- "The Three Maiden Who Withsthood the Flame"
- Boaz
- Caleb
- Nathan
- Deborah
- Ezra
- Nehemiah
- Gideon
- Haggai
- Hezekiah
- Hosea
- Jeremiah
- Joshua
- Jonah
- Joel
- Lot
- Melchizzedek
- Malachi
- Uriah
    */
    "saints_shrine_generator_restraints": {

    },
    "saints_shrine_generator_constraints": {
        
    },
    "saints_shrine_generator_passive_power": {

    },
    "saints_shrine_generator_active_power": {

    },
}

const treasure = 
{
    "treasure_roll" : { // always come with money, 3d6SP * level of dungeon (exterior = 1, non-megadungeon = 2). double = gems. 
        2 : "magic_rare_rings",
        3 : "magic_rings",
        4 : "map",
        5 : "ember_type",
        6 : "meteorite_equipment",
        7 : "magic_potions",
        8 : "generic magic item",
        9 : "magical_heirlooms",
        10 : "magic_consumable",
        11 : "fake/curse item (reroll and make it fake/cursed)",
        12 : "magic_relics",
    },
    "ember_type" : {
        2 : "Divine Ember (lawful, blood) -> diamond",
        3 : "Dark Ember (occult, darkness) -> dark opal",
        4 : "Enchanted Ember (magic) -> turquoise",
        5 : "Crystal Ember (ice) -> blue sapphire",
        6 : "Flame Ember (fire) -> fire opal",
        7 : "Chaos Ember (chaotic) -> ruby",
        8 : "Profaned Ember (abyss, water) -> onyx ",
        9 : "Giant's Ember (physical and lightning) -> garnet ",
        10 : "Hollow Ember (undead) -> amethyst",
        11 : "Rotten ember (poison/rot) -> citrine",
        12 : "A died out ember (can be used to replace any gems for the purpose of upgrading embers). Looks like a pearl.",
    },
    "gems" : {
        2 : "diamond",
        3 : "dark opal",
        4 : "turquoise",
        5 : "blue sapphire",
        6 : "fire opal",
        7 : "ruby",
        8 : "onyx ",
        9 : "garnet ",
        10 : "amethyst",
        11 : "citrine",
        12 : "A died out ember (can be used to replace any gems for the purpose of upgrading embers). Looks like a pearl.",
    },
    "money": {
        0: "3d6 * level SP. Outdoor = lvl 1. If it's a great treasure, x10"
    }, 
    "generic_magic_item_cost" : {
        2 : "wi",
        3 : "fa",
        4 : "mi",
        5 : "once per game",
        6 : "w",
        7 : "as long as you wear it (comes with a curse)",
        8 : "busywork (ex: hold in both hand, require concentration or chanting)",
        9 : "blood",
        10 : "water",
        11 : "ritual",
        12 : "many user at the same time",
    },
    "generic_magic_item_effect" : {
        2 : "invisible",
        3 : "stronger",
        4 : "courage",
        5 : "specific figthing stuff (duel, outnumbered, environment, etc.)",
        6 : "social",
        7 : "heal or protection",
        8 : "elemental",
        9 : "magic",
        10 : "knowledge/understanding",
        11 : "chance/discovery",
        12 : "evasion",
    },
    "generic_magic_item_salt" : {
        2 : "nature",
        3 : "darkness",
        4 : "light",
        5 : "downtime",
        6 : "passivity",
        7 : "explosive",
        8 : "backlash",
        9 : "humanity",
        10 : "team",
        11 : "fire",
        12 : "ice",
    },
    "generic_magic_item_curse" : {
        2 : "eat more (require triple rations)",
        3 : "attract monster (sound, smell, magic)",
        4 : "slowly gives user a real curse",
        5 : "blindness",
        6 : "creates desire (ex: take revenge on the weapons creator enemies)",
        7 : "draining",
        8 : "berserker",
        9 : "can't take it off (or extreme damage if you do)",
        10 : "backbiting",
        11 : "summon (darkness, monsters, etc.)",
        12 : "require to replace a limb (magic hand, magic eye, etc.)",
    },
    "generic_magic_item_object" : {
        2 : "ring",
        3 : "boots",
        4 : "cloaks",
        5 : "belt",
        6 : "weapon",
        7 : "armor",
        8 : "instrument/tool",
        9 : "amulet",
        10 : "vial",
        11 : "banner",
        12 : "gem/stone",
    },
    "magical_heirlooms" : { // more ideas to refill: https://docs.google.com/spreadsheets/d/18jzyOcctDytnv4V_lZ6fCNzyh0xkEVhIzrYU4zE2pfA/edit#gid=853960712
        2 : "banner of glorious charge: +2 to A within 12 of this if charge",
        3 : "banner of the steadfast ox: if no move (or in melee no move), +1 T everyone within 12",
        4 : "banner of beacon: can produce light, can fight as a spear, in huge battle can transmit message and tactics through signs in the air",
        5 : "banner of fear: -1C to enemy; if you charge, they automatically must do a morale check",
        6 : "glory banner: +1C to anyone that sees it; +1A to anyone within 6 Mv",
        7 : "ring of X protection",
        8 : "ring of the ambassador: can understand any language (can't speak it), +1 reaction roll",
        9 : "heroic ring: choose one of the three heroic stats for a game, you have +1",
        10 : "ring of chance: can reroll Fa",
        11 : "ring of freefall",
        12 : "ring of sustenance",
    },
    "magic_relics" : { // ideas for replenishing this: https://docs.google.com/spreadsheets/d/1x5GffgPYIvmj58ROZzKevnX4m9P2zo3yTKnBVdML7-8/edit#gid=2102794289
        2 : "holy avenger",
        3 : "sun blade",
        4 : "staff of the magi",
        5 : "robe of the archmagi",
        6 : "belt of giant strength",
        7 : "ring of invisibility",
        8 : "adamantine armor",
        9 : "immovable rod",
        10 : "ring of wishes",
        11 : "vorpal blade",
        12 : "deck of tarot",
    },
    "magic_potions" : {
        2 : "Animal Control",
        3 : "Clairaudience",
        4 : "Climbing",
        5 : "Diminution",
        6 : "Healing",
        7 : "X resistance",
        8 : "Healing",
        9 : "Giant strength",
        10 : "Heroism (+1 to all heroic stats until used)",
        11 : "Invisibility",
        12 : "X-ray",
    },
    "meteorite_equipment" : {
        2 : "meteorite dagger/small/thrown",
        3 : "meteorite blunt",
        4 : "meteorite bow",
        5 : "meteorite chainmail",
        6 : "meteorite sword",
        7 : "meteorite sword",
        8 : "meteorite sword",
        9 : "meteorite bow",
        10 : "meteorite shield",
        11 : "meteorite polearm",
        12 : "meteorite axe",
    },
    "coins": {}, // when i roll coins, it must have some description: is it stamped with a ruler face? how does it look? etc.
    "magic_consumable" : {
        2 : "Firebombs",
        3 : "Alluring Skull",
        4 : "Holy Water",
        5 : "Pine Resin (1-2 charcoal, 3-4 rotten, 5-6 gold)",
        6 : "Prism Stone",
        7 : "Homeward Bone (same as spell)",
        8 : "Blossom (1-2 green, 3-4 purple moss, 5-6 blooming purple moss)",
        9 : "Purging Stone",
        10 : "Divine Blessing",
        11 : "Transient Curse",
        12 : "Lloyd Talisman",
    },
    "magic_shields" : {
        2 : "Effigy Shield (Small)  Automatically passes Fa save vs ligthning",
        3 : "Silver Knight Shield (Standard)    magic save +1 Fa, half damage from lightning",
        4 : "Black Knight Shield (Standard) magic save +1 Fa, half damage from fire",
        5 : "Pierce Shield (Standard)   Can be used as a thrust weapon, +1 F",
        6 : "Crest Shield (Standard)    +2 on Fa against magic",
        7 : "Grass Crest Shield (Standard)  In combat, you count as having an extra A for melee roll",
        8 : "Spider Shield (Standard)   +2 on Fa against poison",
        9 : "Bloodshield (Standard) +1 on Fa against non-physical non-magical attack (poison, curse, etc.)",
        10 : "Icon Shield (Standard)    User naturally regenerate 1 W per day",
        11 : "Black Iron Greatshield (Greatshield) +2 T instead of +1 from this shield",
        12 : "Golden Greatshield If you pass your Fa vs magic spell, you return a light bolt at the target for damage",
    },
    "magic_rings" : {
        2 : "Wolf Ring (can't be put prone; don't suffer from the Trapped condition in combat)",
        3 : "Ring of Fog (wearer transparent)",
        4 : "Flask Ring (1d6 charge per adventure, each charge heal one W)",
        5 : "Ioun Stone (shine like a fire atop the user heard (as a torch), user always knows north, +1 Fa)",
        6 : "Ring of Jumping and Striding (+1 Mv, Jump, Climb)",
        7 : "Ring of Water Walking (can walk on water as if solid ground; if he falls on water, he will fall as if on solid ground)",
        8 : "Leo's ring (if you win the melee roll, you make an extra attack)",
        9 : "Slumbering Dragoncrest Ring (wearer makes no sound)",
        10 : "Covetous Gold Serpent Ring (everything cost 10% less)",
        11 : "Cloranthy Ring (+1 W)",
        12 : "Rope of Climbing",
    },
    "magic_rare_rings" : {
        2 : "Ring of Favor and Protection (+1W, +1A, +1Mv, can't be unequipped or it breaks)",
        3 : "Speckled Stoneplate Ring (half damage from all magical and elemental source)",
        4 : "Ring of Sacrifice (when you die, the ring breaks and you come back to life)",
        5 : "Bellowing Dragoncrest Ring (+1 Wi to use spells)",
        6 : "Ring of the Evil Eye (on a 6 for a wound, you regain a W)",
        7 : "Dark Wood Grain Ring (+1 Fa vs physical attack each combat)",
        8 : "Havel's Ring (ignore armor Mv penalty)",
        9 : "Blue Tearstone Ring (if you are not at maximum W, you have +1 T)",
        10 : "Red Tearstone Ring (if you are not at maximum W, you have +1A)",
        11 : "Orange Charred Ring (can walk on fire or lava)",
        12 : "Ring of Telekinesis (can lift object of 30 lbs or less and move them at a pace of 1 Feet per 2 sec; can't be used in combat)",
    },
    "magic_item_checklist": {
        0: "If you want to integrate any magical items, either from D&D, Dark Souls or your own imagination, it is highly suggested to thing about three mechanical factors:\r\nPrerequisite\r\nA upside for a downside\r\nMechanical niche or lore\r\nThen, it is suggested to answer to those lore questions to integrate it properly:\r\nWhat do legends say of it ?\r\nWhat great deed was it part of ?\r\nWhen was it created ?\r\nWho created it ?\r\nWhy was it created ?\r\nHow was it lost by its maker or user ?"
    }
}
/*
MUST DO:
- Add a system of descriptions for treasure (where it is, the 'chest', the overall mundane item with the real loot, etc.)
    The chest is important, it can be inscribed, it can be a special locker, it can be broken down and pre-looted, etc. 
- Switch up the money one for instead a description of items: in dungeons, you don't find GP or SP, you find objects (crowns, jewels, etc.) WITH AN HISTORY
    Jewels
    Special weapon/armor (aka engraved, with decoration, etc.)
    Gold coins with a special face on it


    Add more potions/bombs based on spells (charm = love potion, sleep = sleep gas potion)

    "Surtling core" to activate magical gates like in Valheim


Moonlight greatsword
Embers effect and paths

BOWS AND ARROWS

Magic golem books (requires brute matter, book, magic gem, ember)

Add some magical spears, axes, swords, etc. from Elden Ring and DS1 with cursed effects added (and marked them as cursed weapons) including their fluff and all

https://www.reddit.com/r/BehindTheTables/comments/43wsio/books_of_all_sorts/


Magic items can give heroic actions. See below:
- 


*/

const spells = 
{

}
/* 
All LOTR spells
Check out the spells I added to some monsters like the lich for D&D spells extra
Souslike spells
Phantasmal Force
Hold Portal
*/


const monsters = 
{
    "stats_template": {
        "F": "1 can't fight, 2 below average, 3 average fighter, 4 better fighter, 5 master, 6 legendary, 7+ godly",
        "S": "1 children, 2 weak, 3 average fighter, 4 better fighter, 5 very strong, 6 monster or big animal, 7+ gigantic or godly",
        "T": "1 children, 2 weak, 3 average fighter, 4 better fighter, 5 leather/thick skin/armor/etc., 6 great armor/scale, 7+ gigantic or godly, 10 is siege level (wall, door, siege weapon, ship, etc.)",
        "Mv": "1 can barely move, 2 slow, 3 small, 4 below average, 5 average, 6 great average, 7 fast, 8 mounted, 9+ huge or godly",
        "A": "HD 1-2 = 1, HD 3-4 = 2, HD 5-6 = 3, HD 7-8 = 4, HD 9+ = 5+",
        "W": "HD 1-2 = 1, HD 3-4 = 2, HD 5-6 = 3, HD 7-8 = 4, HD 9+ = 5+",
        "C": "1 = low average/normal, 3 = soldier, 5+ = heroic/legendary",
        "Mi": 0,
        "Wi": 0,
        "Fa": 0,
    },
    "special_tags": {
        0: "Spellcaster: Can expand Wi to cast spells. Each spell has an target number to work (for example, 2+). It's possible to throw multiple dice to cast the same spell, taking the best result. 1s are always refunded and 6s are always success.", 
        1: "Horse Lord: Can use Fa to prevent wound on the mount the character is riding.",
        2: "Fear: When in melee against a non-Fear non-Terror opponent, the opponent must make a morale check before the melee roll.",
        3: "Terror: When in melee against a non-Terror opponent, the opponent must make a morale check before the melee roll.",
        4: "Migthy Hero: May expand one Might point each combat without reducing their own store of Might",
        5: "Bodyguard: As long as the model they are protecting is alive, the models with this rule will automatically pass Morale test.",
        6: "Spectral Walk: Can use a move to pass through solid matter as if difficult terrain, can move over liquid (lava, water) as if it were solid ground.",
        7: "Blades of the Dead: Wound against C instead of T",
        8: "Expert Rider: Reroll Jump, Swim and Throw Rider tests. +1 T while mounted. ",
        9: "Migthy Blow: Each wound dealt in melee is 2 W.",
        10: "Master Swordsman/Archer: Reroll 1s to-hit. When slay a model, regain a lost Mi.",
        11: "Woodland Creature: Ignore penalties of wood and forest difficult terrain",
        12: "Monster: Is at least Fear if the model does not have better. Once per melee, instead of attack, it can use brutal power attacks. \na) Rend: make attack vs Strength instead of T; \nb) Hurl: before models back away, choose a target with less S than the monster: throw the target 1d6 Mv in the direction of choice (all target in the line suffer S3 hit and the target is put prone and suffer S6 if there is a hard stop); \nc) Barge: all models in melee back away 3 Mv instead of 1 Mv and then the monster can make another d6 move (including a charge and another fight phase)",
        13: "Throw Stones: If the unit does not move, it can use a shoot attack as per the profile.",
        14: "Disease Hit: If the unit inflict at least one wound to a target, it must make a T check at the end of combat to see if it starts developping a disease (at random).",
        15: "Fearless: Is not affected by Fear, Terror or Morale check.",
        16: "Fly: Can move up to 12 Mv, ignore terrain and control zone",
        17: "Monstrous Charge: Get Cavalry charge effect (knock to the ground those with lower strength and throw cavalry auto to the ground and gain extra attack)",
        18: "Survival Instinct: If this model suffers a W, make a courage test. if it's failed, it flees the battlefield.",
        19: "Swift Movement: Can move on any surface (wall, ceiling, etc.) and ignore all difficult terrain or obstacles (except for gaps, water, etc.).",
        20: "Venom: Reroll all failed To-Wound rolls.",
        21: "Caught in a Web: Can choose to trade all attack for a single S7 attack that if suffered will Paralyse (see spell).",
        22: "Lone Hunter: Won't fight as ally/etc. with other forces.",
        23: "Hatred(X): Gains +1 To-Wound against X in melee. They also have -2 to reaction roll when dealing with X.",
        24: "Cave Dweller: +1 to Jump and Climb, can fight in the dark without penalty",
        25: "Feral: If the rider of this creature is slain or dismounts, the creature will flee the battlefield (fail morale check)",
        26: "Ancient Evil(X): Opponents have -1 C within XMv.",
        27: "Resistant to Magic: Always has an extra free Wi dice for resisting magic spells",
        28: "Flame of Udun: Never unarmed. Anyone HIT by the Balrog must make a 2+ on a d6 or be Set Ablaze. The creature is immune to fire-based attack.",
        29: "Creature of the Ancient World: Can spend freely one might per turn. Can't be instant-killed, it instead does half max W.",
        30: "Set Ablaze: Suffer S9 hit and a 1 S5 hit every turn unless it a) go prone and crawl 1Mv b) move inside a water feature",
        31: "Fire Breath: S10 in a straight line up to 12Mv long and 2Mv wide. Any model suffering a W is instantly slain.",
        32: "Wyrmtongue: Can spend a free Wi dice each turn to cast either Transfix or Compel",
        33: "Blinding Swarm: Melee roll in melee vs Bat Swarm is -1",
        34: "Tentacles: D6 shooting attack r6 S3. Hit creatures are dragged to the user.",
        35: "Water Dweller: Move value is doubled in the water. Charging in the water gains Monstrous Charge.",
        36: "Dragged to the Depths: Brutal power attack. Can bring in the water and instantly slay a man-sized creature on a 3+. It then leave the battlefield. ",
        37: "Many Parts: For each W lost, an A is also lost.",
        38: "Murderous Power: If the user slays a target with Rend, it regains a single lost W.",
        39: "Trample: When moving, it ignores the control zone of all models. All models that were in contact with the user when it moved suffer a hit equal to the user profile.",
        40: "Pack Fighter: When outnumbering (or outsizing in single combat), +1 to F",
        41: "Mindless Killers: If away from a leader more than 6Mv, the user must make a morale test at the beginning of the turn. If it fails, it must charge the nearest enemy. If none are present, it will charge friendly models. When under this effect, they have +1 To-Wound and ignore Terror/Fear for the turn.",
        42: "Preternatural Agility: Cannot be Trapped.",
        43: "Burly: Can fight with two-handed weapon without penalty. Can carry heavy objects without move penalty.",
        44: "Devastating Charge: When charging, target suffers Prone effect on a 5+.",
        45: "Berserk: Must always charge if able to. Can't control himself and use heroic actions that affect others.",
        46: "Will of Evil: Can see ethereal creatures, invisible creatures and ghost-forms. Each turn it stays in melee, it loses one Will. When it has no more Will, it dies.",
        47: "Ethereal: Can use Wi as Fa.",
        48: "Drain Soul: All wounds by the user causes instant death in melee.",
        49: "Phylactery: When the creature is dissipated or killed, it goes back to its phylactery and comes back in 3d6 days. If the phylactery is destroyed during that time or prior, then the user is completely destroyed and killed.",
        50: "Necromancy: It can perform dark rituals to bring back undead servants or create new ones (skeletons, zombies) from fresh corpses. It can perform bigger rituals to create more advanced undeads (skeletal giants, ghouls, death knights).",
        51: "Spider Webs: Can throw mv8 an attack. It causes Paralyse magical effect instead of W. ",
        52: "Unstoppable Momentum: If the user charges and win the melee roll, all opponents are knocked prone. Then, if the user uses Barge, all models forced to back away suffer S9 hit.",
        53: "Immovable Object: Cannot be knocked to the ground and never backs away. If the user opponents win the fight, the user suffers the blow but THEY back away.",
        54: "Paralysis Strike: Each W suffered by the user is like the Paralysis spell.",
        55: "Cavalry: ???",
        56: "Siege Engine: Siege engine are moved by 3 models or 1 monster. Small engine only require 1 to shoot. Shoot to hit as per normal. If you hit infantry, roll a scatter dice (1 = miss; 2-5 = fire on the nearest other model within 6Mv; 6+ direct hit). Knock prone if hit, wether it wounds or not. Wound against infantry is insta kill. All model nearby a siege engine hit will suffer additional hit too based on the engine.",
        57: "Energy Drain: Any W inflicted by the user lowers the maximum W of the target and the user gains back 1 W. This is considered a form of curse and needs to be treated as such to remove it. If a target dies because of this effect, it comes back as a ghoul under the control of the user.",
        58: "Mundane Resistance: Non-elemental and non-magical effect/attack have -2 on their to-wound dice roll against the user.",
        59: "Regeneration(X): At the end of each combat, this creature gains X W. ",
        60: "Vulnerability(X): The creature must make a morale check against these or flee.",
        61: "Destroying(X): These effect can instantly slay the creature if applied and not saved (when necessary).",
        62: "Summoning(X): The user can compel creatures (of X type) to obey him. This means that it can use them as allies, mounts, bodyguards. It can summon them during fights through magic or physical means.",
        63: "Absorb: Grab a target in melee and put it inside the user. Powerful acid digest the target for 1W per turn.",
        64: "Immunity(X): Completely immune to X",
        65: "Weapon Specialist: Receives bonus based on their weapon. \nPolearms: Receive charges of cavalry at +1A if they didn't move and can attack in pike formation. \nSwords: +1F when dueling. \nTwo-Handed Axes/Swords: +1 S in To-Wound. \nShield: Can use shield formations.",
        66: "Undead: Immune to effects that affect living creatures (e.g. poison). Immune to mind-affecting/reading spells. Make almost no noise (and if without equipment, no noise at all).",
        67: "Rusting: Metal that touches the user (successful hit by the user or on the user) is instantly transformed into rust and becomes unusable.",
        68: "Backstabbers: Receives +1 on the To-Wound vs trapped and prone targets.",
        69: "Mutations: Roll 1d8. 1) Demon Soul: Can use one Fa per turn to block attacks. 2) Great Claw: +1A and S. 3) Cloven Hoofs: +2Mv and jump. 4) Tentacle: Reduce target A by 1. 5) Blackblood: When receiving a W, everyone in melee is dealt a S3 hit. 6) Spines: Everyone in melee with user receives a S1 hit every turn. 7) Scorpion Tail: Can make an extra S5 Venom attack per turn. 8) Extra Arm: Can use a weapon/shield and has +1A.",
        70: "Poison(X): If the target is not immune to poison, the user can always To-Wound at LEAST on X+.",
        71: "Critical Strike: On a roll of 6 on the To-Wound, scores 2W instead of 1. If there is a (X), than the X means that it can only happen in this particular case/against this particular type of enemy.",
        72: "Weakness(X): +1 to wound with this kind of element vs the user.",
        73: "Dangerous Body(X): When the user is wounded in melee by a target, the target suffers a S3 hit of X type.",
    },  
    "spells": {
        0: "test"
    },
    "peasants": {
        "Mv": 5,
        "F": 2,
        "S": 2,
        "T": 3,
        "A": 1,
        "W": 1,
        "C": 1,
        "Mi": 0,
        "Wi": 0,
        "Fa": 0,
        "Equip": "Improvised weapon",
        "Special": "Nil",
        "Detail": "Nil",
        "Value": 5
    },
    "wizard": {
        "F": 5,
        "S": 4,
        "T": 5,
        "Mv": 6,
        "A": 2,
        "W": 3,
        "C": 7,
        "Mi": 2,
        "Wi": 8,
        "Fa": 2,
        "Equip": "Sacrificial blade (+1S on To-Wound), Magic Ring (reroll Fa), Wizardry Robe (+2 Wi, count as light armor)",
        "Special": "Spellcaster (Blinding Light, Terrifying Aura, Immobolise, Command, Protection, Sorcerous Blast, Collapse Rocks)",
        "Detail": "Nil",
        "Value": 170
    },
    "lord": {
        "F": 6,
        "S": 4,
        "T": 6,
        "Mv": 6,
        "A": 4,
        "W": 4,
        "C": 6,
        "Mi": 3,
        "Wi": 3,
        "Fa": 3,
        "Equip": "Meteorite Enhanced Blade (always wound on 4+ minimum), Horn of Terror (if he is outnumbered in a melee, blow the horn to force a morale test on opponents), Medium Armor, Warhorse",
        "Special": "Horse Lord, Migthy Hero",
        "Detail": "Nil",
        "Value": 180
    },
    "elite_soldier": {
        "F": 4,
        "S": 4,
        "T": 4,
        "Mv": 6,
        "A": 1,
        "W": 1,
        "C": 3,
        "Mi": 0,
        "Wi": 0,
        "Fa": 0,
        "Equip": "Weapons of choice, Light Armor",
        "Special": "Bodyguard",
        "Detail": "Nil",
        "Value": 8
    },
    "ghost_warrior": {
        "F": 3,
        "S": 3,
        "T": 7,
        "Mv": 6,
        "A": 1,
        "W": 1,
        "C": 6,
        "Mi": 0,
        "Wi": 0,
        "Fa": 0,
        "Equip": "Medium armor, axe or sword",
        "Special": "Undead, Terror, Spectral Walk",
        "Detail": "Nil",
        "Value": 14
    },
    "treant": {
        "F": 7,
        "S": 8,
        "T": 8,
        "Mv": 6,
        "A": 3,
        "W": 4, 
        "C": 6,
        "Mi": 0,
        "Wi": 0,
        "Fa": 0,
        "Equip": "Nil",
        "Special": "Monster, Terror, Woodland Creature, Throw Stones (r18, S10)",
        "Detail": "Suffer two hit instead of one in the Set Ablaze rule",
        "Value": 120
    },
    "zombie": {
        "F": 2,
        "S": 2,
        "T": 2,
        "Mv": 3,
        "A": 1,
        "W": 2,
        "C": 1,
        "Mi": 0,
        "Wi": 0,
        "Fa": 0,
        "Equip": "Nil",
        "Special": "Fear, Fearless, Diseased Hit",
        "Detail": "Nil",
        "Value": 8
    },
    "skeleton": {
        "F": 2,
        "S": 3,
        "T": 3,
        "Mv": 4,
        "A": 1,
        "W": 1,
        "C": 1,
        "Mi": 0,
        "Wi": 0,
        "Fa": 0,
        "Equip": "Spear or Sword & Shield",
        "Special": "Undead, Fear, Fearless",
        "Detail": "Nil",
        "Value": 8
    },
    "great_eagle": {
        "F": 7,
        "S": 6,
        "T": 8,
        "Mv": 3,
        "A": 2,
        "W": 3,
        "C": 6,
        "Mi": 0,
        "Wi": 0,
        "Fa": 0,
        "Equip": "Nil",
        "Special": "Monster, Terror, Fly, Monstrous Charge",
        "Detail": "Nil",
        "Value": 8
    },
    "giant_venomous_spider": {
        "F": 7,
        "S": 7,
        "T": 7,
        "Mv": 10,
        "A": 1,
        "W": 6,
        "C": 4,
        "Mi": 0,
        "Wi": 6,
        "Fa": 0,
        "Equip": "Nil",
        "Special": "Monster, Terror, Monstrous Charge, Survival Instinct, Swift Movement, Venom, Caught in a Web, Lone Hunter",
        "Detail": "Nil",
        "Value": 90
    },
    "orc_warrior": {
        "F": 2,
        "S": 3,
        "T": 4,
        "Mv": 5,
        "A": 1,
        "W": 1,
        "C": 2,
        "Mi": 0,
        "Wi": 0,
        "Fa": 0,
        "Equip": "Orc sword, armor, shield",
        "Special": "Cave Dweller, Hatred(Man)",
        "Detail": "Nil",
        "Value": 5
    },
    "orc_champion": {
        "F": 3,
        "S": 3,
        "T": 3,
        "Mv": 6,
        "A": 1,
        "W": 1,
        "C": 3,
        "Mi": 0,
        "Wi": 0,
        "Fa": 0,
        "Equip": "(melee weapon with armor and/or shield)",
        "Special": "Cave Dweller, Hatred(Man)",
        "Detail": "Nil",
        "Value": 8
    },
    "orc_drums": {
        "F": 0,
        "S": 0,
        "T": 10,
        "Mv": 0,
        "A": 0,
        "W": 3,
        "C": 0,
        "Mi": 0,
        "Wi": 0,
        "Fa": 0,
        "Equip": "(Needs to be operated as equipment by two orcs)",
        "Special": "Drums in the Deep: All hearing orcs have +1 C and enemy suffers -1 C. Within 18mv, orcs can reroll 1s to their melee roll.",
        "Detail": "Nil",
        "Value": 8
    },
    "elite_ogre": {
        "F": 7,
        "S": 7,
        "T": 7,
        "Mv": 6,
        "A": 3,
        "W": 3,
        "C": 4,
        "Mi": 0,
        "Wi": 0,
        "Fa": 0,
        "Equip": "Metal armor, greater club/sword/hammer",
        "Special": "Fear, Throw Stones (r12, S8)",
        "Detail": "Nil",
        "Value": 100
    },
    "ogre": {
        "F": 6,
        "S": 6,
        "T": 6,
        "Mv": 6,
        "A": 3,
        "W": 3,
        "C": 3,
        "Mi": 0,
        "Wi": 0,
        "Fa": 0,
        "Equip": "Great Club, can use a chain to attack range 3Mv and S of 5",
        "Special": "Monster, Fear, Throw Stones (r12, S8)",
        "Detail": "Nil",
        "Value": 100
    },
    "barrow_wight": {
        "Mv": 6,
        "F": 3,
        "S": 3,
        "T": 7,
        "A": 1,
        "W": 2,
        "C": 6,
        "Mi": 0,
        "Wi": 5,
        "Fa": 0,
        "Equip": "Heavy armor and sword",
        "Special": "Undead, Blades of the Dead, Terror, Spellcaster (Paralyse)",
        "Detail": "Nil",
        "Value": 50
    },
    "warg": {
        "Mv": 10,
        "F": 3,
        "S": 4,
        "T": 4,
        "A": 1,
        "W": 1,
        "C": 2,
        "Mi": 0,
        "Wi": 0,
        "Fa": 0,
        "Equip": "Nil",
        "Special": "Mount",
        "Detail": "Nil",
        "Value": 10
    },
    "wyvern": {
        "Mv": 3,
        "F": 5,
        "S": 6,
        "T": 6,
        "A": 2,
        "W": 3,
        "C": 3,
        "Mi": 0,
        "Wi": 0,
        "Fa": 0,
        "Equip": "Nil",
        "Special": "Monster, Fly, Monstrous Charge, Terror, Feral, Venom",
        "Detail": "Ringwraith mounts",
        "Value": 50
    },
    "balrog": {
        "Mv": 6,
        "F": 10,
        "S": 9,
        "T": 9,
        "A": 5,
        "W": 10,
        "C": 7,
        "Mi": 0,
        "Wi": 10,
        "Fa": 0,
        "Equip": "Giant flaming sword, fiery lash (r8, S7 in the shooting phase; target that's hit is pulled to the balrog)",
        "Special": "Monster, Ancient Evil(18), Fearless, Resistant to Magic, Terror, Flame of Udun, Creature of the Ancient World",
        "Detail": "Nil",
        "Value": 350
    },
    "minor_dragon": {
        "Mv": 6,
        "F": 7,
        "S": 7,
        "T": 7,
        "A": 4,
        "W": 7,
        "C": 4,
        "Mi": 3,
        "Wi": 3,
        "Fa": 3,
        "Equip": "Nil",
        "Special": "Fire Breath, Ancient Evil(12), Monster, Monstrous Charge, Resistant to Magic, Survival Instinct, Terror, Wyrmtongue, Fly, Spellcaster (Transfix, Compel)",
        "Detail": "Nil",
        "Value": 350
    },
    "ancient_dragon": {
        "Mv": 6,
        "F": 8,
        "S": 9,
        "T": 9,
        "A": 6,
        "W": 20,
        "C": 6,
        "Mi": 3,
        "Wi": 6,
        "Fa": 0,
        "Equip": "Nil",
        "Special": "Ancient Evil(18), Fearless, Fly, Resistant to Magic, Terror, Fire Breath, Can spend one will per turn freely, Immovable Object, Unstoppable Momentum, Spellcaster(Transfix, Compel, Instill Fear, Sap Will)",
        "Detail": "Nil",
        "Value": 700
    },
    "kraken": {
        "Mv": 4,
        "F": 6,
        "S": 6,
        "T": 6,
        "A": 6,
        "W": 6,
        "C": 3,
        "Mi": 1,
        "Wi": 5,
        "Fa": 1,
        "Equip": "Nil",
        "Special": "Monster, Ancient Evil(12), Resistant to Magic, Terror, From the Deep, Tentacles, Water Dweller, Dragged to the Depths, Many Parts",
        "Detail": "Nil",
        "Value": 200
    },
    "bat_swarm": {
        "Mv": 3,
        "F": 1,
        "S": 2,
        "T": 3,
        "A": 4,
        "W": 4,
        "C": 2,
        "Mi": 0,
        "Wi": 0,
        "Fa": 0,
        "Equip": "Nil",
        "Special": "Fly, Many Parts, Blinding Swarm",
        "Detail": "Nil",
        "Value": 35
    },
    "dweller_in_the_dark": {
        "Mv": 8,
        "F": 7,
        "S": 5,
        "T": 5,
        "A": 3,
        "W": 3,
        "C": 7,
        "Mi": 0,
        "Wi": 0,
        "Fa": 0,
        "Equip": "Nil",
        "Special": "Monster, Resistant to Magic, Terror, Murderous Power",
        "Detail": "Demon",
        "Value": 75
    },
    "war_giant_elephant": {
        "Mv": 8,
        "F": 4,
        "S": 9,
        "T": 7,
        "A": 3,
        "W": 10,
        "C": 2,
        "Mi": 0,
        "Wi": 0,
        "Fa": 0,
        "Equip": "Capacity of 12 models if fortification are set on him (fortification are T9, W5)",
        "Special": "Monster, Terror, Trample",
        "Detail": "Nil",
        "Value": 275
    },
    "bandit": {
        "Mv": 6,
        "F": 2,
        "S": 3,
        "T": 3,
        "A": 1,
        "W": 1,
        "C": 2,
        "Mi": 0,
        "Wi": 0,
        "Fa": 0,
        "Equip": "Knife or Club",
        "Special": "Pack Fighter",
        "Detail": "Nil",
        "Value": 5
    },
    "warhorse": {
        "Mv": 8,
        "F": 2,
        "S": 4,
        "T": 5,
        "A": 1,
        "W": 1,
        "C": 3,
        "Mi": 0,
        "Wi": 0,
        "Fa": 0,
        "Equip": "Barding",
        "Special": "Devastating Charge, Mount",
        "Detail": "Can also be war goat and such creatures",
        "Value": 20
    },
    "lycanthrope": {
        "Mv": 6,
        "F": 5,
        "S": 5,
        "T": 5,
        "A": 3,
        "W": 3,
        "C": 5,
        "Mi": 2,
        "Wi": 2,
        "Fa": 2,
        "Equip": "Armor, two-handed axe/sword",
        "Special": "Shapeshift(Werecreature)",
        "Detail": "Nil",
        "Value": 200
    },
    "werecreature": {
        "Mv": 8,
        "F": 8,
        "S": 8,
        "T": 8,
        "A": 4,
        "W": 4,
        "C": 6,
        "Mi": 3,
        "Wi": 3,
        "Fa": 3,
        "Equip": "Nil",
        "Special": "Monster, Burly, Fearless, Resistant to Magic, Terror, Woodland Creature, Berserk, Mundane Resistance",
        "Detail": "Nil",
        "Value": 200
    },
    "lich": {
        "Mv": 6,
        "F": 7,
        "S": 6,
        "T": 8,
        "A": 2,
        "W": 2,
        "C": 6,
        "Mi": 3,
        "Wi": 25,
        "Fa": 0,
        "Equip": "Nil",
        "Special": "Undead, Ancient Evil(18), Terror, Will of Evil, Ethereal, Drain Soul, Phylactery, Spellcaster (Drain Courage, Transfix, Instill Fear, Shroud of Shadows, Chill Soul, Sap Will, Telekinesis, Paralysis, Finger of Death, Growth of Plants, Curse, Control Weather, Telepathy, Astral Projection), Necromancy, Summon(lesser demons, skeleton bats, zombies, skeletons)",
        "Detail": "the necromancer of dol guldur",
        "Value": 350
    },
    "giant_spider": {
        "Mv": 10,
        "F": 2,
        "S": 5,
        "T": 3,
        "A": 2,
        "W": 2,
        "C": 2,
        "Mi": 0,
        "Wi": 0,
        "Fa": 0,
        "Equip": "Nil",
        "Special": "Swift Movement, Fear, Survival Instinct, Spider Webs, Venom",
        "Detail": "Nil",
        "Value": 20
    },
    "ghouls": {
        "Mv": 7,
        "F": 3,
        "S": 4,
        "T": 3,
        "A": 2,
        "W": 2,
        "C": 3,
        "Mi": 0,
        "Wi": 0,
        "Fa": 0,
        "Equip": "Nil",
        "Special": "Undead, Paralysis Strike, Fear, Fearless",
        "Detail": "Nil",
        "Value": 25
    },
    "death_knights": {
        "Mv": 6,
        "F": 5,
        "S": 4,
        "T": 6,
        "A": 2,
        "W": 2,
        "C": 6,
        "Mi": 2,
        "Wi": 15,
        "Fa": 0,
        "Equip": "Armor, magical weapon",
        "Special": "Undead, Ancient Evil(12), Terror, Will of Evil, Spellcasting (Drain Courage, Transfix, Compel, Instill Fear, Sap Will)",
        "Detail": "Nazguls",
        "Value": 75
    },
    "giants": {
        "Mv": 8,
        "F": 6,
        "S": 8,
        "T": 8,
        "A": 4,
        "W": 6,
        "C": 4,
        "Mi": 0,
        "Wi": 0,
        "Fa": 0,
        "Equip": "Giant club",
        "Special": "Monster, Throw Stones (r18, S9), Terror, Monstrous Charge, Unstoppable Momentum",
        "Detail": "Cyclops are giants +1 to A, W, C and throw further (24). However, they only have one eye and can be blinded.",
        "Value": 200
    },
    "skeletal_giants": {
        "Mv": 6,
        "F": 5,
        "S": 8,
        "T": 7,
        "A": 4,
        "W": 6,
        "C": 3,
        "Mi": 0,
        "Wi": 0,
        "Fa": 0,
        "Equip": "Giant axe",
        "Special": "Undead, Monster, Throw Stones (r24, S9), Terror, Monstrous Charge, Fearless",
        "Detail": "Nil",
        "Value": 200
    },
    "trebuchet": {
        "S": 10,
        "D": 10,
        "W": 3,
        "Special": "Area effect = 2mv, S5 hit, knocked prone",
    },
    "bolt_thrower": {
        "S": 7,
        "D": 10,
        "W": 3,
        "Special": "Fire D6 shot, but no area of effect",
    },
    "ballista": {
        "S": 9,
        "D": 10,
        "W": 3,
        "Special": "pushed away d6Mv and if hit something, take a S6 hit; everyone prone",
    },
    "catapult": {
        "S": 10,
        "D": 10,
        "W": 4,
        "Special": "area effect 2Mv S5; to wound vs siege target = roll twice, take best",
    },
    "vampire": {
        "Mv": 7,
        "F": 6,
        "S": 5,
        "T": 5,
        "A": 4,
        "W": 4,
        "C": 6,
        "Mi": 2,
        "Wi": 6,
        "Fa": 0,
        "Equip": "(any weapon and/or armor)",
        "Special": "Undead, Shapeshifting(Bat), Shapreshifting(Gaseous Form), Fear, Spellcaster (Transfix, Compel*, Paralyse, Sap Will), Preternatural Agility, Energy Drain, Mundane Resistance, Regeneration(1), Vunerability(garlic, holy symbol, running/holy water, mirror), Destroying(sunlight, stake through the heart, immersion in running/holy water), Phylactery(a coffin), Summon (animals)",
        "Detail": "Nil",
        "Value": 200
    },
    "minotaur": {
        "Mv": 6,
        "F": 5,
        "S": 6,
        "T": 5,
        "A": 3,
        "W": 3,
        "C": 5,
        "Mi": 2,
        "Wi": 1,
        "Fa": 0,
        "Equip": "Two-Handed Axe",
        "Special": "Fear, Cave Dweller, Migthy Blow",
        "Detail": "Nil",
        "Value": 150
    },
    "medusa": {
        "Mv": 6,
        "F": 5,
        "S": 4,
        "T": 5,
        "A": 2,
        "W": 2,
        "C": 5,
        "Mi": 1,
        "Wi": 3,
        "Fa": 0,
        "Equip": "Nil",
        "Special": "Spellcasting (Paralysis, Curse(Petrification))",
        "Detail": "Nil",
        "Value": 120
    },
    "unicorn": {
        "Mv": 8,
        "F": 3,
        "S": 4,
        "T": 5,
        "A": 2,
        "W": 2,
        "C": 5,
        "Mi": 1,
        "Wi": 3,
        "Fa": 0,
        "Equip": "Nil",
        "Special": "Resistant to Magic, Fear, Lone Hunter, Woodland Creature",
        "Detail": "Nil",
        "Value": 80
    },
    "gargoyle": {
        "Mv": 4,
        "F": 3,
        "S": 6,
        "T": 8,
        "A": 2,
        "W": 2,
        "C": 5,
        "Mi": 0,
        "Wi": 0,
        "Fa": 0,
        "Equip": "Nil",
        "Special": "Monster, Fly, Mundance Resistance, Fear, Fearless",
        "Detail": "As long as it doesn't move, it looks exactly like stone.",
        "Value": 80
    },
    "giant_animal": {
        "Mv": 8,
        "F": 4,
        "S": 7,
        "T": 6,
        "A": 3,
        "W": 3,
        "C": 4,
        "Mi": 0,
        "Wi": 0,
        "Fa": 0,
        "Equip": "Nil",
        "Special": "Monster, Woodland Creature",
        "Detail": "Ape, wolf, bear, etc. Possible to add extra abilities based on the type (ape could have swift movement on trees, bear migthy blow, scorpion venom and paralysis, etc.), Survival Instinct",
        "Value": 80
    },
    "gelatinous_cube": {
        "Mv": 4,
        "F": 3,
        "S": 4,
        "T": 6,
        "A": 2,
        "W": 4,
        "C": 3,
        "Mi": 0,
        "Wi": 0,
        "Fa": 0,
        "Equip": "Nil",
        "Special": "Monster, Cave Dweller, Brutal Attack(Absorb), Fearless",
        "Detail": "Everything that's not magical is consumed within hours (flesh is consumed even faster). Metal can take some days.",
        "Value": 80
    },
    "slime": {
        "Mv": 2,
        "F": 2,
        "S": 3,
        "T": 4,
        "A": 1,
        "W": 1,
        "C": 3,
        "Mi": 0,
        "Wi": 0,
        "Fa": 0,
        "Equip": "Nil",
        "Special": "Cave Dweller, Swift Movement, Fearless",
        "Detail": "Nil",
        "Value": 10
    },
    "giant_insect": {
        "Mv": 7,
        "F": 3,
        "S": 5,
        "T": 5,
        "A": 2,
        "W": 2,
        "C": 2,
        "Mi": 0,
        "Wi": 0,
        "Fa": 0,
        "Equip": "Nil",
        "Special": "Cave Dweller, Swift Movement, Venom",
        "Detail": "Some (like Carrion Crawler) can have paralysis or disease hit instead of Venom",
        "Value": 10
    },
    "centaur": {
        "Mv": 7,
        "F": 3,
        "S": 4,
        "T": 4,
        "A": 1,
        "W": 2,
        "C": 4,
        "Mi": 0,
        "Wi": 0,
        "Fa": 0,
        "Equip": "Spear (or bow)",
        "Special": "Devastating Charge",
        "Detail": "Nil",
        "Value": 20
    },
    "troll": {
        "Mv": 6,
        "F": 3,
        "S": 5,
        "T": 5,
        "A": 2,
        "W": 2,
        "C": 3,
        "Mi": 0,
        "Wi": 0,
        "Fa": 0,
        "Equip": "Nil",
        "Special": "Monster, Regeneration(1) (as long as it's not suffering fire or acid attack), Woodland Creature, Cave Dweller",
        "Detail": "Nil",
        "Value": 80
    },
    "djinn": {
        "Mv": 6,
        "F": 5,
        "S": 5,
        "T": 5,
        "A": 3,
        "W": 3,
        "C": 3,
        "Mi": 1,
        "Wi": 1,
        "Fa": 1,
        "Equip": "Scimitar",
        "Special": "Mundane Resistance, Fly, Shapeshifting(Gaseous Form, Whirlwind), Spellcaster(Invisibility, Conjure Objects, Illusion), Lone Hunter, Preternatural Agility",
        "Detail": "Nil",
        "Value": 100
    },
    "dryad": {
        "Mv": 6,
        "F": 3,
        "S": 3,
        "T": 3,
        "A": 1,
        "W": 1,
        "C": 5,
        "Mi": 0,
        "Wi": 6,
        "Fa": 1,
        "Equip": "Nil",
        "Special": "Resistant to Magic, Woodland Creature, Swift Movement, Spellcaster (Charm, Compel, Transfix)",
        "Detail": "Can meld with trees. Is bound to a single tree that protect magical items. if the three dies she dies and vice-versa.",
        "Value": 75
    },
    "elemental": {
        "Mv": 6,
        "F": 5,
        "S": 6,
        "T": 6,
        "A": 2,
        "W": 3,
        "C": 5,
        "Mi": 0,
        "Wi": 0,
        "Fa": 0,
        "Equip": "Nil",
        "Special": "Monster, Fearless, Immunity(the elemental element type), Mundane Resistance. Fire: Set Ablaze Hit. Wind: Fly. Earth: Migthy Blow. Water: Water Dweller.",
        "Detail": "Nil",
        "Value": 100
    },
    "hydra": {
        "Mv": 8,
        "F": 6,
        "S": 7,
        "T": 7,
        "A": 6,
        "W": 6,
        "C": 5,
        "Mi": 1,
        "Wi": 3,
        "Fa": 1,
        "Equip": "Nil",
        "Special": "Monster, Terror, Regeneration(1)*, Water Dweller, Many Parts (it has 6 heads), Resistant to Magic",
        "Detail": "Its regeneration brings back one head each time.",
        "Value": 250
    },
    "griffon": {
        "Mv": 6,
        "F": 3,
        "S": 5,
        "T": 5,
        "A": 2,
        "W": 3,
        "C": 6,
        "Mi": 1,
        "Wi": 1,
        "Fa": 1,
        "Equip": "Nil",
        "Special": "Monster, Fly, Mount*",
        "Detail": "Griffon are extremely loyal mount but very difficult to tame. They instinctively attack horses.",
        "Value": 250
    },
    "mummy": {
        "Mv": 4,
        "F": 4,
        "S": 4,
        "T": 5,
        "A": 2,
        "W": 3,
        "C": 6,
        "Mi": 0,
        "Wi": 0,
        "Fa": 0,
        "Equip": "Nil",
        "Special": "Undead, Spellcaster(Transfix, Paralysis, Sap Will), Terror, Disease Hit, Paralysis Hit, Weakness(Fire), Mundane Resistance",
        "Detail": "Target has -1 to their roll for Disease Hit vs the Mummy",
        "Value": 250
    },
    "wraith": {
        "Mv": 5,
        "F": 3,
        "S": 3,
        "T": 4,
        "A": 2,
        "W": 2,
        "C": 5,
        "Mi": 1,
        "Wi": 8,
        "Fa": 0,
        "Equip": "Nil",
        "Special": "Undead, Terror, Energy Drain (regains Wi instead of W), Spectral Walk, Ethereal, Fearless, Will of Evil",
        "Detail": "Nil",
        "Value": 75
    },
    "rust_monster": {
        "Mv": 7,
        "F": 3,
        "S": 4,
        "T": 6,
        "A": 2,
        "W": 2,
        "C": 4,
        "Mi": 0,
        "Wi": 0,
        "Fa": 0,
        "Equip": "Nil",
        "Special": "Cave Dweller, Rusting",
        "Detail": "Nil",
        "Value": 50
    },
    "possessed": {
        "Mv": 6,
        "F": 4,
        "S": 4,
        "T": 4,
        "A": 2,
        "W": 2,
        "C": 2,
        "Mi": 0,
        "Wi": 0,
        "Fa": 0,
        "Equip": "Nil",
        "Special": "Berserking, Mutations, Fear",
        "Detail": "Nil",
        "Value": 15
    },
    "beastmen": {
        "Mv": 6,
        "F": 4,
        "S": 3,
        "T": 4,
        "A": 1,
        "W": 2,
        "C": 2,
        "Mi": 0,
        "Wi": 0,
        "Fa": 0,
        "Equip": "Two-Handed Axe or Spear",
        "Special": "Berserking, Backstabbing",
        "Detail": "Nil",
        "Value": 10
    },
    "assassin": {
        "Mv": 7,
        "F": 4,
        "S": 4,
        "T": 4,
        "A": 2,
        "W": 2,
        "C": 5,
        "Mi": 1,
        "Wi": 1,
        "Fa": 1,
        "Equip": "Poisonned Blade, Light Armor, Throwing Dagger",
        "Special": "Cave Dweller, Swift Movement, Backstabbing, Poison(5+)",
        "Detail": "Nil",
        "Value": 20
    },
    "chimera": {
        "Mv": 6,
        "F": 4,
        "S": 7,
        "T": 6,
        "A": 5,
        "W": 5,
        "C": 3,
        "Mi": 0,
        "Wi": 0,
        "Fa": 0,
        "Equip": "Nil",
        "Special": "Venom, Paralysis Strike (can be used at distance 12), Fly (only for a turn), Monster",
        "Detail": "Nil",
        "Value": 125
    },
    "harpies": {
        "Mv": 4,
        "F": 4,
        "S": 4,
        "T": 4,
        "A": 1,
        "W": 2,
        "C": 2,
        "Mi": 0,
        "Wi": 0,
        "Fa": 0,
        "Equip": "Nil",
        "Special": "Fly, Backstabbers",
        "Detail": "Nil",
        "Value": 20
    },
    "giant_rats": {
        "Mv": 4,
        "F": 2,
        "S": 4,
        "T": 4,
        "A": 1,
        "W": 1,
        "C": 2,
        "Mi": 0,
        "Wi": 0,
        "Fa": 0,
        "Equip": "Nil",
        "Special": "Disease Strike, Survival Instinct",
        "Detail": "Nil",
        "Value": 20
    },
    "twig_blight": {
        "Mv": 4,
        "F": 2,
        "S": 2,
        "T": 3,
        "A": 1,
        "W": 1,
        "C": 2,
        "Mi": 0,
        "Wi": 0,
        "Fa": 0,
        "Equip": "Nil",
        "Special": "Woodland Creature",
        "Detail": "Suffer two hit instead of one in the Set Ablaze rule",
        "Value": 5
    },
    "fire_snake": {
        "Mv": 6,
        "F": 2,
        "S": 3,
        "T": 4,
        "A": 2,
        "W": 2,
        "C": 3,
        "Mi": 0,
        "Wi": 0,
        "Fa": 0,
        "Equip": "Nil",
        "Special": "Weakness(Cold), Mundane Resistance, Immunity(Fire), Dangerous Body(Fire), Preternatural Agility",
        "Detail": "Nil",
        "Value": 25
    },
}

/*

Monsters to add: 
- Primitive /w blowdart, spears and T4
- Make all TP classes (maybe in a separate category of "humans")
    Humans
        Monk (spells)
        Flagellant (the more you receive hit, the more you are resistant and hit strong)
        Cleric
        Inquisitor
        Priest
        High Priest

        Mage
        Amber Mage
        Ruby Mage
        Amethyst Mage
        Celestial Mage

        Soldier
        Barbarian
        Cold Barbarian
        Knight
        Imperial Guard
        Blood Company

        Troubadour
        Bard
        Taleteller
        Rogue
        Thief

    Undeads
        Noble
        Necromancer
        Lich
        Damned
        Vampire

        Ghost (can become invisible)
        Revenant (ignore armor)
        Invisible Stalker (ignore armor; invisibility)
        Specter
        Banshee
        Reaper

        Skeleton
        Wight
        Blood Blade (more kill = stronger; heal on crit)
        Lord of Darkness

        Necrophage
        Mummy
        Nightmare
        
    Drows
        Spearman
        Sewer Runner
        Assassin
        Master of Arms
        Cold One

        Arbalest
        Heavy Arbalest
        Arachnid Master
        Scorpion Cavalry
        Black Hand Arbalest

        Stormtrooper
        Master of War
        Black Hand Cavalry
        Black Guard of Naggaroth

        Prophet
        Grey Sorcerer
        Black Sorcerer
        Plague Monk
        Plague Encensor

    Elves
        Mage
        High Mage
        Priest of Illuvatar
        Druid
        Disciple of Gaia

        Spearman
        High Spearman
        Royal Guard
        Cavalier
        Dragon Cavalier

        Swordsmen
        Master Swordsman
        Illuvatar's Swordsman
        Dark Warrior
        White Lion
        Phoenix Guard

        Archer
        Sharpshooter
        Illuvatar's Archer
        Redemption Archer
        Woods Traveler
        Assassin
        Ranger

    Dwarves (just the cool classes)
        Canoneer
        Thunder Hammerer
        Sanguinaire
        Monster Killer

- Check out Demon Souls, Dark Souls (1-2-3) and Elden Ring monsters and bosses
    Living Armor (blue eye knight, red eye knight)
    Spy
    Fat Official
    Rock Worm (mini purple worm)
    Fire Lizard
    Mind Flayer
    Man Centipede
    Phosphorescent Giant Slug

    Hollows (crazy human almost undeads)
    Undead Attack Dogs
    Necromancer (bound to its creation: if he dies, they die; otherwise he can rez them)
    Black Knights
    Taurus Demon
    
    Curse-Rotted Greatwood aka Gulthias Tree

    

Bosses idea:
    Looking Glass Knight
    Flexible Sentinel
    Make a "boss generator" that creates a condition upon which you can fight a much more dangerous creature as a boss (blind, bound/chained, missing an important figthing limb, having allies that helps you, etc.)

Will o Wisp



*/

const chargen = 
{
    "base_career": {
        2: "Gravedigger: +1 C, +1 Fa",
        3: "Ermit: +1 Wi, can survive without rations in the wilderness",
        4: "Messenger/Herald: +1 Fa, +1 starting language",
        5: "Hunter: +1 F, can recognize tracks in the wilderness",
        6: "Highwayman Bandit: +1 Mv, +1 A",
        7: "Mercenary: +1 F, +1 reaction roll with mercenary and hireling requests",
        8: "Craftsman: +1 S, discount of 10% on buying basic equipment",
        9: "Soldier: +1 A, +1 Mi",
        10: "Sailor: +1 Mv, can navigate (basically) a ship",
        11: "Scholar/apothecarist: +1 Wi, gets an extra rumour at start and knows if it's true or not",
        12: "Spy: +1 Fa, +1 when trying to hide or listen at doors"
    },
    "special_traits": {
        0 : "Wraith Touched: Can sense undead bodily (pain sensation). Can sometimes see ghosts & ethereal undead.  -1 save against undead. Undead effect (such as paralysis, life-steal, etc.) has more effect. Automatically fail save against transformation in wright etc. The wound cannot heal through normal means. ",
        1 : "Luck curse (by a dryad, nymph, etc.): -1 to all Fa roll as long as you don't befriend and help a nymph/dryad",
        2 : "Demon's Blood: -1 to all saves vs Demons and Demons have +1 vs user. More easily corrupted. -1 C. All fire attack have -1 vs the user. ",
        3 : "Divine Banishment: Can't enter a covenant. Shunned by all temples and Watchers. ",
        4 : "Hideous: -1 all reaction roll",
        5 : "Old/weak: +3d6+15 age, -1 S, +1 F",
        6 : "Illiterate: Can't read or write.",
        7 : "Born of a Witch: Can sense magic, can be sensed by magic. -1 to all Fa towards magic.",
        8 : "Iron will: +Wi.",
        9 : "Eagle Eye: Can see further in the daylight and darkness. Can shoot further than others with missile weapons. +1 to-hit with missile attack when action Hold.",
        10 : "Favor: Someone nearby owes you a big favor. ",
        11 : "Military Veteran: +1 C. The user's henchmen have +1 on their courage roll.",
        12 : "Extraordinary Strength: +1 S, +1 to all might dice usage for strength purposes",
        13 : "Lucky: +1 to all Fa roll, start with 1 Fa",
        14 : "Blessed: +1 to all heroic dice",
        15 : "Family Heirloom: Starts with a magic object",
        16 : "Inherited Watcher's Favor: An unnamed and forgotten Watcher has given a favor through a Covenant with the character’s ancestor. They can still use it (once in a lifetime) during a time of crisis. For the referee: determine the Covenant at random. Bonus of reaction towards this Covenant. ",
        17: "Diseased: -1 T",
        18: "Limp-Legged: -1 Mv",
        19: "Mutant: Roll a mutation from the curse list of mutations.",
        20: "Horse Lord (as per tag)",
        21: "Animal Friend: +2 reaction with animals; recognize most animals",
        22: "Undead Slayer: + to Fa against undead; recognize most undeads",
        23: "Berserker: At the beginning of each combat, roll d6. On a 6+, the user enters a berserking state: he gains +1 F, +1 A, fearless and the berserktag.",
        24: "Very Large: +1 Mv, +1 T, +1 S. However, people will mistrust him and thinks he is an ogre.",
        25: "Signature Weapon: Choose one weapon. Gain proficiency in it.",
        26: "Cat Grace: Always lose -1 W when falling. +1 to jump and climb.",
        27: "Locksmith: +2 to all use of thieve's tool and finding/desactivating traps.",
        28: "Bad Eyesight: -1 to all missile attack, see less far away.",
        29: "Anemic: -2 to all T roll for disease and poison related.",
        30: "One Arm: Missing one arm (as per the injury).",
        31: "Graverobber: You get a desecration curse at random (1d6 from 5 to 10), but you also get an extra free heirloom (random magic item).",
        32: "Dark Corruption (X): You dabble in the dark arts, helped dark forces, used dark artefacts or was corrupted by an agent of the dark. Your being has been corrupted by this. You have -X on all C or Fa roll vs commands, spellcasting, etc. from a dark/evil source. X starts at 1 and can go up throughout the game.",
        33: "Language Fluency: +1 starting language",
    },
    "fame": {
        0 : "Helped people escape a local fire/collpasing structure (bridge, wall, house, etc.)",
        1 : "Helped in a famous regional hunt against a dangerous creature",
        2 : "Help slew a giant animal that threathened a village (giant crab, giant boar, giant bear, etc.)",
        3 : "Rescued a maiden trapped in a tower/cave/dungeon",
        4 : "Fought on the front of a bloody conflict and stood his ground",
        5 : "Was part of a small group that held off a number of men from pursuing a retreating army (rearguard)",
        6 : "Is said to be extremely good in dueling/mounted joust/bow contest, etc.",
        7 : "Protected a temple from raiders",
        8 : "Helped many people from an incurable disease in a local hospital",
        9 : "Helped the local priest drive away undeads",
        10 : "Tricked some creatures (undead, orcs, etc.) from going in the wrong direction thereby saving a village",
        11 : "Helped a migthy hero kill a big creature",
    },
    "criminal_background": {
        2: "Framed for a crime",
        3: "Highwayman bandit",
        4: "Crime against possessions (burned down some place, broke something of a rich man/priest, etc.)",
        5: "Helped a criminal do something and got caught",
        6: "Robber/thief",
        7: "Fought on the wrong side of a conflict/soldier of another covenant",
        8: "Wanted to help a friend/family but got caught up in crime",
        9: "Stole for food",
        10: "Assaulted someone out of anger/self defence",
        11: "Extortion and money crime",
        12: "killed by accident",
    },
    "initial_goals": {
        0 : "research & knowledge",
        1 : "divine calling",
        2 : "freedom",
        3 : "fame & glory",
        4 : "social movement",
        5 : "do something that has never been done & see something that has never been seen",
        6 : "vengeance",
        7 : "looking for magic relics",
        8 : "money & luxury",
        9 : "seek to enter the service of a powerful patrol",
        10 : "exploration & risk",
        11 : "searching for friends or family (or ancestors)",
    },
    "languages": {
        2: "Nbhudhnom: language of the abyss, sorcery and dragons",
        3: "Merwos: language of the dead",
        4: "Crotsos: the language of ogres and giants",
        5: "Taiknes: the language of omen and ancient creatures (minotaur, centaur, medusa, etc.)",
        6: "Skelos, The Black Tongue: orcs & co",
        7: "No other language than common.",
        8: "Dherghos: the local dialect (tocharian)",
        9: "Ausghos: the easterner language (aka the language around this particular part of the continent, chinese/japanese)",
        10: "Emporos: the language of the seafaring people (greeks)",
        11: "Spekjo: the divine language",
        12: "Dherbho, The Primordial Tongue: ancient common language",
    },
}

const data = Object.assign({}, 
    generalities, 
    underground_content_creation, 
    underground_exploration, 
    wilderness_content_creation, 
    wilderness_exploration, 
    npc,
    downtime_and_domain,
    shrine,
    treasure,
    spells,
    chargen)

const content = 
{
    "generalities": generalities,
    "underground_content_creation": underground_content_creation,
    "underground_exploration": underground_exploration,
    "wilderness_content_creation": wilderness_content_creation,
    "wilderness_exploration": wilderness_exploration,
    "npc": npc,
    "downtime_and_domain": downtime_and_domain,
    "shrine": shrine,
    "treasure": treasure,
    "spells": spells,
    "chargen": chargen
}


function getContent(){
    return content; 
}


function getMonsters(){
    return monsters; 
}

function getData() {
    return data; 
}

function getCommands(searchFor){
    let tempArray = []
    for(let key in data){
        if(key.includes(searchFor)){
            tempArray.push(key)
        }
    }
    return tempArray; 
}

function get2d6(){
    return get1d6() + get1d6(); 
}

function get1d6(){
    return Math.floor(Math.random() * 6) + 1;
}

function isSpecialCase(input){
    if(input == "monster_needs"){
        return true;
    }
    return false; 
}

function getSpecialCase(input){
    return getData()[input][Math.floor(Math.random() * 8)]
}

function getRandomArrayNumber(inputArray){
    return 
}

function getLengthOfList(list){
    var length = 0; 
    for (var [key, value] of Object.entries(list)) {
        length += 1
    }
    return length
}

function getContent(input){
    if(input in getData()){
        if(isSpecialCase(input)) {
            return getSpecialCase(input)
        }
        var length =  getLengthOfList(getData()[input])
        if(length == 11) {
            return getContent(getData()[input][get2d6()])
        } else {
            return getContent(getData()[input][Math.floor(Math.random() * length)])
        }
    }
    return input
}

function requestContent(input){
    switch(input){
        case "reaction_roll":
            return getContent("reaction_roll") + " [ " + getContent("monster_needs") + " ] "; 
        case "shrine":
            return getContent("shrine") + " | " + getContent("shrine_desc") + " | " + getContent("shrine_use")
        case "distance":
            return "Dungeon: " + get2d6() * 10 + " feet | Wilderness: " + get2d6() * 30 + " feet"
        case "base_actions":
            return getContent("general_roll")
        case "hex":
            return "Name: {0} \nDescription: {1} \nHidden: {2} \nMonster: {3}".format(getHexName(), getHexDescription(), getHexHiddenFeature(), getHexMonster())
        case "triple_oracle":
            return "Yes/No = " + get1d6() + " \nHow much = " + get1d6() + " \nHow favorable = " + get1d6()
        default:
            return getContent(input)
    }
}

/* 

TODO: 
- Add to random encounter that you can spot old towers and high hills to get a good look at the terrain all around. Shift weather effects maybe to weather itself. Try to minimize at best as I can the resource management aspect of hexcrawling to make it more about DISCOVERY than TRAVEL.
- Add in discovering roads in the "finding secrets" of the hex. 
- IF I do hexcrawl, I should have a "players map" that represents what the player can actually 'see' on an hex grid (so full of empty hexes but at least some good points), a "fictional map" aka a drawned map, and a DM's map with hexes and locations
- Maybe do a hex map where the first level of hexes represents element within an hex and the second level are my hexes, and the third level is the regional hex (aka granularity in visual representation)
- Add to random encounter that you can meet with an old ally needing help for something
- Add to encounters caravans


Evil artefact prevents the use of Fa. 


Add range to range weapons


Solo:
TSR 9067 - Msolo1 - Blizzard Pass
TSR 9060 - Msolo2 - Maze of the Riddling Minotaur
T&T Solo 1 - Buffalo Castle
T&T Solo 2 - Deathtrap Equalizer
T&T Solo 3 - Labyrinth
T&T Solo 5 - Dargon's Dungeon
D&D Endless Quest 01 - Dungeon of Dread
D&D Endless Quest 02 - Mountain of Mirrors
Middle Earth Quest #01 - Night of the Nazgûl
Middle Earth Quest #03 - Rescue in Mirkwood
Fabled Lands - Cities of Gold and Glory
Lone Wolf - Flight From the Dark
Fighting Fantasy - The Warlock of the Firetop Mountain
TSR 9096 - BSOLO - Ghost of Lion Castle
TSR 9082 - XSOLO - Lathan's Gold
TSR 9157 - XSOLO 2 - Thunderdelve Mountain (definitely the best one IMHO).


REDO:
- Hexploration
    One hex per day (+- 24 km)
        Long diagonal is 24 km
        Radius is 12 km to point
        Radius is 10 km to line (apothem)
        Sides are 12 km
    Each hex biome type has a different % for: finding secrets, getting lost, encounters, getting slowed, etc.
    E.g.
        Plains: easy to find secrets, easy to encounter, difficult to get lost or slowed, etc.
    Make a list of generic minor landmark or finding in cases a 'empty hex' (hex without a major feature) turns up a "find secret success"
    Most if not all hexes should have something: lairs, villages, landmark, vantage points, ruins, shortcuts, etc.
    Shortcuts (roads, river, passage) enables free travel on the hex where you can skip most result (except encounters)
    Shortcut encounters 9basically road encounters) should be specific and not dependant on he xbiome type




Campaign ideas:
- Fog 
- Have a set of 6 death knights obeying a forgotten god (the betrayer, the undying, the lord of shadow, the dark marshal, the dragon knight of [some dark location], the lord of blades). they are lieutenants desecrating the land to bring more fog about. for their stats see the "Armies of LOTR" ruleset in Mordor, the heroes
- they each could have their own dungeon (two-level dungeon).
- the boss would be locked inside the bottom of the megadungeon and he would have been re-awakened when the first adventurers/soldiers died inside the tomb. 
- orcs and other monsters are warbands under the control of these lieutenants
- the new covenant (from which the players are prisoners) took over an older one through fight. therefore, there is still guerilla/villages/remanants of that older covenant. it's therefore a triangle relation: the lich, the conquered, the conquerer
- questions:
    Is he serving a god, is he a god, or is he trying to usurp a god?
    What's the purpose of the fog in the plan?
- Maybe have all of this be a foreshadowing of the 'real' deal, which is basically "accross the mountain", this is where the fogs come from. That region accross the mountain = demon's souls. So the lich would be an agent of the fog (of the watcher coming back to life), but he's trying to use it for his own power. If the party really wants to get rid of the fog, they need to traverse the mountains and basically do demon's souls. 
- Each month, the lich will kill a big NPC (leader of villages, ex-adventurers, etc. -> require to have believable and strong cool NPCs)

- Hexes:
    https://docs.google.com/spreadsheets/d/15N4beAStRAkS1nqKJ7Dt3owjo1vT_MZXVveh5muYgbc/edit#gid=1446881270
    https://docs.google.com/spreadsheets/d/15meMo2Q3eBAzSycioIaSrkumWqzshj_zimcpQAbZf0U/edit#gid=257857313

- PIE ideas for quests, legends, items, locales, myths, etc.: 
    http://falsemachine.blogspot.com/2022/05/gilding-shadow.html
    http://falsemachine.blogspot.com/2022/06/murder-at-dawn-of-time.html
    http://falsemachine.blogspot.com/2022/06/we-need-to-be-churning-more-oceans.html

- PRIME TASK: Make a 5RD generator that scales (aka it creates a 5RD level composed of 5(ish) quarters each with their 5RD rooms for a total of 25 meaningful room + a bunch of generic room (some of them being empty))
- For quarters/overdungeon maps: https://docs.google.com/spreadsheets/d/18jzyOcctDytnv4V_lZ6fCNzyh0xkEVhIzrYU4zE2pfA/edit#gid=1257933702
- Extra stuff for kingdoms: https://www.d20pfsrd.com/gamemastering/other-rules/kingdom-building

- Faire un truc pour chaque table avec sa règle associée afin d'avoir une "cheatsheet" d'inclus dans le generator. aussi juste mettre les règles de DM
    - Pursuit (p. 33 Castle in Tower)

- Covenants ("temple factions" aka the various organisations obeying god-kings and watchers)
    - Covenants are the demons way of having worship. Everyone is, by default, in God's covenant. 
    - Covenants are therefore, for now, more of an NPC thing. 
    - It's possible to be a Steward-Lord, aka you are a noble, but you don't have territory because you aren't in the covenant. 
    - Entering a covenant is therefore more of a quest than anything. It requires sacrifices (animals and humans), it requires to bow to the demon, to worship him through specific acts based on the covenants, etc. Also, each demon/covenant is obsessed with one particular item (like DS covenants). 
    - Covenants therefore need the basic info that I had normally (symbol, name, etc.) but also object, level-up (you gain powers), sacrifices & rites
    - Covenants rituals/spells are: 
        - You have a passive bonus
        - You can use X number of time a spell (vancian-ish like DS1)
        - When all usage are done, you lose both active and passive
    
- Covenant/faction generator
    What kind of 'god' (dragon, balrog, spirit, etc.)
    https://docs.google.com/spreadsheets/d/18jzyOcctDytnv4V_lZ6fCNzyh0xkEVhIzrYU4zE2pfA/edit#gid=1557177057
        Name
        Commandments
        Sin
        Symbol
        Symbol type
        Gift
        Altar type
        Offering type
        What secret information people knows from the outset, and what secret informations they will never know
        Officiality
        (powers?)

- Add to my DM stuff disease and curse descriptions https://docs.google.com/spreadsheets/d/1ET8DTWlVJNWyjvRDrp_uvp8P25QUOQi5QbYnWOvIS4o/edit#gid=50706048
- Put to DM stuff the progression and other hidden stuff (magic sword, etc.) https://docs.google.com/presentation/d/1JtIkJGe9YL0AwlxDpvmgOSQ9aWknJt2ShZAykJgjfCA/edit#slide=id.g13638b89f05_0_0

- Make the world anvil stuff
- Dungeon idea: 
    basilica cistern
- Advancement = 
    - Ember + meteorite sword = magic sword. Magic sword + gems = weapon level up. 
    - Shrine + creature parts = character level up. 

- Rumours:
    HOW TO
        1) Feature: Make a list of 20 features (location, faction, magic item, npc, setting details, factions, etc.)
        2) Type: Assign to each feature a type based on what it is: 
            - Danger (warning)
            - Reward (drawn towards)
            - Mystery (drawn towards)
            - Opportunity (drawn towards)
            - Challenge warning)
        It doesn't have to be 'about' the player (NPC danger could be that he's a danger to others, to the party, that HE's in danger, etc.)
        3) Object: Something that affect the feature
        4) Details: Write in some words the details of the rumour
            Janus - threat - blacksmith (Janus debt to blacksmith, in hiding)
Other format: 
    I heard from [X] that [Y] did [Z] to [A].
        X = hunter, ranger, guard, barkeeper, peasant, soldier, etc.
        Y = anybody in the margin, monsters, etc. 
        Z = destroyed, defiled, took, helped, etc.
        A = location, object, person
    X (object, person, artefact, treasure) has been sigthed in Y (dungeon, lair, etc.)

In this village, a [NPC] is resting for now before [action]
In this village, the local authority, a [NPC], is holding a criminal, [NPC], in their cells. This last one claims innocence. 
You meet [monster] in [location] near the village, performing [action]. However, [NPC] is watching over it [oddities]
In this village, the people are riled up about [subject/event] because [NPC] did [action]
We haven't heard of [NPC] for a time now. He lives in [location] and had an important role in the village as a [role]. 

- If I want to go full solo, the best for mapping would be to make a deck of cards using threee "level" of geomorphs. 
    First one is "always have an exit to another room". 
    Second is "mostly have exits, rarely don't, sometimes they are secret", 
    the third is "almost always doesn't have an exit.". 
    That whay, you pick (for example) 10 cards of each, shuffled BY LEVEL and stack them to start with level 1. 
    you need to make sure you have at LEAST one card to go down that you shuffle at random through the three levels.
    to make sure you don't know which is which, maybe just mix them with unique rooms and so on. 
    On the side, you just need another deck of randomly assigned room description
    And then you roll to see the content as per normal room generation

Various magic item ideas:
Banner ideas = reroll wounds, to hit, etc. based on conditions (such as 1s only, against particular monsters, etc.)

Every time a friendly Arnor model within 6" of Mal beth suffers a Wound,
roll a 06. On a 5+, the Wound has been prevented, exactly as if a point of
Fate had been expended. Note that if this roll is failed, Hero models may
still use Fate points as normal.

Always being on the effect of a spell

"Horse lord"

terror

causing wounds regain Mi/Fa/Wi

smoke bomb: S1 attack; when hit, either you spend a Wi or you are "Transfix"






Categories for sections in obsidian main campaign:

GAME
    Rules cheatsheet (this is what I put on the discord based on the following)
    Rules
        Character
        Equipment
        Exploration
        Combat
        Downtime
    Logistics
        Tools
        Sandbox
        Open Table
WORLD
    World Map (real + symbolic, including continent scale)
    Locations (continents and region, also include who is ruling what)
    Covenants (include all info, including potential leaders)
    Timeline & Events (including world events)
    Races & Monsters
    Nations*
    Languages
    Lore & Religion (two parts. first part: make three categories: what everyone know, what only a few know, what nobody knows. second part: the full DM-side blurb)
(X REGION)/CAMPAIGN
    Regional Overview (nation, language, covenants, etc. aka links with the world)
    Domain (court, leader, hall of infamy, etc.)
    Organisation (covenants, guilds, etc.)
    Maps (symbolic + real + hex)
    Timeline & Events (history of the region, recent domain events)
    Locations (cities, villages, lairs, ruins)
    Adventurers Codex (session recaps)
    Tavern (rumours)
    Items (magical items with their location/distribution)
    Festivals & Calendar

*
Ecological influence
Living conditions
Family demographics
Courts, jails, pilgrimage sites, temples
Religious & civil leadership
Informal (& tribal) leadership
Means of communication
Perceptions (of Watchers, governement, neibghours, adventurers, etc.)
    "How do we view ourselves... them..." and "How do they view us... themselves..."
    Who, in their narrative, is their villain, their victim and their hero? Why?
ASCOPE/PMESII: 
    Areas, Structure, Capabilities, Organisation, People, Events
    vs
    Political, Military, Economic, Social, Information, Infrastructure
What language do they speak? Who speaks it (5Ws)?

*/