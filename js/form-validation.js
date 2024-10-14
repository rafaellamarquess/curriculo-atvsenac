document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const firstName = document.getElementById('firstName');
    const lastName = document.getElementById('lastName');
    const phone = document.getElementById('phone');
    const email = document.getElementById('email');
    const message = document.getElementById('message');
    const language = document.getElementById('language');
    const preferredLanguages = document.getElementById('preferredLanguages');
    const database = document.querySelector('input[name="database"]:checked');
    const shift = document.getElementById('shift');
    const meetingTime = document.getElementById('meetingTime');
    const deliveryDate = document.getElementById('deliveryDate');

    let formIsValid = true;


    // if (!firstName.value.trim()) {
    //     alert("O campo Nome é obrigatório.");
    //     formIsValid = false;
    // }

    // if (!lastName.value.trim()) {
    //     alert("O campo Sobrenome é obrigatório.");
    //     formIsValid = false;
    // }

    const phonePattern = /^\(\d{2}\) \d{4,5}-\d{4}$/;
    if (!phone.value.trim() || !phonePattern.test(phone.value)) {
        alert("O campo Telefone é obrigatório e deve estar no formato (XX) XXXXX-XXXX.");
        formIsValid = false;
    }

    // if (!email.value.trim()) {
    //     alert("O campo Email é obrigatório.");
    //     formIsValid = false;
    // }

    // if (!message.value.trim()) {
    //     alert("O campo Mensagem é obrigatório.");
    //     formIsValid = false;
    // }

    // if (!language.value) {
    //     alert("O campo Língua Aplicada no Serviço é obrigatório.");
    //     formIsValid = false;
    // }

    // if (!preferredLanguages.selectedOptions.length) {
    //     alert("O campo Linguagens Preferidas é obrigatório.");
    //     formIsValid = false;
    // }

    // if (!database) {
    //     alert("O campo Banco de Dados Recomendado é obrigatório.");
    //     formIsValid = false;
    // }

    // if (!shift.value) {
    //     alert("O campo Turno de Preferência para Reuniões é obrigatório.");
    //     formIsValid = false;
    // }

    // if (!meetingTime.value) {
    //     alert("O campo Horário Sugerido para Reuniões é obrigatório.");
    //     formIsValid = false;
    // }

    // if (!deliveryDate.value) {
    //     alert("O campo Previsão de Entrega é obrigatório.");
    //     formIsValid = false;
    // }

    if (formIsValid) {
        alert("Formulário enviado com sucesso!");
        this.submit(); // Envia o formulário
    }
});