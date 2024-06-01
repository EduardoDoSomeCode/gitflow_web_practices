document.getElementById('formC').addEventListener('submit', function(event){
    event.preventDefault(); // Valida el envio del formulario

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let subject = document.getElementById('subject').value;
    let message = document.getElementById('message').value;
    let forMessage = document.getElementById('forMessage').value;

    // validacion basica
    if (name.trim() === '' || email.trim() === '' || subject.trim() === '' || message.trim() === '' ) {
        forMessage.style.color = 'red';
        forMessage.textContent = 'Todos los campos son obligatorios';
    }

    if (!validateEmail(email)) {
        forMessage.style.color = 'yellow';
        forMessage.textContent = 'Introduce una direccion de correo valida';
    }

    // Simulacion de envio de formulario
    forMessage.style.color = 'green';
    forMessage.textContent = 'El mensaje se envio correctamente';
    document.getElementById('formC').rest(); // Reset al formulario
});

function validEmail(email) {
    let re = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    return re.test(email);
}