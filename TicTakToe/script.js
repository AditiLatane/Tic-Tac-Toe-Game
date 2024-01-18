let boxes = document.querySelectorAll(".box");
let reset = document.querySelector('.resetBtn');
let hide = document.querySelector('.hide');
let msg = document.querySelector('.msg');

let tie = false;
let turnO = true; 
let win =false;
let count =0;

let winner = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

let checkWinner =()=>{
    for(pattern of winner){
        let pos1 = boxes[pattern[0]].innerHTML;
        let pos2 = boxes[pattern[1]].innerHTML;
        let pos3 = boxes[pattern[2]].innerHTML;
        if(pos1 !="" && pos2 !="" && pos3 !=""){
            if(pos1==pos2 && pos2==pos3){
                boxes.forEach((box)=>{box.disabled = true})             
                msg.innerHTML = `${pos1} is the Winner !`
                msg.classList.remove('hide');  
                win = true;
            }
        }
    }
}
let checktie =()=>{
    if(count==9 && win == false){
        msg.innerHTML = "Match Ties";
        msg.classList.remove('hide');
    }
}

boxes.forEach((box)=>{
    box.addEventListener('click' ,()=>{
        console.log("box was clicked");
        console.log("count = " , count);
        if (turnO){
            box.innerHTML = 'O';
            turnO=false;
        }
        else{
            box.innerHTML = 'X';
            turnO=true;
        }
        box.disabled =true;
        count++;
        checkWinner();
        checktie();
    }
    );
});

reset.onclick=()=>{
    turnO = true;
    win = false;
    count=0;
    msg.classList.add('hide');
    msg.innerHTML = ""; 
    boxes.forEach((box)=>{
        box.innerHTML = "";
        box.disabled =false;
    })
}
