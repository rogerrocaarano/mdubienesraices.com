window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        // generate a five digit number for the contact_number variable
        this.contact_number.value = Math.random() * 100000 | 0;
        // these IDs from the previous steps
        emailjs.sendForm('contact_service', 'contact_form', this)
            .then(function() {
                document.getElementById('FormContactoNombre').value='';
                document.getElementById('FormContactoEmail').value='';
                document.getElementById('FormContactoTlf').value='';
                document.getElementById('FormContactoTexto').value='';
                console.log('SUCCESS!');
            }, function(error) {
                console.log('FAILED...', error);
            });
    });
}