document.addEventListener("DOMContentLoaded", function () {
    var cropContainers = document.querySelectorAll(".crop-container");
    var windowHeight = window.innerHeight;

    function checkVisibility() {
        for (var i = 0; i < cropContainers.length; i++) {
            var container = cropContainers[i];
            var rect = container.getBoundingClientRect();
            var isVisible = rect.top < windowHeight && rect.bottom >= 0;

            if (isVisible) {
                container.classList.remove("hide");
            } else {
                container.classList.add("hide");
            }
        }
    }

    checkVisibility();

    window.addEventListener("scroll", function () {
        checkVisibility();
    });
});




// JavaScript code to toggle content visibility
var toggleButton = document.getElementById("toggle-button");
var content = document.getElementById("crop-table");

toggleButton.addEventListener("click", function() {
  content.classList.toggle("show");
});