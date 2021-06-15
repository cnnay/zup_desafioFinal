function gerarNumeroAleatorio(max) {
    return Math.floor(Math.random() * max);
    //função que retorna numero aleatório
}

let var1 = gerarNumeroAleatorio(671);
let var2 = gerarNumeroAleatorio(671);
let var3 = gerarNumeroAleatorio(671);
let var4 = gerarNumeroAleatorio(671);

// declaração de variáveis para os numeros aleatórios

let personagens = [var1, var2, var3, var4]
// Array de numeros aleatórios

personagens.forEach(function(item) {
    fetch('https://rickandmortyapi.com/api/character/' + item, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            "Content-type": 'application/json'
        } // chamada na Api
    })
    .then(response => response.json())
    .then(function(result) {
        let container = document.querySelector('#container');

        container.innerHTML += `<div>
        <img src=` + result.image + `>  
        <p> `+ 'Nome:  ' + result.name + `</p>
        <p> ` + 'Especie:  ' + result.species + `</p>
        <br>
        </div>`;

        //resposta da Api manipulando uma tag HTML
    })    
});