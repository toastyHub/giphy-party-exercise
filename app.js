function appendGif(res) {
  // Set api data to variable
  let gifArray = res.data;
  // select a random index from the gifArray and get the url
  let randomGif = gifArray[Math.floor(Math.random() * gifArray.length)].images.original.url;
  // set gif-container DIV to a variable
  const gifContainer = document.querySelector('.gif-container');
  // create an <img> element and set source of <img> element to randomGif url
  imgTag = document.createElement("img");
  imgTag.src = randomGif;
  // append te new <img> to the gif-container DIV
  gifContainer.append(imgTag);
}

// Global variables
const searchInput = document.querySelector('#search-input');
const form = document.querySelector('.input-form')
const removeBtn = document.querySelector('#remove-btn');
///////////////////


// Event listener for form submit
form.addEventListener("submit", async function(evt) {
  evt.preventDefault();

  let searchText = searchInput.value;
  const res = await axios.get("http://api.giphy.com/v1/gifs/search", {
    params: {
      q: searchText,
      api_key: "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym"
    }
  });
  appendGif(res.data);
  searchInput.value = '';
});

// Event listener remove GIFS btn
removeBtn.addEventListener("click", function() {
  const gifContainer = document.querySelector('.gif-container');
  // While gif-container DIV having a child element is true then remove the child
  while (gifContainer.firstChild) {
    gifContainer.removeChild(gifContainer.firstChild);
  }
});
