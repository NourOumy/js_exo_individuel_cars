// variables

let carsDiv = document.querySelector(".cars"),
    allcar = document.querySelectorAll(".car"),
    winner = document.querySelector(".winner"),
    testdrive = winner.querySelector ('img'),
    compteur = document.querySelector('.compteur'),
    decompte = 5,
    body = document.querySelector("body"),
    wrapper = document.querySelector(".wrapper")
    titles = document.querySelector(".titles")

// event click pas gagnant

    allcar.forEach(function(car){
    car.addEventListener("click",function(){
        decompte --

        let tryImg = car.querySelector('img')

        tryImg.src = "images/try.jpeg"

        compteur.innerHTML=decompte
        if(decompte==0){
            wrapper.style.display= "none"
            body.innerHTML += `<h1>Vous avez épuisé toutes vos chances</h1>`   
        }
})
})

// functions

function dispnone(element){
    element.style.display ="none"
}
function changeWidth (cible,mesure){
    cible.style.width = `${mesure}px`
}

// event click gagnant

winner.addEventListener("click",function(){
    
    testdrive.src = "images/testdrive.jpg"
    allcar.forEach(function(car){
        dispnone(car)
    })
    carsDiv.style.display="inline"
    dispnone(titles)
    changeWidth(winner,400)
    changeWidth(testdrive,400)
    body.innerHTML+=`
    <h1>Vous avez gagné !</h1>`
})


