/*NAVBAR ANIMATION*/
function navBar(){
    let hambs = document.getElementById('hambs')
    let navItens = document.getElementById('navItens')

    hambs.classList.toggle('active')
    navItens.classList.toggle('active')  
}

const menuHambs = document.querySelector('#hambs')

menuHambs.addEventListener('click', navBar)


function closeNavContact(){
    let navBarContact = document.querySelector('.navBarContact')
    let hambs = document.getElementById('hambs')
    let navItens = document.getElementById('navItens')

    hambs.classList.remove('active')
    navItens.classList.remove('active')
}

const navContact = document.querySelector('.navBarContact')

navContact.addEventListener('click', closeNavContact)


/*SKILLS SCROLL ANIMATION*/
const skills = document.querySelectorAll('.skillBoxes')

window.addEventListener('scroll', checkSkills)

checkSkills()

function checkSkills(){
    const triggerBottom = window.innerHeight;
    
    skills.forEach((skill) =>{
        const skillTop = skill.getBoundingClientRect().top

        if(skillTop < triggerBottom){
            skill.classList.add('show')
        }else{
            skill.classList.remove('show')
        }
    })
}