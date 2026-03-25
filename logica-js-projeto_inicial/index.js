const apiRequisicao = (urlAPI) => {
    fetch(urlAPI).
    then(response => response.json()).
    then(data => {
        const lista_ordenada = document.getElementById('lista_ordenada');
        const arrayData = Object.values(data);
        arrayData.forEach(user => {
            console.log(`Id: ${user.id}, title: ${user.title}, completed: ${user.completed}`);
            const lista = document.createElement('li');
            lista.textContent = `Id: ${user.id}, title: ${user.title}, completed: ${user.completed}`;
            lista_ordenada.appendChild(lista);
        })
    }).catch(error => {
        console.log("Erro ao buscar os dados do servidor: " + error);
    })
};

const url = "https://jsonplaceholder.typicode.com/todos";
apiRequisicao(url);