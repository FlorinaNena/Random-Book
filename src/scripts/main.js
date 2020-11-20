import pics1 from "../assets/images/1984.jpg";
import pics2 from "../assets/images/book-psycho.jpg";
import pics3 from "../assets/images/lolita.jpg";
import pics4 from "../assets/images/sea.jpg";
import pics5 from "../assets/images/before-i-fall.jpg";
import pics6 from "../assets/images/dexter.jpg";
import pics7 from "../assets/images/the-outsider.jpg";
import pics8 from "../assets/images/tower.jpg";

const images = [pics1, pics2, pics3, pics4, pics5, pics6, pics7, pics8];
const imageContainer = document.querySelector(".randomImage");

function createImage(className, imageSrc) {
  const img = document.createElement('img');
  img.src = imageSrc;
  img.classList.add(className);
  return img;
}

let currentImage = null;

images.forEach((image,index) => imageContainer.appendChild(createImage(`pics-${index+1}`, image)));

const randomize = (length) =>  Math.floor((Math.random() * length));

const button = document.getElementById ("randombtn");
button.addEventListener("click", ()=> {
    const random = randomize (images.length);
    const selectedImg = document.querySelector(`.pics-${random+1}`);
    if(currentImage){
      currentImage.classList.remove('active');
    }
    selectedImg.classList.add('active');
    currentImage = selectedImg;
});

document
  .getElementById ("clearbtn")
  .addEventListener('click', () => {
    if(currentImage) {
      currentImage.classList.remove('active');
      currentImage = null;
    }
  });