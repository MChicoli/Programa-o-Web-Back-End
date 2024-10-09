// 1 Fatorial de um número
function fatorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * fatorial(n - 1);
    }
}

// 2 Repetição de mensagem N vezes
function repetirMensagem(mensagem, N) {
    return mensagem.repeat(N);
}

// 3 Calculadora com validação
function calculadora(valor1, valor2, operacao) {
    switch (operacao) {
        case 'adicao':
            return valor1 + valor2;
        case 'subtracao':
            return valor1 - valor2;
        case 'multiplicacao':
            return valor1 * valor2;
        case 'divisao':
            if (valor2 === 0) {
                return null;
            }
            return valor1 / valor2;
        default:
            return null;
    }
}

// 4 Tabuada
function tabuada(n) {
    let resultados = [];
    for (let i = 1; i <= 10; i++) {
        resultados.push(n * i);
    }
    return resultados;
}

// 5 Número invertido
function inverterNumero(n) {
    return parseInt(n.toString().split('').reverse().join(''), 10);
}

// 6 Contador de vogais
function contarVogais(texto) {
    let vogais = 'aeiouAEIOU';
    let contador = 0;
    for (let i = 0; i < texto.length; i++) {
        if (vogais.includes(texto[i])) {
            contador++;
        }
    }
    return contador;
}

// 7 Verificador de sequência de parênteses e colchetes
function verificarSequencia(sequencia) {
    let pilha = [];
    for (let i = 0; i < sequencia.length; i++) {
        let char = sequencia[i];
        if (char === '(' || char === '[') {
            pilha.push(char);
        } else if (char === ')' || char === ']') {
            let ultimo = pilha.pop();
            if ((char === ')' && ultimo !== '(') || (char === ']' && ultimo !== '[')) {
                return false;
            }
        }
    }
    return pilha.length === 0;
}

// 8 Gerar lista de objetos aleatórios
function gerarObjetosAleatorios(n) {
    let nomes = ['João', 'Maria', 'Pedro', 'Ana', 'Lucas', 'Clara', 'Gabriel', 'Isabela'];
    let objetos = [];
    for (let i = 0; i < n; i++) {
        let objeto = {
            id: i + 1,
            nome: nomes[Math.floor(Math.random() * nomes.length)],
            idade: Math.floor(Math.random() * (90 - 18 + 1)) + 18
        };
        objetos.push(objeto);
    }
    return objetos;
}

// 9 Média das idades
function calcularMediaIdades(objetos) {
    let somaIdades = objetos.reduce((soma, objeto) => soma + objeto.idade, 0);
    return somaIdades / objetos.length;
}

// 10 Ordenar lista por atributo
function ordenarPorAtributo(objetos, atributo) {
    return objetos.sort((a, b) => {
        if (a[atributo] < b[atributo]) {
            return -1;
        }
        if (a[atributo] > b[atributo]) {
            return 1;
        }
        return 0;
    });
}
