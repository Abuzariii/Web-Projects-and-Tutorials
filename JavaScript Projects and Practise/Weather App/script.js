const api = {
  key: "26911941c61f42739f8f0d496882f910",
  base: "https://newsapi.org/v2/top-headlines?country=us&",
};

let search = document.getElementById("search");

document.getElementById("btn").addEventListener("click", function () {
  console.log(search.value);
  fetch(`${api.base}category=${search.value}&apiKey=${api.key}`)
    .then((resolve) => {
      return resolve.json();
    })
    .then((data) => {
      console.log(data.articles);

      let a = document.getElementById("temp");
      let html = `
      <h5><div class="description" id="description"><b>Headline:</b> ${data.articles[0].title}</div></h5>
      <h5><div class="source" id="source"><b>Source:</b> ${data.articles[0].source.name}</div></h5>
      <h5><div class="source" id="source"><b>Author:</b> ${data.articles[0].author}</div></h5>
      <h5><div class="url" id="url">
        <a href="${data.articles[0].url}" target="_blank" >Read More Here...</a>
      </div></h5>
      <img src="${data.articles[0].urlToImage}" alt="" width="300" height="auto"> <br> <hr>

      <h5><div class="description" id="description"><b>Headline:</b> ${data.articles[1].title}</div></h5>
      <h5><div class="source" id="source"><b>Source:</b> ${data.articles[1].source.name}</div></h5>
      <h5><div class="source" id="source"><b>Author:</b> ${data.articles[1].author}</div></h5>
      <h5><div class="url" id="url">
        <a href="${data.articles[1].url}" target="_blank" >Read More Here...</a>
      </div></h5>
      <img src="${data.articles[1].urlToImage}" alt="" width="300" height="auto"> <br><hr>

      <h5><div class="description" id="description"><b>Headline:</b> ${data.articles[2].title}</div></h5>
      <h5><div class="source" id="source"><b>Source:</b> ${data.articles[2].source.name}</div></h5>
      <h5><div class="source" id="source"><b>Author:</b> ${data.articles[2].author}</div></h5>
      <h5><div class="url" id="url">
        <a href="${data.articles[2].url}" target="_blank" >Read More Here...</a>
      </div></h5>
      <img src="${data.articles[2].urlToImage}" alt="" width="300" height="auto"><br><hr>

      <h5><div class="description" id="description"><b>Headline:</b> ${data.articles[3].title}</div></h5>
      <h5><div class="source" id="source"><b>Source:</b> ${data.articles[3].source.name}</div></h5>
      <h5><div class="source" id="source"><b>Author:</b> ${data.articles[3].author}</div></h5>
      <h5><div class="url" id="url">
        <a href="${data.articles[3].url}" target="_blank" >Read More Here...</a>
      </div></h5>
      <img src="${data.articles[3].urlToImage}" alt="" width="300" height="auto"> <br><hr>

      <h5><div class="description" id="description"><b>Headline:</b> ${data.articles[4].title}</div></h5>
      <h5><div class="source" id="source"><b>Source:</b> ${data.articles[4].source.name}</div></h5>
      <h5><div class="source" id="source"><b>Author:</b> ${data.articles[4].author}</div></h5>
      <h5><div class="url" id="url">
        <a href="${data.articles[4].url}" target="_blank" >Read More Here...</a>
      </div></h5>
      <img src="${data.articles[4].urlToImage}" alt="" width="300" height="auto"> <br><hr>

      <h5><div class="description" id="description"><b>Headline:</b> ${data.articles[5].title}</div></h5>
      <h5><div class="source" id="source"><b>Source:</b> ${data.articles[5].source.name}</div></h5>
      <h5><div class="source" id="source"><b>Author:</b> ${data.articles[5].author}</div></h5>
      <h5><div class="url" id="url">
        <a href="${data.articles[5].url}" target="_blank" >Read More Here...</a>
      </div></h5>
      <img src="${data.articles[5].urlToImage}" alt="" width="300" height="auto"> <br><hr>

      <h5><div class="description" id="description"><b>Headline:</b> ${data.articles[6].title}</div></h5>
      <h5><div class="source" id="source"><b>Source:</b> ${data.articles[6].source.name}</div></h5>
      <h5><div class="source" id="source"><b>Author:</b> ${data.articles[6].author}</div></h5>
      <h5><div class="url" id="url">
        <a href="${data.articles[6].url}" target="_blank" >Read More Here...</a>
      </div></h5>
      <img src="${data.articles[6].urlToImage}" alt="" width="300" height="auto"> <br><hr>

      <h5><div class="description" id="description"><b>Headline:</b> ${data.articles[7].title}</div></h5>
      <h5><div class="source" id="source"><b>Source:</b> ${data.articles[7].source.name}</div></h5>
      <h5><div class="source" id="source"><b>Author:</b> ${data.articles[7].author}</div></h5>
      <h5><div class="url" id="url">
        <a href="${data.articles[7].url}" target="_blank" >Read More Here...</a>
      </div></h5>
      <img src="${data.articles[7].urlToImage}" alt="" width="300" height="auto"> <br><hr>

      <h5><div class="description" id="description"><b>Headline:</b> ${data.articles[8].title}</div></h5>
      <h5><div class="source" id="source"><b>Source:</b> ${data.articles[8].source.name}</div></h5>
      <h5><div class="source" id="source"><b>Author:</b> ${data.articles[8].author}</div></h5>
      <h5><div class="url" id="url">
        <a href="${data.articles[8].url}" target="_blank" >Read More Here...</a>
      </div></h5>
      <img src="${data.articles[8].urlToImage}" alt="" width="300" height="auto"> <br><hr>

      <h5><div class="description" id="description"><b>Headline:</b> ${data.articles[9].title}</div></h5>
      <h5><div class="source" id="source"><b>Source:</b> ${data.articles[9].source.name}</div></h5>
      <h5><div class="source" id="source"><b>Author:</b> ${data.articles[9].author}</div></h5>
      <h5><div class="url" id="url">
        <a href="${data.articles[9].url}" target="_blank" >Read More Here...</a>
      </div></h5>
      <img src="${data.articles[9].urlToImage}" alt="" width="300" height="auto"> <br><hr>

      <h5><div class="description" id="description"><b>Headline:</b> ${data.articles[10].title}</div></h5>
      <h5><div class="source" id="source"><b>Source:</b> ${data.articles[10].source.name}</div></h5>
      <h5><div class="source" id="source"><b>Author:</b> ${data.articles[10].author}</div></h5>
      <h5><div class="url" id="url">
        <a href="${data.articles[10].url}" target="_blank" >Read More Here...</a>
      </div></h5>
      <img src="${data.articles[10].urlToImage}" alt="" width="300" height="auto">
      `;
      a.innerHTML += html;
    });
    search.value= "";
});
