var modal = document.getElementById("modal");
var changeBtn = document.getElementById("change");
var preview = document.getElementById("preview");

function Preview() {
    color = document.querySelector('input[name="colors"]:checked').value;
    console.log("The color is " + color);
    preview.style.background = color;
}

function changeColor() {
    console.log("the color is " + color);
    document.body.style.background = color;
}

function Close() {
    modal.style.visibility = "hidden";
    modal.style.opacity = "0";
    preview.style.background = "#1a1a1a";
    document.querySelector('input[name="colors"]:checked').checked = false;
}

function ChangeButtonClick() {
    modal.style.visibility = "visible";
    modal.style.opacity = "1";
}

window.onclick = function(event){
    if (event.target == modal) {
        modal.style.visibility = "hidden";
        modal.style.opacity = "0"
        preview.style.background = "#1a1a1a";
        document.querySelector('input[name="colors"]:checked').checked = false;
    }
};