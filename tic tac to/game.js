let key = document.querySelectorAll(".key");
let reset = document.querySelector("#re");
let mes = document.querySelector("#mes");
let turn = true;
let count = 0;
const winpat =[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
]
key.forEach(func)
  function func(box){ box.addEventListener("click" ,() => {
    if(turn === true){
        box.innerText = "x";
        turn = false;
    }
    else{ 
        box.innerText ="o";
        turn = true;
   }
   box.disabled = true;
   winner ();
   count++;
   if(count === 9){
    mes.classList.remove("hide");
    mes.innerText ="The Match Is Draw";
   }
})
}
winner = () =>{
    for (const el of winpat) {
        let pos1 = key[el[0]].innerText;
        let pos2 = key[el[1]].innerText;
        let pos3 = key[el[2]].innerText;
    if(pos1 != "" && pos2 != "" && pos3 != ""){
        if(pos1 === pos2 && pos2 === pos3){
          showwinner(pos1);
        }
    }
    }
}
const showwinner = (wi) => {
    mes.innerText = `Winner is ${wi}`;
    for(const el of key) {
        el.disabled = true;
    }
   mes.classList.remove("hide");
}
reset.addEventListener("click",() =>{
    turn = true;
       for (const el of key) {
        el.disabled = false;
        el.innerText ="";
       }
       count = 0;
       mes.classList.add("hide");
    })