// Enviar solicitud de casting
function enviarCasting() {
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const detalles = document.getElementById('detalles').value;

    fetch('/enviar_casting', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nombre, email, detalles })
    })
    .then(response => response.json())
    .then(data => {
        alert('Solicitud enviada exitosamente');
    })
    .catch(error => console.error('Error:', error));
}
