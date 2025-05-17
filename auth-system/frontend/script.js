// Função para alternar entre os formulários
function toggleForms() {
    const loginForm = document.getElementById('loginForm');
    const registroForm = document.getElementById('registroForm');
    
    loginForm.classList.toggle('hidden');
    registroForm.classList.toggle('hidden');
}

// Verificar força da senha
document.getElementById('registroSenha').addEventListener('input', function(e) {
    const senha = e.target.value;
    const strengthDiv = document.querySelector('.password-strength');
    let strength = 0;
    let message = '';

    // Verificar comprimento
    if (senha.length >= 8) strength += 1;
    // Verificar letras maiúsculas
    if (/[A-Z]/.test(senha)) strength += 1;
    // Verificar letras minúsculas
    if (/[a-z]/.test(senha)) strength += 1;
    // Verificar números
    if (/[0-9]/.test(senha)) strength += 1;
    // Verificar caracteres especiais
    if (/[^A-Za-z0-9]/.test(senha)) strength += 1;

    switch(strength) {
        case 0:
            message = '❌ Senha muito fraca';
            strengthDiv.style.color = '#ff4444';
            break;
        case 1:
        case 2:
            message = '🔸 Senha fraca';
            strengthDiv.style.color = '#ffbb33';
            break;
        case 3:
            message = '🔸 Senha média';
            strengthDiv.style.color = '#ffbb33';
            break;
        case 4:
            message = '✅ Senha forte';
            strengthDiv.style.color = '#00C851';
            break;
        case 5:
            message = '✅ Senha muito forte';
            strengthDiv.style.color = '#007E33';
            break;
    }

    strengthDiv.textContent = message;
});

// Função para fazer login
document.getElementById('loginForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const data = {
        email: document.getElementById('loginEmail').value,
        senha: document.getElementById('loginSenha').value
    };

    try {
        const response = await fetch('http://localhost:8080/api/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        const result = await response.json();
        if (response.ok) {
            alert('Login realizado com sucesso!');
        } else {
            alert('Erro ao fazer login: ' + result.message);
        }
    } catch (error) {
        alert('Erro ao conectar com o servidor');
    }
});

// Função para registrar
document.getElementById('registroForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const data = {
        nome: document.getElementById('registroNome').value,
        email: document.getElementById('registroEmail').value,
        senha: document.getElementById('registroSenha').value
    };

    try {
        const response = await fetch('http://localhost:8080/api/auth/registro', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        const result = await response.json();        if (response.ok) {
            // Limpa os campos do formulário
            document.getElementById('registroNome').value = '';
            document.getElementById('registroEmail').value = '';
            document.getElementById('registroSenha').value = '';
            // Reseta o indicador de força da senha
            document.querySelector('.password-strength').textContent = '';
            
            alert('Registro realizado com sucesso!');
            
            // Volta para o formulário de login após um pequeno delay
            setTimeout(() => {
                toggleForms();
            }, 1000);
        } else {
            alert('Erro ao registrar: ' + result.message);
        }
    } catch (error) {
        alert('Erro ao conectar com o servidor');
    }
});
