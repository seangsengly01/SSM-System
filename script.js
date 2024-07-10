function showTime() {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    // Format the time
    let time = hours + ":" + minutes + ":" + seconds;

    // Display the time in the clock div
    document.getElementById("clock").innerHTML = time;

    // Format the date
    let formattedDate = formatDate(date);

    // Display the date in the date div
    document.getElementById("date").innerHTML = formattedDate;
}

function formatDate(date) {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let day = date.getDate();
    let monthIndex = date.getMonth();
    let year = date.getFullYear();

    return months[monthIndex] + " " + day + ", " + year;
}

// Call the showTime function every second
setInterval(showTime, 1000);
