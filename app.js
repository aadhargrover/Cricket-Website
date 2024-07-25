const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "CRICKET KIT",
    price: 4999,
    colors: [
      {
        code: "greenyellow",
        img: "./img/kit3.png",
      },
      {
        code: "red",
        img: "./img/kit2.png",
      },
    ],
  },
  {
    id: 2,
    title: "BAT",
    price: 1899,
    colors: [
      {
        code: "red",
        img: "./img/bat.png",
      },
      {
        code: "blue",
        img: "./img/bat3.png",
      },
    ],
  },
  {
    id: 3,
    title: "BALL",
    price: 999,
    colors: [
      {
        code: "white",
        img: "./img/ball2.png",
      },
      {
        code: "red",
        img: "./img/ball3.png",
      },
    ],
  },
  {
    id: 4,
    title: "GLOVES AND PADS",
    price: 1199,
    colors: [
      {
        code: "darkblue",
        img: "./img/pad.png",
      },
      {
        code: "green",
        img: "./img/glove2.png",
      },
    ],
  },
  {
    id: 5,
    title: "WICKET",
    price: 499,
    colors: [
      {
        code: "white",
        img: "./img/wickets.png",
      },
      {
        code: "yellow",
        img: "./img/yellow.png",
      },
    ],
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the choosen product
    choosenProduct = products[index];

    //change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "₹" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    //assing new colors
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});
