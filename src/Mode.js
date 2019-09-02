function lightMode() {
  console.log('light mode : on');
  document.getElementById("mainTest").style.backgroundColor = "rgb(242,231,254)";
  document.getElementById("home").style.color = "black";

};

function darkMode(){
  console.log('dark mode : on');
  document.getElementById("mainTest").style.backgroundColor = "black";
  document.getElementById("home").style.color = "white";
};

export { lightMode,darkMode};