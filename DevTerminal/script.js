const input=document.querySelector(".command-line input");
const terminalBody=document.querySelector(".terminal-body");

const commands={
    help:"Available commands: help, about, skills, projects, clear",
    about:"I am a CSE student building things on the web.",
    skills:"HTML • CSS • JavaScript • React • Node.js • C++",
    projects:"ColorMorph • PixelMood • DevTerminal"
};

input.addEventListener("keydown",e=>{
    if(e.key!=="Enter") return;

    const command=input.value.trim().toLowerCase();

    if(command==="clear"){
        terminalBody.innerHTML="";
    }else{
        const output=document.createElement("div");
        output.className="output";
        output.innerHTML=`
            <p>dev@portfolio:~$ ${command}</p>
            <p>${commands[command]||"Command not found. Type 'help'."}</p>
        `;
        terminalBody.appendChild(output);
    }

    input.value="";
});