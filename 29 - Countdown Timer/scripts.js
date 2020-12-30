let countdown;
const timerDisplay = document.querySelector('.display__time-left');
const endTime = document.querySelector('.display__end-time');
const buttons = document.querySelectorAll('[data-time]');

function timer(seconds) {
  // clear any existing timers
  clearInterval(countdown);

  const now = Date.now();
  const then = now + seconds*1000;
  displayTimeLeft(seconds);
  displayEndTime(then);
  
  // display the amount of time left every single second
  countdown = setInterval(() => {
    // how much time is left on clock
    const secondsLeft = Math.round((then - Date.now())/1000);
    // check to stop at 0
    if(secondsLeft < 0) {
      clearInterval(countdown);
      return;
    }
    // display it
    displayTimeLeft(secondsLeft);
  },1000)
}

function displayTimeLeft(seconds){
  const min = Math.floor(seconds/60);
  const remainderSeconds = seconds % 60;
  const display = `${min}:${remainderSeconds <10 ? '0' : ''}${remainderSeconds}`
  timerDisplay.innerText = display;
  document.title = display;
}

function displayEndTime(timestamp){
  const end = new Date(timestamp);
  const hour = end.getHours();
  const min = end.getMinutes();
  endTime.innerText = `Be back at ${hour < 10 ?'0':''}${hour}:${min < 10 ? '0':''}${min}`
}

function startTimer(){
  const seconds = parseInt(this.dataset.time);
  timer(seconds);
}

buttons.forEach(button => button.addEventListener('click', startTimer));

document.customForm.addEventListener('submit', function(e){
  // stop the page from reloading
  e.preventDefault();
  const mins = this.minutes.value;
  timer(mins*60);
  this.reset();
});