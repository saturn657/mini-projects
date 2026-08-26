const button=document.getElementById("generate");
const cards=document.querySelectorAll(".color-card");

function randomColor(){
    return "#" + Math.floor(Math.random()*16777215).toString(16).padStart(6,"0");
}

function generatePalette(){
    cards.forEach(card=>{
        const color=randomColor();
        card.style.backgroundColor=color;
        card.querySelector("span").textContent=color;
    });
}

button.addEventListener("click",generatePalette);

cards.forEach(card=>{
    card.addEventListener("click",async()=>{
        const color=card.querySelector("span").textContent;
        await navigator.clipboard.writeText(color);
        card.querySelector("span").textContent="Copied!";
        setTimeout(()=>{
            card.querySelector("span").textContent=color;
        },800);
    });
});