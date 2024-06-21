function showSection(sectionId) {
    document.querySelectorAll('.section').forEach(section => {
        section.style.display = 'none';
    });
    document.getElementById(sectionId).style.display = 'block';
}

function registrarTransacao() {
    let valor = parseFloat(document.getElementById('valorTransacao').value);
    if (!isNaN(valor)) {
        // Simulação de registro da transação
        alert(`Transação de R$ ${valor.toFixed(2)} registrada com sucesso!`);
    } else {
        alert('Por favor, insira um valor válido.');
    }
}

function gerarRelatorio() {
    // Simulação de geração de relatório financeiro
    document.getElementById('relatorioFinanceiro').innerText = 'Relatório financeiro gerado!';
}

function cadastrarEntradaProduto() {
    let nomeProduto = document.getElementById('nomeProdutoEntrada').value;
    let quantidade = parseInt(document.getElementById('quantidadeEntrada').value);
    if (nomeProduto && quantidade > 0) {
        // Simulação de cadastro de entrada de produto
        alert(`Entrada de ${quantidade} unidades do produto "${nomeProduto}" cadastrada com sucesso!`);
    } else {
        alert('Por favor, preencha todos os campos corretamente.');
    }
}

function registrarSaidaProduto() {
    let nomeProduto = document.getElementById('nomeProdutoSaida').value;
    let quantidade = parseInt(document.getElementById('quantidadeSaida').value);
    if (nomeProduto && quantidade > 0) {
        // Simulação de registro de saída de produto
        alert(`Saída de ${quantidade} unidades do produto "${nomeProduto}" registrada com sucesso!`);
    } else {
        alert('Por favor, preencha todos os campos corretamente.');
    }
}

function calcularSalario() {
    let horasTrabalhadas = parseInt(document.getElementById('horasTrabalhadas').value);
    if (!isNaN(horasTrabalhadas) && horasTrabalhadas > 0) {
        let salario = horasTrabalhadas * 20; // Exemplo: R$20 por hora
        alert(`Salário calculado: R$ ${salario.toFixed(2)}`);
    } else {
        alert('Por favor, insira um número válido de horas trabalhadas.');
    }
}

function gerarHolerite() {
    let nomeFuncionario = document.getElementById('nomeFuncionario').value;
    let horasTrabalhadas = parseInt(document.getElementById('horasTrabalhadas').value);
    if (nomeFuncionario && !isNaN(horasTrabalhadas) && horasTrabalhadas > 0) {
        let salario = horasTrabalhadas * 20; // Exemplo: R$20 por hora
        document.getElementById('resultadoFolhaPagamento').innerText = `Holerite para ${nomeFuncionario} gerado com sucesso! Salário: R$ ${salario.toFixed(2)}`;
    } else {
        alert('Por favor, preencha todos os campos corretamente.');
    }
}

function criarConta() {
    let nome = document.getElementById('novoNome').value;
    let email = document.getElementById('novoEmail').value;
    let senha = document.getElementById('novaSenha').value;
    if (nome && email && senha) {
        // Simulação de criação de conta
        alert(`Conta criada com sucesso para ${nome}!`);
        showSection('login');
        showUserOptions();
    } else {
        alert('Por favor, preencha todos os campos corretamente.');
    }
}

function login() {
    let email = document.getElementById('email').value;
    let senha = document.getElementById('senha').value;
    if (email && senha) {
        // Simulação de login
        alert('Login realizado com sucesso!');
        showSection('transacao');
        showUserOptions();
    } else {
        alert('Por favor, preencha todos os campos corretamente.');
    }
}

function showUserOptions() {
    document.getElementById('transacaoButton').style.display = 'inline';
    document.getElementById('entradaProdutoButton').style.display = 'inline';
    document.getElementById('saidaProdutoButton').style.display = 'inline';
    document.getElementById('folhaPagamentoButton').style.display = 'inline';
}

// Mostrar a seção de login por padrão
showSection('login');
