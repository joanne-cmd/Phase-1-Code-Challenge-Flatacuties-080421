// Your code here
const  characterNav= document.querySelector("#character-bar")
 
function fetchCharacter(url) {
    fetch(url)
    .then(response => response.json())
    .then(animal => {
        showCharacter(animal)
    })
    
}
fetchCharacter("http://localhost:3000/characters")

function showCharacter(names){
    for (let name of names ){
        let span = document.createElement("span")
            span.textContent = name.name
            characterNav. appendChild(span)
        span.addEventListener("click" ,(event) =>{
            event.preventDefault()
            charactersName(name)
        })
        
    }
}
function charactersName(details){
    let p = document.querySelector("#name")
    p.textContent= details.name
    let img =document.querySelector("#image")
    img.setAttribute("src", details.image)
    img+=details.image

}

const form = document.getElementById("votes-form")
form.addEventListener("submit", (event)=>{
    event.preventDefault()
    let intialVotes =parseInt(document.querySelector("#vote-count").textContent)
    let castVote = parseInt(event.target.votes.value)
    document.querySelector("#vote-count").textContent= intialVotes + castVote
})
let button =document.querySelector("#reset-btn")
button.addEventListener("click",(e)=>{
    document.querySelector("#vote-count").textContent=0
})
const form2= document.getElementById(" character-form")
form2.addEventListener("submit", e =>{
    e.preventDefault()
    newAnimal(animal)

} )
 function newAnimal(animal){
    form2={
        "name":document.querySelector("name" ).value,
        "image":document.querySelector("image-url").value
    } 
    showCharacter(names)
    charactersName(details)
 }
 newAnimal(animal)
 let button2= document.querySelector("#enter")
 button2.addEventListener("click",event=>{
    event.preventDefault()
    document.querySelector("# character-form").value
 })