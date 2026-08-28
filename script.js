const form = document.getElementById('form-cadastro');
const btnOk = document.getElementById('ok');
const btnCancelar = document.getElementById('cancelar');
const inputNome = document.getElementById('nome');
const inputCep = document.getElementById('cep');
const inputEndereco = document.getElementById('endereco');
const inputCidade = document.getElementById('cidade');
const selectEstado = document.getElementById('estado');
let cepValido = false;

btnOk.addEventListener('click', function(event) {
    event.preventDefault();

    if (inputNome.value.trim() === '') {
        inputNome.style.border = '2px solid red';
        alert('Por favor, preencha o Nome do usuário.');
        inputNome.focus();
    } else if (!cepValido) {
        inputNome.style.border = '1px solid #ccc';
        inputCep.style.border = '2px solid red';
        alert('Por favor, digite um CEP válido antes de cadastrar.');
        inputCep.focus();
    } else {
        inputNome.style.border = '1px solid #ccc';
        alert(`Sucesso! Os dados de ${inputNome.value} foram processados adequadamente.`);
        
        form.reset();
        cepValido = false;
    }
});

btnCancelar.addEventListener('click', function(event) {
    event.preventDefault();
    
    const confirmar = confirm('Tem certeza que deseja cancelar e limpar o formulário?');
    if (confirmar) {
        form.reset();
        inputNome.style.border = '1px solid #ccc';
        inputCep.style.border = '1px solid #ccc';
        cepValido = false;
    }
});

inputCep.addEventListener('blur', async () => {
    const cepLimpo = inputCep.value.replace(/\D/g, '');

    if (cepLimpo.length === 8) {
        try {
            const resposta = await fetch(`https://viacep.com.br/ws/${cepLimpo}/json/`);
            const dados = await resposta.json();

            if (!dados.erro) {
                inputCep.style.border = '1px solid #ccc';
                inputEndereco.value = dados.logradouro;
                inputCidade.value = dados.localidade;
                selectEstado.value = dados.uf;

                cepValido = true;
            } else {
                inputCep.style.border = '2px solid red';

                inputEndereco.value = '';
                inputCidade.value = '';
                selectEstado.value = '';
                cepValido = false;
            }
        } catch (erro) {
            inputCep.style.border = '2px solid red';
            cepValido = false;
        }
    } else if (cepLimpo.length > 0) {
        inputCep.style.border = '2px solid red';
        cepValido = false;
    } else {
        inputCep.style.border = '1px solid #ccc';
        cepValido = false;
    }
});

inputNome.addEventListener('input', function() {
    if (inputNome.value.trim() !== '') {
        inputNome.style.border = '1px solid #ccc';
    }
});