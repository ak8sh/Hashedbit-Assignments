function createDiv(width, height, text) {
    let div = document.createElement("div");

    div.style.width = width + "px";
    div.style.height = height + "px";

    div.textContent = text;

    document.getElementById("container").appendChild(div);
}


window.createDiv = createDiv;