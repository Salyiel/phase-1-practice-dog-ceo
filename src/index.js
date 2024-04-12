const imgUrl = "https://dog.ceo/api/breeds/image/random/4";

let breeds;


// CREATES IMAGE
fetch(imgUrl)
  .then((res) => res.json())
  .then((dogImageData) => appendImages(dogImageData.message));

  function appendImages(dogImages) {
    const imgContainer = document.querySelector("div");
    dogImages.forEach((image) => {
      // create an image element
      const img = document.createElement("img");
      // set src attribute
      img.src = image;
      img.alt = image
      // append img to dom
      imgContainer.append(img);
    });
  }

  const breedUrl = "https://dog.ceo/api/breeds/list/all";

// CREATES BREED LIST

fetch(breedUrl)
  .then((res) => res.json())
  .then((breedsData) => {
    breeds = Object.keys(breedsData.message);
    renderBreeds(breeds);
  });


  // purpose of renderBreeds is to select the ul, and add each breed to that ul
// select DOM element to render breeds to
const ul = document.querySelector("ul");

function renderBreeds(breeds) {
  // console.log(breeds);
  // iterate over array
  for (let breed of breeds) {
    // create li element
    const li = document.createElement("li");
    li.textContent = breed;
    // add event listener to li for color affect
    li.addEventListener("click", () => {
      li.style.color = "red";
    });
    // append li to list
    ul.appendChild(li);
  }
}



// Once we are able to load all of the dog breeds onto the page, add JavaScript so that the user can filter breeds that start with a particular letter using a dropdown.

// For example, if the user selects 'a' in the dropdown, only show the breeds with names that start with the letter a. For simplicity, the dropdown only includes the letters a-d. However, we can imagine expanding this to include the entire alphabet.

// BUILD DROPDOWN FUNCTIONALITY
const dropdown = document.querySelector("select");

dropdown.addEventListener("change", filterBreeds);

function filterBreeds(event) {
  let letter = event.target.value;
  // we want to filter existing li breeds to only breeds that start with this letter
  // how can we access the breeds
    // console.log(breeds);
  // filter breeds using letter
  let filteredBreeds = breeds.filter((breed) => {
    return breed.charAt(0) === letter;
  });
ul.innerHTML = "";
renderBreeds(filteredBreeds);
}





















// console.log('%c HI', 'color: firebrick')
