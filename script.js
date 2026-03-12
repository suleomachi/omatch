/* COUNTDOWN TIMER */

var countDownDate = new Date().getTime() + (6 * 60 * 60 * 1000);

setInterval(function () {

    var now = new Date().getTime();

    var distance = countDownDate - now;

    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML =
        hours + "h " + minutes + "m " + seconds + "s";

}, 1000);



/* LIVE ENROLLMENT POPUP */

var names = [
    "Emeka from Lagos",
    "Fatima from Abuja",
    "David from Port Harcourt",
    "Blessing from Ibadan",
    "Chinedu from Enugu",
    "Samuel from Benin"
];

function showPopup() {

    var popup = document.getElementById("livePopup");

    var name = names[Math.floor(Math.random() * names.length)];

    popup.innerHTML = "✅ " + name + " just enrolled";

    popup.style.display = "block";

    setTimeout(function () {

        popup.style.display = "none";

    }, 4000);

}

setInterval(showPopup, 8000);



/* SHOW WHATSAPP POPUP */

setTimeout(function () {

    document.getElementById("whatsappBox").style.display = "block";

}, 6000);



/* SEND MESSAGE TO WHATSAPP */

function sendToWhatsApp() {

    var name = document.getElementById("studentName").value;

    if (name === "") {
        alert("Please enter your name");
        return;
    }

    var message = "Hello, my name is " + name +
        ". I want to enroll for the Data Analysis course.";

    var phone = "2347052351742";

    var url = "https://wa.me/" + phone + "?text=" + encodeURIComponent(message);

    window.open(url, "_blank");

}