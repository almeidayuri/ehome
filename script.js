// Credenciais de usuário
const users = {
    "admin": "", // Usuário: senha
    "user1": ""
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
    
        window.location.href = "http://homeassistant.local:8123/";
    }


// Inicia o efeito de bits no título e subtítulo
simulateBits("title");
simulateBits("subtitle");
