
const canvas=document.getElementById("pixelCanvas")
const gridSize=32
let drawing=false
let currentColor="#ff6584"

for(let i=0;i<gridSize*gridSize;i++){
    const pixel=document.createElement("div")
    pixel.className="pixel"
    pixel.dataset.index=i
    canvas.appendChild(pixel)
}

function paintPixel(pixel){
    if(pixel&&pixel.classList.contains("pixel")){
        pixel.style.backgroundColor=currentColor
    }
}

canvas.addEventListener("pointerdown",(e)=>{
    if(e.target.classList.contains("pixel")){
        drawing=true
        canvas.setPointerCapture(e.pointerId)
        paintPixel(e.target)
    }
})

canvas.addEventListener("pointermove",(e)=>{
    if(!drawing)return
    const pixel=document.elementFromPoint(e.clientX,e.clientY)
    paintPixel(pixel)
})

canvas.addEventListener("pointerup",()=>{
    drawing=false
})

canvas.addEventListener("pointercancel",()=>{
    drawing=false
})

const palette=document.getElementById("palette")
const selectedHex=document.getElementById("selectedHex")
const customColor=document.getElementById("customColor")

function selectColor(color,button=null){
    currentColor=color
    selectedHex.textContent=color.toUpperCase()

    document.querySelectorAll(".swatch").forEach(swatch=>{
        swatch.classList.remove("active")
    })

    if(button){
        button.classList.add("active")
    }
}

palette.addEventListener("click",(e)=>{
    const button=e.target.closest(".swatch")
    if(!button)return
    selectColor(button.dataset.color,button)
})

customColor.addEventListener("input",()=>{
    selectColor(customColor.value)
})
