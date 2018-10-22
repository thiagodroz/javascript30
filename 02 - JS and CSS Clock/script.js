const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');
const sound = document.querySelector('.clock-sound');
const soundButton = document.querySelector('.sound-icon');

const date = new Date();
let seconds = date.getSeconds();
let minutes = date.getMinutes();
let hours = date.getHours();

const updateHands = () => {
  sound.currentTime = 0;
  sound.play();

  seconds += 1;

  if (seconds % 60 === 0) minutes += 1;
  if (minutes % 60 === 0) hours += 1;

  const secondsAngle = ((seconds / 60) * 360) + 90;
  const minutesAngle = ((minutes / 60) * 360) + 90;
  const hoursAngle = ((hours / 12) * 360) + 90;

  secondHand.style.transform = `rotate(${secondsAngle}deg)`;
  minuteHand.style.transform = `rotate(${minutesAngle}deg)`;
  hourHand.style.transform = `rotate(${hoursAngle}deg)`;
};

soundButton.addEventListener('click', (e) => {
  if (sound.muted) {
    e.target.classList.remove('muted');
    sound.muted = false;
  } else {
    e.target.classList.add('muted');
    sound.muted = true;
  }
});

updateHands();

setInterval(updateHands, 1000);
