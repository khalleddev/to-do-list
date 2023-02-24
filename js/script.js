let contador = 0
let input = document.getElementById('inputTarefa')
let btnAdd = document.getElementById('btn-add')
let main = document.getElementById('areaLista')

function addTarefa() {
    // Pegar o valor digitado no input
    let valorInput = input.value

    // Se não for vazio, nem nulo, nem indefinido
    if((valorInput!=="") && (valorInput!==null) && (valorInput!==undefined)) {
        
        ++contador

        let novoItem = `<div id="${contador}" class="item">
        <div id="icone_${contador}" onclick="marcarTarefa(${contador})" class="item-icone">
            <span class="iconify" data-icon="mdi-text-box-multiple-outline"></span>
        </div>
        <div onclick="marcarTarefa(${contador})" class="item-nome">
            ${valorInput}
        </div>
        <div class="item-botao">
            <button onclick="deletar(${contador})" class="delete"><span class="iconify" data-icon="mdi-delete"></span>Deletar</button>
        </div>
    </div>`

        // Adicionar novo item no main
        main.innerHTML += novoItem

        // Zerar o imput
        input.value = ""
        input.focus()
    }
}

function deletar(id) {
    var tarefa = document.getElementById(id)
    tarefa.remove()
}

function marcarTarefa(id) {
    var item = document.getElementById(id)
    var classe = item.getAttribute('class')
    console.log(classe)

    if(classe=="item") {
        item.classList.add('clicado')

        var icone = document.getElementById('icone_' + id)
        icone.classList.remove('mdi-circle-outline')
        icone.classList.add('mdi-check-circle')

        item.parentNode.appendChild(item)

    } else {
        item.classList.remove('clicado')

        /*
        var icone = document.getElementById('icone_' + id)
        icone.classList.remove('mdi-check-circle')
        icone.classList.add('mdi-circle-outline')
        */
    }
}

input.addEventListener("keyup", function(event) {
    
    // Se teclou ENTER(13)
    if (event.keyCode === 13) {
        event.preventDefault()
        btnAdd.click()
    }

}) 