// Event listener with the id 'validateBtn' to trigger the function validateSyntax() when clicked
document.getElementById('validateBtn').addEventListener('click', validateSyntax);

// The function that validates the syntax of user input
function validateSyntax() {
    // Trim the input value to remove leading and trailing whitespaces to not mistakenly invalidate the input
    let input = document.getElementById('petInput').value.trim();
    
    // Where the validation result will be displayed
    let resultElement = document.getElementById('result');

    //When the input is empty
    if (input === '') {
        // If input is empty, display an error message and apply the 'invalid' CSS class
        resultElement.innerText = 'Input cannot be empty';
        resultElement.className = 'invalid';
        return; // Exit the function early
    }

    // Check if input matches the pattern 'pet_' followed by a four-digit year and then any combination of alphabetic characters, underscores, dashes, and spaces
    if (/^pet_\d{4}[a-zA-Z\-_ ]+$/.test(input)) {
        // If input matches the pattern
        let year = input.substring(4, 8);
        let name = input.substring(8);

        // Display a success message and apply the 'valid' CSS class
        resultElement.innerText = 'Valid Syntax';
        resultElement.className = 'valid';
    } else {
        // If input doesn't match the pattern, display an error message and apply the 'invalid' CSS class
        resultElement.innerText = 'Invaild Syntax';
        resultElement.className = 'invalid';
    }
}
