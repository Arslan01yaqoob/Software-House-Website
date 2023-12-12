$(document).ready(function () {
    // Set the time interval (in milliseconds) between each slide transition
    var interval = 5000; // 5000ms = 5 seconds

    // Find your carousel element by its ID
    var carousel = $('#carouselExampleFade');

    // Start the carousel auto-slide
    carousel.carousel();

    // Function to start the interval
    function startInterval() {
        return setInterval(function () {
            carousel.carousel('next');
        }, interval);
    }

    // Initial interval
    var sliderInterval = startInterval();

    // Event listener for manual slide
    carousel.on('slide.bs.carousel', function () {
        // Clear the interval when user manually slides
        clearInterval(sliderInterval);

        // Restart the interval after a brief delay (e.g., 3 seconds)
        setTimeout(function () {
            sliderInterval = startInterval();
        }, 3000); // Adjust the delay as needed
    });
});
