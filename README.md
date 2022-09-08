# Terminal Dungeon
A Node JS game made for the terminal.
## Level Making
One of the benifits of Terminal Dungeon is the option to create your own levels. (_A custom level reader is planned in the future_)

  To create your own level, it's very simple. The first line of the script is reserved for width, while the second is reserved for height. So if you want a 3x4 level, all you need to do in the script is have a `3` in the first line and a `4` in the second. It should look like this:

  ```
  3
  4
  ```

The third line is reserved for the player spawn, and it follows a `y,x` pattern. The Y (or height) square of where the player should spawn is the first number. This is followed by a comma, then the X  (or width) of the players spawn.
  
**Important**: the Y reads from bottom to the top. So having the number one (`1`) as the Y would be the lowest line of the graph.

The X (or width) square is read from left to right. A one (`1`) here would mean the leftmost spot of the graph.

If you would like your player to spawn at X=2 and Y=3, you'd have to make the third line `3,2`. **Remember**: make sure to add no whitespace to any of these lines.

The rest of the lines are custom points. _Implentation for special pieces will be implemented soon._ They follow the same format as the player spawn. The difference here is adding another comma and a letter. The letter will appear at the spot you have created. So if you'd like to have a Wall at point `2,2`, you'd have to make the line look like `2,2,W`. You can add as many lines as you want, with the rest of these lines being used to add custom points. **Remember**: Do not add any whitespace.

Current custom blocks that work are:  
**W**: Wall. The player cannot go into this letter.  
**E**: Exit. The player will go to the next level when they touch this piece.

**EMPTY LINES WILL THROW AN ERROR**

A finished version of this level would look like:
```txt
3
4
3,2
2,2,W
```
and the level would look like:
```txt
╔═══╦═══╦═══╗
║   ║   ║   ║
╠═══╬═══╬═══╣
║   ║ X ║   ║
╠═══╬═══╬═══╣
║   ║ W ║   ║
╠═══╬═══╬═══╣
║   ║   ║   ║
╚═══╩═══╩═══╝
```
## Version History
###### Note: GitHub Releases will have the latest working release
### V.0.0.2
#### Under Development
**Planned**:
* GUI
* XP
* Health
* Battles? (Maybe in next update)
### V.0.0.1
##### Completed 9.8.22
* First build of the game
* Added Table generator
* Level Loading
* Custom level scripting
* Player Movement
* Custom Pieces (wall and exits)