import image from "../images/simple.svg";
import iphoneImage from "../images/iphone.png";
import iphoneDimensionImage from "../images/iphone-dimension.png";
import iphoneScreenImage from "../images/iphone-screen.png";
import tatyanaImage from "../images/tatyana.png";

if (process.browser) {
  const navbar = document.getElementById("landing-nav");

  document.addEventListener("scroll", navbarControl);

  function navbarControl() {
    if (scrollY > 75) {
      navbar.classList.add("navbar-background");
    } else {
      navbar.classList.remove("navbar-background");
    }
  }
}
// function scrollItems() {
//   const listItemContainer = document.getElementById("scroll-list");

//   const leftScrollButton = document.getElementById("left-button");
//   const rightScrollButton = document.getElementById("right-button");

//   function scroll(elemToScroll, x) {
//     elemToScroll.scrollBy({
//       top: 0,
//       left: x,
//       behavior: "smooth",
//     });
//   }

//   leftScrollButton.onclick = () => {
//     scroll(listItemContainer, -20);
//   };
//   rightScrollButton.onclick = () => {
//     scroll(listItemContainer, 20);
//   };
// }

// scrollItems();
