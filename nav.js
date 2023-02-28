const minLatency = 50;
const maxLatency = 300;

const corsAnywhereUrl = 'https://cors-anywhere.herokuapp.com/';
const targetUrl = 'https://www.google.com/';
function calculateLatency(proxy, url) {
    return new Promise((resolve, reject) => {
        const startTime = new Date().getTime();
        const xhr = new XMLHttpRequest();
        xhr.open('GET', proxy + url);
        xhr.onload = () => {
            const endTime = new Date().getTime();
            const latency = endTime - startTime;
            resolve(latency);
        };
        xhr.onerror = () => {
            reject(new Error('Ping request failed'));
        };
        xhr.send();
    });
}


setInterval(() => {
    calculateLatency(corsAnywhereUrl, targetUrl)
        .then(latency => {
            const cappedLatency = Math.max(Math.min(latency, maxLatency), minLatency);
            const percentage = (maxLatency - cappedLatency) / (maxLatency - minLatency) * 100;
            document.querySelector('#latency').style.height = `${percentage.toFixed(2)}%`;
        })
        .catch(error => {
            console.error(error);
        });
}, 5000);




function initBattery() {
    const batteryLiquid = document.querySelector('.battery__liquid'),
        batteryStatus = document.querySelector('.battery__status'),
        batteryPercentage = document.querySelector('.battery__percentage')

    navigator.getBattery().then((batt) => {
        updateBattery = () => {
            /* 1. We update the number level of the battery */
            let level = Math.floor(batt.level * 100)
            batteryPercentage.innerHTML = level + '%'

            /* 2. We update the background level of the battery */
            batteryLiquid.style.height = `${parseInt(batt.level * 100)}%`

            /* 3. We validate full battery, low battery and if it is charging or not */
            if (level == 100) { /* We validate if the battery is full */
                batteryStatus.innerHTML = `Full battery <i class="ri-battery-2-fill green-color"></i>`
                batteryLiquid.style.height = '103%' /* To hide the ellipse */
            }
            else if (level <= 20 & !batt.charging) { /* We validate if the battery is low */
                batteryStatus.innerHTML = `Low battery <i class="ri-plug-line animated-red"></i>`
            }
            else if (batt.charging) { /* We validate if the battery is charging */
                batteryStatus.innerHTML = `Charging... <i class="ri-flashlight-line animated-green"></i>`
            }
            else { /* If it's not loading, don't show anything. */
                batteryStatus.innerHTML = ''
            }

            /* 4. We change the colors of the battery and remove the other colors */
            if (level <= 20) {
                batteryLiquid.classList.add('gradient-color-red')
                batteryLiquid.classList.remove('gradient-color-orange', 'gradient-color-yellow', 'gradient-color-green')
            }
            else if (level <= 40) {
                batteryLiquid.classList.add('gradient-color-orange')
                batteryLiquid.classList.remove('gradient-color-red', 'gradient-color-yellow', 'gradient-color-green')
            }
            else if (level <= 80) {
                batteryLiquid.classList.add('gradient-color-yellow')
                batteryLiquid.classList.remove('gradient-color-red', 'gradient-color-orange', 'gradient-color-green')
            }
            else {
                batteryLiquid.classList.add('gradient-color-green')
                batteryLiquid.classList.remove('gradient-color-red', 'gradient-color-orange', 'gradient-color-yellow')
            }
        }
        updateBattery()

        /* 5. Battery status events */
        batt.addEventListener('chargingchange', () => { updateBattery() })
        batt.addEventListener('levelchange', () => { updateBattery() })
    })
}
/*=============== currentTime ===============*/
function currentTime() {
    var date = new Date();
    var hour = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();
    ValeurH = document.getElementById("heure");
    ValeurM = document.getElementById("minute");
    ValeurS = document.getElementById("seconde");
    hour = updateTime(hour);
    min = updateTime(min);
    sec = updateTime(sec);

    if (ValeurH.value == 1) {
        document.getElementById("clock").innerText =
            hour + ":";
        if (ValeurM.value == 1) {
            document.getElementById("clock").innerText =
                hour + " : " + min + " : ";
            if (ValeurS.value == 1) {
                document.getElementById("clock").innerText =
                    hour + " : " + min + " : " + sec;

            }
        }
    }


    var s = setTimeout(function () { currentTime() }, 1000);
}


function updateTime(s) {
    if (s < 10) {
        return "0" + s;
    }
    else {
        return s;
    }
}
currentTime();
var curday = function () {
    today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1; //As January is 0.
    var yyyy = today.getFullYear();
    ValeurJ = document.getElementById("jour");
    ValeurM = document.getElementById("mois");
    ValeurA = document.getElementById("annee");
    if (dd < 10) dd = '0' + dd;
    if (mm < 10) mm = '0' + mm;
    document.getElementById("date").innerHTML = (mm + '/' + dd + '/' + yyyy);

};
curday();
function showDiv(divId, element) {
    document.getElementById(divId).style.display = element.value == 1 ? 'block' : 'none';
}
//Vibration
function activate(){
  bool =  document.getElementById("hidden_vibrate");
if(bool.dataset.vibrate=="true"){
    bool.setAttribute("data-vibrate", "false");
    bool.innerHTML = '<span class="material-icons red-color vibre">phone_iphone</span>';
}else{
    bool.setAttribute("data-vibrate", "true");
    bool.innerHTML = '<span class="material-icons red-color vibre">vibration</span>';
}

}
// Parcourir la collection d'éléments et ajouter un événement "click" à chacun
const mesBoutons = document.getElementsByClassName("vibre");
for (let i = 0; i < mesBoutons.length; i++) {
  mesBoutons[i].addEventListener("click", function() {
    if(document.getElementById("hidden_vibrate").dataset.vibrate=='true'){
    window.navigator.vibrate(200);
  }else{
    return;
  }});
}



