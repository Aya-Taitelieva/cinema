const container = document.querySelector(".container");

const res = fetch("https://www.omdbapi.com/?apikey=b6003d8a&s=All")
  .then((res) => res.json())
  .then((data) => {
    const response = data.Search;
    response.forEach((elem) => {
      //   console.log(elem);
      container.innerHTML += `
        <div>
        <img src="${elem.Poster}" alt="">
        <h3>${elem.Title}</h3>
        <span>${elem.Year}</span>
    </div>
      `;
    });
  });
