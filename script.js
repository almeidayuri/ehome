// Credenciais de usuário
const users = {
    "admin": "1234", // Usuário: senha
    "user1": "abcd"
};

// Adiciona o efeito de bits alternando
function simulateBits(elementId) {
    const element = document.getElementById(elementId);
    const originalText = element.textContent;

    setInterval(() => {
        let newText = "";
        for (const char of originalText) {
            if (char === "0" || char === "1") {
                newText += Math.random() > 0.5 ? "1" : "0";
            } else {
                newText += char;
            }
        }
        element.textContent = newText;
    }, 300); // Alteração a cada 300ms
}

function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (users[username] === password) {
        // Redireciona diretamente para o link desejado
        window.location.href = "http://homeassistant.local:8123/";
    } else {
        alert("Usuário ou senha inválidos!");
    }
}

// Inicia o efeito de bits no título e subtítulo
simulateBits("title");
simulateBits("subtitle");
