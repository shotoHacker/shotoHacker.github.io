
// modal
const contatti = document.querySelector('#contatti');
const orario = document.querySelector('#orario');
const contattiNavbar = document.querySelector('#contatti_navbar');
const orarioNavbar = document.querySelector('#orario_navbar');
const modalBgContatti = document.querySelector('#modal_background_contatti');
const modalBgOrario = document.querySelector('#modal_background_orario');
const modalContatti = document.querySelector('#modal_contatti');
const modalOrario = document.querySelector('#modal_orario');


contatti.addEventListener('click' , () => {
    modalContatti.classList.add('is-active');
});

contattiNavbar.addEventListener('click' , () => {
    modalContatti.classList.add('is-active');
});

orario.addEventListener('click' , () => {
    modalOrario.classList.add('is-active');
});

orarioNavbar.addEventListener('click' , () => {
    modalOrario.classList.add('is-active');
});

modalBgContatti.addEventListener('click' , () => {
    modalContatti.classList.remove('is-active');
});

modalBgOrario.addEventListener('click' , () => {
    modalOrario.classList.remove('is-active');
});




