const elementsDropdown = document.getElementsByClassName('dropdown');
const elementsWrapperDropdown = document.getElementsByClassName('wrapper-dropdown');

elementsDropdown[0].classList.toggle('active');

function addSelectedClassIfActive() {
    elementsDropdown[0].classList.toggle('active');
}

elementsWrapperDropdown[0].onclick = addSelectedClassIfActive;



