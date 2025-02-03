//Define the target end date
const endDate = "10 March 2025 22:00:00";

// Get references to HTML elements
const endDateElement = document.getElementById("end-date");
const daysElement = document.getElementById("days");
const hoursElement = document.getElementById("hours");
const minutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");

// Set the end date in the UI
endDateElement.textContent = endDate;

//Function to update the countdown
function updateCountdown() {
    const now = new Date(); // current date
    const targetDate = new Date(endDate); //Convert the target date into a Date object
    const difference = targetDate - now; //Calculate the time differance

    // Check if the countdown is over
    if (difference < 0) {
        clearInterval(interval);
        document.querySelector(".title").textContent = "We're Live Now!";
        return;
    }

    //Convert milliseconds to days, hours, minutes, and seconds
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / (1000 * 60)) % 60);
    const seconds = Math.floor((difference / 1000) % 60);

    daysElement.value = days;
    hoursElement.value = hours;
    minutesElement.value = minutes;
    secondsElement.value = seconds;
}

// Update countdown every second
const interval = setInterval(updateCountdown, 1000);
updateCountdown();
