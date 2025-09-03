
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
