const images = [
  "1.webp",
  "2.webp",
  "3.webp",
  "4.webp",
  "5.webp",
  "6.webp",
  "7.webp",
  "8.webp",
  "9.webp",
  "10.webp",
  "11.webp",
  "12.webp",
  "13.webp",
  "14.webp",
  "15.webp",
  "16.webp",
  "17.webp",
  "18.webp",
  "19.webp",
  "20.webp",
  "21.webp",
  "22.webp",
  "23.webp",
  "24.webp",
  "25.webp",
  "26.webp",
  "27.webp",
  "28.webp",
  "29.webp",
  "30.webp",
  "31.webp",
  "32.webp",
  "33.webp",
  "34.webp",
  "35.webp",
  "36.webp",
  "37.webp",
  "38.webp",
  "39.webp",
  "40.webp",
  "41.webp",
  "42.webp",
  "43.webp"
  // Add more image URLs here
];

function pickRandomImage() {
  const randomIndex = Math.floor(Math.random() * images.length);
  const imageElement = document.getElementById("graphic");
  imageElement.src = `./Graphics/${images[randomIndex]}`;
}

function loginAttempt() {
  window.location.href = "./dashboard.html"
}