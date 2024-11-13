document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (name && email && message) {
        alert("Gracias por tu mensaje, " + name + ". ¡Te responderemos pronto!");
        document.getElementById("contactForm").reset();
    } else {
        alert("Por favor, completa todos los campos.");
    }
});
