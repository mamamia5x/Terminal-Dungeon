var fs = require('fs');
module.exports.player = (level) => {
  var file = (fs.readFileSync("levels/"+level+".txt") +"").split("\n");
  file.shift();
  file.shift();
  file = file[0].split(',');
  file = [file[0],file[1]];
  return file;
}
module.exports.generate = (level) => {
  var file = (fs.readFileSync("levels/"+level+".txt") +"").split("\n");
  var points = [];
  file.shift();
  file.shift();
  file.shift();
  for (var i in file){
    points.push([file[i].split(',')[0],file[i].split(',')[1],file[i].split(',')[2]])
  }
  return points;
}
module.exports.dimension = (level) => {
  var file = (fs.readFileSync("levels/"+level+".txt") +"").split("\n");
  return {width: file[0], height: file[1]};
}