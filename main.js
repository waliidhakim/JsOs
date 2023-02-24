console.log("Hello");

const months = ["Jan.", "Feb.", "Mar.", "Apr.", "May", "June", "July", "Aug", "Sept.", "Oct", "Nov", "Dec."];

function updateTime() {
    var date = new Date();

    var month = months[date.getMonth()];
    var day = date.getDate();
    var hours = date.getHours();
    var minutes = date.getMinutes();

    document.getElementById("date-time").innerHTML = month.concat(" ", day, " - ", hours, ":", minutes);
}

setInterval(updateTime, 1000);

/*************************Batterie details****************************************/

const navBarMenu = document.getElementById("nav-bar-menu");
const details = document.getElementById("details");

// document.addEventListener("click", function (e) {
//     if (e.target != details & details.style.display == "block") {
//         details.setAttribute("style", "display:none");
//     }
// })


details.addEventListener("click", function (e) {
    if (e.target != "details") {
        return;
    }
})


navBarMenu.addEventListener("click", () => {
    details.style.display = "block";
})













