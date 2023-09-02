import { writable, derived } from "svelte/store";
import filterActions from "./ActionFilterer.js";

export const settings = writable([]);

export const actionFilter = writable("");

export const actions = writable([
    {
        id: "500",
        label: "Campaign Development",
        isOpen: true,
        items: [
            {
                id: "501",
                label: "Worldbuilding",
                isOpen: false,
                description: "Create detailed and immersive worlds for your campaign.",
                payload: "2501 - Worldbuilding"
            },
            {
                id: "502",
                label: "Quest Design",
                isOpen: true,
                items: [
                    {
                        id: "503",
                        label: "Main Quests",
                        isOpen: false,
                        description: "Craft the central storyline and quests for your campaign.",
                        payload: "2502 - Main Quests"
                    },
                    {
                        id: "504",
                        label: "Side Quests",
                        isOpen: true,
                        description: "Create engaging side quests to enrich your campaign world.",
                        payload: "2503 - Side Quests"
                    }
                ]
            },
            {
                id: "505",
                label: "NPC Creation",
                isOpen: true,
                description: "Develop memorable non-player characters for your campaign.",
                payload: "2504 - NPC Creation"
            }
        ]
    },
    {
        id: "506",
        label: "Adventure Planning",
        isOpen: true,
        items: [
            {
                id: "507",
                label: "Dungeon Design",
                isOpen: false,
                description: "Create intricate and challenging dungeons for your players.",
                payload: "2505 - Dungeon Design"
            },
            {
                id: "508",
                label: "Exploration",
                isOpen: true,
                description: "Plan exciting exploration and discovery elements in your campaign.",
                payload: "2506 - Exploration"
            },
            {
                id: "509",
                label: "Mysteries and Clues",
                isOpen: true,
                items: [
                    {
                        id: "510",
                        label: "Clue Placement",
                        isOpen: false,
                        description: "Strategically place clues and hints for your players to discover.",
                        payload: "2507 - Clue Placement"
                    },
                    {
                        id: "511",
                        label: "Solving Puzzles",
                        isOpen: true,
                        description: "Design challenging puzzles for your players to solve.",
                        payload: "2508 - Solving Puzzles"
                    }
                ]
            }
        ]
    },
    {
        id: "1",
        label: "Character Creation",
        isOpen: true,
        items: [
            {
                id: "2",
                label: "Choose Race",
                isOpen: false,
                description: "Select your character's racial background.",
                payload: "1001 - Choose Race"
            },
            {
                id: "3",
                label: "Pick a Class",
                isOpen: true,
                description: "Select your character's class, defining their abilities and role.",
                payload: "1002 - Pick a Class"
            },
            {
                id: "4",
                label: "Assign Ability Scores",
                isOpen: true,
                description: "Allocate your character's strength, dexterity, and more.",
                payload: "1003 - Assign Ability Scores"
            }
        ]
    },
    {
        id: "5",
        label: "Combat Tactics",
        isOpen: true,
        items: [
            {
                id: "6",
                label: "Melee Techniques",
                isOpen: false,
                description: "Master the art of close-quarters combat.",
                payload: "1004 - Melee Techniques"
            },
            {
                id: "7",
                label: "Ranged Combat",
                isOpen: true,
                description: "Hone your skills in archery and ranged combat.",
                payload: "1005 - Ranged Combat"
            },
            {
                id: "8",
                label: "Magic Spells",
                isOpen: true,
                description: "Learn the intricacies of arcane and divine magic.",
                payload: "1006 - Magic Spells"
            }
        ]
    },
    {
        id: "9",
        label: "World Building",
        isOpen: false,
        items: [
            {
                id: "10",
                label: "Create NPCs",
                isOpen: true,
                description: "Craft memorable non-player characters for your campaign.",
                payload: "1007 - Create NPCs"
            },
            {
                id: "11",
                label: "Design Locations",
                isOpen: false,
                description: "Create vibrant and immersive settings for your adventures.",
                payload: "1008 - Design Locations"
            }
        ]
    },
    {
        id: "12",
        label: "Adventure Planning",
        isOpen: true,
        items: [
            {
                id: "13",
                label: "Quest Development",
                isOpen: true,
                description: "Craft engaging quests and storylines for your players.",
                payload: "1009 - Quest Development"
            },
            {
                id: "14",
                label: "Puzzle Design",
                isOpen: false,
                description: "Challenge your players with clever puzzles and riddles.",
                payload: "1010 - Puzzle Design"
            },
            {
                id: "15",
                label: "Create Villains",
                isOpen: false,
                description: "Develop compelling adversaries and antagonists.",
                payload: "1011 - Create Villains"
            }
        ]
    },
    {
        id: "16",
        label: "Game Master Tips",
        isOpen: true,
        items: [
            {
                id: "17",
                label: "Storytelling Techniques",
                isOpen: false,
                description: "Enhance your storytelling skills for immersive sessions.",
                payload: "1012 - Storytelling Techniques"
            },
            {
                id: "18",
                label: "Player Engagement",
                isOpen: true,
                description: "Keep your players engaged and invested in the game.",
                payload: "1013 - Player Engagement"
            },
            {
                id: "19",
                label: "Encounter Design",
                isOpen: false,
                description: "Craft balanced and exciting encounters for your campaign.",
                payload: "1014 - Encounter Design"
            }
        ]
    },
    {
        id: "20",
        label: "Campaign Themes",
        isOpen: true,
        items: [
            {
                id: "21",
                label: "Epic Fantasy",
                isOpen: true,
                description: "Explore a world of high adventure and epic quests.",
                payload: "1015 - Epic Fantasy"
            },
            {
                id: "22",
                label: "Horror Adventures",
                isOpen: false,
                description: "Survive in a world of terror and unspeakable horrors.",
                payload: "1016 - Horror Adventures"
            },
            {
                id: "23",
                label: "Political Intrigue",
                isOpen: true,
                description: "Navigate complex political webs and conspiracies.",
                payload: "1017 - Political Intrigue"
            }
        ]
    },
    {
        id: "24",
        label: "Character Backstories",
        isOpen: true,
        items: [
            {
                id: "25",
                label: "Develop Motivations",
                isOpen: false,
                description: "Create compelling reasons for your character's actions.",
                payload: "1018 - Develop Motivations"
            },
            {
                id: "26",
                label: "Family and Origins",
                isOpen: true,
                description: "Define your character's family and background.",
                payload: "1019 - Family and Origins"
            },
            {
                id: "27",
                label: "Alignment Choices",
                isOpen: true,
                description: "Determine your character's moral and ethical beliefs.",
                payload: "1020 - Alignment Choices"
            }
        ]
    },
    {
        id: "28",
        label: "Magic Items",
        isOpen: true,
        items: [
            {
                id: "29",
                label: "Craft Potions",
                isOpen: false,
                description: "Brew magical elixirs and potions for your party.",
                payload: "1021 - Craft Potions"
            },
            {
                id: "30",
                label: "Artifacts of Power",
                isOpen: true,
                description: "Discover and wield ancient relics of immense power.",
                payload: "1022 - Artifacts of Power"
            },
            {
                id: "31",
                label: "Enchanted Weapons",
                isOpen: false,
                description: "Enhance your weapons with mystical enchantments.",
                payload: "1023 - Enchanted Weapons"
            }
        ]
    },
    {
        id: "32",
        label: "Monster Lore",
        isOpen: false,
        items: [
            {
                id: "33",
                label: "Study Beholders",
                isOpen: true,
                description: "Learn about the enigmatic and dangerous beholders.",
                payload: "1024 - Study Beholders"
            },
            {
                id: "34",
                label: "Undead Threats",
                isOpen: false,
                description: "Prepare for encounters with the undead and necromancy.",
                payload: "1025 - Undead Threats"
            }
        ]
    },
    {
        id: "35",
        label: "Epic Quests",
        isOpen: true,
        items: [
            {
                id: "36",
                label: "Retrieve Lost Artifacts",
                isOpen: false,
                description: "Embark on a quest to recover ancient treasures.",
                payload: "1026 - Retrieve Lost Artifacts"
            },
            {
                id: "37",
                label: "Defeat the Dragon",
                isOpen: true,
                description: "Face the ultimate challenge: a dragon of immense power.",
                payload: "1027 - Defeat the Dragon"
            }
        ]
    },
    {
        id: "38",
        label: "Roleplaying Styles",
        isOpen: true,
        items: [
            {
                id: "39",
                label: "Heavy RP vs. Combat",
                isOpen: false,
                description: "Explore the balance between roleplaying and combat.",
                payload: "1028 - Heavy RP vs. Combat"
            },
            {
                id: "40",
                label: "Intrigue and Mystery",
                isOpen: true,
                description: "Weave intricate plots and mysteries into your campaign.",
                payload: "1029 - Intrigue and Mystery"
            }
        ]
    },
    {
        id: "100",
        label: "Character Development",
        isOpen: true,
        items: [
            {
                id: "101",
                label: "Backstory Creation",
                isOpen: false,
                description: "Craft a rich and compelling backstory for your character.",
                payload: "2101 - Backstory Creation"
            },
            {
                id: "102",
                label: "Alignment Choices",
                isOpen: true,
                description: "Determine your character's moral and ethical beliefs.",
                payload: "2102 - Alignment Choices"
            },
            {
                id: "103",
                label: "Character Goals",
                isOpen: true,
                description: "Define your character's aspirations and motivations.",
                payload: "2103 - Character Goals"
            }
        ]
    },
    {
        id: "104",
        label: "Roleplaying Tips",
        isOpen: true,
        items: [
            {
                id: "105",
                label: "In-Character Conversations",
                isOpen: false,
                description: "Learn to engage in compelling in-character conversations.",
                payload: "2104 - In-Character Conversations"
            },
            {
                id: "106",
                label: "Character Relationships",
                isOpen: true,
                description: "Build complex and dynamic relationships between characters.",
                payload: "2105 - Character Relationships"
            },
            {
                id: "107",
                label: "Improvisation Skills",
                isOpen: true,
                description: "Hone your improvisation skills for unexpected situations.",
                payload: "2106 - Improvisation Skills"
            }
        ]
    },
    {
        id: "108",
        label: "Game Mastering",
        isOpen: true,
        items: [
            {
                id: "109",
                label: "Creating NPCs",
                isOpen: false,
                description: "Craft memorable non-player characters for your campaign.",
                payload: "2107 - Creating NPCs"
            },
            {
                id: "110",
                label: "Worldbuilding",
                isOpen: true,
                description: "Design intricate and immersive worlds for your players.",
                payload: "2108 - Worldbuilding"
            },
            {
                id: "111",
                label: "Encounter Design",
                isOpen: true,
                description: "Create balanced and engaging encounters for your players.",
                payload: "2109 - Encounter Design"
            }
        ]
    },
    {
        id: "112",
        label: "Campaign Themes",
        isOpen: true,
        items: [
            {
                id: "113",
                label: "Epic Adventures",
                isOpen: false,
                description: "Embark on epic quests and confront legendary foes.",
                payload: "2110 - Epic Adventures"
            },
            {
                id: "114",
                label: "Mystery Campaigns",
                isOpen: true,
                description: "Unravel enigmatic mysteries and puzzles in your campaign.",
                payload: "2111 - Mystery Campaigns"
            },
            {
                id: "115",
                label: "Political Intrigue",
                isOpen: true,
                description: "Navigate political webs and conspiracies in your storytelling.",
                payload: "2112 - Political Intrigue"
            }
        ]
    },
    {
        id: "200",
        label: "Character Development",
        isOpen: true,
        items: [
            {
                id: "201",
                label: "Backstory Creation",
                isOpen: false,
                description: "Craft a rich and compelling backstory for your character.",
                payload: "2201 - Backstory Creation"
            },
            {
                id: "202",
                label: "Alignment Choices",
                isOpen: true,
                description: "Determine your character's moral and ethical beliefs.",
                payload: "2202 - Alignment Choices"
            },
            {
                id: "203",
                label: "Character Goals",
                isOpen: true,
                description: "Define your character's aspirations and motivations.",
                payload: "2203 - Character Goals"
            }
        ]
    },
    {
        id: "204",
        label: "Roleplaying Tips",
        isOpen: true,
        items: [
            {
                id: "205",
                label: "In-Character Conversations",
                isOpen: false,
                description: "Learn to engage in compelling in-character conversations.",
                payload: "2204 - In-Character Conversations"
            },
            {
                id: "206",
                label: "Character Relationships",
                isOpen: true,
                description: "Build complex and dynamic relationships between characters.",
                payload: "2205 - Character Relationships"
            },
            {
                id: "207",
                label: "Improvisation Skills",
                isOpen: true,
                description: "Hone your improvisation skills for unexpected situations.",
                payload: "2206 - Improvisation Skills"
            }
        ]
    },
    {
        id: "208",
        label: "Game Mastering",
        isOpen: true,
        items: [
            {
                id: "209",
                label: "Creating NPCs",
                isOpen: false,
                description: "Craft memorable non-player characters for your campaign.",
                payload: "2207 - Creating NPCs"
            },
            {
                id: "210",
                label: "Worldbuilding",
                isOpen: true,
                description: "Design intricate and immersive worlds for your players.",
                payload: "2208 - Worldbuilding"
            },
            {
                id: "211",
                label: "Encounter Design",
                isOpen: true,
                description: "Create balanced and engaging encounters for your players.",
                payload: "2209 - Encounter Design"
            }
        ]
    },
    {
        id: "212",
        label: "Campaign Themes",
        isOpen: true,
        items: [
            {
                id: "213",
                label: "Epic Adventures",
                isOpen: false,
                description: "Embark on epic quests and confront legendary foes.",
                payload: "2210 - Epic Adventures"
            },
            {
                id: "214",
                label: "Mystery Campaigns",
                isOpen: true,
                description: "Unravel enigmatic mysteries and puzzles in your campaign.",
                payload: "2211 - Mystery Campaigns"
            },
            {
                id: "215",
                label: "Political Intrigue",
                isOpen: true,
                description: "Navigate political webs and conspiracies in your storytelling.",
                payload: "2212 - Political Intrigue"
            }
        ]
    },
    {
        id: "216",
        label: "Character Classes",
        isOpen: true,
        items: [
            {
                id: "217",
                label: "Wizard",
                isOpen: false,
                description: "Master the arcane arts and cast powerful spells.",
                payload: "2213 - Wizard"
            },
            {
                id: "218",
                label: "Barbarian",
                isOpen: true,
                description: "Become a fierce warrior fueled by rage and primal strength.",
                payload: "2214 - Barbarian"
            },
            {
                id: "219",
                label: "Rogue",
                isOpen: true,
                description: "Master stealth and cunning to outwit your foes.",
                payload: "2215 - Rogue"
            }
        ]
    },
    {
        id: "220",
        label: "Monsters and Beasts",
        isOpen: true,
        items: [
            {
                id: "221",
                label: "Dragons",
                isOpen: false,
                description: "Learn about the different species of dragons in the realms.",
                payload: "2216 - Dragons"
            },
            {
                id: "222",
                label: "Undead Creatures",
                isOpen: true,
                description: "Face the horrors of the undead, from zombies to liches.",
                payload: "2217 - Undead Creatures"
            },
            {
                id: "223",
                label: "Mythical Beasts",
                isOpen: true,
                description: "Explore the legends of griffins, chimeras, and other mythical creatures.",
                payload: "2218 - Mythical Beasts"
            }
        ]
    },
    {
        id: "224",
        label: "Magic and Spells",
        isOpen: true,
        items: [
            {
                id: "225",
                label: "Elemental Magic",
                isOpen: false,
                description: "Harness the power of the elements with elemental magic.",
                payload: "2219 - Elemental Magic"
            },
            {
                id: "226",
                label: "Divine Spells",
                isOpen: true,
                description: "Invoke the divine to heal, smite, or protect.",
                payload: "2220 - Divine Spells"
            },
            {
                id: "227",
                label: "Enchantment and Charm",
                isOpen: true,
                description: "Learn the art of enchanting and charming objects and creatures.",
                payload: "2221 - Enchantment and Charm"
            }
        ]
    },
    {
        id: "228",
        label: "Game Settings",
        isOpen: true,
        items: [
            {
                id: "229",
                label: "Forgotten Realms",
                isOpen: false,
                description: "Explore the vast and detailed world of the Forgotten Realms.",
                payload: "2222 - Forgotten Realms"
            },
            {
                id: "230",
                label: "Gothic Horror",
                isOpen: true,
                description: "Experience dark and chilling adventures in a gothic horror setting.",
                payload: "2223 - Gothic Horror"
            },
            {
                id: "231",
                label: "Steampunk Fantasy",
                isOpen: true,
                description: "Enter a world of steam-powered machinery and Victorian aesthetics.",
                payload: "2224 - Steampunk Fantasy"
            }
        ]
    }
]
);

export const filteredActions = derived([actionFilter, actions], ([$filter, $actions]) =>
{
    if ($filter === "")
    {
        return $actions;
    }
    return filterActions($actions, $filter);
});