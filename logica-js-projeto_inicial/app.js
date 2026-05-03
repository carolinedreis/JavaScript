window.alert('Boas Vindas ao jogodo número secreto');

function userNumber(chute){
    const numeroSecreto = Math.floor(Math.random() * 10);
    if(numeroSecreto == chute) {
        window.alert('Isso ai! Você descobriu o número secreto. ');
    } else {
        window.alert("Tente novamente!");
    }
}

let chute = prompt('Escolha um número etre 1 e 10');
userNumber(chute);