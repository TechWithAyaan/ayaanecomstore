
Swal.fire({
  position: "top-end",
  icon: "success",
  title: "Independence Day Sale is Live!",
  showConfirmButton: false,
  timer: 2500
});
  const popup = document.getElementById('sale-popup');
  const popupText = popup.querySelector('.popup-text');
  const popupImg = popup.querySelector('img');

  const products = [
    { name: "Wireless Earbuds", img: "https://img.drz.lazcdn.com/static/pk/p/f59eef6c3aec162c21197d04051bb242.jpg_400x400q75.avif" },
    { name: "Smart Watch", img: "https://img.drz.lazcdn.com/static/pk/p/725e0b1f7cad6cee8992990a6aea4fad.jpg_400x400q75.avif" },
    { name: "Bluetooth Speaker", img: "https://img.drz.lazcdn.com/static/pk/p/725e0b1f7cad6cee8992990a6aea4fad.jpg_400x400q75.avif" },
    { name: "LED Ring Light", img: "https://img.drz.lazcdn.com/static/pk/p/725e0b1f7cad6cee8992990a6aea4fad.jpg_400x400q75.avif" },
    { name: "Phone Case", img: "https://img.drz.lazcdn.com/g/kf/S7b5229cf92df4c2489340706f158b6a7H.jpg_400x400q75.avif" }
  ];

  const cities = ["Lahore", "Karachi", "Islamabad", "Rawalpindi", "Faisalabad"];

  function showFakePopup() {
    const randomProduct = products[Math.floor(Math.random() * products.length)];
    const randomCity = cities[Math.floor(Math.random() * cities.length)];

    popupText.innerHTML = `🛒 Someone in ${randomCity} just bought "${randomProduct.name}"!`;
    popupImg.src = randomProduct.img;

    popup.style.display = 'flex';

    setTimeout(() => {
      popup.style.display = 'none';
    }, 5000);
  }

  // Run randomly every 15 seconds
  setInterval(() => {
    if (Math.random() > 0.5) {
      showFakePopup();
    }
  }, 11000);