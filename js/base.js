const meals = [
  {
    name: "Quattro Pasta",
    img: "./img/offer1.png",
    description:
      "lorem ispum dolor sit amet, consectetur adipising elit,Nam,quibusdam.",
    del_price: "$ 55.00",
    price: "$ 18.00",
  },
  {
    name: "Vegertarian Pasta",
    img: "./img/offer2.png",
    description:
      "lorem ispum dolor sit amet, consectetur adipising elit,Nam,quibusdam.",
    del_price: "$ 55.00",
    price: "$ 18.00",
  },
  {
    name: "Gluten-free Pasta",
    img: "./img/offer3.png",
    description:
      "lorem ispum dolor sit amet, consectetur adipising elit,Nam,quibusdam.",
    del_price: "$ 55.00",
    price: "$ 18.00",
  },
];

const daytime = [
  {
    names: "Breakfast",
    image: "./img/breckfastIcon.png",
    descripion: "8:00 am to 10:00 am",
  },

  {
    names: "Lunch",
    image: "./img/lunchIcon.png",
    descripion: "4:00 pm to 7:00 pm",
  },

  {
    names: "Dinner",
    image: "./img/dinnerIcon.png",
    descripion: "9:00 pm to 1:00 Am",
  },

  { names: "Dessert", image: "./img/dessertIcon.png", descripion: "All day" },
];

// const slides = document.querySelectorAll(".offer__slide"),
//   prev = document.querySelector(".offer__slider-prev"),
//   next = document.querySelector(".offer__slider-next"),
//   current = document.querySelector("#current"),
//   total = document.querySelector("#total");

// let slideIndex = 1;

// showSlides(slideIndex);
// if (slides.length < 10) {
//   total.textContent = `0${slides.length}`;
// } else {
//   total.textContent = slides.length;
// }

// function showSlides(index) {
//   if (index > slideIndex.length) {
//     slideIndex = 1;
//   }

//   if (index < slides.length) {
//     slideIndex = slides.length;
//   }
//   slides.forEach((slide) => {
//     slide.style.display = "none";
//   });

//   slides[slideIndex - 1].style.display = "block";
// }

// if (slides.length < 10) {
//   current.textContent = `0${slideIndex}`;
// } else {
//   current.textContent = slideIndex;
// }

// function moveSlides(index) {
//   showSlides(slideIndex + index);
// }

// prev.addEventListener("click", () => {
//   moveSlides(-1);
// });

// next.addEventListener("click", () => {
//   moveSlides(+1);
// });
