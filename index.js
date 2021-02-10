const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const startBtnRef = document.querySelector('button[data-action="start"]');
const stopBtnRef = document.querySelector('button[data-action="stop"]');
const bodyRef = document.querySelector('body');

startBtnRef.addEventListener('click', startSwitch);
stopBtnRef.addEventListener('click', stopSwitch);

let timerId = null;

function startSwitch() {
  startBtnRef.disabled = true;
  timerId = setInterval(() => {
    bgcSwitch();
  }, 1000);
}

function stopSwitch() {
  clearInterval(timerId);
  startBtnRef.disabled = false;
}

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

function bgcSwitch() {
  bodyRef.style.backgroundColor =
    colors[randomIntegerFromInterval(0, colors.length - 1)];
}
