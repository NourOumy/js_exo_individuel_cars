// Créer l'input pour prendre ce que vous voulez ajouter à la liste des courses
// Prévoir un élément HTML qui va recevoir les éléments que vous allez ajouter à votre liste des courses
// Au click, quand vous "ajoutez" un élément à votre liste, il apparaît dans la liste et le champ input se ré-initialise
// Vous ajouterez et rangerez ces éléments dans un joli tableau : )
// et c'est en faisant une boucle sur ce joli tableau que vous allez re-générer à chaque fois la liste des courses mise à jour : )



let toadd = document.querySelector(".text")
let submit = document.querySelector(".submit")
let liste = document.querySelector(".liste")
let nothing = document.querySelector(".nothing")

function addtolist (){
    nothing.innerHTML= "A acheter :"
    liste.innerHTML+=`
<div><p>${toadd.value}</p><span class="delete" href="#">❌</span> </div>
`
toadd.value= ""
}

submit.addEventListener("click", function(){
    addtolist()
    let allspans = document.querySelectorAll("span")

allspans.forEach(function(allspan){
    allspan.addEventListener("click", function(){
        allspan.parentElement.remove()
        allspans = document.querySelectorAll("span");

          if (allspans.length ==0) {
            nothing.innerHTML=" Il n'y a rien dans votre list pour le moment"

          }
    })
})
}
)

// submit.addEventListener("keydown", function(event){
//     if (event.keyCode === 13) {
//         addtolist()
//     }
// })

toadd.addEventListener("keyup", function(event) {
    // event.preventDefault();
    if (event.key === "Enter") {
        submit.click();
    }
})

