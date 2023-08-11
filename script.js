console.log("Welcome to playing Tic Tac Toe")
let audioTurn =new Audio("switch.mp3")
let win=new Audio("winSound.wav")
let turn ="X"
let gameOver=false;
let reset=document.getElementById("reset");
let exit=document.getElementById("exit");

// Function to change the turn.
function changeTurn(){
    return (turn==="X"?"O":"X");
}

// Fucntion to check for a Win.
const checkWin= ()=>{
    let wins=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ];
    let boxtexts= document.getElementsByClassName("boxText");
    wins.forEach(e=>{
        if((boxtexts[e[0]].innerText===boxtexts[e[1]].innerText) && (boxtexts[e[1]].innerText===boxtexts[e[2]].innerText) &&(boxtexts[e[0]].innerText!=="")){
            gameOver=true;
            document.querySelector('.info').innerText=boxtexts[e[0]].innerText+" Won!";
            win.play();
            document.getElementById('winImg').style.width="250px";
         }
    })
    }


// Game Logic
let boxes= document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext= element.querySelector(".boxText");
    element.addEventListener('click', ()=>{
        console.log("Turn:"+ turn);
        if(boxtext.innerText===""){
            boxtext.innerText=turn;
            turn=changeTurn();
            audioTurn.play();
            checkWin();
            if(!gameOver){
            document.getElementsByClassName("info")[0].innerText="Turn for "+ turn;
            }
        }
    })
});


// add click listener to the reset button
reset.addEventListener('click',()=>{
    let boxtexts= document.getElementsByClassName("boxText");
    for (let i = 0; i < boxtexts.length; i++) {
        boxtexts[i].innerText="";
    }
    document.getElementById('winImg').style.width="0px";
    turn="X";
    gameOver=false;
    if(!gameOver){
        document.getElementsByClassName("info")[0].innerText="Turn for "+ turn;
    }
})

// adding a click listener to the exit button.
 exit.addEventListener('click', ()=>{
    window.close();
 })