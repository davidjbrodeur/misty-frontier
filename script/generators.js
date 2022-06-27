const data = 
{
    "camp_event": {
        2: "Infighting",
        3: "Infighting",
        4: "Demand a higher pay",
        5: "Demand a higher pay",
        6: "Tell a useful rumour",
        7: "Tell a useful rumour",
        8: "Tell a useful rumour",
        9: "Find something of value (treasure, plant, etc.)",
        10: "Find something of value (treasure, plant, etc.)",
        11: "&camp_omen",
        12: "One of them is a veteran and kills a hostile creature (+1 next wilderness roll)"
    },
    "&camp_omen": {
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
        12: "A hireling starts creaming and runs away never to be seen again."
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
    "hex_encounter" : {
        2: "&wilderness_monster_encounter",
        3: "&wilderness_monster_encounter",
        4: "&wilderness_monster_encounter",
        5: "&party_loss",
        6: "&monster_omen",
        7: "&monster_omen",
        8: "Nothing.",
        9: "Nothing.",
        10: "Party find secret hex location if any. Otherwise, roll a small treasure on &small_landmark.",
        11: "Party find secret hex location if any. Otherwise, roll a small treasure on &small_landmark.",
        12: "Party find secret hex location if any. Otherwise, roll a small treasure on &small_landmark."
    },
    "&what" : {
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
    "&how" : {
        2: "Combat with another monster (reroll &monster_type)",
        3: "Being greatly injured",
        4: "Being cursed/magically affected",
        5: "Being seditious with its own group/race/type",
        6: "Being related to another monster (looking for, hunting, checking, talking) (reroll &monster_type)",
        7: "Chilling",
        8: "Being related to another monster (looking for, hunting, checking, talking) (reroll &monster_type)",
        9: "Looking for his own group/race/type",
        10: "Being diseased",
        11: "Being dead",
        12: "Combat with another monster (reroll &monster_type)"
    },
    "&where" : {
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
    "&monster_omen" : {
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
    "&party_loss" : {
        2: "A thick and ominous fog in difficult terrain assail the party. One of the hireling (or PC) gets lost.",
        3: "A thick and ominous fog covers the land. The party gets lost (roll 1d6 for direction where 1 is north).",
        4: "The party gets bogged down in difficult terrain and loses 1 AP.",
        5: "Party gets enfogged and has to stop for the day.",
        6: "The party gets bogged down in difficult terrain and loses 1 AP.",
        7: "The party gets bogged down in difficult terrain and loses 1 AP.",
        8: "The party gets bogged down in difficult terrain and loses 1 AP.",
        9: "Party gets enfogged and has to stop for the day.",
        10: "Food gets spoiled. Fatigue for next day.",
        11: "Bad weather/water/ration starts a disease problem in the party.",
        12: "The party finds a ruins while lost (-1 AP)."
    },
    "&party_find" : {
        2: "2",
        3: "3",
        4: "4",
        5: "5",
        6: "6",
        7: "7",
        8: "8",
        9: "9",
        10: "10",
        11: "11",
        12: "12"
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
    "swamp_hex_encounters":{
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
    "jungle_hex_encounters":{
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
    "desert_hex_encounters":{
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
    "snow_hex_encounters":{
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
    "wasteland_hex_encounters":{
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
    "forest_hex_encounters":{
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
    "plains_hex_encounters":{
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
    "hills_hex_encounters":{
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
    "water_hex_encounters":{
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
    "rural_hex_encounters":{
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
    "urban_hex_encounters":{
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
    "&disease":{
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
    "&curse_transformation" : {
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
    "&desecration_curse":{
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
        2: "&disease",
        3: "Made an enemy by speaking too much (1-2 an official, 3-4 a merchant, 5-6 a smuggler)",
        4: "Contracted a huge debt (1d6 * 10 GP) to a criminal organization (gambling, booze, etc.)",
        5: "Lost at gambling (1d6 * 10SP)",
        6: "Solid headache hangover",
        7: "Solid headache hangover",
        8: "Solid headache hangover with an extra 1d6 * 10 SP in pocket",
        9: "&rumours",
        10: "Gambled and won 1d6GP",
        11: "Made friend with 1-2 an official, 3-4 a merchant, 5-6 a smuggler",
        12: "Traded story with an old man and received a treasure map in exchange"
    },
    "&domain_events_overview":{
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
    "forest_hex_description":{
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
    "forest_hex_key":{
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
    "&monster_type":{ // https://docs.google.com/spreadsheets/d/1ET8DTWlVJNWyjvRDrp_uvp8P25QUOQi5QbYnWOvIS4o/edit#gid=1111363162
        2: "&dragon_type",
        3: "&abheration_type",
        4: "&lycan_type",
        5: "&ogre_type",
        6: "&animal_type",
        7: "&orc_type",
        8: "&human_type",
        9: "&undead_type",
        10: "&giant_type",
        11: "&flyer_type",
        12: "&mythological_type"
    },
    "&orc_type":{
        2: "6d6 orcs tribe with shaman.",
        3: "3d6 orcs with a troll.",
        4: "3d6 orcs patrol.",
        5: "2d6 orcs patrol.",
        6: "1d6 orcs straggler",
        7: "1d6 orcs dissidents.",
        8: "1d6 orcs hunting party",
        9: "2d6 orcs patrol.",
        10: "3d6 orcs slave hunter group.",
        11: "2d6 orcs figthing 2d6 orcs.",
        12: "Reroll monster, 1d6 orcs are figthing it."
    },
    "&human_type":{
        2: "6d6 orcs tribe with shaman.",
        3: "3d6 orcs with a troll.",
        4: "3d6 orcs patrol.",
        5: "2d6 orcs patrol.",
        6: "1d6 orcs straggler",
        7: "1d6 orcs dissidents.",
        8: "1d6 orcs hunting party",
        9: "2d6 orcs patrol.",
        10: "3d6 orcs slave hunter group.",
        11: "2d6 orcs figthing 2d6 orcs.",
        12: "Reroll monster, 1d6 orcs are figthing it."
    },
    "&animal_type":{
        2: "6d6 orcs tribe with shaman.",
        3: "3d6 orcs with a troll.",
        4: "3d6 orcs patrol.",
        5: "2d6 orcs patrol.",
        6: "1d6 orcs straggler",
        7: "1d6 orcs dissidents.",
        8: "1d6 orcs hunting party",
        9: "2d6 orcs patrol.",
        10: "3d6 orcs slave hunter group.",
        11: "2d6 orcs figthing 2d6 orcs.",
        12: "Reroll monster, 1d6 orcs are figthing it."
    },
    "&ogre_type":{
        2: "6d6 orcs tribe with shaman.",
        3: "3d6 orcs with a troll.",
        4: "3d6 orcs patrol.",
        5: "2d6 orcs patrol.",
        6: "1d6 orcs straggler",
        7: "1d6 orcs dissidents.",
        8: "1d6 orcs hunting party",
        9: "2d6 orcs patrol.",
        10: "3d6 orcs slave hunter group.",
        11: "2d6 orcs figthing 2d6 orcs.",
        12: "Reroll monster, 1d6 orcs are figthing it."
    },
    "&lycan_type":{
        2: "6d6 orcs tribe with shaman.",
        3: "3d6 orcs with a troll.",
        4: "3d6 orcs patrol.",
        5: "2d6 orcs patrol.",
        6: "1d6 orcs straggler",
        7: "1d6 orcs dissidents.",
        8: "1d6 orcs hunting party",
        9: "2d6 orcs patrol.",
        10: "3d6 orcs slave hunter group.",
        11: "2d6 orcs figthing 2d6 orcs.",
        12: "Reroll monster, 1d6 orcs are figthing it."
    },
    "&undead_type":{
        2: "6d6 orcs tribe with shaman.",
        3: "3d6 orcs with a troll.",
        4: "3d6 orcs patrol.",
        5: "2d6 orcs patrol.",
        6: "1d6 orcs straggler",
        7: "1d6 orcs dissidents.",
        8: "1d6 orcs hunting party",
        9: "2d6 orcs patrol.",
        10: "3d6 orcs slave hunter group.",
        11: "2d6 orcs figthing 2d6 orcs.",
        12: "Reroll monster, 1d6 orcs are figthing it."
    },
    "&giant_type":{
        2: "6d6 orcs tribe with shaman.",
        3: "3d6 orcs with a troll.",
        4: "3d6 orcs patrol.",
        5: "2d6 orcs patrol.",
        6: "1d6 orcs straggler",
        7: "1d6 orcs dissidents.",
        8: "1d6 orcs hunting party",
        9: "2d6 orcs patrol.",
        10: "3d6 orcs slave hunter group.",
        11: "2d6 orcs figthing 2d6 orcs.",
        12: "Reroll monster, 1d6 orcs are figthing it."
    },
    "&dragon_type":{
        2: "6d6 orcs tribe with shaman.",
        3: "3d6 orcs with a troll.",
        4: "3d6 orcs patrol.",
        5: "2d6 orcs patrol.",
        6: "1d6 orcs straggler",
        7: "1d6 orcs dissidents.",
        8: "1d6 orcs hunting party",
        9: "2d6 orcs patrol.",
        10: "3d6 orcs slave hunter group.",
        11: "2d6 orcs figthing 2d6 orcs.",
        12: "Reroll monster, 1d6 orcs are figthing it."
    },
    "&abheration_type":{
        2: "6d6 orcs tribe with shaman.",
        3: "3d6 orcs with a troll.",
        4: "3d6 orcs patrol.",
        5: "2d6 orcs patrol.",
        6: "1d6 orcs straggler",
        7: "1d6 orcs dissidents.",
        8: "1d6 orcs hunting party",
        9: "2d6 orcs patrol.",
        10: "3d6 orcs slave hunter group.",
        11: "2d6 orcs figthing 2d6 orcs.",
        12: "Reroll monster, 1d6 orcs are figthing it."
    },
    "&flyer_type":{
        2: "6d6 orcs tribe with shaman.",
        3: "3d6 orcs with a troll.",
        4: "3d6 orcs patrol.",
        5: "2d6 orcs patrol.",
        6: "1d6 orcs straggler",
        7: "1d6 orcs dissidents.",
        8: "1d6 orcs hunting party",
        9: "2d6 orcs patrol.",
        10: "3d6 orcs slave hunter group.",
        11: "2d6 orcs figthing 2d6 orcs.",
        12: "Reroll monster, 1d6 orcs are figthing it."
    },
    "&mythological_type":{ 
        2: "6d6 orcs tribe with shaman.",
        3: "3d6 orcs with a troll.",
        4: "3d6 orcs patrol.",
        5: "2d6 orcs patrol.",
        6: "1d6 orcs straggler",
        7: "1d6 orcs dissidents.",
        8: "1d6 orcs hunting party",
        9: "2d6 orcs patrol.",
        10: "3d6 orcs slave hunter group.",
        11: "2d6 orcs figthing 2d6 orcs.",
        12: "Reroll monster, 1d6 orcs are figthing it."
    },
    "world_event":{ //https://docs.google.com/spreadsheets/d/1ET8DTWlVJNWyjvRDrp_uvp8P25QUOQi5QbYnWOvIS4o/edit#gid=2008862648
        2: "6d6 orcs tribe with shaman.",
        3: "3d6 orcs with a troll.",
        4: "3d6 orcs patrol.",
        5: "2d6 orcs patrol.",
        6: "1d6 orcs straggler",
        7: "1d6 orcs dissidents.",
        8: "1d6 orcs hunting party",
        9: "2d6 orcs patrol.",
        10: "3d6 orcs slave hunter group.",
        11: "2d6 orcs figthing 2d6 orcs.",
        12: "Reroll monster, 1d6 orcs are figthing it."
    }, "settlement_obstacles":{  // https://docs.google.com/spreadsheets/d/1ET8DTWlVJNWyjvRDrp_uvp8P25QUOQi5QbYnWOvIS4o/edit#gid=2008862648
        2: "6d6 orcs tribe with shaman.",
        3: "3d6 orcs with a troll.",
        4: "3d6 orcs patrol.",
        5: "2d6 orcs patrol.",
        6: "1d6 orcs straggler",
        7: "1d6 orcs dissidents.",
        8: "1d6 orcs hunting party",
        9: "2d6 orcs patrol.",
        10: "3d6 orcs slave hunter group.",
        11: "2d6 orcs figthing 2d6 orcs.",
        12: "Reroll monster, 1d6 orcs are figthing it."
    }, "&regional_event":{ // https://docs.google.com/spreadsheets/d/1ET8DTWlVJNWyjvRDrp_uvp8P25QUOQi5QbYnWOvIS4o/edit#gid=2008862648
        2: "6d6 orcs tribe with shaman.",
        3: "3d6 orcs with a troll.",
        4: "3d6 orcs patrol.",
        5: "2d6 orcs patrol.",
        6: "1d6 orcs straggler",
        7: "1d6 orcs dissidents.",
        8: "1d6 orcs hunting party",
        9: "2d6 orcs patrol.",
        10: "3d6 orcs slave hunter group.",
        11: "2d6 orcs figthing 2d6 orcs.",
        12: "Reroll monster, 1d6 orcs are figthing it."
    }, "&domain_event":{ // https://docs.google.com/spreadsheets/d/1ET8DTWlVJNWyjvRDrp_uvp8P25QUOQi5QbYnWOvIS4o/edit#gid=2008862648
        2: "6d6 orcs tribe with shaman.",
        3: "3d6 orcs with a troll.",
        4: "3d6 orcs patrol.",
        5: "2d6 orcs patrol.",
        6: "1d6 orcs straggler",
        7: "1d6 orcs dissidents.",
        8: "1d6 orcs hunting party",
        9: "2d6 orcs patrol.",
        10: "3d6 orcs slave hunter group.",
        11: "2d6 orcs figthing 2d6 orcs.",
        12: "Reroll monster, 1d6 orcs are figthing it."
    }, "&small_landmark_content":{
        2: "6d6 orcs tribe with shaman.",
        3: "3d6 orcs with a troll.",
        4: "3d6 orcs patrol.",
        5: "2d6 orcs patrol.",
        6: "1d6 orcs straggler",
        7: "1d6 orcs dissidents.",
        8: "1d6 orcs hunting party",
        9: "2d6 orcs patrol.",
        10: "3d6 orcs slave hunter group.",
        11: "2d6 orcs figthing 2d6 orcs.",
        12: "Reroll monster, 1d6 orcs are figthing it."
    }, "&general_theme":{
        2: "Religious.",
        3: "Ancient/lore/history.",
        4: "Magic.",
        5: "Strife.",
        6: "Art",
        7: "Economy.",
        8: "Survival",
        9: "Strife",
        10: "Ancient/lore/history.",
        11: "Magic.",
        12: "Religious."
    }

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
        case "&wilderness_monster_encounter":
            return getSubFunctionEncounter("&monster_type") + " -> " + getDataRoll("&what") + " / " + getDataRoll("&how") + " / " + getDataRoll("&where");
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
        case "&small_landmark_content":
            return getDataRoll("&small_landmark_content") + " - " + getDataRoll("&general_theme")
        default:
          return getSubFunctionEncounter(args[0]);
      }
}

function getRandomElementFromArray(arrayToCheck){
    return arrayToCheck[Math.floor(Math.random() * arrayToCheck.length)];
}

function getSubFunctionEncounter(encounterType){
    result = getDataRoll(encounterType); 
    if(result.includes("&monster_omen")) {
        return getDataRoll("&monster_omen") + " -> " + getDataRoll("&monster_type"); 
    }
    if(result.charAt(0) == "&") {
        return getSubFunctionEncounter(result) + " [ " + encounterType + " ] "; 
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
- Leader and NPCs: https://docs.google.com/spreadsheets/d/1d-NAi8Mf1W1Q71_fxzIJoqcdXtsjIla3vAAY_5tywaM/edit#gid=2015555476
- Courts: https://docs.google.com/spreadsheets/d/1d-NAi8Mf1W1Q71_fxzIJoqcdXtsjIla3vAAY_5tywaM/edit#gid=1576217076
- Lair unique landmarks: https://docs.google.com/spreadsheets/d/1d-NAi8Mf1W1Q71_fxzIJoqcdXtsjIla3vAAY_5tywaM/edit#gid=1544695177
- AER lairs: https://docs.google.com/spreadsheets/d/1d-NAi8Mf1W1Q71_fxzIJoqcdXtsjIla3vAAY_5tywaM/edit#gid=800557242
- Roads: https://docs.google.com/spreadsheets/d/1d-NAi8Mf1W1Q71_fxzIJoqcdXtsjIla3vAAY_5tywaM/edit#gid=52623965
- Ruins and landmarks: https://docs.google.com/spreadsheets/d/1d-NAi8Mf1W1Q71_fxzIJoqcdXtsjIla3vAAY_5tywaM/edit#gid=1908528293
- Megadungeon info: https://docs.google.com/spreadsheets/d/1d-NAi8Mf1W1Q71_fxzIJoqcdXtsjIla3vAAY_5tywaM/edit#gid=1835374211
- Ruins: https://docs.google.com/spreadsheets/d/1d-NAi8Mf1W1Q71_fxzIJoqcdXtsjIla3vAAY_5tywaM/edit#gid=1713713205
- Faction: https://docs.google.com/spreadsheets/d/1d-NAi8Mf1W1Q71_fxzIJoqcdXtsjIla3vAAY_5tywaM/edit#gid=941868129
- BBEG generator with lore stuff, lieutenants, etc.
- Campaign items: https://docs.google.com/spreadsheets/d/1d-NAi8Mf1W1Q71_fxzIJoqcdXtsjIla3vAAY_5tywaM/edit#gid=979214676
- Unique monster type in this area: https://docs.google.com/spreadsheets/d/1d-NAi8Mf1W1Q71_fxzIJoqcdXtsjIla3vAAY_5tywaM/edit#gid=214513084
- Dungeon room generator:
    check this one first: https://docs.google.com/spreadsheets/d/18jzyOcctDytnv4V_lZ6fCNzyh0xkEVhIzrYU4zE2pfA/edit#gid=0
    https://docs.google.com/spreadsheets/d/1d-NAi8Mf1W1Q71_fxzIJoqcdXtsjIla3vAAY_5tywaM/edit#gid=2126864139
- Random event for hex encounters: 
    https://docs.google.com/spreadsheets/d/1d-NAi8Mf1W1Q71_fxzIJoqcdXtsjIla3vAAY_5tywaM/edit#gid=106840394
    https://docs.google.com/spreadsheets/d/18jzyOcctDytnv4V_lZ6fCNzyh0xkEVhIzrYU4zE2pfA/edit#gid=318261942
- Treasure generator
    https://docs.google.com/spreadsheets/d/1x5GffgPYIvmj58ROZzKevnX4m9P2zo3yTKnBVdML7-8/edit#gid=0
    Remake it to include my own stuff with Dark Souls influence
- Room descriptor: https://docs.google.com/spreadsheets/d/1ZfupKrrQjUMwkoxNj1aDv9osXouG--REc6tgv6QyHkE/edit#gid=531653215
- Covenant generator: https://docs.google.com/spreadsheets/d/18jzyOcctDytnv4V_lZ6fCNzyh0xkEVhIzrYU4zE2pfA/edit#gid=1557177057
- Make a 5RD generator that scales (aka it creates a 5RD level composed of 5(ish) quarters each with their 5RD rooms)
    - For quarters/overdungeon maps: https://docs.google.com/spreadsheets/d/18jzyOcctDytnv4V_lZ6fCNzyh0xkEVhIzrYU4zE2pfA/edit#gid=1257933702
- Dungeon oddities: https://docs.google.com/spreadsheets/d/1ZfupKrrQjUMwkoxNj1aDv9osXouG--REc6tgv6QyHkE/edit#gid=982051153
- Dungeon traps: https://docs.google.com/spreadsheets/d/1ZfupKrrQjUMwkoxNj1aDv9osXouG--REc6tgv6QyHkE/edit#gid=1297903876
- Dungeon tricks: https://docs.google.com/spreadsheets/d/1ZfupKrrQjUMwkoxNj1aDv9osXouG--REc6tgv6QyHkE/edit#gid=1981379202
- Settlement generators: https://docs.google.com/spreadsheets/d/18jzyOcctDytnv4V_lZ6fCNzyh0xkEVhIzrYU4zE2pfA/edit#gid=1966764013
- Magical items? https://docs.google.com/spreadsheets/d/18jzyOcctDytnv4V_lZ6fCNzyh0xkEVhIzrYU4zE2pfA/edit#gid=853960712
- Challenge puzzle: https://docs.google.com/spreadsheets/d/1ZfupKrrQjUMwkoxNj1aDv9osXouG--REc6tgv6QyHkE/edit#gid=721793603
- Dungeon refurbish: https://docs.google.com/spreadsheets/d/1ZfupKrrQjUMwkoxNj1aDv9osXouG--REc6tgv6QyHkE/edit#gid=1120484264
- hex and world generation: https://docs.google.com/spreadsheets/d/18jzyOcctDytnv4V_lZ6fCNzyh0xkEVhIzrYU4zE2pfA/edit#gid=1000516822


NOTES
- Maybe put encounters per terrain type?
- Link to this place from time to time: https://donjon.bin.sh/fantasy/random/
- Add to my DM stuff disease and curse descriptions https://docs.google.com/spreadsheets/d/1ET8DTWlVJNWyjvRDrp_uvp8P25QUOQi5QbYnWOvIS4o/edit#gid=50706048
- Put to DM stuff the progression and other hidden stuff (magic sword, etc.) https://docs.google.com/presentation/d/1JtIkJGe9YL0AwlxDpvmgOSQ9aWknJt2ShZAykJgjfCA/edit#slide=id.g13638b89f05_0_0
- In the checklist:
    - Always have one treausre map ready
    - Always have one NPC ready
    - Always have one ruin ready
    - Always have one level of the megadungeon ready
    - Always have one dungeon ready
    - Always have one very cool event ready
    - Always have a table of 2d6 rumours
    - Check the various slides of campaign creator: https://docs.google.com/spreadsheets/d/1d-NAi8Mf1W1Q71_fxzIJoqcdXtsjIla3vAAY_5tywaM/edit#gid=1151023139
*/