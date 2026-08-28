const moods=document.querySelectorAll(".moods button");
const display=document.querySelector(".mood-display");

const moodData={
    "😊":["Happy","Feeling bright and positive ☀️"],
    "🌊":["Calm","Let the noise fade away 🌊"],
    "⚡":["Energetic","Full power. No hesitation ⚡"],
    "🌧️":["Melancholic","Some days are meant to feel quiet 🌧️"],
    "🌹":["Romantic","A little warmth never hurts 🌹"]
};

moods.forEach(button=>{
    button.addEventListener("click",()=>{
        const [title,message]=moodData[button.textContent];

        display.querySelector("span").textContent=button.textContent;
        display.querySelector("h2").textContent=title;
        display.querySelector("p").textContent=message;
    });
});