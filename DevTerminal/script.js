const input=document.querySelector(".command-line input");
const terminalBody=document.querySelector(".terminal-body");

const commands={
    help:"Available commands: help, about, skills, projects, clear",
    about:"I am a CSE student building things on the web.",
    skills:"HTML • CSS • JavaScript • React • Node.js • C++",
    projects:"ColorMorph • PixelMood • DevTerminal"
};

let history=[];
let historyIndex=-1;

input.addEventListener("keydown",e=>{
    if(e.key==="ArrowUp"){
        if(history.length===0) return;

        historyIndex=Math.max(0,historyIndex-1);
        input.value=history[historyIndex];
        return;
    }

    if(e.key==="ArrowDown"){
        if(history.length===0) return;

        historyIndex=Math.min(history.length,historyIndex+1);
        input.value=historyIndex===history.length?"":history[historyIndex];
        return;
    }

    if(e.key!=="Enter") return;

    const command=input.value.trim().toLowerCase();

    if(!command) return;

    history.push(command);
    historyIndex=history.length;

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