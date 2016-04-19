let currentTime = null;
let timer = null;
const SECOND = 1000;

const tick = () => {

  currentTime--;

  self.postMessage({
    command: 'TICK',
    time: currentTime,
  });

  if(currentTime === 0) {
    stopTimer();
    self.postMessage({
      command: 'COMPLETE',
    });
  }
};

const startTimer = (time) => {
  currentTime = time;

  timer = setInterval(tick, SECOND);
};

const stopTimer = () => {
  timer = clearInterval(timer);
};

self.addEventListener('message', (e) => {
  switch (e.data.command) {
    case 'START':
      startTimer(e.data.time);
      break;
    case 'STOP':
      stopTimer();
      break;
    default:
      return false;
  }
});
