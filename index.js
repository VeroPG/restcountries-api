const cardTemplate = function (image, country) {
  return `<div class="card">
              <img id="flag-image" src=${image} alt="flag" />
              <h1 class="center">${country}</h1>
            </div>`;
};

const countriesNode = document.getElementById("countries");

/*  PRIMER PUNTO


 fetch("https://restcountries.com/v3.1/all") // llamada a API
  .then((res) => res.json()) //  objeto promesa convertido a JSON
  .then((countries) => {
    //pasa a siguiente .then

    // como vamos a trabajar el pintado de datos con template string, iniciamos una variable string vacia que funcionara para acumular
    // los  datos que vamos a recuperar mientras recorremos el array de paises
    let cards = "";
    for (let i = 0; i < countries.length; i++) {
      cards += cardTemplate(countries[i].flags.png, countries[i].name.common); // en cada vuelta recogemos los datos de imagen y nombre,
      // y los pasamos a la funcion cardTemplate que recoge los argumentos para aplicarlos al template. Se añaden a la variable cards
      //Una vez finalizado el bucle, con innerHTML pintamos las tajetas.
    }
    countriesNode.innerHTML += cards;
  }); 
  
  */

const cardTemplate2 = function (image, country) {
  return `<div class="card">
                <img id="flag-image" src=${image} alt="flag" />
                <h1 class="center">${country}</h1>
              </div>`;
};

let search = document.createElement("form");
search.id = "search";

search.innerHTML = `<label for="region">Selecciona continente</label>
                    <select id="region">
                        <option value="0">Selecciona continente....</option>
                        <option value="europe">Europa</option>
                        <option value="africa">Africa</option>
                        <option value="asia">Asia</option>
                        <option value="americas">America</option>
                        <option value="oceania">Oceania</option>
                    </select>
        
        <button id="submit" type="submit">Buscar</button>`;

document.getElementById("countries").appendChild(search);

document.getElementById("search").addEventListener("submit", function (event) {
  event.preventDefault();
  console.log(event.target.region.value);

  let region = event.target.region.value;

  fetch(`https://restcountries.com/v3.1/region/${region}`) // llamada a API
    .then((res) => res.json()) //  objeto promesa convertido a JSON
    .then((selectedRegion) => {
      let cards = "";
      for (let i = 0; i < selectedRegion.length; i++) {
        cards += cardTemplate2(
          selectedRegion[i].flags.png,
          selectedRegion[i].name.common
        );
      }
      countriesNode.innerHTML += cards;
    });
});
