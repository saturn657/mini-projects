const diveButton=document.getElementById("diveButton")
const oceanScene=document.querySelector(".ocean-scene")

diveButton.addEventListener("click",()=>{
    oceanScene.scrollIntoView({
        behavior:"smooth",
        block:"center"
    })

    oceanScene.animate(
        [
            {filter:"brightness(1)"},
            {filter:"brightness(1.35)"},
            {filter:"brightness(1)"}
        ],
        {
            duration:1000,
            easing:"ease-in-out"
        }
    )
})
const dynamicBubbles=[]

function createBubble(){
    if(dynamicBubbles.length>=18) return

    const bubble=document.createElement("div")
    bubble.className="bubble dynamic-bubble"

    const size=Math.random()*7+5
    bubble.style.left=Math.random()*90+5+"%"
    bubble.style.width=size+"px"
    bubble.style.height=size+"px"
    bubble.style.animationDuration=Math.random()*4+6+"s"
    bubble.style.animationDelay=-Math.random()*5+"s"

    oceanScene.appendChild(bubble)
    dynamicBubbles.push(bubble)

    bubble.addEventListener("click",()=>{
        if(bubble.classList.contains("popped")) return

        bubble.classList.add("popped")

        setTimeout(()=>{
            bubble.remove()
            const index=dynamicBubbles.indexOf(bubble)
            if(index!==-1) dynamicBubbles.splice(index,1)
        },250)
    })
}

for(let i=0;i<10;i++){
    createBubble()
}

setInterval(createBubble,900)
