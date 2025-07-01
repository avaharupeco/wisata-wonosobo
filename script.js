// script.js

window.onload = function() {
  alert("Selamat datang di Website Wisata Wonosobo!");
  console.log("Website Wisata Wonosobo sudah siap digunakan!");
};

const links = document.querySelectorAll(".sidebar a");

links.forEach(function(link) {
  link.addEventListener("click", function() {
    console.log("Navigasi ke: " + link.textContent);
  });
});

const cards = document.querySelectorAll(".card");

cards.forEach(function(card) {
  card.addEventListener("mouseover", function() {
    card.style.transform = "scale(1.05)";
    card.style.transition = "0.3s";
  });
  card.addEventListener("mouseout", function() {
    card.style.transform = "scale(1)";
  });
});
