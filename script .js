const container = document.querySelector('.container');

const cloneContainer = container.cloneNode(true);
cloneContainer.id = 'dark-container';
document.body.appendChild(cloneContainer);
cloneContainer.classList.remove('active');


const toggleIcons = document.querySelectorAll('.toggle-icon');
const icons = document.querySelectorAll('.toggle-icon i');
const darkcontainer = document.querySelector('#dark-container');

const darkContainerImg = cloneContainer.querySelector('#dark-container .home-img img');

darkContainerImg.src = 'Manimain.PNG';

toggleIcons.forEach(toggle =>{
    toggle.addEventListener('click', () =>{

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