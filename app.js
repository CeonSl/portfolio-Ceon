// All classes

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {

        }
    })
})

const hiddenElements = document.querySelectorAll('.hidden');

hiddenElements.forEach((el) => observer.observe(el));

//////////////////////////////////////////////////////////////

const observerWelcome = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            goBackWelcome.classList.remove('visible');
            console.log('entre true');
        } else {
            goBackWelcome.classList.add('visible');
            console.log('entre false');
        }
    })
})

const goBackWelcome = document.querySelector('#goBackWelcome')

const welcomeSection = document.querySelectorAll('#welcome-section')
welcomeSection.forEach((el) => observerWelcome.observe(el))


///////////////////////////////////////////////////////////////

const darkMode = () => {
    document.documentElement.classList.toggle('dark-mode');
    let lightbulbSlash = document.querySelector('#desactive-slash');
    let lightbulb = document.querySelector('#desactive');
    lightbulbSlash.classList.toggle('dark-mode');
    lightbulb.classList.toggle('dark-mode');
}


let iconLightBulb = document.createElement('i')



//////////////////////////////////////////////////////////////
let languages = document.querySelector('.languages-bar');
let conf = document.querySelector('#conf')
let confResponsive = document.querySelector('#conf-responsive')
let flags = document.querySelector('.flags')

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
        console.log(e.target);
    }
})

//////////////Using navbar responsive

let navbar = document.querySelector('#navbar') 
let barsButton = document.querySelector('#navbar-responsive-bars')
let navbarResponsive = document.querySelector('.navbar-responsive')
let lightbulb = document.querySelector(".lightbulb")
let iconBars = document.querySelector('#icon-bars')

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

window.addEventListener("click", e => {
    if (e.target != iconBars && e.target != navbarResponsive && e.target != confResponsive && e.target != navbar
        && e.target != barsButton) {
        closeNavBarResponsive()
        console.log(e.target);
    }
})

//////////////////////////////////////////////////////////////

const flagsElement = document.getElementById('flags');

const textsToChange = document.querySelectorAll('[data-section]')

const changeLanguage = async (language) => {
    const requestJson = await fetch(`./languages/${language}.json`)
    const texts = await requestJson.json()

    for (const textToChange of textsToChange) {
        const section = textToChange.dataset.section
        const value = textToChange.dataset.value
        const subvalue = textToChange.dataset.subvalue

        // condicional dependiendo de la etiqueta, por si tiene 3 dataset
        if (subvalue) {
            textToChange.innerHTML = texts[section][value][subvalue]
        } else {
            textToChange.innerHTML = texts[section][value]
        }
    }
}

flagsElement.addEventListener('click', (e) => {
    let language = e.target.parentElement.parentElement.dataset.language;
    let languageParent = e.target.parentElement.dataset.language;
    if (language != undefined) {
        changeLanguage(language);
    } else if (languageParent != undefined) {
        changeLanguage(languageParent);
    } else {
        changeLanguage(e.target.dataset.language);
    }
})

//////////////////////////////////////////////////////////////

