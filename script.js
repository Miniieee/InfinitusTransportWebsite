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

// 2. Toggle “Between” vs “At” / “Before” for Pickup
const pickupRadioButtons = document.querySelectorAll('input[name="pickupDateType"]');
const pickupSingleDateTime = document.getElementById("pickupSingleDateTime");
const pickupBetweenDateTime = document.getElementById("pickupBetweenDateTime");

// Show/hide date/time fields based on selected radio
function updatePickupDateTime(type) {
  if (type === "Between") {
    pickupSingleDateTime.style.display = "none";
    pickupBetweenDateTime.style.display = "flex";
  } else {
    pickupSingleDateTime.style.display = "flex";
    pickupBetweenDateTime.style.display = "none";
  }
}

// Add event listeners to each pickup radio
pickupRadioButtons.forEach((radio) => {
  radio.addEventListener("change", (e) => {
    updatePickupDateTime(e.target.value);
  });
});

// Default to the initial state based on whichever is “checked”
document.addEventListener("DOMContentLoaded", () => {
  const checkedPickup = document.querySelector('input[name="pickupDateType"]:checked');
  updatePickupDateTime(checkedPickup.value);
});

// 3. Toggle “Between” vs “At” / “Before” for Delivery
const deliveryRadioButtons = document.querySelectorAll('input[name="deliveryDateType"]');
const deliverySingleDateTime = document.getElementById("deliverySingleDateTime");
const deliveryBetweenDateTime = document.getElementById("deliveryBetweenDateTime");

function updateDeliveryDateTime(type) {
  if (type === "Between") {
    deliverySingleDateTime.style.display = "none";
    deliveryBetweenDateTime.style.display = "flex";
  } else {
    deliverySingleDateTime.style.display = "flex";
    deliveryBetweenDateTime.style.display = "none";
  }
}

// Add event listeners for delivery radio
deliveryRadioButtons.forEach((radio) => {
  radio.addEventListener("change", (e) => {
    updateDeliveryDateTime(e.target.value);
  });
});

// Set initial state for delivery on page load
document.addEventListener("DOMContentLoaded", () => {
  const checkedDelivery = document.querySelector('input[name="deliveryDateType"]:checked');
  updateDeliveryDateTime(checkedDelivery.value);
});
