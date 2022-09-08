const short = require('./shortcuts.js');

module.exports.display = (floor,health,maxHealth,level,xp,cash) => {
  var dispfloor = short.colorhex('3d71ff') + 'Floor ' + short.bold + floor + short.reset;
  return dispfloor + this.bar(health,maxHealth);
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
  var value = `[${('=').repeat(filled)}${('-').repeat(empty)}]`;
  return value;
}