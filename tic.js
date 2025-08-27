const boxes=document.querySelectorAll("#box");
const msgcontaner=document.querySelector(".msg-contaner")
const msg=document.querySelector("#msg");
const resetBut=document.querySelector("#reset");
const newBut=document.querySelector("#new-btn");
const resetHide=document.querySelector(".reset-button");
let turn0=true;
let count=0;

let winPattern=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

boxes.forEach((box) =>{
    box.addEventListener("click",()=>{
      
        if(turn0){
            box.innerHTML="0";
            turn0=false;
        }
        else{
            box.innerHTML="X";
            turn0=true;
        }
        box.disabled=true;
        count++;

        checkWinner();

        if(count == 9){
            checkDraw();
        }
    })
})

const checkWinner=()=>{
    for(let pattern of winPattern){
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;

        if(pos1 != "" && pos2 != "" && pos3 != ""){
            if(pos1 == pos2 && pos2 == pos3){
                shoWinner(pos1);
            }
        } 
    }
}

const shoWinner=(win) =>{
    console.log(`${win} is winner`);
    msg.style.color="Blue";
    msg.innerText= `congratulation, winner is ${win}`
    msgcontaner.classList.remove("hide");
    resetBut.classList.add("hide");
    disableboxes();
}

const disableboxes=()=>{
    for( let box of boxes){
        box.disabled=true;
    }
}

const checkDraw=()=>{
    console.log("match are draw");
    msg.style.color="red";
    msg.innerHTML="Match are draw";
    msgcontaner.classList.remove("hide");
    resetHide.classList.add("hide");

}
const resetGame=() =>{
    turn0=true;
    count=0;
    msgcontaner.classList.add("hide");
    resetBut.classList.remove("hide");
    enableBox();
}

const enableBox=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

newBut.addEventListener("click",resetGame);
resetBut.addEventListener("click",resetGame);