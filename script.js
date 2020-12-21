// grid for the world 
// 2 is a brick
// 1 is a coin/shuriken
confirm(" Collect all the shurikens to save the Uchiha clan and deafeat your older brother Itachi! It's up to you to save the Uchiha clan and your family!!! If you get caught in Itachi's Genjustsu refresh the page to fight on! NOW GO SASUKE!!!!");
var world = [
    [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
    [2,1,1,1,1,1,1,1,2,1,1,1,1,2,1,2,1,1,1,1,2],
    [2,1,2,2,2,2,1,2,2,1,2,1,1,2,1,1,1,1,2,1,2],
    [2,1,1,2,1,2,1,1,1,1,2,1,1,1,1,1,2,1,1,1,2],
    [2,1,1,1,1,2,1,1,1,1,2,2,2,1,2,2,1,1,1,1,2],
    [2,2,2,1,1,2,2,1,2,1,1,1,2,1,1,2,1,2,2,1,2],
    [2,1,2,1,2,2,1,1,1,1,1,1,2,1,1,2,1,1,2,1,2],
    [2,1,1,1,2,1,1,1,2,1,2,1,1,1,1,1,2,1,2,1,2],
    [2,1,2,2,1,1,1,1,1,1,2,1,1,1,1,1,2,1,2,1,2],
    [2,1,2,1,1,1,2,1,2,1,1,1,2,2,2,1,1,2,2,1,2],
    [2,1,1,1,1,1,2,1,2,1,1,2,1,1,2,2,2,2,1,1,2],
    [2,1,2,1,1,2,1,1,1,2,2,2,1,1,1,1,1,1,1,1,2],
    [2,1,1,1,2,1,1,2,1,1,1,1,1,1,1,2,1,1,1,2,2],
    [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2]
];

// displays score
var score = 0;

// default position for sasuke/pacman
var pacman = {
    x: 1,
    y: 1
}
// displays our world
function displayWorld(){
    var output = '';
    for(var i=0; i<world.length; i++){
        output +="\n<div class='row'>\n"
        for(var j=0; j<world[i].length; j++){
            if(world[i][j] == 2){
                output += "<div class='brick'></div>"
            } else if(world[i][j] == 1){
                output +="<div class='coin'></div>"
            } else if(world[i][j] == 0) {
                output +="<div class='empty'></div>"
            }
        }
        output += "\n</div>"
    }
    // console.log(output);
    document.getElementById('world').innerHTML = output;
}
// displays sasuke/pacman 
function displayPacman(){
    document.getElementById('pacman').style.top = pacman.y*34+"px";
    document.getElementById('pacman').style.left = pacman.x*30+"px";
    
}
//displays the score
function displayScore(){
    document.getElementById('score').innerHTML=score;
    
}
// calls ffunction to display items
displayWorld(); 
displayPacman();
// movement commands
document.onkeydown = function(a){
    //left
    if(a.keyCode == 37 && world[pacman.y][pacman.x] != 2){
        pacman.x --;
    
    } 
    //down
    else if(a.keyCode == 40 && world[pacman.y][pacman.x] != 2){
        pacman.y ++;
    } 
    //right
    else if(a.keyCode == 39 && world[pacman.y][pacman.x] != 2){
        pacman.x ++;
    } 
    //up
    else if(a.keyCode == 38 && world[pacman.y][pacman.x] != 2){
        pacman.y --;
    }
// function to grab shurikens
    if(world[pacman.y][pacman.x]==1){
        world[pacman.y][pacman.x] = 0;
        score += 10;
        if(score == 1570){
            alert("You saved The Uchiha Clan!!! Sasuke can return home to his family and live a happy life. He wont lose any limbs and him and naruto will never become friends. But thats okay because he hhas his family back and Itachi never went mad and killed his clan. The Uchiha clan is saved all thanks to your help.");
        
        }
        displayWorld();
        displayScore();
        
    }

    console.log(a.keyCode);
    
    displayPacman();
}