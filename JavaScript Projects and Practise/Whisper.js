var formdata = new FormData();
// var formdata = [];
formdata.append(
  "audio_file",
  fileInput.files[0],
  "/C:/Users/hp/Desktop/abuzar.mp3"
);

console.log(formdata);
// var requestOptions = {
//   method: "POST",
//   body: formdata,
//   redirect: "follow",
// };
// fetch("https://whisper.lablab.ai/asr", requestOptions)
//   .then((response) => response.text())
//   .then((result) => console.log(result))
//   .catch((error) => console.log("error", error));
