// function to calculate speed demerit points
function calculateDemeritPoints() {
    var speedLimit = 70; var kmPerDemeritPoint = 5;
    var speedInput = document.getElementById("speedInput");
    var speed = parseInt(speedInput.value);
    var result = document.getElementById("result");
    if (speed <= speedLimit) { result.innerHTML = "Ok";}
    else { var demeritPoints = Math.floor((speed - speedLimit) / kmPerDemeritPoint);
    if (demeritPoints > 12) { result.innerHTML = "License suspended"; }
    else { result.innerHTML = "Points: " + demeritPoints; } }
}