
function addSelectedClassIfActive() {
    document.getElementsByClassName('dropdown')[0].classList.toggle('active');
}

document.getElementsByClassName('wrapper-dropdown')[0].onclick = addSelectedClassIfActive;