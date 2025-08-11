document.getElementById("appointmentForm")?.addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let doctor = document.getElementById("doctor").value;
    let date = document.getElementById("date").value;
    let time = document.getElementById("time").value;

    if (!name || !email || !phone || !doctor || !date || !time) {
        alert("All fields are required!");
        return;
    }

    let phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(phone)) {
        alert("Phone number must be exactly 10 digits!");
        return;
    }

    let selectedDate = new Date(date);
    if (selectedDate.getDay() === 0) {
        alert("No bookings allowed on Sundays!");
        return;
    }

    // Redirect to confirmation page
    window.location.href = "confirmation.html";
});
