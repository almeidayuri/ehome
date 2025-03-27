// Credenciais de usuário
const users = {
    "admin": "", // Usuário: senha
    "user1": ""
};

function login() {
    
        window.location.href = "http://casavirtual.sejahomeone.com.br";
    }



//fechar pwa splash screen
window.addEventListener("load", () => {
    setTimeout(() => {
        document.querySelector(".splash-screen").style.display = "none";
    }, 2000); // A splash screen desaparece após 2 segundos
});

document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        const splashScreen = document.querySelector(".splash-screen");
        const content = document.querySelector(".content");

        if (splashScreen) {
            splashScreen.style.opacity = "0"; // Aplica um fade-out
            setTimeout(() => {
                splashScreen.style.display = "none"; // Oculta completamente
                if (content) {
                    content.style.opacity = "1"; // Exibe o conteúdo
                }
            }, 500);
        }
    }, 2000); // Tempo de exibição da splash antes de desaparecer
});