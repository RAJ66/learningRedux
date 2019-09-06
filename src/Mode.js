function lightMode() {
  console.log('light mode : on');
  document.getElementById("mainTest").style.backgroundColor = "var(--color-base)";
  document.getElementById("home").style.color = "var(--color-first)";

};

function darkMode(){
  console.log('dark mode : on');
  document.getElementById("mainTest").style.backgroundColor = "var(--color-first)";
  document.getElementById("home").style.color = "var(--color-base)";
};

export { lightMode,darkMode};

