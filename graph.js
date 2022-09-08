module.exports.settings = {
  points: [],
  player: [],
  lines: {
    top: {
      normal: '═',
      right: '╗',
      left: '╔'
    },
    bottom: {
      normal: '═',
      right: '╝',
      left: '╚'
    },
    sides: {
      normal: {
        left: '║',
        right: '║',
        normal: '║',
        inside: '═'
      },
      touch: {
        left: '╠',
        right: '╣',
        normal: '╬',
        top: '╦',
        bottom:'╩'
      }
    }
  },
  dim: {
    width: 5,
    height: 5
  },
  options: {
    length: 3
  }
}

module.exports.makeGraph = () => {
  let graph = "";
  let show = module.exports.settings.options.show;
  let length = module.exports.settings.options.length;
  let width  = module.exports.settings.dim.width;
  let height  = module.exports.settings.dim.height;
  let settings = module.exports.settings;
  var userEvent = "";
  // Height is * 2 + 1 to make room for table lines
  for (var iHeight = height * 2 + 1; iHeight > 0; iHeight --){
    if (iHeight == height * 2 + 1){ // first row of table keys
      graph += settings.lines.top.left;
      for (var loop = 1; loop < width; loop ++){
        for (var i = 0; i < length; i++){
          graph += settings.lines.top.normal;
        }
        graph += settings.lines.sides.touch.top;
      }
      for (var i = 0; i < length; i++){
        graph += settings.lines.top.normal;
      }
      graph += settings.lines.top.right;
    }
    else if (iHeight == 1){ // last row of table
      graph += settings.lines.bottom.left;
      for (var loop = 1; loop < width; loop ++){
        for (var i = 0; i < length; i++){
          graph += settings.lines.bottom.normal;
        }
        graph += settings.lines.sides.touch.bottom;
      }
      for (var i = 0; i < length; i++){
        graph += settings.lines.bottom.normal;
      }
      graph += settings.lines.bottom.right;
    }
    else if (iHeight % 2 == 0){
      for (var loop = 1; loop <= width; loop ++){
        var cord = [iHeight / 2, loop];
        graph += settings.lines.sides.normal.left;
        var found = "";
        var totalCount = 0; //try to catch player at certain point
        if (settings.player[0] == cord[0] && settings.player[1] == cord[1]){
            found = "X";
            totalCount ++;
          }
        for (var i in settings.points){ // watch these if statements
          if (settings.points[i][0] == cord[0] && settings.points[i][1] == cord[1]){
            found = settings.points[i][2];
            totalCount ++; // could be used to find event
          }
        }
        if (totalCount >= 2){
          console.log("TOUCHING SOMETHING")
        }
        if (found == ""){
          graph += makeSize("");
        }
        else {
          graph += makeSize(found);
        }
      }
      graph += settings.lines.sides.normal.left;
    }
    else if (iHeight % 2 == 1){
      graph += settings.lines.sides.touch.left;
      for (var loop = 1; loop < width; loop ++){
        for (var i = 0; i < length; i++){
          graph += settings.lines.sides.normal.inside;
        }
        graph += settings.lines.sides.touch.normal;
      }
      for (var i = 0; i < length; i++){
        graph += settings.lines.bottom.normal;
      }
      graph += settings.lines.sides.touch.right;
    }
    graph += "\n";
  }
  console.log(graph);
  return userEvent; // Returns event to run (if any)
  
}
function makeSize(string){
  let length = module.exports.settings.options.length;
  if (string.length == length){
    return string;
  }
  else if (string.length > length){
    return string.substring(0,length)
  }
  else if (string.length < length){
    var diff = Math.abs(string.length - length);
    var front = Math.floor(diff/2);
    var back = Math.ceil(diff/2);
    var f = "";
    var b = "";
    for (var i = 1; i <= front; i++){
      f += " ";
    }
    for (var i = 1; i <= back; i++){
      b += " ";
    }
    return f + "" + string + b;
  }
}
/*
╔═══╦═══╦═══╦═══╦═══╗
║   ║   ║   ║   ║   ║
╠═══╬═══╬═══╬═══╬═══╣
║   ║   ║   ║   ║   ║
╠═══╬═══╬═══╬═══╬═══╣
║   ║   ║   ║   ║   ║
╠═══╬═══╬═══╬═══╬═══╣
║   ║   ║   ║   ║   ║
╠═══╬═══╬═══╬═══╬═══╣
║   ║   ║   ║   ║   ║
╚═══╩═══╩═══╩═══╩═══╝
*/