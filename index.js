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

let timerId = null;
let isActive = false;

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const bgcSwitch = () => {
  bodyRef.style.backgroundColor =
    colors[randomIntegerFromInterval(0, colors.length - 1)];
};

startBtnRef.addEventListener('click', () => {
  startBtnRef.disabled = true;
  isActive = true;
  timerId = setInterval(() => {
    bgcSwitch();
  }, 1000);
});

stopBtnRef.addEventListener('click', () => {
  clearInterval(timerId);
  isActive = false;
  timerId = null;
  startBtnRef.disabled = false;
});
