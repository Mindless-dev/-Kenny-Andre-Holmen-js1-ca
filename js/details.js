const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
const container = document.querySelector(".breweryContainer");
const url = "https://api.openbrewerydb.org/breweries/" + id;

async function getBrewery() {
  try {
    const response = await fetch(url);
    const brewery = await response.json();
    createBreweryHTML(brewery);
  } catch (error) {
    container.innerHTML = `<p class="errorMessage"> An error occured<p>`;
  }
}

function createBreweryHTML(brewery) {
  container.innerHTML = `<div class="brewery"><h2>Brewery Name: ${brewery.name}</h2> 
  <p>Type of brewery: ${brewery.brewery_type}</p>
  <p>Website: <a class=breweryWebsite href="${brewery.website_url}">${brewery.website_url}</a></p>
  <p>State: ${brewery.state}</p>
  <p>City: ${brewery.city} </p>
  <p>Street Address ${brewery.street}</p>
 
  </div>`;
}
getBrewery();
