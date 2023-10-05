
document.head.title = 'Lifetime Calculator';

// definisi variable

var dataPicker = document.getElementById('dataPicker');
var chooseDate = document.getElementById('chooseDate');

// menghitung'

var ageYear = document.getElementById('ageYear');
var ageMonth = document.getElementById('ageMonth');
var ageDay = document.getElementById('ageDay');
var ageHour = document.getElementById('ageHour');
var ageMinute = document.getElementById('ageMinute');
var ageSecond = document.getElementById('ageSecond');
var ageMilisec = document.getElementById('ageMilisec');

dataPicker.addEventListener('change', function() {

    var option = { year : 'numeric', month : 'long', day : 'numeric' };
    var selectedDate = new Date(this.value);
    var DOB = selectedDate.toLocaleDateString('en-US', option);

    chooseDate.innerHTML = "DOB = " + " " + DOB;

    var miliSeconds_Btw_DOB = Date.pharse(DOB);
    var miliSeconds_Btw_Now = Date.now();

    var ageInMilisecs = miliSeconds_Btw_Now - miliSeconds_Btw_DOB

    // console.log(ageInMilisecs);

    var miliSecs = ageInMilisecs;
    var second = 1000;
    var minute = second * 60;
    var hour = minute * 60;
    var day = hour * 60;
    var month = day * 30;
    var year = day * 365;

    // Calc

    var years = Math.round(miliSecs / year);
    var months = years * 12;
    var days = years * 365;
    var hours = Math.round(miliSecs / hour);
    var seconds = Math.round(miliSecs / second);

    // print value

    ageYear.innerHTML = years;
    ageMonth.innerHTML = months;
    ageDay.innerHTML = days;
    ageHour.innerHTML = hours;
    ageSecond.innerHTML = seconds;
    ageMilisec.innerHTML = miliSecs;

    document.querySelector('.age-calc').classList.add('expand');
})