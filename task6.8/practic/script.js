const trafficLightEl = document.querySelector('#trafficLight1', '#trafficLight2', '#trafficLight3');

function makeGreen() {
    trafficLightEl.style.background = ('green');
    trafficLightEl.addEventListener('click', makeGreen);
    trafficLightEl.removeEventListener('click', makeYellow);
    trafficLightEl.removeEventListener('click', makeRed);

}


function makeYellow() {
    trafficLightEl.style.background = ('yellow');
    trafficLightEl.addEventListener('click', makeYellow);
    trafficLightEl.removeEventListener('click', makeGreen);
    trafficLightEl.removeEventListener('click', makeRed);
}


function makeRed() {
    trafficLightEl.style.background = ('red');
    trafficLightEl.addEventListener('click', makeRed);
    trafficLightEl.removeEventListener('click', makeGreen);
    trafficLightEl.removeEventListener('click', makeYellow);

}



trafficLightEl.addEventListener('click', makeGreen);
