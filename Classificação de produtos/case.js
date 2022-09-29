const selecionarProdutos = function (opcao) {
    let resultado = document.getElementById('resultado')

    switch (opcao) {

        case 'Camiseta polo':
            console.log('Opção selecionada é Camiseta polo')
            resultado.innerHTML = "vestimenta"
            break;
        case 'Banana':
            console.log('Opção selecionada é Banana')
            resultado.innerHTML = "Alimento Perecível"
            break
        case 'Óleo':
            console.log('Opção selecionada é Óleo')
            resultado.innerHTML = "Alimento não-perecível"
            break;
        case 'Esponja':
            console.log('Opção selecionada é Esponja')
            resultado.innerHTML = "Produto de limpeza"
            break;
        case 'Shorts da nike':
            console.log('Opção selecionada é Shorts da nike')
            resultado.innerHTML = "Vestimenta"
            break;
        case 'sabonte':
            console.log('Opção selecionada é sabonete')
            resultado.innerHTML = "Poduto de limpeza"
            break;
    }
}