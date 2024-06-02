
var modal = document.getElementById("contactModal");

var btn = document.querySelector(".contact-button");

var span = document.getElementsByClassName("close")[0];

btn.onclick = function(event) {
    if (event.target.classList.contains("contact-button") && event.target.tagName === "BUTTON") {
        modal.style.display = "block";
    }
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
