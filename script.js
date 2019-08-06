var timeline = document.getElementById("timeline");

var selectedItem = document.getElementById("slide1");

timeline.addEventListener("input", moveTimeline);

function moveTimeline() {
    selectedItem.style.display = "none";
    selectedItem = document.getElementById("slide" + timeline.value);
    selectedItem.style.display = "block";
}
