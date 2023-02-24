let second = 0;
let minute = 0;
let heure = 0;

let date = new Date();

setInterval(
    function () {
        date = new Date();
        second = date.getSeconds() * 6;
        minute = date.getMinutes() * 6;
        heure = date.getHours() * 30 + Math.round(minute / 12);
        document.getElementById("aiguille-seconde").style.transform = "rotate(" + second + "deg)";
        document.getElementById("aiguille-minute").style.transform = "rotate(" + minute + "deg)";
        document.getElementById("aiguille-heure").style.transform = "rotate(" + heure + "deg)";
    }, 1000
)