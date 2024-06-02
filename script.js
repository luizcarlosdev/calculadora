const body = document.body;
const radioName = Array.from(document.querySelectorAll("input[type='radio"));
const ballSwitcher = document.querySelector(".ball-switcher");
const visor = document.querySelector(".calculator_header_visor");
const visorValue = document.querySelector(".visor_value");
const btnNumber = Array.from(document.querySelectorAll(".btn_number"));
const btnOperation = Array.from(document.querySelectorAll(".btn_operation"));
const btnResult = document.querySelector(".btn_result");
const btnReset = document.querySelector(".btn_reset");
const btnDel = document.querySelector(".btn_del");

body.setAttribute("class", "theme1");

radioName[0].addEventListener("change", () => {
  ballSwitcher.style.left = "0px";
  body.setAttribute("class", "theme1");
});

radioName[1].addEventListener("change", () => {
  ballSwitcher.style.left = "30px";
  body.setAttribute("class", "theme2");
});

radioName[2].addEventListener("change", () => {
  ballSwitcher.style.left = "53px";
  body.setAttribute("class", "theme3");
});

if (radioName[0].checked) {
  body.setAttribute("class", "theme1");
}

// let currentVisorNumberValue = 0;
// visorValue.textContent = currentVisorNumberValue;

visor.textContent = "0";

let isAvalibleChar = false;

btnNumber.forEach((element) => {
  element.addEventListener("click", () => {
    if (visor.textContent === "0") {
      visor.textContent = "";
    }
    // currentVisorNumberValue = "";
    isAvalibleChar = true;
    const value = element.value;
    visor.textContent += value;
  });
});

btnOperation.forEach((element) => {
  element.addEventListener("click", () => {
    if (isAvalibleChar) {
      const value = element.value;
      visor.textContent += value;
      isAvalibleChar = false;
    }
  });
});

btnResult.addEventListener("click", () => {
  visor.textContent = eval(visor.textContent);
});

btnReset.addEventListener("click", () => {
  visor.textContent = 0;
  visorValue.textContent = 0;
});

btnDel.addEventListener("click", () => {
  const visorElements = visor.textContent.split("");
  visorElements.pop();
  visor.textContent = visorElements.join("");
});
