
// Kübra Feature Section Start

// Tüm info-box'ları seç
const boxes = document.querySelectorAll(".info-box");

boxes.forEach(box => {
  box.addEventListener("click", () => {
    // Önce tümünden active class'ını kaldır
    boxes.forEach(b => b.classList.remove("active"));
    // Tıklanan elemana active class'ını ekle
    box.classList.add("active");
  });
});

// Kübra Feature Section End

// Şevval Popular Categories Section Start

const PopularCategories = () => {
  const categories = [
    {
      id: "1",
      name: "Vegetables",
      img: "../../images/popularCategories/vegetable.png",
      products: "165 products",
    },
    {
      id: "2",
      name: "Fresh Fruit",
      img: "../../images/popularCategories/freshFruits.png",
      products: "137 products",
    },
    {
      id: "3",
      name: "Fish",
      img: "../../images/popularCategories/fish.png",
      products: "34 products",
    },
    {
      id: "4",
      name: "Meat",
      img: "../../images/popularCategories/meat.png",
      products: "165 products",
    },
    {
      id: "5",
      name: "Water and Drinks",
      img: "../../images/popularCategories/drinks.png",
      products: "165 products",
    },
    {
      id: "6",
      name: "Snacks",
      img: "../../images/popularCategories/snacks.png",
      products: "165 products",
    },

    {
      id: "7",
      name: "Vegetables",
      img: "../../images/popularCategories/vegetable.png",
      products: "165 products",
    },
    {
      id: "8",
      name: "Fresh Fruit",
      img: "../../images/popularCategories/freshFruits.png",
      products: "137 products",
    },
    {
      id: "9",
      name: "Fish",
      img: "../../images/popularCategories/fish.png",
      products: "34 products",
    },
    {
      id: "10",
      name: "Meat",
      img: "../../images/popularCategories/meat.png",
      products: "165 products",
    },
    {
      id: "11",
      name: "Water and Drinks",
      img: "../../images/popularCategories/drinks.png",
      products: "165 products",
    },
    {
      id: "12",
      name: "Snacks",
      img: "../../images/popularCategories/snacks.png",
      products: "165 products",
    },

    {
      id: "13",
      name: "Vegetables",
      img: "../../images/popularCategories/vegetable.png",
      products: "165 products",
    },
    {
      id: "14",
      name: "Fresh Fruit",
      img: "../../images/popularCategories/freshFruits.png",
      products: "137 products",
    },
    {
      id: "15",
      name: "Fish",
      img: "../../images/popularCategories/fish.png",
      products: "34 products",
    },
    {
      id: "16",
      name: "Meat",
      img: "../../images/popularCategories/meat.png",
      products: "165 products",
    },
    {
      id: "17",
      name: "Water and Drinks",
      img: "../../images/popularCategories/drinks.png",
      products: "165 products",
    },
    {
      id: "18",
      name: "Snacks",
      img: "../../images/popularCategories/snacks.png",
      products: "165 products",
    },
  ];

  const section = document.createElement("section");
  section.classList.add("categories-section");
  section.innerHTML = `
    <div class="categories-header">
      <h2 class="categories-title">Shop by Top Categories</h2>
      <div class="view-all-container">
        <a href="#" id="viewAll" class="view-all">View All</a>
        <div class="view-all-arrow">➔</div>
      </div>
    </div>
    <div class="categories-grid"></div>
  `;

  const grid = section.querySelector(".categories-grid");

  let renderAll = false;

  const renderCategories = () => {
    grid.innerHTML = "";
    const itemsToRender = renderAll ? categories : categories.slice(0, 6);
    itemsToRender.forEach((category) => {
      const card = document.createElement("div");
      card.classList.add("category-card");
      card.innerHTML = `
        <div class="category-content">
          <img src="${category.img}" alt="${category.name}" class="category-image">
          <p class="category-name">${category.name}</p>
          <p class="category-products">${category.products}</p>
        </div>
      `;
      grid.appendChild(card);
    });
  };

  // İlk render
  renderCategories();

  section.querySelector("#viewAll").addEventListener("click", (e) => {
    e.preventDefault(); // sayfa yuklenmesini önler
    renderAll = !renderAll;
    renderCategories();
  });

  const boxes = document.querySelectorAll(".category-card");

  boxes.forEach((box) => {
    box.addEventListener("click", () => {
      // Önce tümünden active class'ını kaldır
      boxes.forEach((b) => b.classList.remove("active"));
      // Tıklanan elemana active class'ını ekle
      box.classList.add("active");
    });
  });
  return section;
};

// Sayfaya ekleme
document.getElementById("popularCategories").appendChild(PopularCategories());
//melisa navbar section start
const hamburger = document.querySelector(".hamburger");
const mobileMenu = document.querySelector(".mobile_menu");

hamburger.addEventListener("click", () => {
  mobileMenu.classList.toggle("active");


  if (hamburger.innerHTML === "&#9776;") {
    hamburger.innerHTML = "&times;";
  } else {
    hamburger.innerHTML = "&#9776;";
  }
});


const searchBtn = document.querySelector(".search-btn");
const searchInput = document.querySelector(".search-input");

searchBtn.addEventListener("click", () => {
  searchInput.classList.toggle("active");
  if (searchInput.classList.contains("active")) {
    searchInput.focus();
  }
});


//melisa navbar section end



//melisa discount banner section start 

//geri sayımın biteceği zaman
let deadLine= new Date("2025-09-30");
let now= new Date("2025-09-01");

 //  Geri sayımı güncelleyen fonksiyon
  function updateCountdown() {
    let now = new Date().getTime();
    let diff = deadLine - now;

    if (diff <= 0) {
      document.getElementById("days").innerText = "00";
      document.getElementById("hours").innerText = "00";
      document.getElementById("minutes").innerText = "00";
      document.getElementById("seconds").innerText = "00";
      return;
    }

//milisaniye oalrak aldığımız için bunu gün ay vs dönüştürmemiz lazım

let days=Math.floor(diff/(1000*60*60*24));
let hours=Math.floor((diff%(1000*60*60*24))/(1000*60*60));
let minutes=Math.floor((diff%(1000*60*60))/(1000*60));
let seconds=Math.floor((diff%(1000*60))/1000);


//değerleri ekrana yazıdrma
document.getElementById("days").innerText=days;
document.getElementById("hours").innerText=hours;
document.getElementById("minutes").innerText=minutes;
document.getElementById("seconds").innerText=seconds;
  }

//her saniye güncelleöme
setInterval(updateCountdown,1000);
updateCountdown();

//melisa discount banner section end 
