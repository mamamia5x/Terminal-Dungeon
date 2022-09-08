/*

  _____                                          _     
 / ____|                                        | |    
| |     ___  _ __ ___  _ __ ___   __ _ _ __   __| |___ 
| |    / _ \| '_ ` _ \| '_ ` _ \ / _` | '_ \ / _` / __|
| |___| (_) | | | | | | | | | | | (_| | | | | (_| \__ \
 \_____\___/|_| |_| |_|_| |_| |_|\__,_|_| |_|\__,_|___/
                                                       

*/

module.exports.rannum = function (min, max){
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

module.exports.topercent = function (number, sign){
  number = number * 100;
  number = number.toFixed(2);
  if (Boolean(sign) == false) return number;
  else return number + '%';
  
}

module.exports.arrayave = function (arr){
  var i = 0;
  var average = 0;
  while (i < arr.length){
    average += arr[i] / 1;
    i++;
  }
  average = average / arr.length;
  return average; 
}

module.exports.arraysum = function (arr){
  var i = 0;
  var sum = 0;
  while (i < arr.length){
    sum += arr[i] / 1;
    i++;
  }
  return sum;
}

module.exports.remove = function (arr) {
    var what, a = arguments, L = a.length, ax;
    while (L > 1 && arr.length) {
        what = a[--L];
        while ((ax= arr.indexOf(what)) !== -1) {
            arr.splice(ax, 1);
        }
    }
    return arr;
}

module.exports.indexremove = function (arr, area){
  arr.splice(area, 1);
  return arr;
}

module.exports.colorRGB = function (r,g,b){
  return '\x1b[38;2;' + r + ';' + g + ';' + b + 'm';
}

module.exports.colorhex = function (hex){
  return '\x1b[38;2;' + converttoRGB(hex).r + ';' + converttoRGB(hex).g + ';' + converttoRGB(hex).b + 'm';
}

module.exports.backRGB = function (r,g,b){
  return '\x1b[48;2;' + r + ';' + g + ';' + b + 'm';
}

module.exports.backhex = function (hex){
  return '\x1b[48;2;' + converttoRGB(hex).r + ';' + converttoRGB(hex).g + ';' + converttoRGB(hex).b + 'm';
}

module.exports.reset = '\x1b[0m';

module.exports.rgbtohex = function(r, g, b) {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

module.exports.hextorgb = function(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}

module.exports.reverseStr = function(str){
  str = str.split("");
  str.reverse();
  str = str.join("");
  return str;
}

/*
___________                   __  .__                      
\_   _____/_ __  ____   _____/  |_|__| ____   ____   ______
 |    __)|  |  \/    \_/ ___\   __\  |/  _ \ /    \ /  ___/
 |     \ |  |  /   |  \  \___|  | |  (  <_> )   |  \\___ \ 
 \___  / |____/|___|  /\___  >__| |__|\____/|___|  /____  >
     \/             \/     \/                    \/     \/ 
*/


function componentToHex(c) {
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

function converttoRGB (hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}