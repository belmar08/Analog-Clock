/* Select clock hands */
const secondHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

/* Update clock hands based on current time*/
function setDate() {
  const now = new Date();

  /* Calculate second hand rotation */
  const seconds = now.getSeconds();
  const secondsDegrees = ((seconds / 60) * 360) + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  /* Calculate minute hand rotation */
  const mins = now.getMinutes();
  const minsDegrees = ((mins / 60) * 360) + ((seconds/60)*6) + 90;
  minsHand.style.transform = `rotate(${minsDegrees}deg)`;

  /* Calculate hour hand rotation */
  const hour = now.getHours();
  const hourDegrees = ((hour / 12) * 360) + ((mins/60)*30) + 90;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

/* Update every second */
setInterval(setDate, 1000); /* update every 1000 miliseconds */

/* Initialize clock position */
setDate();
