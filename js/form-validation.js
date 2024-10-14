document.getElementById("contactForm").addEventListener("submit", function(event) {
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    const language = document.getElementById("language").value;
    const preferredLanguages = document.getElementById("preferredLanguages").selectedOptions;
    const database = document.querySelector('input[name="database"]:checked');
    const shift = document.getElementById("shift").value;
    const meetingTime = document.getElementById("meetingTime").value;
    const deliveryDate = document.getElementById("deliveryDate").value;

    if (!firstName || !lastName || !phone || !email || !message || !language || preferredLanguages.length === 0 || !database || !shift || !meetingTime || !deliveryDate) {
        alert("Por favor, preencha todos os campos obrigatórios.");
        event.preventDefault();
    }
});