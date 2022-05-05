// const timer = new CountdownTimer({
//   selector: '#timer-1',
//   targetDate: new Date('Jul 17, 2019'),
// });

const targetDate = new Date('Feb 24, 2022');

const pad = num => {
  if (num < 10) return '0' + num;
  else return num;
};

let timer = setInterval(() => {
  let now = new Date().getTime();
  // let now = Date.now(); // * альтернатива)
  let distance = targetDate - now;

  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let secs = Math.floor((distance % (1000 * 60)) / 1000);

  const timerNode = document.getElementById('timer-1');

  const daysNode = timerNode.querySelector('span[data-value="days"]');
  const hoursNode = timerNode.querySelector('span[data-value="hours"]');
  const minsNode = timerNode.querySelector('span[data-value="mins"]');
  const secsNode = timerNode.querySelector('span[data-value="secs"]');

  daysNode.textContent = pad(days);
  hoursNode.textContent = pad(hours);
  minsNode.textContent = pad(mins);
  secsNode.textContent = pad(secs);

  // timerNode.innerHTML = `days: ${days}, hours: ${hours}, mins: ${mins}, secs: ${secs}`;
}, 1000); // ? почему при изменении ms ничего не меняется? ))) и можно ли вообще тут менять скорость?

// timer();
