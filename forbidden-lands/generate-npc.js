var maleNames = [
  'Adalbern',
  'Alaric',
  'Alboin',
  'Baldarich',
  'Baldomar',
  'Clovis',
  'Eburwin',
  'Egino',
  'Erminigild',
  'Eward',
  'Faramund',
  'Fridumar',
  'Fulco',
  'Gerulf',
  'Gislin',
  'Haimo',
  'Hardmod',
  'Hariwald',
  'Horsa',
  'Hrodger',
  'Hrolf',
  'Ivo',
  'Joscelin',
  'Karl',
  'Kuno',
  'Landebert',
  'Lanzo',
  'Leudagar',
  'Lothar',
  'Manno',
  'Meginfrid',
  'Meino',
  'Odo',
  'Odoacer',
  'Ortwin',
  'Otmar',
  'Otto',
  'Raban',
  'Radulf',
  'Ranganhar',
  'Rochus',
  'Rudesind',
  'Sigdag',
  'Siward',
  'Tancred',
  'Trancmar',
  'Waldhar',
  'Waldo',
  'Wandal',
  'Warin',
];
var femaleNames = [
  'Adela',
  'Adelais',
  'Adelina',
  'Aenor',
  'Alda',
  'Aldegund',
  'Amalia',
  'Amelina',
  'Auda',
  'Aveza',
  'Avila',
  'Berengaria',
  'Bertha',
  'Brunhild',
  'Brunhilde',
  'Clothildis',
  'Cunigund',
  'Ermendrud',
  'Ermingard',
  'Erminhilt',
  'Erminlinda',
  'Frida',
  'Geretrudis',
  'Gerhild',
  'Gerlind',
  'Gisila',
  'Godeliva',
  'Gunda',
  'Hadewig',
  'Hailwic',
  'Herleva',
  'Ida',
  'Ima',
  'Irma',
  'Ishild',
  'Leutgard',
  'Luitgard',
  'Lutgardis',
  'Mahthildis',
  'Oda',
  'Odila',
  'Raganhildis',
  'Roslindis',
  'Rosmunda',
  'Rothad',
  'Roza',
  'Saxa',
  'Sigilind',
  'Waldeburg',
  'Waldedrudis',
];
var lastNames = [
  'Adlard',
  'Almer',
  'Alston',
  'Alvar',
  'Balston',
  'Brunger',
  'Brunwin',
  'Burch',
  'Burward',
  'Cobbald',
  'Dewdney',
  'Eddols',
  'Elphee',
  'Elvey',
  'Erwin',
  'Frewer',
  'Frewin',
  'Goldbard',
  'Goldhawk',
  'Hulbert',
  'Isgar',
  'Kenway',
  'Kerrich',
  'Kerrich',
  'Lambrick',
  'Leavins',
  'Leavold',
  'Lewin',
  'Litwin',
  'Litwin',
  'Medwin',
  'Orrick',
  'Osmer',
  'Othen',
  'Quenell',
  'Seavers',
  'Siggers',
  'Sirett',
  'Stannard',
  'Wackrill',
  'Walwin',
  'Wennell',
  'Whatman',
  'Winbolt',
  'Winbow',
  'Woolgar',
  'Wyard',
  'Wyberg',
  'Wymer',
  'Yonwin',
];

var professions = [
  'Guard',
  'Baker',
  'Caravaneer',
  'Peddler',
  'Tailor',
  'Healer',
  'Warrior',
  'Street urchin',
  'Homeless',
  'Chef',
  'Farmer',
  'Officer',
  'Noble',
  'Agent',
  'Courtesan',
  'Artist',
  'Minestrel',
  'Writer',
  'Student',
  'Child',
  'Mystic',
  'Priest',
  'Historian',
  'Archaeologist',
  'Mage',
  'Thief',
  'Assassin',
  'Servant',
  'Prospector',
  'Pilgrim',
  'Samaritan',
  'Ruler',
  'Criminal',
  'Smith',
  'Tanner',
  'Shopkeeper',
  'Merchant',
  'Carpenter',
  'Guard',
  'Sailor',
  'Priest',
  'Fisher',
  'Hunter',
];
var characteristics = [
  'Fat',
  'Skinny',
  'Good-looking',
  'Seductive',
  'Smells bad',
  'Smells good',
  'Tall',
  'Short',
  'Always smiling',
  'Moping',
  'Rude',
  'Depressed',
  'Always joking',
  'Hums',
  'Clicks mouth',
  'Fiddles with something',
  'Tired',
  'Lovesick',
  'Elegant',
  'Bejeweled',
  'Tattooed',
  'Grand hairstyle',
  'Bearded',
  'Lost limbs',
  'Eye patch',
  'Scar',
  'Always eating',
  'In despair',
  'Hateful',
  'Walks with a limp',
  'Broken nose',
  'Sweaty',
  'Perfumed',
  'Drunk',
  'Slow',
  'Suspicious',
];
var activities = [
  'Searching',
  'Making friends',
  'Rambling tediously',
  'Flirts',
  'Looking for a fight',
  'On a stroll',
  'Working',
  'Chasing something',
  'Is lost',
  'Guarding something',
  'Drinking',
  'Partying',
  'Eating',
  'Bickering',
  'In a discussion',
  'Studying',
  'Reading',
  'Resting',
  'Mending something',
  'Showing something',
  'Staring',
  'Hanging out',
  'Smoking',
  'Writing',
  'Preaching',
  'Hiding',
  'Sleeping',
  'On a delivery',
  'Looking to sell something',
  'Cooking',
  'Collapsing',
  'Stealing something',
  'Praying',
  'Threatening someone',
  'Helping someone',
  'Getting into trouble',
];

function getRandomElement(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function generateNPC(isMaleNpc) {
  let firstName = isMaleNpc
    ? getRandomElement(maleNames)
    : getRandomElement(femaleNames);
  let npc =
    '<b>' +
    firstName +
    ' ' +
    getRandomElement(lastNames) +
    '</b>' +
    ' (' +
    (isMaleNpc ? 'male' : 'female') +
    ')' +
    '<br>' +
    'Profession: ' +
    getRandomElement(professions) +
    '<br>' +
    'Characteristic: ' +
    getRandomElement(characteristics) +
    '<br>' +
    'Activity: ' +
    getRandomElement(activities);

  return npc;
}

function printNPCToChat(isMaleNpc) {
  const chatData = {
    content: generateNPC(isMaleNpc),
    whisper: ChatMessage.getWhisperRecipients('GM'),
  };
  ChatMessage.create(chatData);
}

let d = new Dialog({
  title: 'Quick NPC Generator',
  content: '<p>Quick NPC Generator</p>',
  buttons: {
    one: {
      label: 'Male',
      callback: () => printNPCToChat(true),
    },
    two: {
      label: 'Female',
      callback: () => printNPCToChat(false),
    },
    three: {
      label: 'Random',
      callback: () => printNPCToChat(Math.random() < 0.5),
    },
  },
  default: 'three',
});
d.render(true);
