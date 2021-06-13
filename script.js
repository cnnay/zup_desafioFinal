fetch('https://rickandmortyapi.com/api/character', {
    method: 'GET',
    Headers: {
        Accept: 'application/json',
        "Content-type": 'application/json'
    } 
})
.then(response => response.json())
.then(function(json){

    let container = document.querySelector('.container');
    console.log(json)

    json.results.map(function(results){
        

        container.innerHTML +=`
        <div> 
            <img src=`+ results.image + `> 
            <p> `+results.name + `</p>
            <p> `+results.species + `</p>
            <p> `+results.status + `</p>
        </div>
        `;


    })

    

})
