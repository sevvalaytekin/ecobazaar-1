
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