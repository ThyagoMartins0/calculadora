function Calculadora(){
    const operacao= prompt('Digite a operação desejada:\n1 - Soma\n2 - Subtração\n3 - Multiplicação\n4 - Divisãoreal(/)\n 5- Divisão Inteira(//)\n 6- Potenciação(**)');

    if (!operacao || operacao  > 7 ) {
        alert('Opção inválida!');
        Calculadora();
    }
     else {
    let n1 = Number(parseFloat(prompt('Digite o primeiro número: ')));
    let n2 = Number(parseFloat(prompt('Digite o segundo número: ')));
    let resultado ;

function soma(){
    let resultado = n1 + n2;
    alert(`${n1} + ${n2} = ${resultado}`);
    novaOperacao();
}
function subtracao(){
    let resultado = n1 - n2;
    alert(`${n1} - ${n2} = ${resultado}`);
    novaOperacao();
}
function multiplicacao(){  
    let resultado = n1 * n2;
    alert(`${n1} * ${n2} = ${resultado}`);
    novaOperacao();
}
function divisao(){
    let resultado = n1 / n2;
    alert(`${n1} / ${n2} = ${resultado}`);
    novaOperacao();
}
function divisaointeira(){
    let resultado = n1 % n2;
    alert(`${n1} % ${n2} = ${resultado}`);
    novaOperacao();
}   
function potenciacao(){
    resultado = n1 ** n2;
    alert(`${n1} ** ${n2} = ${resultado}`);
    novaOperacao();
}

    function novaOperacao(){
        let operacao = prompt('Digite a operação desejada:\n1 - Soma\n2 - Subtração\n3 - Multiplicação\n4 - Divisão');
    
        if(opcao == 1){
            Calculadora();
        }else if (opcao == 2){
            alert('Obrigado por utilizar a calculadora!');
        }else{
            alert('Opção inválida!');  
            novaOperacao();
        }
    }
}


switch(operacao){
    case '1':
        soma();
        break;
    case '2':
        subtracao();
        break;
    case '3':
        multiplicacao();
        break;
    case '4':
        divisao();
        break;
    case '5':
        divisaointeira();
        break;
    case '6':
        potenciacao();
        break;
    default:
        alert('Opção inválida!');

    }
}
Calculadora();
