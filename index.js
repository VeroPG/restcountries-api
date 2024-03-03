const cardTemplate = function (image, country) {
  return `<div class="card">
              <img id="flag-image" src=${image} alt="flag" />
              <h1 class="center">${country}</h1>
            </div>`;
};

const countriesNode = document.getElementById("countries");

fetch("https://restcountries.com/v3.1/all")
  .then((res) => res.json())
  .then((countries) => {
    let cards = "";

    for (let i = 0; i < countries.length; i++) {
      cards += cardTemplate(countries[i].flags.png, countries[i].name.common);
    }
    countriesNode.innerHTML = cards;
  });
