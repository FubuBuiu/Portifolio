const vueColor = "#41b883";
const reactColor = "#149eca";

function clickAction(id) {
  if (id === "vue-button") {
    if (window.innerWidth <= 900) {
      const containerBlueImage = document.querySelector(
        ".container-blue-image"
      );
      const title = document.getElementById("title");

      title.style.color = vueColor;
      containerBlueImage.style.width = "0%";
      setTimeout(() => {
        window.location.href = "link-do-portfólio-vue";
      }, 700);
      return;
    }

    window.location.href = "link-do-portfólio-vue";
  } else {
    if (window.innerWidth <= 900) {
      const containerBlueImage = document.querySelector(
        ".container-blue-image"
      );
      const title = document.getElementById("title");

      title.style.color = reactColor;
      containerBlueImage.style.width = "100%";
      setTimeout(() => {
        window.location.href = "link-do-portfólio-react";
      }, 700);
      return;
    }
    window.location.href = "link-do-portfólio-react";
  }
}

function mouseHoverIcon(iconId) {
  if (window.innerWidth > 900) {
    const title = document.getElementById("title");
    const containerBlueImage = document.querySelector(".container-blue-image");

    if (iconId === "vue-icon") {
      const vueButton = document.getElementById("vue-button");
      const vueLight = document.getElementById("vue-light");
      vueButton.style.transform = "scale(1.1)";
      vueLight.style.boxShadow = `inset -30px -30px 30px -20px ${vueColor}`;
      title.style.color = vueColor;
      containerBlueImage.style.width = "0%";
    } else {
      const reactButton = document.getElementById("react-button");
      const reactLight = document.getElementById("react-light");
      reactButton.style.transform = "scale(1.1)";
      reactLight.style.boxShadow = `inset 30px -30px 30px -20px ${reactColor}`;
      title.style.color = reactColor;
      containerBlueImage.style.width = "100%";
    }
  }
}

function mouseLeaveIcon() {
  if (window.innerHeight > 900) {
    const vueButton = document.getElementById("vue-button");
    const reactButton = document.getElementById("react-button");
    const vueLight = document.getElementById("vue-light");
    const reactLight = document.getElementById("react-light");
    const title = document.getElementById("title");
    const containerBlueImage = document.querySelector(".container-blue-image");
    vueButton.style.transform = "scale(1)";
    reactButton.style.transform = "scale(1)";
    vueLight.style.boxShadow = `inset -20px -20px 30px -20px ${vueColor}`;
    reactLight.style.boxShadow = `inset 20px -20px 30px -20px ${reactColor}`;
    title.style.color = "transparent";
    containerBlueImage.style.width = "50%";
  }
}
