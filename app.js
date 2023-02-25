// All classes
// Website focus
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    })
})
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));
/////////////////////////////////////////////////////////////
// Welcome section focus
const loadChevron = (chevron) => {
    chevron.forEach(e => {
        if (e.isIntersecting) {
            goBackWelcome.classList.remove('visible');
        } else {
            goBackWelcome.classList.add('visible');
        }
    })
}
const observerWelcomeOneElement = new IntersectionObserver(loadChevron, {
    root: null,
    rootMargin: '0px 0px 0px 0px',
    threshold: .5
})
const welcomeSectionOneElement = document.querySelector('#welcome-section')
observerWelcomeOneElement.observe(welcomeSectionOneElement)
///////////////////////////////////////////////////////////////
//Activate dark-mode and also activate the lightbulb's slash
const darkMode = () => {
    const lightbulbSlash = document.querySelector('#desactive-slash'),
        lightbulb = document.querySelector('#desactive');
    document.documentElement.classList.toggle('dark-mode');
    lightbulbSlash.classList.toggle('dark-mode');
    lightbulb.classList.toggle('dark-mode');
}
//////////////////////////////////////////////////////////////
const languages = document.querySelector('.languages-bar'),
    conf = document.querySelector('#conf'),
    confResponsive = document.querySelector('#conf-responsive'),
    flags = document.querySelector('.flags')

const openConfBar = () => {
    if (languages.style.display == "initial") {
        cerrarConfBar()
    } else {
        languages.style.display = "initial"
    }
};
const cerrarConfBar = () => {
    languages.classList.add("close")
    setTimeout(() => {
        languages.classList.remove("close")
        languages.style.display = "none"
    }, 200)
}
window.addEventListener("click", e => {
    if (e.target != conf && e.target != languages && e.target != confResponsive) {
        cerrarConfBar()
    }
    //////////////Navbar responsive
    if (e.target != iconBars && e.target != navbarResponsive && e.target != confResponsive && e.target != navbar
        && e.target != barsButton) {
        closeNavBarResponsive()
    }
})
//////////////Using navbar responsive
const navbar = document.querySelector('#navbar'),
    barsButton = document.querySelector('#navbar-responsive-bars'),
    navbarResponsive = document.querySelector('.navbar-responsive'),
    lightbulb = document.querySelector(".lightbulb"),
    iconBars = document.querySelector('#icon-bars')
barsButton.addEventListener('click', e => {
    if (navbarResponsive.style.display == "initial") {
        closeNavBarResponsive()
    } else {
        navbarResponsive.style.display = "initial"
        lightbulb.style.top = "35vh"
    }
})
const closeNavBarResponsive = () => {
    navbarResponsive.classList.add("close-navbar-responsive")
    lightbulb.style.top = "18vh"
    setTimeout(() => {
        navbarResponsive.classList.remove("close-navbar-responsive")
        navbarResponsive.style.display = "none"
    }, 400)
}
//////////////////////////////////////////////////////////////
const flagsElement = document.getElementById('flags'),
    textsToChange = document.querySelectorAll('[data-section]');
const changeLanguage = async (language) => {
    const requestJson = await fetch(`./languages/${language}.json`),
        texts = await requestJson.json();
    for (const textToChange of textsToChange) {
        const section = textToChange.dataset.section,
            value = textToChange.dataset.value,
            subvalue = textToChange.dataset.subvalue;
        // condicional dependiendo de la etiqueta, por si tiene 3 dataset
        if (subvalue) {
            textToChange.innerHTML = texts[section][value][subvalue]
        } else {
            textToChange.innerHTML = texts[section][value]
        }
    }
}
flagsElement.addEventListener('click', (e) => {
    const language = e.target.parentElement.parentElement.dataset.language,
        languageParent = e.target.parentElement.dataset.language;
    if (language != undefined) {
        changeLanguage(language);
    } else if (languageParent != undefined) {
        changeLanguage(languageParent);
    } else {
        changeLanguage(e.target.dataset.language);
    }
})
//////////////////////////////////////////////////////////////

