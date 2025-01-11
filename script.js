// ========= MODAL LOGIC =========
const modal = document.getElementById("myModal");
const closeSpan = document.querySelector(".close");
const cancelBtn = document.querySelector(".cancel-btn");

// Close modal on "X"
closeSpan.addEventListener("click", () => {
  modal.style.display = "none";
});

// Close modal on "Cancel"
cancelBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// Close modal if user clicks outside the modal-content
window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});

// ========= BUTTONS THAT OPEN THE MODAL =========
// 1) "Get Free Quotes" button in the hero section
const getQuotesBtn = document.getElementById('get-quotes-btn');
getQuotesBtn.addEventListener('click', function () {
  // Simply open the modal
  modal.style.display = "block";
});

// 2) Floating "Free quote" button
const freeQuoteBtn = document.getElementById('free-quote-btn');
freeQuoteBtn.addEventListener('click', function () {
  // Simply open the modal
  modal.style.display = "block";
});
