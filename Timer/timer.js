(function() {
const template = `
  <div class="timer-main-element">
    You have this page opened for
    <span class="timer-value">0</span> seconds...
  </div>
  <br />
`;

let app = document.getElementById('TimerApp');
app.innerHTML = template;
let value = 0;
let timer = document.querySelector('.timer-value');
setInterval(function() {
  value += 1;
  timer.innerText = value;
}, 1000)})()
