
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

const darkMode = () => {
    document.documentElement.classList.toggle('dark-mode');
    let lightbulb = document.querySelector('#desactive');
    lightbulb.classList.toggle('dark-mode');
}


let iconLightBulb = document.createElement('i')
if(document.getElementsByClassName('dark-mode').length){
    console.log('entro true');
}else {
    console.log('entro false');
}