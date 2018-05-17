//  GOOGLE MAP

function initMap() {
    var uluru = { lat: -17.566126, lng: -149.608609 };
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 10,
        center: uluru
    });
    var marker = new google.maps.Marker({
        position: uluru,
        map: map
    });
}

// COMING SOON COUNT

// Set the date we're counting down to
var countDownDate = new Date("July 14, 2018 12:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function () {

    // Get todays date and time
    var now = new Date().getTime();

    // Distance between count down and now
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("commingsoon").innerHTML = days + "d " + hours + "h "
        + minutes + "m " + seconds + "s ";

    // count down finish
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("commingsoon").innerHTML = "EXPIRED";
    }
}, 1000);
