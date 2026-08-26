const button=document.getElementById("generate");
const cards=document.querySelectorAll(".color-card");

function randomColor(){
    return "#" + Math.floor(Math.random()*16777215).toString(16).padStart(6,"0");
}

button.addEventListener("click",()=>{
    cards.forEach(card=>{
        card.style.backgroundColor=randomColor();
    });
});