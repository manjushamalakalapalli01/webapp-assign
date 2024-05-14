document.addEventListener("DOMContentLoaded", function() {
  // Toggle home image
  const toggleImageButton = document.getElementById("toggleImageButton");
  toggleImageButton.addEventListener("click", function() {
      const homeImage = document.getElementById("home-image");
      if (homeImage.src.includes("image.isu.pub")) {
          homeImage.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1DogoOsNyMFNyc-pUZJDaCfNthoxZIB51GjEl35seZw&s";
      } else {
          homeImage.src = "https://media.licdn.com/dms/image/C4E1BAQFUJs83kln4CQ/company-background_10000/0/1584482906281/oklahoma_christian_university_cover?e=2147483647&v=beta&t=B-Xm1f1WyrFAuZZHsOWvDfOMvYa2YKQ-OuA8XoCp5Ok";
      }
  });

  // Change content of content1 section
  const change1Button = document.getElementById("change1");
  change1Button.addEventListener("click", function() {
      const content1 = document.getElementById("content1");
      content1.textContent = "I am currently studying in OC";
  });

  // Change content of content2 section
  const change2Button = document.getElementById("change2");
  change2Button.addEventListener("click", function() {
      const content2 = document.getElementById("content2");
      content2.textContent = "I like OC";
  });

  // Validate required field
  const submitButton = document.getElementById("submitButton");
  submitButton.addEventListener("click", function() {
      const requiredField = document.getElementById("required-field");
      const requiredFieldError = document.getElementById("required-field-error");
      if (requiredField.value === '3') {
          requiredFieldError.style.display = "none";
          // Show prompt for correct answer
          alert("Correct Answer!");
      } else {
          requiredFieldError.style.display = "block";
          requiredFieldError.querySelector("p").textContent = "Wrong! Please enter '3'.";
      }
  });

  // Reset content of content1 and content2 sections on "Click Here" and "Reply" button clicks
  change1Button.addEventListener("click", function() {
      const content2 = document.getElementById("content2");
      content2.textContent = "Do You Like OC?";
  });

  change2Button.addEventListener("click", function() {
      const content1 = document.getElementById("content1");
      content1.textContent = "I am Graduate Student";
  });

  // Accordion functionality
  const accordionButtons = document.querySelectorAll(".accButton");
  accordionButtons.forEach(button => {
      button.addEventListener("click", function() {
          const description = this.nextElementSibling;
          const isOpen = description.style.display === "block";
          
          // Close all descriptions
          accordionButtons.forEach(btn => {
              btn.nextElementSibling.style.display = "none";
          });
          
          // Toggle current description
          description.style.display = isOpen ? "none" : "block";
      });
  });
});
