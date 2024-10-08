// Functionality for timmer
let days = document.getElementById("days");
let hours = document.getElementById("hours");
let min = document.getElementById("min");
let sec = document.getElementById("sec");


let timmer = () => {
    let offerDate = new Date("30 December 2024");
    let currentDate = new Date();
    let myDate = offerDate - currentDate;


    let Days = Math.floor(myDate / 1000 / 60 / 60 / 24);
    let Hours = Math.floor(myDate / 1000 / 60 / 60) % 24;
    let Min = Math.floor(myDate / 1000 / 60) % 60;
    let Sec = Math.floor(myDate / 1000) % 60;

    days.innerHTML = Days;
    hours.innerHTML = Hours;
    min.innerHTML = Min;
    sec.innerHTML = Sec;
}

timmer()

setInterval(timmer, 1000)