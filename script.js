var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.height) {
      panel.style.height = null;
    } else {
        panel.style.height = 150 + "px";
    } 
  });
}