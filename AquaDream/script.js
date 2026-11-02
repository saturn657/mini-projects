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
const jellyfish=document.querySelectorAll(".jelly")

oceanScene.addEventListener("mousemove",(e)=>{
    const rect=oceanScene.getBoundingClientRect()

    const x=(e.clientX-rect.left)/rect.width-0.5
    const y=(e.clientY-rect.top)/rect.height-0.5

    jellyfish.forEach((jelly,index)=>{
        const speed=(index+1)*5

        jelly.style.setProperty("--move-x",`${x*speed}px`)
        jelly.style.setProperty("--move-y",`${y*speed}px`)
    })
})

oceanScene.addEventListener("mouseleave",()=>{
    jellyfish.forEach((jelly)=>{
        jelly.style.setProperty("--move-x","0px")
        jelly.style.setProperty("--move-y","0px")
    })
})
const timeToggle=document.getElementById("timeToggle")

timeToggle.addEventListener("click",()=>{
    oceanScene.classList.toggle("night-mode")

    if(oceanScene.classList.contains("night-mode")){
        timeToggle.textContent="☀️ Enter Day"
    }else{
        timeToggle.textContent="🌙 Enter Night"
    }
})
const soundToggle=document.getElementById("soundToggle")

let audioContext=null
let oscillator=null
let gainNode=null

soundToggle.addEventListener("click",async()=>{
    if(!audioContext){
        const AudioContextClass=window.AudioContext||window.webkitAudioContext

        if(!AudioContextClass){
            soundToggle.textContent="Audio unavailable"
            return
        }

        audioContext=new AudioContextClass()
        oscillator=audioContext.createOscillator()
        gainNode=audioContext.createGain()

        oscillator.type="sine"
        oscillator.frequency.value=90
        gainNode.gain.value=0

        oscillator.connect(gainNode)
        gainNode.connect(audioContext.destination)
        oscillator.start()
    }

    if(audioContext.state==="suspended"){
        await audioContext.resume()
    }

    const isPlaying=soundToggle.getAttribute("aria-pressed")==="true"

    gainNode.gain.setTargetAtTime(
        isPlaying?0:0.015,
        audioContext.currentTime,
        0.2
    )

    soundToggle.setAttribute("aria-pressed",String(!isPlaying))
    soundToggle.textContent=isPlaying?"🔇 Sound Off":"🔊 Sound On"
})
const feedButton=document.getElementById("feedButton")
const feedMessage=document.getElementById("feedMessage")
const fish=document.querySelectorAll(".fish")

let foodCount=0

feedButton.addEventListener("click",()=>{
    const rect=oceanScene.getBoundingClientRect()

    const food=document.createElement("div")
    food.className="food-particle"
    food.style.left=(rect.width/2-3)+"px"
    food.style.top=(rect.height*.35)+"px"

    oceanScene.appendChild(food)

    foodCount++

    feedMessage.textContent=`Food dropped: ${foodCount} 🐟`

    fish.forEach((item,index)=>{
        item.animate(
            [
                {translate:"0 0"},
                {translate:`${index===0?25:-25}px -12px`},
                {translate:"0 0"}
            ],
            {
                duration:900,
                easing:"ease-in-out"
            }
        )
    })

    setTimeout(()=>food.remove(),1900)
})  
const creatureInfo=document.getElementById("creatureInfo")
const creatureName=document.getElementById("creatureName")
const creatureDescription=document.getElementById("creatureDescription")
const closeInfo=document.getElementById("closeInfo")

const creatureData={
    "fish-one":{
        name:"Clownfish",
        description:"A small, colourful reef fish known for its orange body and white bands. Clownfish often live among sea anemones."
    },
    "fish-two":{
        name:"Blue Tang",
        description:"A reef fish recognised for its vibrant blue colour and active swimming around coral reefs."
    },
    "jelly-one":{
        name:"Moon Jellyfish",
        description:"A translucent jellyfish with a gentle drifting motion. Its body is adapted to life in open water."
    },
    "jelly-two":{
        name:"Sea Nettle",
        description:"A graceful jellyfish with trailing tentacles. Some sea nettle species can deliver a painful sting."
    },
    "jelly-three":{
        name:"Comb Jelly",
        description:"A soft-bodied marine animal that moves through the water using rows of tiny hair-like structures."
    }
}

function showCreature(creature){
    const type=[...creature.classList].find(name=>creatureData[name])

    if(!type) return

    creatureName.textContent=creatureData[type].name
    creatureDescription.textContent=creatureData[type].description
    creatureInfo.classList.add("show")
}

document.querySelectorAll(".fish,.jelly").forEach(creature=>{
    creature.setAttribute("tabindex","0")
    creature.setAttribute("role","button")

    creature.addEventListener("click",()=>{
        showCreature(creature)
    })

    creature.addEventListener("keydown",event=>{
        if(event.key==="Enter"||event.key===" "){
            event.preventDefault()
            showCreature(creature)
        }
    })
})

closeInfo.addEventListener("click",()=>{
    creatureInfo.classList.remove("show")
})
