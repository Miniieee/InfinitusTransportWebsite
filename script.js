// Grabs the "Get Free Quotes" button
const getQuotesBtn = document.getElementById('get-quotes-btn');

getQuotesBtn.addEventListener('click', function () {
  const vehicleType = document.getElementById('vehicle-type').value;
  const subCategory = document.getElementById('sub-category').value;

  if (!vehicleType || !subCategory) {
    alert('Please select both vehicle type and subcategory before getting quotes.');
  } else {
    // In a real site, you might submit the form or redirect the user, etc.
    alert(`Getting quotes for ${vehicleType} (${subCategory})...`);
  }
});

// Floating "Free quote" button functionality
const freeQuoteBtn = document.getElementById('free-quote-btn');
freeQuoteBtn.addEventListener('click', function () {
  // This could open a modal, scroll to the form, or do something else.
  alert('Free quote button clicked!');
});
