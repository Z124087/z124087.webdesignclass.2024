
function toggleText(elementId) {
    var hiddenText = document.getElementById(elementId);
    if (hiddenText.style.display === "none") {
        hiddenText.style.display = "block";
    } else {
        hiddenText.style.display = "none";
    }
}
