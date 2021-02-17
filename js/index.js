const url = "https://api.openbrewerydb.org/breweries/";
const container = document.querySelector(".allBreweriesContainer");

async function getBreweries() {
  try {
    const response = await fetch(url);
    const breweries = await response.json();
    container.innerHTML = "";

    for (let i = 0; i < breweries.length; i++) {
      if (i === 8) {
        break;
      }

      let breweryName = breweries[i].name;
      let brewerState = breweries[i].state;
      let breweryCity = breweries[i].city;
      let breweryId = breweries[i].id;
      container.innerHTML += `<a href="details.html?id=${breweryId}" class= brewery><h2>Name of Brewery: ${breweryName}</h2><p>State: ${brewerState}</p> <p>City: ${breweryCity}</p> </a>`;
    }
  } catch (error) {
    container.innerHTML = `<p class="errorMessage"> An error occured<p>`;
  }
}

getBreweries();
