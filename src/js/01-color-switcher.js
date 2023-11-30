const body = document.querySelector('body');
const buttonOn = body.querySelector('button[data-start]');
const buttonOff = body.querySelector('button[data-stop]');
const attributePresent = buttonOff.hasAttribute('disabled');
let changeResult = false;
let intervalId;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
};
// ?
function changeBackgroundColor() {
  return new Promise((resolve,reject) => {
    if (!changeResult) {
         console.log("статус кнопки Start",changeResult);
     intervalId = setInterval(() => {
      body.style.backgroundColor = getRandomHexColor();
      resolve();
    }, 1000);
    } else {
      reject('error, the color changes')
    }

  });
};
buttonOn.addEventListener('click', randomColor);
function randomColor() {
  changeResult = false;
    changeBackgroundColor()
        .then(() => {
            buttonOn.setAttribute('disabled', true);
        })
        .catch((error) => {
            console.error(error);
        })
};

buttonOff.addEventListener('click', () => {
  changeResult = true;
  clearInterval(intervalId);
  buttonOn.removeAttribute('disabled');
  body.style.backgroundColor ="";
  console.log("статус кнопки Stop",changeResult);

})
