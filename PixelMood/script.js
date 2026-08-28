const moods=document.querySelectorAll(".moods button");
const display=document.querySelector(".mood-display");

const moodData={
    "😊":{
        title:"Happy",
        message:"Feeling bright and positive ☀️",
        background:"linear-gradient(135deg,#ff9a9e,#fad0c4)"
    },
    "🌊":{
        title:"Calm",
        message:"Let the noise fade away 🌊",
        background:"linear-gradient(135deg,#4facfe,#00f2fe)"
    },
    "⚡":{
        title:"Energetic",
        message:"Full power. No hesitation ⚡",
        background:"linear-gradient(135deg,#f7971e,#ffd200)"
    },
    "🌧️":{
        title:"Melancholic",
        message:"Some days are meant to feel quiet 🌧️",
        background:"linear-gradient(135deg,#667eea,#434343)"
    },
    "🌹":{
        title:"Romantic",
        message:"A little warmth never hurts 🌹",
        background:"linear-gradient(135deg,#ff758c,#ff7eb3)"
    }
};

moods.forEach(button=>{
    button.addEventListener("click",()=>{
        const mood=moodData[button.textContent];

        display.querySelector("span").textContent=button.textContent;
        display.querySelector("h2").textContent=mood.title;
        display.querySelector("p").textContent=mood.message;
        document.body.style.background=mood.background;
    });
});