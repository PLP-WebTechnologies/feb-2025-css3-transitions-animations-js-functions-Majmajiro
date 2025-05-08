// Function to store preferences in localStorage
function storeUserPreferences(preferenceKey, preferenceValue) {
    localStorage.setItem(preferenceKey, preferenceValue);
  }
  
  // Function to retrieve preferences from localStorage
  function getUserPreference(preferenceKey) {
    return localStorage.getItem(preferenceKey);
  }
  
  // Function to switch themes
  function switchTheme() {
    document.body.classList.toggle("dark-theme");
    const newTheme = document.body.classList.contains("dark-theme") ? "dark" : "light";
    storeUserPreferences("theme", newTheme);
  }
  
  // Function to display personalized greeting
  function showGreeting() {
    const userName = prompt("Enter your name:");
    const greetingMessage = document.getElementById("greetingMessage");
    greetingMessage.innerText = `Hello, ${userName}! Welcome to the interactive page.`;
    storeUserPreferences("userName", userName);
  }
  
  // On button click, trigger animation and greeting
  document.getElementById("myButton").addEventListener("click", function () {
    // Add class to trigger animation
    this.classList.add("clicked");
  
    // Store the button click state in localStorage
    storeUserPreferences("buttonClicked", "true");
  
    // Trigger animation after a short delay (for smoothness)
    setTimeout(() => {
      this.classList.remove("clicked");
    }, 500); // Remove class after animation duration
  
    // Show personalized greeting
    showGreeting();
  });
  
  // Check and apply user preferences on page load
  window.onload = function () {
    const theme = getUserPreference("theme");
    const buttonClicked = getUserPreference("buttonClicked");
    const userName = getUserPreference("userName");
  
    // Apply stored theme
    if (theme === "dark") {
      document.body.classList.add("dark-theme");
    }
  
    // Display stored greeting message
    if (userName) {
      const greetingMessage = document.getElementById("greetingMessage");
      greetingMessage.innerText = `Hello, ${userName}! Welcome back!`;
    }
  
    // Show a message if the button was clicked before
    if (buttonClicked) {
      alert("Welcome back, the button was clicked before!");
    }
  };
  