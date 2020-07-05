url = "https://rickandmortyapi.com/api/character/";

let popUp = document.querySelector(".information");

let allcharacters = document.querySelectorAll(".characters");

let img = document.querySelectorAll("img");

let closeScreen = document.querySelector(".close");

fetch(url)
  .then((res) => res.json())
  .then((res) => {
    for (i = 0; i < res.results.length; i++) {
      img[i].src = res.results[i].image;
      let name = res.results[i].name;

      let status = res.results[i].status;

      let species = res.results[i].species;

      let type = res.results[i].type;

      let gender = res.results[i].gender;

      let location = res.results[i].location.name;

      img[i].addEventListener("click", openPopUp);
      closeScreen.addEventListener("click", closePopUp);

      function openPopUp(e) {
        e.preventDefault();
        popUp.innerText = `Name : ${name} | Status : ${status} | Species : ${species} | Type : ${type} | Gender : ${gender} | Location : ${location} | Image :
        ${img[i]}`;

        popUp.style.opacity = 0.75;
        closeScreen.style.opacity = 1;
      }

      function closePopUp(e) {
        popUp.style.opacity = 0;
        closeScreen.style.opacity = 0;
      }
    }
  });
