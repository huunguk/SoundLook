const range = document.querySelector("#range");
const slideContainerUl = document.querySelector(".slidecontainer ul");

function handleSlide(e) {
  const value = e.target.value;
  console.log(value);
  slideContainerUl.style.marginLeft = `${value * -96}px`;
}

function init () {
  range.addEventListener('change', handleSlide);
}

init();