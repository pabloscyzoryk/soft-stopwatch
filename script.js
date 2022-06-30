const startBtn = document.querySelector('#start');
const stopBtn = document.querySelector('#stop');
const splitBtn = document.querySelector('#split');
const restartBtn = document.querySelector('#restart');
const result = document.querySelector('main');
const splits = document.querySelector('ol');
const darkMode = document.querySelector('.fa-solid');
const body = document.querySelector('body');
let isActive = false;
let seconds = 0;
let minutes = 0;
let hours = 0;
let resultSeconds;
let resultMinuts;
let resultHours;
let isDark = false;

const restartStopWatch = () => {
    seconds = 0;
    minutes = 0
    hours = 0;
    finalSeconds = 0;
    finalMinutes = 0;
    finalHours = 0;
    result.textContent = '00:00:00'
}

const startStopWatch = () => {
const stopWatch = setInterval(() => {
    seconds += 1;
    if(seconds >= 60) {
        seconds = 0;
        minutes += 1;
    }
    if(minutes >= 60) {
        minutes = 0;
        hours += 1;
    }
    if(seconds < 10) {
        finalSeconds = `0${seconds}`;
    }
    else {
        finalSeconds = `${seconds}`;
    }
    if(minutes < 10) {
        finalMinutes = `0${minutes}`;
    }
    else {
        finalMinutes = `${minutes}`;
    }
    if(hours < 10) {
        finalHours = `0${hours}`;
    }
    else {
        finalHours = `${hours}`;
    }
    if(hours == 99 && minutes == 99 && seconds == 99) {
        restartStopWatch();
    }
    const template = `${finalHours}:${finalMinutes}:${finalSeconds}`;
    result.textContent = template;
    console.log(seconds, minutes, hours);
    if(isActive != true) {
        clearTimeout(stopWatch);
    }
    
},1000);
}

const createSplit = () => {
   
    const split = document.createElement('li');
    split.addEventListener('click', e => {
        if(e.target.classList.contains('fa-solid')) {
        console.log('hello, i love you <3');
        e.target.parentElement.remove();
        }
    })
    split.innerHTML = `${result.textContent} <i class="fa-solid fa-trash new"></i>`;
    splits.appendChild(split);

}

const stopStopWatch = () => {
    isActive = false;
}

startBtn.addEventListener('click', () => {
    if(isActive == false) {
        startStopWatch();
    }
    isActive = true;
});

stopBtn.addEventListener('click', () => {
    stopStopWatch();
});

restartBtn.addEventListener('click', () => {
    restartStopWatch();
});

splitBtn.addEventListener('click', () => {
    createSplit();
});

darkMode.addEventListener('click', () => {
    if(isDark === false) {
        body.classList.toggle('body-dark');
        darkMode.classList.toggle('icon-dark');
        darkMode.classList.add('fa-sun');
        darkMode.classList.remove('fa-moon');
        isDark = true;
    }
    else {
        body.classList.toggle('body-dark');
        darkMode.classList.toggle('icon-dark');
        darkMode.classList.add('fa-moon');
        darkMode.classList.remove('fa-sun');
        isDark = false;
    }
});