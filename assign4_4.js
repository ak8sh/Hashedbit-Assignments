let text = document.getElementById("text-container");

document.getElementById("colorchange").onclick = function () {
    let color = document.getElementById("colorbox").value;
    text.style.color = color;
};

document.getElementById("fontsize").oninput = function () {
    text.style.fontSize = this.value + "px";
};

document.getElementById("italic").onclick = function () {
    text.style.fontStyle = (text.style.fontStyle === "italic") ? "normal" : "italic";
};

document.getElementById("underline").onclick = function () {
    text.style.textDecoration = (text.style.textDecoration === "underline") ? "none" : "underline";
};

document.getElementById("bold").onclick = function () {
    text.style.fontWeight = (text.style.fontWeight === "bold") ? "normal" : "bold";
};

document.getElementById("list").onchange = function () {
    text.style.fontFamily = this.value;
};

document.getElementById("getstyle").onclick = function () {
    let color = text.style.color || "black";
    let size = text.style.fontSize || "55px";
    let family = text.style.fontFamily || "sans-serif";
    let decoration = text.style.textDecoration || "none";
    let style = text.style.fontStyle || "normal";
    let weight = text.style.fontWeight || "normal";

    let cssText = 
        "color: " + color + "; " +
        "font-size: " + size + "; " +
        "font-family: " + family + "; " +
        "text-decoration: " + decoration + "; " +
        "font-style: " + style + "; " +
        "font-weight: " + weight + ";";

    document.getElementById("css-props").innerText = cssText;
};