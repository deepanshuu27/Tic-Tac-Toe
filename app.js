
let boxes= document.querySelectorAll(".box");
let resetbtn=document.querySelector("#set");
let newgmebtn = document.querySelector("#new-btn");
let msgcontainer= document.querySelector(".msg-container")
let msg= document.querySelector("#msg");



let count = 0;
let turnO = true;

const winpatterns= [ [0,1,2], [0,3,6], [0,4,8], [1,4,7], [2,5,8],[2,4,6],[3,4,5],[6,7,8]];

boxes.forEach((box) =>{
    box.addEventListener("click", ()=> {
console.log("box was clicked");

if(turnO){
    box.style.color= 'green';

    box.innerText = "O";
    turnO=false;
    
    }
    else{
        box.style.color='purple';
     box.innerText="X";
     turnO=true;
    }
       
    box.disabled= true;  // cant chnge the value once it entered
    count++;

 let iswinner= checkwinner();

 if(count===9 && !iswinner){
    gamedraw();
 }

    
});
});

const checkwinner = () =>{
    for ( let pattern of winpatterns){
        let pos1val= boxes[pattern[0]].innerText;
        let pos2val= boxes[pattern[1]].innerText;
        let pos3val= boxes[pattern[2]].innerText;
        
       

        if(pos1val != ""  && pos2val != "" &&pos3val != ""){
            if(pos1val === pos2val && pos2val===pos3val){
                console.log("winner",pos1val);

                showwinner(pos1val);
                return true;
            }
        }

}

};

const showwinner= (winner) =>{
    msg.innerText= `Congratulations , Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
     
    disableBoxes();
}

function gamedraw() {
    msg.innerText= `Game is DRAW`;
    msgcontainer.classList.remove("hide");
     
    disableBoxes();

}
const disableBoxes = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
};

const enableBoxes = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText="";
        
        
    }
};

const resetgame = ()=>{
    turnO=true;
    count=0;
    enableBoxes();
    msgcontainer.classList.add("hide");
} 

newgmebtn.addEventListener("click",resetgame);
resetbtn.addEventListener("click",resetgame);








