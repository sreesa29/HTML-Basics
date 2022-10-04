var hiddenClass = document.getElementsByClassName("sticky-top");
function functionToclose() {
  for (var i = 0; i < hiddenClass.length; i++) {
    hiddenClass[i].style.display = "none";
  }
}

function lightThemeChnage() {
  var checkBox1 = document.getElementById("checkboxD");
  var checkBoxState = {
    name: "checkBoxStatus",
    value: checkBox1.checked,
  };
  localStorage.setItem("checkBox", JSON.stringify(checkBoxState));
  theme();
}

window.addEventListener("load", (event) => {
  theme();
});

function theme() {
  const checkStaus = JSON.parse(window.localStorage.getItem("checkBox"));
  var changeClass = document.getElementsByTagName("body");
  if (checkStaus.value === true) {
    for (var i = 0; i < changeClass.length; i++) {
      changeClass[i].style.background = "#192734";
      changeClass[i].style.color = "white";
      document.getElementById("checkboxD").checked = true;
    }
  } else {
    for (var i = 0; i < changeClass.length; i++) {
      changeClass[i].style.background = "white";
      changeClass[i].style.color = "black";
      document.getElementById("checkboxD").checked = false;
    }
  }
}
