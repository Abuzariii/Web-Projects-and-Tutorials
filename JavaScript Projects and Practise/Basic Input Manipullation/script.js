const btn = document.getElementById("button");

btn.addEventListener("click", function (e) {
  e.preventDefault();
  let abuzar = document.getElementById("radio1");
  let shumaila = document.getElementById("radio2");
  let george = document.getElementById("radio3");
  let output = document.getElementById("output");
  console.log(output.innerText);
  if (abuzar.checked) {
    console.log("fuck off");
    output.innerText = abuzar.value;
  } else if (shumaila.checked) {
    output.innerText = shumaila.value;
  } else if (george.checked) {
    output.innerText = george.value;
  }
});
