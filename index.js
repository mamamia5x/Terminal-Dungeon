const prompt = require('prompt-sync')();
const short = require('./shortcuts.js');
const graph =  require('./graph.js');
const levelGen = require('./levels.js');

var debug = false;
var floor = 1;
graph.settings.points = levelGen.generate("level"+floor);
graph.settings.player = levelGen.player("level"+floor);
graph.settings.dim = levelGen.dimension("level"+floor);

//https://stackoverflow.com/questions/4120475/how-to-create-and-clone-a-json-object
JSON.clone = function(obj) {
  return JSON.parse(JSON.stringify(obj));
};

move();
function move(){
  if (!debug) console.clear();
  graph.makeGraph();
  console.log("You can go: \n(W) Up\n(S) Down\n(A) Left\n(D) Right");
  var point = JSON.clone(graph.settings.player);
  var response = prompt("> ").charAt(0).toLowerCase();
  switch (response){
    case "w":
      point[0] ++;
      break;
    case "s":
      point[0] --;
      break;
    case "a":
      point[1] --;
      break;
    case "d":
      point[1] ++;
      break;
    case "debug":
      debug = !debug;
      console.log(debug? "Debug Mode on" : "Debug Move off");
      break;
    default:
      console.log("invalid move, add more here");
      console.log("Press enter to continue");
      prompt("");
  }
  if (point[0] > 0 && point[0] <= graph.settings.dim.height && point[1] > 0 && point[1] <= graph.settings.dim.width){
    graph.settings.player = point;
  }

  move();
}


