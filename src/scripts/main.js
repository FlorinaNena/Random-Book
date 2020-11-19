import pics1 from "../assets/images/1984.jpg";
import pics2 from "../assets/images/book-psycho.jpg";
import pics3 from "../assets/images/lolita.jpg";
import pics4 from "../assets/images/sea.jpg";
import pics5 from "../assets/images/before-i-fall.jpg";
import pics6 from "../assets/images/dexter.jpg";
import pics7 from "../assets/images/the-outsider.jpg";
import pics8 from "../assets/images/tower.jpg";

const images = [pics1, pics2, pics3, pics4, pics5, pics6, pics7, pics8];
const imageContainer = document.querySelector("#randomImage");

images.forEach((image,index)=> {
    const img = document.createElement("img");
    img.src = image;
    img.classList.add(`pics${index+1}`);
    imageContainer.appendChild(img);
});

function randomize(lenght) {
  return Math.floor((Math.random() * lenght));
}

const button = document.getElementById ("randombtn");
button.addEventListener("click", ()=> {
    const random = randomize (images.length);
    imageContainer.innerHTML = "";
    const img = document.createElement("img");
    img.src = images[random];
    img.classList.add(`pics${random +1}`);
    imageContainer.appendChild(img);
});