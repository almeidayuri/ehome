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
    const splashScreen = document.querySelector(".splash-screen");
    if (splashScreen) {
        setTimeout(() => {
            splashScreen.style.opacity = "0"; // Fade-out
            setTimeout(() => {
                splashScreen.style.display = "none"; // Remove após fade-out
            }, 500);
        }, 2000); // Exibe por 2 segundos antes do fade-out
    }
});

