document.addEventListener("DOMContentLoaded", function() {
    var button = document.createElement("button");
    button.innerHTML = "Click Me!";
    button.style.padding = "10px 20px";
    button.style.backgroundColor = "#4CAF50";
    button.style.color = "white";
    button.style.border = "none";
    button.style.borderRadius = "5px";
    button.style.cursor = "pointer";
    
    button.onclick = function() {
        alert("Button Clicked!");
    };
    
    document.body.appendChild(button);
});
