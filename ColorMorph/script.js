const button=document.getElementById("generate");
const cards=document.querySelectorAll(".color-card");

function randomColor(){
    return "#"+Math.floor(Math.random()*16777215).toString(16).padStart(6,"0");
}

function generatePalette(){
    const colors=[];

    cards.forEach(card=>{
        const color=randomColor();
        colors.push(color);
        card.style.backgroundColor=color;
        card.querySelector("span").textContent=color;
    });

    document.body.style.background=`linear-gradient(135deg,${colors.join(",")})`;
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