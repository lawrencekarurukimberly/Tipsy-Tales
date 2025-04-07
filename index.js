document.getElementById("ageform").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevents form submission

    let age = parseInt(document.getElementById("age").value);

    if (!age || age < 0) {
      alert("⚠️ Please enter a valid age.");
    } else if (age >= 18) {
      alert("✅ Access Granted! Welcome.");
      window.location.href = "molly.html"; // Redirect to main page
    } else {
      alert("❌ Sorry, you must be at least 18 years old.");
    }
  });
