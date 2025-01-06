// 1. Modal open/close logic
const modal = document.getElementById("myModal");
const openModalBtn = document.getElementById("openModalBtn");
const closeSpan = document.querySelector(".close");
const cancelBtn = document.querySelector(".cancel-btn");

// Open modal on button click
openModalBtn.addEventListener("click", () => {
  modal.style.display = "block";
});

// Close modal on "X"
closeSpan.addEventListener("click", () => {
  modal.style.display = "none";
});

// Close modal on "Cancel"
cancelBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// Close if user clicks outside the modal-content
window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});
