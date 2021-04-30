//mobile menu
const mobileMenu = document.querySelector(".hamburger__box");
const menuList = document.querySelector(".header__menu");
mobileMenu.addEventListener('click', function () {
  menuList.classList.toggle("visible");
});

//obsługa galerii
const carouselWrapper = document.querySelector(".section__galery--carousel");
const carouselWrapperSec = document.querySelector(".section__galery--carousel.secondGalery");

function galery(el) {

  const listNextImages = el.querySelector(".list-items");
  const allImages = listNextImages.querySelectorAll("img");
  const currentImage = el.querySelector(".current-item");
  const leftArrow = el.querySelector(".arrow-left");
  const rightArrow = el.querySelector(".arrow-right");

  let step = 0;
  function nextImage() {
    var current = listNextImages.querySelector('.current-list-item');
    if (current.parentElement.nextElementSibling) {
      current.parentElement.nextElementSibling.children[0].classList.add('current-list-item');
      current.classList.remove('current-list-item');
      current = listNextImages.querySelector('.current-list-item');
      currentImage.scrollLeft = current.offsetLeft;
      currentImage.attributes.src.value = current.attributes.src.value;

      function moveThumbLeft() {
        step -= 60;
        allImages.forEach(function (e) {
          e.style.position = "relative";
          e.style.transform = "translateX(" + step + "px)";
        })
      }
      moveThumbLeft();
      if (leftArrow.classList.contains("hide")) {
        leftArrow.classList.remove("hide");
        leftArrow.classList.add("visible");
      }

    } else {
      rightArrow.classList.remove("visible");
      rightArrow.classList.add("hide");

      return;
    }
  };

  function prevImage() {
    var current = listNextImages.querySelector('.current-list-item');
    if (current.parentElement.previousElementSibling) {
      current.parentElement.previousElementSibling.children[0].classList.add('current-list-item');
      current.classList.remove('current-list-item');
      current = listNextImages.querySelector('.current-list-item');
      currentImage.scrollLeft = current.offsetLeft;
      currentImage.attributes.src.value = current.attributes.src.value;

      function moveThumbRight() {
        step += 60;
        allImages.forEach(function (e) {
          e.style.position = "relative";
          e.style.transform = "translateX(" + step + "px)";
        })
      }
      moveThumbRight();
      if (rightArrow.classList.contains("hide")) {
        rightArrow.classList.remove("hide");
        rightArrow.classList.add("visible");
      }
    } else {
      leftArrow.classList.remove("visible");
      leftArrow.classList.add("hide");
      return;
    }
  };

  function changeCurrentImage(newImage) {
    currentImage.attributes.src.value = this.attributes.src.value;
    allImages.forEach((image) => {
      image.classList.remove('current-list-item');
    })
    this.classList.add('current-list-item');
  }

  leftArrow.addEventListener('click', prevImage);
  rightArrow.addEventListener('click', nextImage);

  allImages.forEach((image) => {
    image.addEventListener('click', changeCurrentImage);
  });
}

galery(carouselWrapper);
galery(carouselWrapperSec);