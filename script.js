$('#currentDay').text(moment().format('dddd MMMM Do YYYY'));

$(document).ready(function () {

    var currentHour = parseInt(moment().format('HH'));

    var time9AM = 9;
    var time10AM = 10;
    var time11AM = 11;
    var time12PM = 12;
    var time1PM = 13;
    var time2PM = 14;
    var time3PM = 15;
    var time4PM = 16;
    var time5PM = 17;


    if (time9AM < currentHour) {
        document.getElementById("time9AM").style.backgroundColor = "lightgrey";
    } else if (time9AM > currentHour) {
        document.getElementById("time9AM").style.backgroundColor = "green";
    } else {
        document.getElementById("time9AM").style.backgroundColor = "red";
    }

    if (time10AM < currentHour) {
        document.getElementById("time10AM").style.backgroundColor = "lightgrey";
    } else if (time10AM > currentHour) {
        document.getElementById("time10AM").style.backgroundColor = "green";
    } else {
        document.getElementById("time10AM").style.backgroundColor = "red";
    }

    if (time11AM < currentHour) {
        document.getElementById("time11AM").style.backgroundColor = "lightgrey";
    } else if (time11AM > currentHour) {
        document.getElementById("time11AM").style.backgroundColor = "green";
    } else {
        document.getElementById("time11AM").style.backgroundColor = "red";
    }

    if (time12PM < currentHour) {
        document.getElementById("time12PM").style.backgroundColor = "lightgrey";
    } else if (time12PM > currentHour) {
        document.getElementById("time12PM").style.backgroundColor = "green";
    } else {
        document.getElementById("time12PM").style.backgroundColor = "red";
    }

    if (time1PM < currentHour) {
        document.getElementById("time1PM").style.backgroundColor = "lightgrey";
    } else if (time1PM > currentHour) {
        document.getElementById("time1PM").style.backgroundColor = "green";
    } else {
        document.getElementById("time1PM").style.backgroundColor = "red";
    }

    if (time2PM < currentHour) {
        document.getElementById("time2PM").style.backgroundColor = "lightgrey";
    } else if (time2PM > currentHour) {
        document.getElementById("time2PM").style.backgroundColor = "green";
    } else {
        document.getElementById("time2PM").style.backgroundColor = "red";
    }

    if (time3PM < currentHour) {
        document.getElementById("time3PM").style.backgroundColor = "lightgrey";
    } else if (time3PM > currentHour) {
        document.getElementById("time3PM").style.backgroundColor = "green";
    } else {
        document.getElementById("time3PM").style.backgroundColor = "red";
    }

    if (time4PM < currentHour) {
        document.getElementById("time4PM").style.backgroundColor = "lightgrey";
    } else if (time4PM > currentHour) {
        document.getElementById("time4PM").style.backgroundColor = "green";
    } else {
        document.getElementById("time4PM").style.backgroundColor = "red";
    }

    if (time5PM < currentHour) {
        document.getElementById("time5PM").style.backgroundColor = "lightgrey";
    } else if (time5PM > currentHour) {
        document.getElementById("time5PM").style.backgroundColor = "green";
    } else {
        document.getElementById("time5PM").style.backgroundColor = "red";
    }
});

$("button").on("click", function () {

    var value9AM = $("#time9AM").val();
    var value10AM = $("#time10AM").val();
    var value11AM = $("#time11AM").val();
    var value12PM = $("#time12PM").val();
    var value1PM = $("#time1PM").val();
    var value2PM = $("#time2PM").val();
    var value3PM = $("#time3PM").val();
    var value4PM = $("#time4PM").val();
    var value5PM = $("#time5PM").val();

    localStorage.setItem("9AM", (value9AM));
    localStorage.setItem("10AM", (value10AM));
    localStorage.setItem("11AM", (value11AM));
    localStorage.setItem("12PM", (value12PM));
    localStorage.setItem("1PM", (value1PM));
    localStorage.setItem("2PM", (value2PM));
    localStorage.setItem("3PM", (value3PM));
    localStorage.setItem("4PM", (value4PM));
    localStorage.setItem("5PM", (value5PM));

});

window.onload = function () {
    var localValue9AM = localStorage.getItem("9AM");
    var localValue10AM = localStorage.getItem("10AM");
    var localValue11AM = localStorage.getItem("11AM");
    var localValue12PM = localStorage.getItem("12PM");
    var localValue1PM = localStorage.getItem("1PM");
    var localValue2PM = localStorage.getItem("2PM");
    var localValue3PM = localStorage.getItem("3PM");
    var localValue4PM = localStorage.getItem("4PM");
    var localValue5PM = localStorage.getItem("5PM");


    if (localValue9AM !== null) $('#time9AM').val(localValue9AM);
    if (localValue9AM !== null) $('#time10AM').val(localValue10AM);
    if (localValue9AM !== null) $('#time11AM').val(localValue11AM);
    if (localValue9AM !== null) $('#time12PM').val(localValue12PM);
    if (localValue9AM !== null) $('#time1PM').val(localValue1PM);
    if (localValue9AM !== null) $('#time2PM').val(localValue2PM);
    if (localValue9AM !== null) $('#time3PM').val(localValue3PM);
    if (localValue9AM !== null) $('#time4PM').val(localValue4PM);
    if (localValue9AM !== null) $('#time5PM').val(localValue5PM);
};