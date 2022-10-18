// setup value to zero by default
let total = 0;

// select my value
const value = document.getElementById("value");

// select all my buttons
const btns = document.querySelectorAll(".btn");

// loop on all btns
btns.forEach(function (btn) {
  // add event listener on each btn
  btn.addEventListener("click", function (e) {
    // locate each class button
    const style = e.currentTarget.classList;

    if (style.contains("decrease")) {
      total--;
      value.style.color = "red";
    } else if (style.contains("increase")) {
      total++;
      value.style.color = "green";
    } else {
      total = 0;
      value.style.color = "inherit";
    }

    // set value
    value.textContent = total;
  });
});
