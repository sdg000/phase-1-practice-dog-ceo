document.addEventListener('DOMContentLoaded', function(){
    fetchImage()

})

let dogsArray = []

function fetchImage(){
    
    //fetching dog images from url and parsing response as json
    fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(function(response){
        return response.json()
    })

    //adding image results as array elements.
    .then(function(results){
        for(image of results){
            addimage(image)
        }

    })
}

//placing image url responses in document 
function addimage(dogUrl){
    let imageHolder = document.querySelector("#dog-image-container")
    let img = document.createElement('img')
    img.src = dogUrl
    imageHolder.append(img)
}








function colorChange(event){
    event.target.style.co

}