let gameSeq=[];
let userSeq=[];
 
let btns=["red","green","purple","yellow"];

let lvl=0;
let start=false;
let h2=document.querySelector("h2");
let h3=document.querySelector("h3");

document.addEventListener("keypress",function(){
    if(start==false){
        console.log("game started");
        start=true;
         
    }
    levelUp();
});

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },550);
 
}
function levelUp(){
    userSeq=[];
    lvl++;
    h2.innerText=`Level ${lvl}`
    let randIdx=Math.floor(Math.random()*3);
    let randCol=btns[randIdx];
    let randBtn=document.querySelector(`.${randCol}`);
    gameSeq.push(randCol);
    console.log(gameSeq);
    
    btnFlash(randBtn);
 }

 function btnPress(){
   let btn=this;
   btnFlash(btn);
   userCol=btn.getAttribute("id");
   userSeq.push(userCol);
  checkAns(userSeq.length-1);  
   
   
    
 }
 function checkAns(idx){
    
    if(gameSeq[idx]==userSeq[idx]){
        if(gameSeq.length==userSeq.length){
            setTimeout(levelUp,1000);
        }
    }else{
        h2.innerHTML=`Game over! <br>Your score was: <b>${ lvl}</b>
        <br>Press any key to start the game`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
        document.querySelector("body").style.backgroundColor="white";
        },150);
        //document.querySelector("h2").style.color="red";
        gameOver();
    }

 }
 function gameOver(){
    start=false;
    lvl=0;
    gameSeq=[];
    userSeq=[];
    document.querySelector("h2").style.color="red";

 }
 let allBtns=document.querySelectorAll("button")
 for(btn of allBtns){
    btn.addEventListener("click",btnPress);
 }


