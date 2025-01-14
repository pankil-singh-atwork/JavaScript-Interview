const characters = [
  {
    title: "Ninja",
    emoji: "🥷",
    powers: ["agility", "stealth", "aggression"],
  },
  {
    title: "Sorcerer",
    emoji: "🧙",
    powers: ["magic", "invisibility", "necromancy"],
  },
  {
    title: "Ogre",
    emoji: "👹",
    powers: ["power", "stamina", "shapeshifting"],
  },
  {
    title: "Unicorn",
    emoji: "🦄",
    powers: ["flight", "power", "purity"],
  },
];

// used to iterate over the array takes the callback fn. & calls it for each item in the array 

characters.forEach((item) =>
  item.powers.forEach((power) => console.log(power))
);
