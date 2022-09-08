const short = require('./shortcuts.js');

module.exports.display = (floor,health,maxHealth,level,xp,maxXp,cash) => {
  var dispfloor = short.colorhex('3d71ff') + 'Floor ' + short.bold + floor + short.reset;
  
  var disphealth = short.colorhex('27db2d') + 'Player Health: [' + short.bold + this.bar(health, maxHealth, ) + short.reset + short.colorhex('27db2d') + '] ' + short.colorhex('16d90e') + short.bold + health + short.reset + short.colorhex('16d90e') +  '/' + short.bold + maxHealth + short.reset;
  
  var displevel = short.colorhex('f09022') + 'Level ' + short.bold +  level + short.reset + short.colorhex('f09022')  + ' [' + short.bold + short.colorhex('f7aa52') + this.bar(xp,maxXp) + short.reset +  short.colorhex('f09022') + '] Need ' + short.bold + (maxXp-xp)/*important here, if negative maybe add you level up message or something*/ + short.reset + short.colorhex('f09022') + ' More XP to Level Up' + short.reset;
  var dispcash = short.colorhex('ffe324') + 'Player Cash: ' + short.colorhex('FFDF00') + '$' + short.bold + cash + short.reset;
  return dispfloor+'\n'+disphealth+'\n'+displevel+'\n'+dispcash;
}

module.exports.bar = (val,maxVal) => {
  if (val == 0 && maxVal == 0){
    maxVal = 100;
  }
  var filled = Math.round(val/maxVal*10);
  var empty = 10 - filled;
  if (empty > 10){ // Don't know if these cases will ever happen, but here just in case
    filled = 0;
    empty = 10;
  }
  else if (empty < 0){
    empty = 0;
    filled = 10;
  }
  var value = ('=').repeat(filled)+""+('-').repeat(empty);
  return value;
}