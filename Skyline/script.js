
const themeToggle=document.getElementById("themeToggle")

const savedTheme=localStorage.getItem("skyline-theme")

if(savedTheme==="light"){
    document.body.classList.add("light-theme")
}

function updateThemeButton(){
    const isLight=document.body.classList.contains("light-theme")

    themeToggle.textContent=isLight?"🌙 Dark":"☀️ Light"
    themeToggle.setAttribute(
        "aria-label",
        isLight?"Switch to dark theme":"Switch to light theme"
    )
}

updateThemeButton()

themeToggle.addEventListener("click",()=>{
    document.body.classList.toggle("light-theme")

    const isLight=document.body.classList.contains("light-theme")

    localStorage.setItem("skyline-theme",isLight?"light":"dark")

    updateThemeButton()
})
