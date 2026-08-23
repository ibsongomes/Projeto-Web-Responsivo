const form = document.getElementById('form-cadastro');
const btnOk = document.getElementById('ok');
const btnCancelar = document.getElementById('cancelar');
const inputNome = document.getElementById('nome');

btnOk.addEventListener('click', function(event) {
    event.preventDefault();

    if (inputNome.value.trim() === '') {
        inputNome.style.border = '2px solid red';
        alert('Por favor, preencha o Nome do usuário.');
        inputNome.focus();
    } else {
        inputNome.style.border = '1px solid #ccc';
        alert(`Sucesso! Os dados de ${inputNome.value} foram processados adequadamente.`);
        
        form.reset();
    }
});

btnCancelar.addEventListener('click', function(event) {
    event.preventDefault();
    
    const confirmar = confirm('Tem certeza que deseja cancelar e limpar o formulário?');
    if (confirmar) {
        form.reset();
        inputNome.style.border = '1px solid #ccc';
    }
});