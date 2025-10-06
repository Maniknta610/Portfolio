
const container = document.querySelector('.container');
const cloneContainer = container.cloneNode(true);
cloneContainer.id = 'dark-container';
document.body.appendChild(cloneContainer);
cloneContainer.classList.remove('active');

const toggleIcons = document.querySelectorAll('.toggle-icon');
const icons = document.querySelectorAll('.toggle-icon i');
const darkContainerImg = cloneContainer.querySelector('.home-img img');
darkContainerImg.src = 'Manimain.PNG';

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

const navLinks = document.querySelectorAll('.navbar a');

navLinks.forEach(link => {
  link.addEventListener('click', function () {
    navLinks.forEach(nav => nav.classList.remove('active'));
    this.classList.add('active');
  });
});