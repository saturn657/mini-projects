
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

const favoriteButton=document.getElementById("favoriteButton")

if(favoriteButton){
    const isSaved=localStorage.getItem("skyline-favorite")==="true"

    function updateFavorite(){
        const active=favoriteButton.classList.contains("active")
        favoriteButton.innerHTML=active?"♥ <span>Saved</span>":"♡ <span>Save</span>"
        favoriteButton.setAttribute("aria-label",active?"Remove from favourites":"Add destination to favourites")
    }

    if(isSaved){
        favoriteButton.classList.add("active")
    }

    updateFavorite()

    favoriteButton.addEventListener("click",()=>{
        favoriteButton.classList.toggle("active")
        localStorage.setItem("skyline-favorite",favoriteButton.classList.contains("active"))
        updateFavorite()
    })
}
