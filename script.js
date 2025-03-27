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
    
        window.location.href = "http://casavirtual.sejahomeone.com.br";
    }


// Inicia o efeito de bits no título e subtítulo
simulateBits("title");
simulateBits("subtitle");


//fechar pwa splash screen
window.addEventListener("load", () => {
    setTimeout(() => {
        const splashScreen = document.querySelector(".splash-screen");
        if (splashScreen) {
            splashScreen.style.opacity = "0"; // Adiciona um efeito de fade-out
            setTimeout(() => {
                splashScreen.style.display = "none"; // Esconde a splash screen após o fade-out
            }, 500); // Aguarde 0.5s para o efeito de fade
        }
    }, 2000); // Tempo total de exibição da splash screen (2 segundos)
});
