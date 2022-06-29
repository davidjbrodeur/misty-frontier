
let faction_catchphrase = " -> [FACTION] wants [MOTIVATION] but [OBSTACLE]. Therefore [ACTIVITY TO SURMOUNT OBSTACLE]."

let settlement_catchphrase = " -> The dungeon level is home (although not originally) to one species of monsters that uses it as a settlement area. They are more numerous, have places to perform all their things, etc. They use the dungeon layout to their advantage. They don't come from the dungeon, but rather from another settlement they had which connects from the inside to the dungeon (i.e. the level is double: one half is the dungeon proper, the other half is the settlement/cavern systems of the inhabitants of this level). "

const data = 
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
    "disease":{
        2: "Smallpox",
        3: "Yellow Fever",
        4: "Malaria",
        5: "Cholera",
        6: "Crud",
        7: "Grippe",
        8: "Spotted Fever",
        9: "Dysentry",
        10: "Turberculosis",
        11: "Typhoid Fever",
        12: "Leprosy"
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
    }, "regional_event":{ // https://docs.google.com/spreadsheets/d/1ET8DTWlVJNWyjvRDrp_uvp8P25QUOQi5QbYnWOvIS4o/edit#gid=2008862648
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
    },
     "general_theme":{
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
    },
    "type_of_entrance" : {
        2: "Castle or tower",
        3: "Castle or tower",
        4: "Caves or cavern",
        5: "Caves or cavern",
        6: "Ancient temple",
        7: "Crypt or tomb",
        8: "Crypt or tomb",
        9: "Ancient temple",
        10: "Abandonned mine",
        11: "Stronghold",
        12: "Town"
    },
    "main_entrance_location" : {
        2: "beneath a city",
        3: "beneath a ruin",
        4: "graveyard",
        5: "beneath a kurgan",
        6: "in a chasm",
        7: "in the normal terrain",
        8: "in the normal terrain",
        9: "in a grotto",
        10: "on a hill",
        11: "on a mountain",
        12: "on a small island/coast cave"
    },
    "player_purpose" : {
        2: "someone dug too deep and awakened an ancient evil",
        3: "a cult re-awakened an ancient evil",
        4: "an evil outpost that's known in the region and require investigation",
        5: "prisonners and slaves are brought here",
        6: "ancient temple that hasn't been in contact for a while",
        7: "ancient temple that hasn't been in contact for a while",
        8: "ancient temple that hasn't been in contact for a while",
        9: "known for its treasure people wants it mapped",
        10: "lost shrine",
        11: "escapes from it tells gruesome stories (or the players are the escapees)",
        12: "the place just appeared (magically appeared, its magical shield was broken, it came from the earth, etc.)"
    }, 
    "initial_purpose" : {
        2: "vault",
        3: "forgotten god temple",
        4: "library/research/knowledge/laboratory",
        5: "stronghold/fortress/hq", 
        6: "destroyed demon cult",
        7: "temple",
        8: "prison",
        9: "destroyed covenant",
        10: "crypt/tomb of somewhat recent humans",
        11: "crypt/tomb of dragons",
        12: "crypt/tomb of an unknown/ancient empire"
    },
    "importance_of_dungeon" : {
        2: "an artefact is rumored to be there",
        3: "an ancient king built/used it previously and has a significance for people of the region (also full of treasures)",
        4: "deep within is supposed to be an answer to something important (gods, doom, problem in the region, etc.)", 
        5: "a traitor/horrible criminal decided to hide there and now it's his base of operation",
        6: "a faction (from inside or outside) took residence there and are conducting raids on the region",
        7: "an ancient evil has been awakened there (or went there)",
        8: "it is lost but filled with untold riches",
        9: "A holy site built in ancient times by a religion which still exists today. It was ceremonially sealed to mark the end of some forgotten religious schism. What few pilgrims still visit must be content to make their prayers at the entrance",
        10: "A defense built by a subterranean civilization. They dug ever upwards, not realizing until too late that eventually the solid earth would give way to a terrifying sky. Believing they had discovered hell, they built this place to prevent any horrible surface creatures from reaching the wholesome lands below.",
        11: "The death palace of an ancient conqueror queen who demanded that each of her subject people’s build a grand home for her. This particular one was filled with confusing corridors and traps, in the express hope that she might visit someday.", 
        12: "the dungeon is alive with a will and a mind: it brings people in and moves around the earth",
    }, 
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
        7: "boss and retinue have invaded from below",
        8: "boss and retinue have invaded from outside",
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
    }
    
}

function getData() {
    return data; 
}

const hexEncounterType = getCommands("_hex_encounters"); 

const hexDescription = getCommands("_hex_description");

const hexKeys = getCommands("_hex_key");

function getCommands(searchFor){
    let tempArray = []
    for(let key in data){
        if(key.includes(searchFor)){
            tempArray.push(key)
        }
    }
    return tempArray; 
}

function getGeneratedContent(input){
    let result = ""
    const args = input.split(" ");
    switch(args[0]) {
        case "general":
            return getDataRoll("general_roll");
        case "reaction_roll":
            result = getDataRoll("reaction_roll");
            if(args.length > 1){
                result += getNeeds(args[1])
            } else {
                result += getNeeds("human")
            }
            return result;
        case "hex_encounter":
            if(args.length > 1){
                return getSubFunctionEncounter(args[1] + "_hex_encounters");
            }
            return getSubFunctionEncounter(getRandomElementFromArray(hexEncounterType));
        case "wilderness_monster_encounter":
            return getSubFunctionEncounter("monster_type") + " -> " + getDataRoll("what") + " / " + getDataRoll("how") + " / " + getDataRoll("where");
        case "hex_content":
            if(args.length > 1){
                result += getSubFunctionEncounter(args[1] + "_hex_description");
            } else {
                result += getSubFunctionEncounter(getRandomElementFromArray(hexDescription));
            }
            if(args.length > 1){
                result += getSubFunctionEncounter(args[1] + "_hex_key");
            } else {
                result += getSubFunctionEncounter(getRandomElementFromArray(hexKeys));
            }
        case "small_landmark_content":
            return getDataRoll("small_landmark_content") + " - " + getDataRoll("general_theme")
        default:
          return getSubFunctionEncounter(args[0]);
      }
}

function getRandomElementFromArray(arrayToCheck){
    return arrayToCheck[Math.floor(Math.random() * arrayToCheck.length)];
}

function getSubFunctionEncounter(encounterType){
    result = getDataRoll(encounterType); 
    if(result.includes("monster_omen")) {
        return getDataRoll("monster_omen") + " -> " + getDataRoll("monster_type"); 
    }
    let allCommands = getCommands("");
    for(command in allCommands){
        if(result == allCommands[command]) {
            return getSubFunctionEncounter(result) + " [ " + encounterType + " ] "; 
        }
    }
    return result; 
}

function getDataRoll(rollType){
    let roll = getXd6(2); 
    console.log("roll " + roll + " on " + rollType)
    return data[rollType][roll];
}

function getWildernessEncounter(){
    let encounterType = get1d6();
    if(encounterType == 4 || encounterType == 5){
        return "Nothing."
    }
    switch(encounterType){
        case 1:
            return getWildernessMonsterEncounter();
        case 2:
            return getWildernessMonsterOmen();
        case 3:
            return getPartyLoss();
        case 4:
        case 5:
            return "Nothing."
        case 6:
            return getPartyFind();
    }
}

function getNeeds(type){
    let roll = 0; 
    if(type === "dumb"){
        roll = (get1d6() - 2)
        if (roll < 1) {
            roll = 1
        }
    }
    if(type === "animal"){
        roll = get1d6()
    }
    if(type === "human"){
        roll = getXd6(2)
    }
    if(type === "high"){
        roll = get3d6(2)
    }
    console.log(roll)
    let result = " -> "
    switch(roll){
        case 1:
        case 2:
            return result += "Safety: lost, hurt, running away from threat, without light, etc.";
        case 3:
        case 4:
            return result += "Sustenance: hunting, hungry, eating, preparing food";
        case 5:
            return result += "Comfort: link with own species (mating), warming, nap, shelter, relax play";
        case 6:
            return result += "Territory: patrolling, tracking, conquering, exploring";
        case 7:
            return result += "Catharsis: play, sadism, anger, desperation, revenge, corruption";
        case 8:
            return result += "Luxury: looking for gold, items, alcohol, slaves";
        case 9:
            return result += "Knowledge: looking for direction, lore, spying neighbours"
        case 10:
            return result += "Allies or assistance: they need help for -> " + getNeeds(type);            
    }
    return result += "Actualisation of the self: ideology, religion, training, cult"
}

function getXd6(numberOfD6){
    var sum = 0; 
    for(let i = 0; i < numberOfD6; i++){
        let dice = get1d6();
        sum += dice; 
    }
    return sum; 
}

function get1d6(){
    return Math.floor(Math.random() * 6) + 1;
}

/*
TODO: 
- Make a test method. 
    Grab a an entry
    If it's a dict with 11, roll 2d6 on it. Take note of the result in a variable. Recursion on the new answer. 
    If it's a dict with something less, roll at random on it based on the length. Take note of the result in a variable. Recursion on the new answer. 
    If it's not a dict, return. 
- If the previous doesn't work, refactor data in multiple dict that makes sense and I can subdivide. If it does work, do the following and make it easier to navigate: 
    - Refactor the data to make it clearer (i.e. by categories and put that category as a title in the html)
        In game roll(general roll, reaction roll, camp roll, wandering encounter inside dungeons, etc.)
        Dungeon   
            megadungeon info 
            Dungeon level (used for lairs) -> 5rd + some bonus rooms
            Dungeon room
            Dungeon stuff (traps, tricks, etc.)
        NPC
            lords
            bbeg
            courts
            covenants
        treasures
            money
            magic item
            special sword stuff
            shrine
        Wilderness Encounter (takes a terrain type as input; else it generates a random one)
        Hex keys (takes a terrain type as input; else it generates a random one)
- Refactor the code to make it clearer/cleaner/better
- Refactor the DM page accordingly and clearer
- Shrines
    - Create one shrine per level up. Each have their own access-point (object, touch, sleep, moment of the day, monster blood, mosnter heart, etc.)
    - Divine them in categories
    - When I roll, I can either roll a specific category or just any shrine
    - You can only receive once the blessing from a particilar shrine
    - See: https://lichvanwinkle.blogspot.com/2021/11/coins-in-d-and-found-advancement.html
- Dungeon stuff: 
    - Megadungeon info: https://docs.google.com/spreadsheets/d/1d-NAi8Mf1W1Q71_fxzIJoqcdXtsjIla3vAAY_5tywaM/edit#gid=1835374211
    - Generic dungeon room generator:
        check this one first: https://docs.google.com/spreadsheets/d/18jzyOcctDytnv4V_lZ6fCNzyh0xkEVhIzrYU4zE2pfA/edit#gid=0
        https://docs.google.com/spreadsheets/d/1d-NAi8Mf1W1Q71_fxzIJoqcdXtsjIla3vAAY_5tywaM/edit#gid=2126864139
    - Room descriptor: https://docs.google.com/spreadsheets/d/1ZfupKrrQjUMwkoxNj1aDv9osXouG--REc6tgv6QyHkE/edit#gid=531653215
    - PRIME TASK: Make a 5RD generator that scales (aka it creates a 5RD level composed of 5(ish) quarters each with their 5RD rooms for a total of 25 meaningful room + a bunch of generic room (some of them being empty))
        - For quarters/overdungeon maps: https://docs.google.com/spreadsheets/d/18jzyOcctDytnv4V_lZ6fCNzyh0xkEVhIzrYU4zE2pfA/edit#gid=1257933702
    - Dungeon oddities: https://docs.google.com/spreadsheets/d/1ZfupKrrQjUMwkoxNj1aDv9osXouG--REc6tgv6QyHkE/edit#gid=982051153
    - Dungeon traps: https://docs.google.com/spreadsheets/d/1ZfupKrrQjUMwkoxNj1aDv9osXouG--REc6tgv6QyHkE/edit#gid=1297903876
    - Dungeon tricks: https://docs.google.com/spreadsheets/d/1ZfupKrrQjUMwkoxNj1aDv9osXouG--REc6tgv6QyHkE/edit#gid=1981379202
    - Challenge puzzle: https://docs.google.com/spreadsheets/d/1ZfupKrrQjUMwkoxNj1aDv9osXouG--REc6tgv6QyHkE/edit#gid=721793603
    - Dungeon refurbish: https://docs.google.com/spreadsheets/d/1ZfupKrrQjUMwkoxNj1aDv9osXouG--REc6tgv6QyHkE/edit#gid=1120484264
- Wilderness & outdoor stuff: 
    - key generator with: 
        - generating keys
            - find a format and make sure output is there like: terrain, secret, special encounter, landmark, etc. 
            - generate content for the key following below methods but also:
                - run two different encounters from the wilderness encounters and create an "aftermath"
                - 
        
        - Meeting other lords, wizards, etc. with their appropriate quests and stuff
        - Lair unique landmarks: https://docs.google.com/spreadsheets/d/1d-NAi8Mf1W1Q71_fxzIJoqcdXtsjIla3vAAY_5tywaM/edit#gid=1544695177
        - AER lairs: https://docs.google.com/spreadsheets/d/1d-NAi8Mf1W1Q71_fxzIJoqcdXtsjIla3vAAY_5tywaM/edit#gid=800557242
            - Make the lair generator a very good "unique lair generator". I need to have one giant spider(s) laid, one crypt, one minotaur, one maze, etc. each campaign. Staples and tropes. 
        - Roads: https://docs.google.com/spreadsheets/d/1d-NAi8Mf1W1Q71_fxzIJoqcdXtsjIla3vAAY_5tywaM/edit#gid=52623965
        - Ruins and landmarks: https://docs.google.com/spreadsheets/d/1d-NAi8Mf1W1Q71_fxzIJoqcdXtsjIla3vAAY_5tywaM/edit#gid=1908528293
        - Ruins: https://docs.google.com/spreadsheets/d/1d-NAi8Mf1W1Q71_fxzIJoqcdXtsjIla3vAAY_5tywaM/edit#gid=1713713205
    - hex and world generation: https://docs.google.com/spreadsheets/d/18jzyOcctDytnv4V_lZ6fCNzyh0xkEVhIzrYU4zE2pfA/edit#gid=1000516822
    - Random event for hex encounters: 
            https://docs.google.com/spreadsheets/d/1d-NAi8Mf1W1Q71_fxzIJoqcdXtsjIla3vAAY_5tywaM/edit#gid=106840394
            https://docs.google.com/spreadsheets/d/18jzyOcctDytnv4V_lZ6fCNzyh0xkEVhIzrYU4zE2pfA/edit#gid=318261942
- Political & high level stuff: 
    - Settlement generators: 
        https://docs.google.com/spreadsheets/d/18jzyOcctDytnv4V_lZ6fCNzyh0xkEVhIzrYU4zE2pfA/edit#gid=1966764013
        Also find/use the Colville checklist
    - Leader and NPCs: https://docs.google.com/spreadsheets/d/1d-NAi8Mf1W1Q71_fxzIJoqcdXtsjIla3vAAY_5tywaM/edit#gid=2015555476
    - Courts: https://docs.google.com/spreadsheets/d/1d-NAi8Mf1W1Q71_fxzIJoqcdXtsjIla3vAAY_5tywaM/edit#gid=1576217076
    - Faction: https://docs.google.com/spreadsheets/d/1d-NAi8Mf1W1Q71_fxzIJoqcdXtsjIla3vAAY_5tywaM/edit#gid=941868129
    - BBEG generator with lore stuff, lieutenants, etc.
    - Covenant generator: https://docs.google.com/spreadsheets/d/18jzyOcctDytnv4V_lZ6fCNzyh0xkEVhIzrYU4zE2pfA/edit#gid=1557177057
- Treasure: 
    - Campaign items: https://docs.google.com/spreadsheets/d/1d-NAi8Mf1W1Q71_fxzIJoqcdXtsjIla3vAAY_5tywaM/edit#gid=979214676
    - Treasure generator
        https://docs.google.com/spreadsheets/d/1x5GffgPYIvmj58ROZzKevnX4m9P2zo3yTKnBVdML7-8/edit#gid=0
        Remake it to include my own stuff with Dark Souls influence
    - Magical items? https://docs.google.com/spreadsheets/d/18jzyOcctDytnv4V_lZ6fCNzyh0xkEVhIzrYU4zE2pfA/edit#gid=853960712
    - when i roll coins, it must have some description: is it stamped with a ruler face? how does it look? etc. 
- Monster
    - Create monster tags. Make sure that it can automatically add them to monster entry in the generator?
    - Generator unique monster type in this area: https://docs.google.com/spreadsheets/d/1d-NAi8Mf1W1Q71_fxzIJoqcdXtsjIla3vAAY_5tywaM/edit#gid=214513084
    - Add monsters from:
        - Middle Earth
        - Warhammer 1st
        - Classic D&D monsters
- Go through the OSE books (basic, advanced, DM, etc.) to steal, adjust, add, correct
- Rumours:
    - X (object, person, artefact, treasure) has been sigthed in Y (dungeon, lair, etc.)
- https://rolesrules.blogspot.com/2013/02/almost-encounters-sights-sounds-and.html
- Repasser toutes mes sheets, mes D&D links, etc. pour être sur j'ai rien oublié
    https://drive.google.com/file/d/1n8_RldrDkewLHdvgYTT1TWumwi1R27y8/view
    https://drive.google.com/file/d/13fualfLEV_VaahBTaZtRggEUVtWIQXoc/view
- NPC generator: add keyword (cynical, brave, fearful, etc.)
- Check scenarios in MESBG, battle companies and gondor at war for more ideas on hexes, encounters, events, etc. 

NOTES/GENERAL TODO
- Maybe put encounters per terrain type?
- Link to this place from time to time: https://donjon.bin.sh/fantasy/random/
- Add to my DM stuff disease and curse descriptions https://docs.google.com/spreadsheets/d/1ET8DTWlVJNWyjvRDrp_uvp8P25QUOQi5QbYnWOvIS4o/edit#gid=50706048
- Put to DM stuff the progression and other hidden stuff (magic sword, etc.) https://docs.google.com/presentation/d/1JtIkJGe9YL0AwlxDpvmgOSQ9aWknJt2ShZAykJgjfCA/edit#slide=id.g13638b89f05_0_0
- Make a pre-campaign checklist based on my "make a campaign in a couple of hours"
    What is the starting town called?
    What is the name of the local inn? Who runs it?
    Who do we meet in that inn?
    What is the name of the main road?
    What is the local river?
    A local forest
    The nearby hills
    Two nearby villages
    A distant city
    Who rules the area?
    Who are the town elders?
    Who's the local expert on the Arcane?
    Who's the local religious expert?
    Who knows the most about the area's history?
    Who knows the most about the local geography?
    Who are the local low-level monster tribe?
    A slightly farther off mid-level monster tribe
    Who is the local evil boss?
    What do they want?
    What will happen if they get it?
- In the pre-game checklist:
    - Always have one treausre map ready
    - Always have one NPC ready
    - Always have one ruin ready
    - Always have one level of the megadungeon ready
    - Always have one dungeon ready
    - Always have one very cool event ready
    - Always have a table of 2d6 rumours
    - Check the various slides of campaign creator: https://docs.google.com/spreadsheets/d/1d-NAi8Mf1W1Q71_fxzIJoqcdXtsjIla3vAAY_5tywaM/edit#gid=1151023139
- Make the world anvil stuff
*/

const monsters = {
    "soldier": {
        "F": 3,
        "S": 3,
        "T": 3,
        "Mv": 5,
        "A": 1,
        "W": 1,
        "C": 1,
        "Mi": 0,
        "Wi": 0,
        "Fa": 0,
        "Equip": "Spear",
        "Special": "Nil",
        "Detail": "Nil"
    }
}

function getMonsters(){
    return monsters; 
}


