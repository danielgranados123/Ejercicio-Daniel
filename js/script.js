const formulario = document.getElementsByClassName('datos-form');
const enviarBtn = document.getElementsByClassName('boton-enviar');

formulario.addEventListener('submit', function(event) {
    event.preventDefault();

    const nombreInput = document.getElementById('nombre');
    const nombreValor = nombreInput.value;
    const correo = document.getElementById("correo");
    const correoValor = correo.value;

    Swal.fire({
        icon: 'success',
        title: 'Sesión Iniciada',
        text: `Bienvenido a nuestro sistema.`,
    });

    formulario.reset();
});