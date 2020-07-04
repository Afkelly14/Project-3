/* add event listeners for each picture */
url = "https://rickandmortyapi.com/api/character/";

rickIMG = document.querySelector(".rick");
mortyIMG = document.querySelector(".morty");
popUp = document.querySelector(".information");

allcharacters = document.querySelectorAll(".characters");
let ul = document.querySelector("ul");
let li = document.querySelectorAll("li");
let img = document.querySelectorAll("img");

fetch(url)
  .then((res) => res.json())
  .then((res) => {
    for (i = 0; i < res.results.length; i++) {
      img[i].src = res.results[i].image;
      img[i].addEventListener("click", showInfo);
      function showInfo() {
        popUp.style.opacity = 1;
      }
    }
  });
