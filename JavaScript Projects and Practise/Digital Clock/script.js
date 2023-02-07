function updateClock() {
  let clock = document.getElementById("clock");
  let am;
  let calender = document.getElementById("calender");

  let hours = new Date().getHours();
  if (hours > 12) {
    hours = hours - 12;
    am = "pm";
  } else {
    am = "am";
  }
  let mins = new Date().getMinutes();
  let secs = new Date().getSeconds();

  let month = new Date().getMonth();
  if (month == 0) {
    month = "January";
  } else if (month == 1) {
    month = "February";
  } else if (month == 2) {
    month = "March";
  } else if (month == 3) {
    month = "April";
  } else if (month == 4) {
    month = "May";
  } else if (month == 5) {
    month = "June";
  } else if (month == 6) {
    month = "July";
  } else if (month == 7) {
    month = "August";
  } else if (month == 8) {
    month = "September";
  } else if (month == 9) {
    month = "October";
  } else if (month == 10) {
    month = "November";
  } else if (month == 11) {
    month = "December";
  }

  let date = new Date().getDate();
  let year = new Date().getFullYear();

  clock.innerText = hours + ":" + mins + ":" + secs + " " + am;
  calender.innerText = month + " " + date + ", " + year;
}
