
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
