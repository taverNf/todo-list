/*  PROJETO FEITO EM CONJUNTO COM OS VÍDEOS:
    https://www.youtube.com/watch?v=IuCZPOk5EXo - AULA 4
    https://www.youtube.com/watch?v=RjfhRZXB_U8&t=2s - AULA 5
    AMBOS VÍDEOS DO 'CURSO DE JS DO ZERO', DA RAFAELLA BALLERINI */

let tarefas = []

const message = document.getElementById('message')


function addTarefa(){
    const input = document.getElementById('input')
    let tarefa = input.value
    
    if (tarefa.trim() !== ''){
        tarefas.push(tarefa)
        renderTarefa()

        message.textContent = 'Tarefa adicionada com sucesso!'
        showMessage()
    } else {
        message.textContent = 'Digite alguma tarefa.'
        showMessage()
    }

    input.value = ''
}

function renderTarefa(){
    // Reseta os itens da lista
    const list = document.getElementById('lista')
    list.textContent = ''

    for(let i = 0; i < tarefas.length; i++){
        let newTarefa = document.createElement('li')
        newTarefa.textContent = tarefas[i]


        let btnRemover = document.createElement('button')
        btnRemover.className = 'remove'
        btnRemover.innerHTML = '<i class="fa-solid fa-trash"></i>'
        // Puxando a função de remover
        btnRemover.onclick = () => removerTarefa(i)


        let btnEditar = document.createElement('button')
        btnEditar.className = 'edit'
        btnEditar.innerHTML = '<i class="fa-solid fa-pen-to-square"></i>'
        // Puxando a função de editar
        btnEditar.onclick = () => editarTarefa(i)

        let btnBox = document.createElement('div')
        btnBox.className = 'btn-box'


        btnBox.appendChild(btnEditar)
        btnBox.appendChild(btnRemover)
        newTarefa.appendChild(btnBox)
        list.appendChild(newTarefa)
    }
}

function removerTarefa(i) {
    tarefas.splice(i, 1)
    renderTarefa()
    message.textContent = 'Tarefa removida com sucesso!'
    showMessage()
}

function editarTarefa(i){
    let tarefaEditada = prompt('Edite a tarefa:', tarefas[i])
    
    if (tarefaEditada.trim() !== ''){
        tarefas[i] = tarefaEditada
        renderTarefa()
        message.textContent = 'Tarefa editada com sucesso!'
        showMessage()
    } else {
        alert('Tarefa não digitada')
        message.textContent = 'Erro ao editar tarefa'
        showMessage()
    }
}

function clearTarefas(){
    if (tarefas.length !== 0){
        tarefas.length = 0
        renderTarefa()
        message.textContent = 'Lista limpa com sucesso!'
        showMessage()
    } else {
        message.textContent = 'Sem tarefas para limpar.'
        showMessage()
    }
}

function showMessage(){
    message.style.opacity = 1
}