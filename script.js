$(document).ready(function() {
    $("#registrationForm").submit(function(event) {
        event.preventDefault(); // Prevent default form submission

        // Get the values from the form
        var name = $("#name").val();
        var email = $("#email").val();
        var phone = $("#phone").val();

        // Check for empty values before submission
        if (name === "" || email === "" || phone === "") {
            alert("All fields are required!");
            return;
        }

        // If validation is successful, submit the form
        // Note: Netlify handles form submission once the form is submitted normally
        // No need for an AJAX request, Netlify will handle it automatically

        // Optionally, show a success message and reset the form
        $("#result").html("<p>Thank you for your submission, " + name + "!</p>");
        
        // Reset form after submission
        $("#registrationForm")[0].reset();
    });
});
