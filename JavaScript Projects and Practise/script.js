let a;
let date;
let time;
let dateFeatures = {
  day: "numeric",
  month: "long",
  year: "numeric",
};
a = new Date();
date = a.toLocaleDateString(undefined, dateFeatures);
console.log(date);
