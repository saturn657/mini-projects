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