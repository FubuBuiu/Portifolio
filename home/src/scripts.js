const vueColor = "#41b883";
const reactColor = "#149eca";
function mouseHoverIcon(iconId) {
  const icon = document.getElementById(iconId);
  const title = document.getElementById("title");
  const blueImage = document.getElementById("blue-image");
  icon.style.transform = "scale(1.1)";
  if (iconId === "vue-icon") {
    const vueLight = document.getElementById("vue-light");
    vueLight.style.boxShadow = `inset -30px -30px 30px -20px ${vueColor}`;
    title.style.color = vueColor;
    blueImage.style.width = "0%";
  } else {
    const reactLight = document.getElementById("react-light");
    reactLight.style.boxShadow = `inset 30px -30px 30px -20px ${reactColor}`;
    title.style.color = reactColor;
    blueImage.style.width = "100%";
  }
}

function mouseLeaveIcon() {
  const vueIcon = document.getElementById("vue-icon");
  const reactIcon = document.getElementById("react-icon");
  const vueLight = document.getElementById("vue-light");
  const reactLight = document.getElementById("react-light");
  const title = document.getElementById("title");
  const blueImage = document.getElementById("blue-image");
  vueIcon.style.transform = "scale(1)";
  reactIcon.style.transform = "scale(1)";
  vueLight.style.boxShadow = `inset -20px -20px 30px -20px ${vueColor}`;
  reactLight.style.boxShadow = `inset 20px -20px 30px -20px ${reactColor}`;
  title.style.color = "transparent";
  blueImage.style.width = "50%";
}
