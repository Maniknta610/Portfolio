const container = document.querySelector('.container');

// Clone the container for dark mode
const cloneContainer = container.cloneNode(true);
cloneContainer.id = 'dark-container';
document.body.appendChild(cloneContainer);
cloneContainer.classList.remove('active');

// Select toggle icons and moon/sun icons
const toggleIcons = document.querySelectorAll('.toggle-icon');
const icons = document.querySelectorAll('.toggle-icon i');

// Safely update image inside dark container if it exists
const darkContainerImg = cloneContainer.querySelector('.home-img img');
if (darkContainerImg) {
  darkContainerImg.src = 'Manimain.PNG'; // Use your actual image path
}

// Toggle dark/light mode
toggleIcons.forEach(toggle => {
  toggle.addEventListener('click', () => {
    toggle.classList.add('disabled');
    setTimeout(() => {
      toggle.classList.remove('disabled');
    }, 1500);

    icons.forEach(icon => {
      icon.classList.toggle('fa-sun');
      icon.classList.toggle('fa-moon');
    });

    container.classList.toggle('active');
    cloneContainer.classList.toggle('active');
  });
});