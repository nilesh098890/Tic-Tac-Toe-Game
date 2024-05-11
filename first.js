let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let newgame = document.querySelector("#newgame")
let  msgcontainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let turnO=true; //playerX , playerO

const resetgame=()=>{
    turnO=true;
    enableBoxes();
    msgcontainer.classList.add("hide");
};

const winpattern = [
    [0 , 1 , 2],
    [0 , 3 , 6],
    [0 , 4 , 8],
    [1 , 4 , 7],
    [2 , 5 , 8],
    [2 , 4 , 6],
    [3 , 4 , 5],
    [6 , 7 , 8],
];


boxes.forEach((box) => {
        box.addEventListener("click",()=>{
            if(turnO===true)
                {
                    box.innerText="O";
                    turnO=false;
                }
            else
            {
                box.innerText="X";
                turnO=true;
            }
            box.disabled=true;
            checkwinner();
        })
});

const disableBoxes=()=>{
    for(let box of boxes)
        {
            box.disabled=true;
        }
};
const enableBoxes=()=>{
    for(let box of boxes)
        {
            box.disabled=false;
            box.innerText="";
        }
};

const showwinner=(Winner)=>{
    msg.innerText=`Congratulation , Winner is ${Winner}`;
    msgcontainer.classList.remove("hide");
    disableBoxes();
};

const checkwinner=()=>{
    for(let i of winpattern)
        {
            let pos1val = boxes[i[0]].innerText;
            let pos2val = boxes[i[1]].innerText;
            let pos3val = boxes[i[2]].innerText;

            if(pos1val !="" && pos2val !=""&& pos3val !="")
                {
                    if(pos1val===pos2val &&pos2val===pos3val)
                        {
                           showwinner(pos1val);
                        }
                }
        }
}


newgame.addEventListener("click",resetgame);
reset.addEventListener("click",resetgame);