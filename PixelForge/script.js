
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
