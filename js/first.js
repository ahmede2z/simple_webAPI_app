// bnrag3 ely fat
// let httpreq = new XMLHttpRequest();
// httpreq.open('GET', 'https://forkify-api.herokuapp.com/api/search?&q=pizza'); //1
// httpreq.send() //2
// httpreq.addEventListener('readystatechange', () => {
//   if (httpreq.readyState == 4 && httpreq.status == 200) {
//     allRecipes = JSON.parse(httpreq.response).recipes;
//     displayRecipes();
//   }
// })

// self invoc async arrow function 
// (async()=>{

// })();


// bn3rf el 7aga ely hn4t8l biha
let allRecipes = [];
let resultsRow = document.getElementById("resultsRow");
let recipeDetailsA = document.getElementById("recipeDetailsA");
let searchInput = document.getElementById("searchInput");
let searchBtn = document.getElementById("searchBtn");

// bngeb kol el recipes
async function getAllRecipes(term) {
  let httpreq = await fetch(`https://forkify-api.herokuapp.com/api/search?&q=${term}`);
  httpreq = await httpreq.json();
  allRecipes = await httpreq.recipes;
  displayRecipes();
}

// b3d ma gbnaha bn3rdha
function displayRecipes() {
  let cartonaa = ``;
  for (let i = 0; i < allRecipes.length; i++) {
  let newId="'"+allRecipes[i].recipe_id+"'"
    cartonaa += `<div onclick="getAllDetails(${newId})" class="col-md-4">
    <div class="recipe">
      <img src="${allRecipes[i].image_url}" class="w-100" alt="">
      <h5 class="color-mine py-2 font-weight-bolder">${allRecipes[i].title}</h5>
      <p class="font-weight-bolder">${allRecipes[i].publisher}</p>
    </div>
  </div>`
  }
  resultsRow.innerHTML = cartonaa;
}
// lma el user udos 3ly serch btn bn call el function getAllRecipes()
searchBtn.addEventListener('click', () => {
  getAllRecipes(searchInput.value);
})

// bngeb kol el details
async function getAllDetails(id) {
  let httpReq = await fetch(`https://forkify-api.herokuapp.com/api/get?rId=${id}`);
  httpReq = await httpReq.json();
  let recipeDetails = await httpReq.recipe;
  console.log(recipeDetails);
  displayAllDetails(recipeDetails);
}

// b3d kda bn3rdhm
function displayAllDetails(recipeDetails) {
  let cartona = `<h4 class="font-weight-bolder text-danger">${recipeDetails.title}</h4>
  <img class="img-fluid w-100" src="${recipeDetails.image_url}">
  <p class="font-weight-bolder text-info">${recipeDetails.publisher}</p>
  <ul>`;
  for (let i = 0; i < recipeDetails.ingredients.length; i++) {
    cartona += `<li>${recipeDetails.ingredients[i]}</li>`
  }
  cartona+= `</ul>`
  recipeDetailsA.innerHTML = cartona;
}