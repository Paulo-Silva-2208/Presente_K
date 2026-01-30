document.getElementById("senha-form").addEventListener("submit", function(event) {
    event.preventDefault(); // impede recarregar a página

    const senhaCorreta = "2024-10-06"; // FORMATO DO INPUT DATE
    const senhaDigitada = document.getElementById("senha").value;

    if (senhaDigitada === senhaCorreta) {
        window.location.href = "home.html"; // vai para a história
    } else {
        alert("Senha incorreta 💔 Tente novamente!");
    }
});

