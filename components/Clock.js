////////////////// chrono
const watch = document.querySelector('#watch');
let milliseconds = 0;
let timer;

function startWatch() {
  watch.classList.remove('paused');
  clearInterval(timer);
  timer = setInterval(()=>{
    milliseconds += 10;
    let dateTimer = new Date(milliseconds);
    watch.innerHTML =
        ('0'+dateTimer.getUTCHours()).slice(-2) + ':' +
        ('0'+dateTimer.getUTCMinutes()).slice(-2) + ':' +
        ('0'+dateTimer.getUTCSeconds()).slice(-2) + ':' +
        ('0'+dateTimer.getUTCMilliseconds()).slice(-3,-1);
  },10);
};

function pauseWatch() {
  watch.classList.add('paused');
  clearInterval(timer);
};

function resetWatch() {
  watch.classList.remove('paused');
  clearInterval(timer);
  milliseconds = 0;
  watch.innerHTML= '00:00:00:00';
};

document.addEventListener('click', (e) =>{
  const el = e.target;
  if (el.id === 'start') startWatch();
  if (el.id === 'pause') pauseWatch();
  if (el.id === 'reset') resetWatch();
});
//////////////////

/* grab necessary elements */
// grab the .form
const form = document.querySelector('.form');
// grab the .time-input
const timeInput = document.querySelector('.time-input');
// grab the select[name='format']
const format = document.querySelector("select[name='format']");
// grab the .set-btn
const setBtn = document.querySelector('.set-btn');
// grab the .countdown
const countDown = document.querySelector('.countdown');
// grab the .stop-btn 
const stopBtn = document.querySelector('.stop-btn');
// grab the .reset-btn
const resetBtn = document.querySelector('.reset-btn');
/* grab necessary elements ends */ 


/* global variables and constants*/
// variable to store setInterval
let countDownInterval;

// secondsLeft in millisecond
let secondsLeftms;
// end time
let endTime;
// .stop-btn clicked or not
let stopBtnClicked = false;
/* global variables ends */


/* .stop-btn click listener */
stopBtn.addEventListener('click', () => {
  // toggle the value of 'stopBtnClicked'
  stopBtnClicked = !stopBtnClicked;

  // if STOP button is clicked
  if (stopBtnClicked === true) {
    // change the text to 'PLAY'
    stopBtn.innerHTML = 'PLAY';
    // enable the .reset-btn
    resetBtn.disabled = false;
    // clear the setInterval() inorder to freeze the countdown timer
    clearInterval(countDownInterval);
  } else if (stopBtnClicked === false) {
    // if PLAY button is clicked
    // then change text to 'STOP'
    stopBtn.innerHTML = 'STOP';
    // disable the .reset-btn
    resetBtn.disabled = true;
    // then update endTime
    endTime = secondsLeftms + Date.now();
    // set a new setInterval()
    countDownInterval = setInterval(() => {
      setCountDown(endTime);
    }, 1000);
  }
});
/* .stop-btn click listener ends */


/* .reset-btn click listener */
resetBtn.addEventListener('click', () => {
  resetCountDown();
});
/* .reset-btn click listener ends */


/* .form submit listener */
form.addEventListener('submit', (event) => {
  // prevent the default page reloading
  event.preventDefault();

  // get the countdown time user typed
  let countDownTime = timeInput.value;

  // check if it is not zero
  if (countDownTime > 0) {
    // check which is the format, ie the <select> element's value
    if (format.value === 'hours') {
      // convert hours to milliseconds
      // 1 hrs = 3600000 ms (5 zeros)
      countDownTime = countDownTime * 3600000;
    } else if (format.value === 'minutes') {
      // 1 minute = 60000 ms (4 zeros)
      countDownTime = countDownTime * 60000;
    } else if (format.value === 'seconds') {
      // 1 seconds = 1000 ms (3 zeros)
      countDownTime = countDownTime * 1000;
    }

    // get current time in milliseconds
    const now = Date.now();
    // calculate the ending time
    endTime = now + countDownTime;

    // activate the countdown at first
    setCountDown(endTime);

    countDownInterval = setInterval(() => {
      setCountDown(endTime);
    }, 1000);

    // then disable the .set-btn
    setBtn.disabled = true;
    // then enable the .stop-btn
    stopBtn.disabled = false;
  }

});
/* .form submit listener ends */


/* setCountDown function */
const setCountDown = (endTime) => {
  // calculate how many milliseconds is left to reach endTime from now
  secondsLeftms = endTime - Date.now();
  // convert it to seconds
  const secondsLeft = Math.round(secondsLeftms / 1000);

  // calculate the hours, minutes and seconds
  let hours = Math.floor(secondsLeft / 3600);
  let minutes = Math.floor(secondsLeft / 60) - (hours * 60);
  let seconds = secondsLeft % 60;

  // adding an extra zero infront of digits if it is < 10
  if (hours < 10) {
    hours = `0${hours}`;
  }
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  if (seconds < 10) {
    seconds = `0${seconds}`;
  }

  // stopping the timer if the time is up 
  if (secondsLeft < 0) {
    resetCountDown();
    return;
  }

  // set the .countdown text
  countDown.innerHTML = `${hours} : ${minutes} : ${seconds}`;

};
/* setCountDown function ends */


/* resetCountDown function */
const resetCountDown = () => {
  // destroy the setInterval()
  clearInterval(countDownInterval);
  // reset the countdown text
  countDown.innerHTML = '00 : 00 : 00';
  // set stopBtnClicked = false
  stopBtnClicked = false;
  // change inner text to STOP
  stopBtn.innerHTML = 'STOP';

  // enable .set-btn
  setBtn.disabled = false;

  // disable .stop-btn and .reset-btn
  stopBtn.disabled = true;
  resetBtn.disabled = true;
};
/* resetCountDown function ends */








setInterval(function(){
  getId("do-time").innerHTML = formatTime();
},1000);

function formatTime() {

  var d = new Date(),
      minutes = d.getMinutes().toString().length == 1 ? '0'+d.getMinutes() : d.getMinutes(),
      hours = d.getHours().toString().length == 1 ? '0'+d.getHours() : d.getHours(),
      ampm = d.getHours() >= 12 ? 'pm' : 'am',
      months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  return '<h2>'+hours+'<span>:'+minutes+'</span></h2><small>'+ampm+'</small><h3>'+days[d.getDay()]+'<span>'+months[d.getMonth()]+' '+d.getDate()+'</span>'+d.getFullYear()+'</h3>';
}

var Cal = function(divId) {

  this.divId = divId;

  this.DaysOfWeek = [ 'Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa' ];

  this.Months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ];

  var d = new Date();

  this.currMonth = d.getMonth();
  this.currYear = d.getFullYear();
  this.currDate = d.getDate();
  this.currD = d.getDay();

};

Cal.prototype.nextMonth = function() {
  if ( this.currMonth == 11 ) {
    this.currMonth = 0;
    this.currYear = this.currYear + 1;
  }
  else {
    this.currMonth = this.currMonth + 1;
  }
  this.showcurr();
};

Cal.prototype.previousMonth = function() {
  if ( this.currMonth == 0 ) {
    this.currMonth = 11;
    this.currYear = this.currYear - 1;
  }
  else {
    this.currMonth = this.currMonth - 1;
  }
  this.showcurr();
};

Cal.prototype.showcurr = function() {
  this.showMonth(this.currYear, this.currMonth);
};

Cal.prototype.showMonth = function(y, m) {

  var chk = new Date();
  var chkY = chk.getFullYear();
  var chkM = chk.getMonth();

  var d = new Date()
  , firstDayOfMonth = new Date(y, m, 1).getDay()
  , lastDateOfMonth =  new Date(y, m+1, 0).getDate()
  , lastDayOfLastMonth = m == 0 ? new Date(y-1, 11, 0).getDate() : new Date(y, m, 0).getDate();


  var html = '<table>';

  html += '<thead><tr>';
  html += '<td colspan="7">' + this.Months[m] + ' ' + y + '</td>';
  html += '</tr></thead>';


  html += '<tr class="days">';
  for(var i=0; i < this.DaysOfWeek.length;i++) {
    if ( chkY == this.currYear && chkM == this.currMonth && i == this.currD ) {
      html += '<td class="today">' + this.DaysOfWeek[i] + '</td>';
    } else {
      html += '<td>' + this.DaysOfWeek[i] + '</td>';
    }
  }
  html += '</tr>';

  var i=1;
  do {

    var dow = new Date(y, m, i).getDay();

    if ( dow == 0 ) {
      html += '<tr>';
    }
    else if ( i == 1 ) {
      html += '<tr>';
      var k = lastDayOfLastMonth - firstDayOfMonth+1;
      for(var j=0; j < firstDayOfMonth; j++) {
        html += '<td class="not-current">' + k + '</td>';
        k++;
      }
    }

    if (chkY == this.currYear && chkM == this.currMonth && i == this.currDate) {
      html += '<td class="today">' + i + '</td>';
    } else {
      html += '<td class="normal">' + i + '</td>';
    }
    if ( dow == 6 ) {
      html += '</tr>';
    }
    else if ( i == lastDateOfMonth ) {
      var k=1;
      for(dow; dow < 6; dow++) {
        html += '<td class="not-current">' + k + '</td>';
        k++;
      }
    }

    i++;
  }while(i <= lastDateOfMonth);

  html += '</table>';

  document.getElementById(this.divId).innerHTML = html;
};

window.onload = function() {

  var c = new Cal("divCal");			
  c.showcurr();

  getId('btnNext').onclick = function() {
    c.nextMonth();
  };
  getId('btnPrev').onclick = function() {
    c.previousMonth();
  };
}

function getId(id) {
  return document.getElementById(id);
}
function toogle(that){
  let item = document.querySelectorAll(".item");
  for (var i of item) {
      that.parentElement.classList.toggle("active");
  }
  }
