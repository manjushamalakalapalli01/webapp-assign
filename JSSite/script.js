// Function to change text or images on button click
function changeContent(buttonId, contentId, newContent) {
    const button = document.getElementById(buttonId);
    const content = document.getElementById(contentId);
  
    button.addEventListener('click', () => {
      content.innerHTML = newContent;
    });
  }
  
  // Change text or images on button click
  changeContent('changeTextButton', 'textSection', 'I am student at OC.');
  changeContent('changeImageButton', 'imageSection', '<img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.visitokc.com%2Flisting%2Foklahoma-christian-university%2F443%2F&psig=AOvVaw0VO51UjNEGzEz6X9xUuC8u&ust=1715391159412000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCICqu6P4gYYDFQAAAAAdAAAAABAE" alt="New Image">');
  changeContent('changeMultipleButton', 'textSection', 'This text has been changed again.');
  changeContent('changeMultipleButton', 'imageSection', '<img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fvisitedmondok.com%2Floc%2F330%2Foklahoma-christian-university.htm&psig=AOvVaw2KQAqTUhItx71AywShQVlU&ust=1715391227855000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCNDI8bn4gYYDFQAAAAAdAAAAABAD" alt="Another New Image">');
  
  // Function to validate input field
  function validateInput() {
    const inputField = document.getElementById('inputField');
    const errorMessage = document.getElementById('errorMessage');
  
    if (inputField.value.trim() === 'secret') {
      errorMessage.textContent = 'Input is correct!';
    } else {
      errorMessage.textContent = 'Incorrect input. Please try again.';
    }
  }
  
  // Accordion functionality
  const accordionItems = document.querySelectorAll('.accordion-item');
  
  accordionItems.forEach((item) => {
    const header = item.querySelector('.accordion-header');
    const content = item.querySelector('.accordion-content');
  
    header.addEventListener('click', () => {
      content.classList.toggle('active');
    });
  });



 