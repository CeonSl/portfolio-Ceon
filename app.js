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
        if(entry.isIntersecting) {
            goBackWelcome.classList.remove('visible');
            console.log('entre true');
        }else {
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
if(document.getElementsByClassName('dark-mode').length){
    console.log('entro true');
}else {
    console.log('entro false');
}


//////////////////////////////////////////////////////////////

const openConfBar = () => {
    let conf = document.querySelector('.fa-cog')
    let languages = document.querySelector('.languages-bar');
    languages.classList.toggle('open-bar')
}

//////////////////////////////////////////////////////////////

const flagsElement = document.getElementById('flags');

const textsToChange = document.querySelectorAll('[data-section]')

const changeLanguage = async (language) => {
    const requestJson = await fetch(`./languages/${language}.json`)
    const texts = await requestJson.json()

    for(const textToChange of textsToChange) {
        const section = textToChange.dataset.section
        const value = textToChange.dataset.value
        const subvalue = textToChange.dataset.subvalue

        if(subvalue) {
            textToChange.innerHTML = texts[section][value][subvalue]
        } else {
            textToChange.innerHTML = texts[section][value]
        }
    }
}

flagsElement.addEventListener('click', (e) => {
    changeLanguage(e.target.parentElement.dataset.language);
})

//////////////////////////////////////////////////////////////

