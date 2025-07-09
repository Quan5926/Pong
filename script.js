"use strict";

const titleElement = document.querySelector(".title");
const buttonsContainer = document.querySelector(".buttons");
const yesButton = document.querySelector(".btn--yes");
const noButton = document.querySelector(".btn--no");
const catImg = document.querySelector(".cat-img");
const kittyNo = document.getElementById("kitty-no");

const MAX_IMAGES = 5;
let play = true;
let noCount = 0;

// Xử lý khi click "Có iu em"
yesButton.addEventListener("click", handleYesClick);

function handleYesClick() {
  titleElement.innerHTML = "Anh iu Pongggg :3";
  buttonsContainer.classList.add("hidden");
  changeImage("yes");

  setTimeout(() => {
    alert("Anh iu Ponggggggggggggggggggggggggggggg");
    showLoveTime();
  }, 800);

  const kitty = document.querySelector(".walking-kitty");
  kitty.src = "/img/image.png";
  kitty.classList.add("glow");

  // Hiệu ứng nhấp nháy trái tim
  const spark = document.createElement("div");
  spark.innerText = "💘";
  spark.style.position = "fixed";
  spark.style.left = `${yesButton.getBoundingClientRect().left + 30}px`;
  spark.style.top = `${yesButton.getBoundingClientRect().top - 20}px`;
  spark.style.fontSize = "3rem";
  spark.style.animation = "fadeInOut 1.5s ease forwards";
  document.body.appendChild(spark);
  setTimeout(() => spark.remove(), 1500);
}

// Nút "Không" chạy trốn
noButton.addEventListener("click", () => {
  if (play) {
    noCount++;
    const imageIndex = Math.min(noCount, MAX_IMAGES);
    changeImage(imageIndex);
    resizeYesButton();
    updateNoButtonText();
    if (noCount === MAX_IMAGES) play = false;
  }
});

noButton.addEventListener("mouseover", () => {
  if (play) {
    const x = Math.random() * 80 - 40;
    const y = Math.random() * 80 - 40;
    noButton.style.transform = `translate(${x}px, ${y}px)`;
  }
});

function resizeYesButton() {
  const computedStyle = window.getComputedStyle(yesButton);
  const fontSize = parseFloat(computedStyle.getPropertyValue("font-size"));
  yesButton.style.fontSize = `${fontSize * 1.3}px`;
}

function updateNoButtonText() {
  const messages = [
    "Không bao giờ",
    "Tom biết lỗi rồi ạ",
    "Mong Pong tha lỗi cho anhh :((",
    "Anhh sai rồi, anhh đáng trách ạ",
    "Pong đừng giận anhh nữa nhoo",
    "Anhhh iu Pong nhắm nhunnn đóooo",
  ];
  noButton.innerHTML =
    messages[Math.min(noCount, messages.length - 1)] +
    '<img src="img/hello-kitty-walk.gif" class="kitty-around-no" id="kitty-no">' +
    '<div class="think-cloud">Nghĩ kỹ chưa Pongg...🥺</div>';

  const kitty = document.getElementById("kitty-no");
  kitty.style.position = "absolute";
  kitty.style.animation = "circleAround 4s linear infinite";
}

function changeImage(image) {
  catImg.src = "img/image.png";
}


// Hiệu ứng trái tim rơi và icon cute
setInterval(() => {
  const heart = document.createElement("div");
  heart.className = "kitty-heart";
  heart.innerText = ["🎈", "💖", "💘", "💗", "💕", "🥰", "😽", "😘", "🌸"][
    Math.floor(Math.random() * 9)
  ];
  heart.style.left = Math.random() * 100 + "vw";
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 5000);
}, 400);

// Hiển thị thời gian yêu nhau
function showLoveTime() {
  const container = document.createElement("div");
  container.className = "love-time";
  document.body.appendChild(container);

 const start = new Date("2025-05-09T00:00:00").getTime();

  function updateLoveTime() {
    const now = new Date().getTime();
    const diff = now - start;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    container.innerHTML = `💑 Tùng Quân & Phương Anh đã iu nhau được:<br> ${days} ngày, ${hours} giờ, ${minutes} phút, ${seconds} giây 🥰`;
  }

  updateLoveTime();
  setInterval(updateLoveTime, 1000);
}

// Hiệu ứng sinh nhật
function showBirthdayEffect(name) {
  const cake = document.createElement("img");
  cake.src = "img/birthday-cake.gif";
  cake.style.position = "fixed";
  cake.style.bottom = "100px";
  cake.style.left = "50%";
  cake.style.transform = "translateX(-50%)";
  cake.style.width = "200px";
  cake.style.zIndex = 1000;
  document.body.appendChild(cake);

  const msg = document.createElement("div");
  msg.innerText = `🎉 Chúc mừng sinh nhật ${name} 🎂`;
  msg.style.position = "fixed";
  msg.style.top = "20px";
  msg.style.left = "50%";
  msg.style.transform = "translateX(-50%)";
  msg.style.color = "#fff";
  msg.style.background = "rgba(255,105,180,0.8)";
  msg.style.padding = "10px 20px";
  msg.style.borderRadius = "12px";
  msg.style.fontSize = "2rem";
  msg.style.zIndex = 1000;
  msg.style.boxShadow = "0 0 20px pink";
  document.body.appendChild(msg);

  const kitty = document.querySelector(".walking-kitty");
  kitty.src = "img/hello-kitty-walk.gif";
  kitty.classList.add("glow");
}

// Kiểm tra ngày sinh
function checkBirthday() {
  const today = new Date();
  const day = today.getDate();
  const month = today.getMonth() + 1;

  if (day === 12 && month === 1) {
    showBirthdayEffect("Tùng Quân");
  }
  if (day === 27 && month === 10) {
    showBirthdayEffect("Phương Anh");
  }
}

checkBirthday();

// Phát nhạc khi người dùng tương tác
document.body.addEventListener("click", playMusicOnce, { once: true });
document.body.addEventListener("touchstart", playMusicOnce, { once: true });

function playMusicOnce() {
  const audio = document.getElementById("bg-music");
  if (audio) {
    audio.play().catch(e => {
      console.warn("Không thể phát nhạc tự động:", e);
    });
  }
}
