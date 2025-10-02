// Select elements
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const lightboxCaption = document.getElementById("lightbox-caption");
const closeBtn = document.querySelector(".close");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const galleryItems = document.querySelectorAll(".gallery-item");
const filterButtons = document.querySelectorAll(".filters button");

let currentIndex = 0;

// Open Lightbox
galleryItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    lightbox.style.display = "flex";
    showImage(index);
  });
});

// Close Lightbox
closeBtn.addEventListener("click", () => {
  lightbox.style.display = "none";
});

// Prev/Next navigation
prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
  showImage(currentIndex);
});

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % galleryItems.length;
  showImage(currentIndex);
});

// Close on outside click
lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) {
    lightbox.style.display = "none";
  }
});

// Filters
filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    document.querySelector(".filters .active")?.classList.remove("active");
    button.classList.add("active");
    const filter = button.getAttribute("data-filter");
    galleryItems.forEach(item => {
      if (filter === "all" || item.getAttribute("data-category") === filter) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  });
});

// Helper: Show Image in Lightbox
function showImage(index) {
  currentIndex = index;
  const img = galleryItems[index].querySelector("img");
  const caption = galleryItems[index].querySelector(".caption").textContent;
  lightboxImg.src = img.src;
  lightboxCaption.textContent = caption;
}
