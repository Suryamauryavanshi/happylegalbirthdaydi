const startBtn = document.getElementById("startBtn");
const enterDOB = document.getElementById("enterDOB");
const dobInput = document.getElementById("dobInput");
const cake = document.getElementById("cake");
const note = document.getElementById("note");
const slideshow = document.getElementById("slideshow");

startBtn.onclick = () => {
  document.getElementById("page1").style.display = "none";
  document.getElementById("page2").style.display = "flex";
};

enterDOB.onclick = () => {
  const dob = dobInput.value.trim();
  if (dob === "24/07/2007") {
    document.getElementById("page2").style.display = "none";
    document.getElementById("page3").style.display = "flex";
    startSlideshow();
  } else {
    alert("Incorrect DOB. Try again.");
  }
};

function startSlideshow() {
  const images = [
    "img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg",
    "img5.jpg", "img6.jpg", "img7.jpg", "img8.jpg", img9.jpg
    // Add or remove filenames based on your actual images
  ];
  let index = 0;
  const imgTag = document.createElement("img");
  slideshow.appendChild(imgTag);

  const interval = setInterval(() => {
    if (index >= images.length) {
      clearInterval(interval);
      cake.classList.remove("hidden");
      return;
    }
    imgTag.src = "images/" + images[index];
    index++;
  }, 2000);
}

cake.onclick = () => {
  const pop = document.createElement("div");
  pop.innerHTML = "🎉🎉🎉🎉🎉";
  pop.style.fontSize = "50px";
  pop.style.position = "fixed";
  pop.style.top = "50%";
  pop.style.left = "50%";
  pop.style.transform = "translate(-50%, -50%)";
  pop.style.zIndex = "999";
  document.body.appendChild(pop);

  // ▶️ Play background music
  const bgMusic = document.getElementById("bgMusic");
  bgMusic.play();

  setTimeout(() => {
    pop.remove();
    note.classList.remove("hidden");
  }, 1500);
};