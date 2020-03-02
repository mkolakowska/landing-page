function navFunction() {
  var x = document.getElementById("topNav");
  if (x.className === "nav-wrapper") {
    x.className + -" responsive";
  } else {
    x.className = "nav-wrapper";
  }
}
