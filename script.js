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

let deferredPrompt;

window.addEventListener("beforeinstallprompt", (event) => {
    event.preventDefault(); // Impede o pop-up automático
    deferredPrompt = event;

    // Exibe um botão para instalar manualmente
    const installButton = document.createElement("button");
    installButton.textContent = "Instalar App";
    installButton.style.position = "fixed";
    installButton.style.bottom = "20px";
    installButton.style.left = "50%";
    installButton.style.transform = "translateX(-50%)";
    installButton.style.padding = "10px 20px";
    installButton.style.backgroundColor = "#25D366";
    installButton.style.color = "white";
    installButton.style.border = "none";
    installButton.style.borderRadius = "5px";
    installButton.style.cursor = "pointer";
    
    document.body.appendChild(installButton);

    installButton.addEventListener("click", () => {
        if (deferredPrompt) {
            deferredPrompt.prompt();
            deferredPrompt.userChoice.then((choiceResult) => {
                if (choiceResult.outcome === "accepted") {
                    console.log("Usuário aceitou a instalação");
                } else {
                    console.log("Usuário recusou a instalação");
                }
                deferredPrompt = null;
                installButton.remove();
            });
        }
    });
});
