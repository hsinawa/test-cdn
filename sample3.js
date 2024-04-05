console.log("CDN By Awanish");

const sampleTests = document.querySelectorAll('.sample-test');

// Add click event listener to each element
sampleTests.forEach(element => {
  element.addEventListener('click', () => {
    // Change the background color of the clicked element
    element.style.backgroundColor = 'blue'; // You can change 'blue' to any color you desire
  });
});
