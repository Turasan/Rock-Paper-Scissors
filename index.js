"use strict";

var variants = ['r','p','s'];
var userWins = 0;
var computerWins = 0;
var draw = 0;
var round = 1;

window.onkeyup = function(e){
    if(variants.indexOf(e.key) === -1){
        alert('wrong choice you can only choose r, p, and s');
        return;
    }
    
var userChoice = e.key ;

var computerChoice = variants[Math.floor(Math.random()*3)];

var scissors = document.getElementById("choice_U1");
var paper = document.getElementById("choice_U2");
var rock = document.getElementById("choice_U3");
var scissorsC = document.getElementById("choice_C1");
var paperC = document.getElementById("choice_C2");
var rockC = document.getElementById("choice_C3");

function fists(){
    var fist = document.getElementById("choice_U");
    var fistC = document.getElementById("choice_C");
    fist.classList.add("hidden");
    fistC.classList.add("hidden");
}
function scissorss(){
    scissors.classList.add("hidden");
    scissorsC.classList.add("hidden");
}

function papers(){
    paper.classList.add("hidden");
    paperC.classList.add("hidden");
}

function rocks(){
    rock.classList.add("hidden");
    rockC.classList.add("hidden");
}

if(computerChoice=='r' && userChoice=='p' ){
    userWins++; 
    fists();
    scissorss();
    paperC.classList.add("hidden");
    rock.classList.add("hidden");
    paper.classList.remove("hidden");
    rockC.classList.remove("hidden");
}
else if(computerChoice=='p' && userChoice=='s'){
    userWins++;
    fists();
    rocks();
    scissorsC.classList.add("hidden");
    paper.classList.add("hidden");
    paperC.classList.remove("hidden");
    scissors.classList.remove("hidden");
}
else if(computerChoice=='s' && userChoice=='r'){
    userWins++;
    fists();
    papers();
    scissors.classList.add("hidden");
    rockC.classList.add("hidden");
    scissorsC.classList.remove("hidden");
    rock.classList.remove("hidden");
}
else if(computerChoice=='p' && userChoice=='r' ){
    computerWins++;
    fists();
    scissorss()
    paper.classList.add("hidden");
    rockC.classList.add("hidden");
    paperC.classList.remove("hidden");
    rock.classList.remove("hidden");
}
else if(computerChoice=='s' && userChoice=='p'){
    computerWins++;
    fists();
    rocks();
    paperC.classList.add("hidden");
    scissors.classList.add("hidden");
    scissorsC.classList.remove("hidden");
    paper.classList.remove("hidden");
}
else if(computerChoice=='r' && userChoice=='s'){
    computerWins++;
    fists();
    papers();
    rock.classList.add("hidden");
    scissorsC.classList.add("hidden");
    rockC.classList.remove("hidden");
    scissors.classList.remove("hidden");
}
else if(computerChoice=='p' && userChoice=='p'){
    draw++;
    fists();
    scissorss();
    rocks();
    paperC.classList.remove("hidden");
    paper.classList.remove("hidden");
}
else if(computerChoice=='s' && userChoice=='s'){
    draw++;
    fists();
    papers();
    rocks();
    scissorsC.classList.remove("hidden");
    scissors.classList.remove("hidden");
}
else if(computerChoice=='r' && userChoice=='r'){
    draw++;
    fists();
    scissorss();
    papers();
    rockC.classList.remove("hidden");
    rock.classList.remove("hidden");
}
round++;
document.getElementById("roundNumb").innerHTML =round;
document.getElementById("p1").innerHTML =userWins;
document.getElementById("p2").innerHTML =draw;
document.getElementById("p3").innerHTML =computerWins;
}

