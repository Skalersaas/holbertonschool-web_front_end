function changeMode(size,weight,transform,background,color){
    return function(){
        const style = document.body.style;
        style.fontSize = size;
        style.fontWeight = weight;
        style.textTransform = transform;
        style.backgroundColor = background;
        style.color = color;
    }
}
function main(){
    const spooky = changeMode(9, "bold", "uppercase","pink", "green");
    const darkMode = changeMode(12, "bold", "capitalize","black" ,"white");
    const screamMode = changeMode(12, "normal", "lowercase", "white","black");
 
    const body = document.body; 

    const paragraph = document.createElement("P");
    paragraph.innerText = "Welcome Holberton!";
    body.appendChild(paragraph);


    let spookyB = document.createElement("BUTTON");
    spookyB.innerText = "Spooky";
    spookyB.onclick = spooky;
    body.appendChild(spookyB);

    let darkB = document.createElement("BUTTON");
    darkB.innerText = "Dark mode";
    darkB.onclick = darkMode;
    body.appendChild(darkB);

    let screamB = document.createElement("BUTTON");
    screamB.innerText = "Scream mode";
    screamB.onclick = screamMode;
    body.appendChild(screamB);
}

main();