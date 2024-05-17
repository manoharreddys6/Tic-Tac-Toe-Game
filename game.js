let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#reset");
let newgamebtn=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let turnO=true;

const winPatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,5],
    [2,4,6]
];

boxes.forEach((box) => {
    box.addEventListener("click",() =>{
        if(turnO){
            box.innerText="O";
            box.style.color="darkblue";
            turnO=false;
        }else{
            box.innerText="X";
            box.style.color="black";
            turnO=true;
        }
        box.disabled=true;
        checkWinner();
    })
})

const resetGame=()=>{
    turnO=true;
    enableBoxes();
    msgContainer.classList.add("hide");
}

const disableBoxes = ()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}

const enableBoxes = ()=>{
    for(box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

const showWinner=(winner)=>{
    msg.innerText=`Congratulations Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}

const checkWinner=() =>{
    for(let pattern of winPatterns){
        let val1 = boxes[pattern[0]].innerText;
        let val2 = boxes[pattern[1]].innerText;
        let val3 = boxes[pattern[2]].innerText;

        if(val1!="" && val2!="" && val3!=""){
            if(val1=== val2 && val2 === val3){
                showWinner(val1);
            }
        }
    }
};

newgamebtn.addEventListener("click",resetGame);
reset.addEventListener("click",resetGame);