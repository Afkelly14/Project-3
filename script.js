url = "https://rickandmortyapi.com/api/character/";

popUp = document.querySelector(".information");

allcharacters = document.querySelectorAll(".characters");

let img = document.querySelectorAll("img");

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

      function openPopUp(e) {
        e.preventDefault();
        popUp.innerText = `Name : ${name} | Status : ${status} | Species : ${species} | Type : ${type} | Gender : ${gender} | Location : ${location} | Image :
        ${img[i]}`;

        popUp.style.opacity = 1;
      }
    }
  });
