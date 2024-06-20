// Wait for the DOM content to load
document.addEventListener("DOMContentLoaded", function () {
    // Get necessary elements from the DOM
    const numberBankOutput = document.querySelector("#numberBank output");
    const sortOneButton = document.querySelector("#sortOne");
    const sortAllButton = document.querySelector("#sortAll");
  
    const addNumberButton = document.querySelector("button");
    const numberInput = document.querySelector("input");
  
    const oddsOutput = document.querySelector("#odds output");
    const evensOutput = document.querySelector("#evens output");
  
    const numberBank = []; // Array to store entered numbers
  
    // Event listener for the "Add Number" button
    addNumberButton.addEventListener("click", function (event) {
      event.preventDefault();
      const number = parseFloat(numberInput.value);
      
      // Check if the entered value is a number
      if (!isNaN(number)) {
        numberBank.push(number);
        numberBankOutput.textContent = numberBank.join(", "); // Display numbers in the number bank
      }
      numberInput.value = ""; // Clear input field
    });
  
    // Event listener for the "Sort 1" button
    sortOneButton.addEventListener("click", function () {
      if (numberBank.length > 0) {
        // Remove the first number from the number bank
        const firstNumber = numberBank.shift();
  
        // Place the number in the odd or even category
        if (firstNumber % 2 === 0) {
          evensOutput.textContent += firstNumber + ", "; // Update even numbers output
        } else {
          oddsOutput.textContent += firstNumber + ", "; // Update odd numbers output
        }
        numberBankOutput.textContent = numberBank.join(", "); // Display updated number bank
      }
    });
  
    // Event listener for the "Sort All" button
    sortAllButton.addEventListener("click", function () {
      // Move all numbers from the number bank to odd or even category
      while (numberBank.length > 0) {
        const currentNumber = numberBank.shift();
        if (currentNumber % 2 === 0) {
          evensOutput.textContent += currentNumber + ", "; // Update even numbers output
        } else {
          oddsOutput.textContent += currentNumber + ", "; // Update odd numbers output
        }
      }
      numberBankOutput.textContent = ""; // Clear the number bank output
    });
  });
  