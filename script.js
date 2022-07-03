const navOpen = document.querySelector('.nav__open');
const navClose = document.querySelector('.nav__close');
const nav = document.querySelector('.nav');
const overlay = document.querySelector('.body__overlay');

const features = document.querySelector('.features__a');
const company = document.querySelector('.company__a');

const featuresUl = document.querySelector('.features__ul');
const companyUl = document.querySelector('.company__ul');

const featuresUp = document.querySelector('.features__close');
const featuresDown = document.querySelector('.features__open');

const companyUp = document.querySelector('.company__close');
const companyDown = document.querySelector('.company__open');

navOpen.addEventListener('click', () => {
    nav.classList.add('nav__show');
    navOpen.classList.add('hide');
    navClose.classList.remove('hide');
    overlay.classList.remove('hide');
    
    const myTimeout = setTimeout(overlayAdd, 30)

    function overlayAdd () {
        overlay.classList.add('overlay__on');
    }

    
})

navClose.addEventListener('click', () => {
    nav.classList.remove('nav__show');
    navOpen.classList.remove('hide');
    navClose.classList.add('hide');
    overlay.classList.remove('overlay__on');

    const myTimeout = setTimeout(overlayRemove, 300)

    function overlayRemove () {
        overlay.classList.add('hide');
        featuresUl.classList.add('hide');
        companyUl.classList.add('hide');
        featuresUp.classList.add('hide');
        companyUp.classList.add('hide');
        featuresDown.classList.remove('hide');
        companyDown.classList.remove('hide');
    }
})

function menuToggle (listItem, ul, up, down) {
    listItem.addEventListener('click', () => {
        ul.classList.toggle('hide');
        up.classList.toggle('hide');
        down.classList.toggle('hide');
    })
}

menuToggle (features, featuresUl, featuresUp, featuresDown);
menuToggle (company, companyUl, companyUp, companyDown);