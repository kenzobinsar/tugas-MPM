document.getElementById("contactForm").addEventListener("submit", function (event) {
  event.preventDefault();
  alert("Pesan Anda telah terkirim!");
  document.getElementById("contactForm").reset();
});
