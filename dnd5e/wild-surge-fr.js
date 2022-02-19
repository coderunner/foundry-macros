const selectedActor = canvas.tokens.controlled[0].actor.data.data;
const isBarbarian = selectedActor.classes.barbarian;

if (!isBarbarian || !selectedActor.classes.barbarian.levels) {
  ui.notifications.error('The selected token is not a Barbarian.');
  return;
}

const level = selectedActor.classes.barbarian.levels;

const effects = [
  '<p><b>Des tentacules ténébreuses fouettent autour de vous.</b></p><p>Toute créature de votre choix que vous pouvez voir à 9 mètres ou moins de vous doit réussir un jet de sauvegarde de Constitution ou subir [[/roll 1d12]] dégâts nécrotiques. Vous gagnez également des points de vie temporaires égaux à 1d12 plus votre niveau de barbare. [[/roll 1d12+' +
    level +
    ']]</p>',
  "<p><b>Vous vous téléportez dans un espace inoccupé que vous pouvez voir dans un rayon de 9 mètres.</b></p><p>Jusqu'à la fin de votre rage, vous pouvez, par une action bonus, activer à nouveau cet effet à chacun de vos tours.</p>",
  "<p><b>Un esprit intangible, ressemblant à un flumph ou à une pixie (selon votre choix), apparaît à 1,50 m d'une créature de votre choix que vous pouvez voir dans un rayon de 9 mètres autour de vous.</b></p><p>À la fin de ce tour, l'esprit explose et toute créature à 1,50 mètre ou moins de lui doit réussir un jet de sauvegarde de Dextérité ou subir [[/roll 1d6]] dégâts de force. Jusqu'à la fin de votre rage, vous pouvez, par une action bonus, activer à nouveau cet effet en invoquant un autre esprit à chacun de vos tours.</p>",
  "<p><b>Un éclair de lumière jaillit de votre poitrine.</b></p><p>Une autre créature de votre choix que vous pouvez voir 9 mètres ou moins de vous doit réussir un jet de sauvegarde de Constitution ou subir [[/roll 1d6]] dégâts radiants et être aveuglée jusqu'au début de votre prochain tour. Jusqu'à la fin de votre rage, vous pouvez, par une action bonus, activer à nouveau cet effet à chacun de vos tours.</p>",
  "<p><b>Chaque fois qu'une créature vous touche avec un jet d'attaque avant la fin de votre rage, cette créature subit 1d6 dégâts de force, la magie se déchaînant en représailles.</b></p>",
  '<p><b>Vous êtes entouré de lumières protectrices multicolores.</b></p><p>Vous gagnez un bonus de +1 à la CA, et vos alliés à 3 mètres ou moins de vous gagnent le même bonus.</p>',
  "<p><b>Des fleurs et des plantes poussent temporairement autour de vous.</b></p><p>Jusqu'à ce que votre rage se termine, le sol dans un rayon de 4,50 mètres autour de vous est un terrain difficile pour vos ennemis.</p>",
  "<p><b>La magie imprègne une arme de votre choix que vous tenez.</b></p><p>Jusqu'à ce que votre rage se termine, le type de dégâts de l'arme est de force, et elle acquiert les propriétés légère et lancer, avec une portée nominale de 6 mètres et une longue portée de 18 mètres. Si l'arme quitte votre main, elle réapparaît dans votre main à la fin du tour en cours.</p>",
];

async function rollDice(roll) {
  await roll.evaluate();
  if (game.dice3d) {
    await game.dice3d.showForRoll(roll);
  }
  const result = roll.result;
  return result;
}

function formatOption(roll) {
  return '<b>Option #' + roll + ': </b>' + effects[roll - 1];
}

const r1 = await rollDice(new Roll('1d8'));
const r2 = await rollDice(new Roll('1d8'));

const chatData = {
  content: formatOption(r1) + '<br><br> <b>OU</b> <br><br>' + formatOption(r2),
};
ChatMessage.create(chatData);
