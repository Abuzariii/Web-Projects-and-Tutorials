let a;
let date;
let time;
let dateFeatures = {
  weekday: "long",
  day: "numeric",
  month: "long",
  year: "numeric",
};

setInterval(() => {
  a = new Date();
  date = a.toLocaleDateString(undefined, dateFeatures);
  time = a.getHours() + ":" + a.getMinutes() + ":" + a.getSeconds();
  document.getElementById("timeSpan").innerHTML = time + "<hr> on " + date;
  console.log(time);
}, 1000);
