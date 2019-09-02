function lightMode() {
  console.log('light mode : on');
  document.getElementById("mainTest").style.backgroundColor = "#faf9fa";
  document.getElementById("home").style.color = "#19171C";

};

function darkMode(){
  console.log('dark mode : on');
  document.getElementById("mainTest").style.backgroundColor = "#0f0e11";
  document.getElementById("home").style.color = "#dad8de";
};

export { lightMode,darkMode};

