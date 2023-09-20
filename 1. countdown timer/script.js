let newYears = "15 mart 2024";

let daysEl = document.querySelector("#days");
let hoursEl = document.querySelector("#hours");
let minsEl = document.querySelector("#mins");
let secondsEl = document.querySelector("#seconds");
function countDown() {
  const newYearsDate = new Date(newYears);

  const currDate = new Date().getTime();

  let distance = newYearsDate - currDate;

  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  daysEl.innerHTML = format(days);
  hoursEl.innerHTML = format(hours);
  minsEl.innerHTML = format(minutes);
  secondsEl.innerHTML = format(seconds);
}

function format(time) {
  return time < 10 ? `0${time}` : time;
}

countDown();

setInterval(countDown, 1000);
