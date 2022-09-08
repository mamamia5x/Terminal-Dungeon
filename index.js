const prompt = require('prompt-sync')();
const short = require('./shortcuts.js');
const graph =  require('./graph.js');
const levelGen = require('./levels.js');
const display = require('./display.js');

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
  //floor,health,max health,level,xp,maxXp(for this lvl),$$
  console.log(display.display(floor,100,100,0,10,100,0));
  graph.makeGraph();
  console.log("You can go: \n(W) Up\n(S) Down\n(A) Left\n(D) Right");
  var originalPoint = JSON.clone(graph.settings.player);
  var point = JSON.clone(graph.settings.player);
  var response = prompt("> ").toLowerCase();
  if (response == "debug"){
    debug = !debug;
    console.log(debug? "Debug Mode on" : "Debug Move off");
  }
  else {
    response = response.charAt(0);
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
      default:
        console.log("invalid move, add more here");
        console.log("Press enter to continue");
        prompt("");
    }
  }
  // Check if coordinate exists
  if (point[0] > 0 && point[0] <= graph.settings.dim.height && point[1] > 0 && point[1] <= graph.settings.dim.width){
    let square = graph.settings.points[point[0]][point[1]];
      if (square == "W"){
        // nothing
      }
      else if (square == "E"){
        levelup();
      }
      else {
        graph.settings.player = point;
      }
    // Note: I can add different events based off different situations
    // W is wall, can't go into it
  }
  move();
}

//primative, add ending screen and stuff
function levelup(){
  floor ++;
  graph.settings.points = levelGen.generate("level"+floor);
  graph.settings.player = levelGen.player("level"+floor);
  graph.settings.dim = levelGen.dimension("level"+floor);
}