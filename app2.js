
// Swal.fire({
//   position: "top-end",
//   icon: "success",
//   title: "Independence Day Sale is Live!",
//   showConfirmButton: false,
//   timer: 2500
// });
function sidebaropen(){
  document.getElementsByClassName("side-bar-open-icon")[0].style.display ="none"
  document.getElementsByClassName("close")[0].style.display ="block"
  document.getElementsByClassName("sidebar")[0].style.display ="block"
  document.getElementsByClassName("main-progess")[0].style.display ="none"
}
function sidebarclose(){
  document.getElementsByClassName("side-bar-open-icon")[0].style.display ="block"
  document.getElementsByClassName("close")[0].style.display ="none"
  document.getElementsByClassName("sidebar")[0].style.display ="none"
   document.getElementsByClassName("main-progess")[0].style.display ="flex"
}

let num = 0;
function plus(){
for (let i =0;i<1;i++){
num++
document.getElementsByClassName("count")[0].innerHTML = num
}
}
function min(){
for (let i =0;i<1;i++){
num--
document.getElementsByClassName("count")[0].innerHTML = num
}
}

function pr(){
  let buy = prompt("Enter Your Buying Price")
 let sell = prompt("Enter Your Selling Price")
//  let extra= prompt("Enter Your Extra Charges like flyer box....")
 let profit = sell -buy ;
 alert("Your Profit is "+profit+" PKR")
}
function showi() {
 document.getElementsByClassName("text")[0].style.display = "inline";
 document.getElementsByClassName("show")[0].style.display ="none";
 document.getElementsByClassName("showa")[0].style.display ="inline";
}
function ll() {
 document.getElementsByClassName("text")[0].style.display = "none";
  document.getElementsByClassName("show")[0].style.display ="inline";
  document.getElementsByClassName("showa")[0].style.display ="none";
}
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
  // Example: Function to simulate live visitors count, replace with API integration
function getLiveVisitorCount() {
  return Math.floor(Math.random() * 100) + 1; // Replace this with your live visitor count logic
}

function updateVisitorCount() {
  var liveCount = getLiveVisitorCount();
  var initialCount = 20;
  var updatedCount = initialCount + liveCount;
  document.getElementById('live-visitor-count').innerText = updatedCount;
}

// Hide the visitor section after 5 seconds with animation (shrink only, do not disappear)
setTimeout(function() {
  var counter = document.getElementById('visitor-counter');
  counter.classList.remove('counter-expanded');
  counter.classList.add('counter-collapsing');
  setTimeout(function() {
    counter.classList.remove('counter-collapsing');
    counter.classList.add('counter-collapsed');
  }, 300); // Keep the collapsing animation for 300ms before showing the collapsed state
}, 5000);

// Toggle between expanded and collapsed view on click
document.getElementById('visitor-counter').addEventListener('click', function() {
  var counter = document.getElementById('visitor-counter');
  if (counter.classList.contains('counter-collapsed')) {
    counter.classList.remove('counter-collapsed');
    counter.classList.add('counter-expanded');
  } else {
    counter.classList.remove('counter-expanded');
    counter.classList.add('counter-collapsed');
  }
});

// Initial update on page load
window.onload = function() {
  updateVisitorCount();
  
  // Slide in the counter from the left when the page loads
  setTimeout(function() {
    var counter = document.getElementById('visitor-counter');
    counter.style.left = "0"; // Move the counter into view
  }, 200); // 200ms delay to allow page load to complete first
}

// Update visitor count every 10 seconds (for demonstration)
setInterval(updateVisitorCount, 10000);

// Drag and drop functionality
let isDragging = false;
let offsetX, offsetY;

const counterElement = document.getElementById('visitor-counter');

counterElement.addEventListener('mousedown', function(e) {
  isDragging = true;
  offsetX = e.clientX - counterElement.getBoundingClientRect().left;
  offsetY = e.clientY - counterElement.getBoundingClientRect().top;

  // Change the cursor while dragging
  counterElement.style.cursor = 'grabbing';
});

document.addEventListener('mousemove', function(e) {
  if (isDragging) {
    counterElement.style.left = (e.clientX - offsetX) + 'px';
    counterElement.style.top = (e.clientY - offsetY) + 'px';
  }
});

document.addEventListener('mouseup', function() {
  isDragging = false;
  counterElement.style.cursor = 'move'; // Reset the cursor to move when not dragging
});