let colorBtns = document.querySelector('.themes');
let themeColor = "#228bcc";
let theme = document.querySelector(":root");
let customColor = document.getElementById("custom-color");
customColor.oninput = (e) => {
  themeColor = e.target.value;
  theme.style.setProperty("--theme-color", themeColor);

}


colorBtns.onclick = (event) => {
  let getColor = event.target.getAttribute('data-color');
  themeColor = getColor;
  theme.style.setProperty("--theme-color", themeColor)
}