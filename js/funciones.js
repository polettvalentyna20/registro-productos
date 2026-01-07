// HTML 
document.addEventListener('DOMContentLoaded', function () {

    // Botón guardar
    const btnGuardar = document.getElementById('btnGuardar');

    // Evento click del botón
    btnGuardar.addEventListener('click', function () {

        // Validación de código
        const codigo = document.getElementById('codigo').value.trim();
        if (codigo === '') {
            alert('El código del producto es obligatorio.');
            return;
        }

        // Validación de nombre
        const nombre = document.getElementById('nombre').value.trim();
        if (nombre.length < 3) {
            alert('El nombre debe tener al menos 3 caracteres.');
            return;
        }

        // Validación de bodega
        const bodega = document.getElementById('bodega').value;
        if (bodega === '') {
            alert('Debe seleccionar una bodega.');
            return;
        }

       
        // Validación de sucursal
        const sucursal = document.getElementById('sucursal').value;
        if (sucursal === '') {
            alert('Debe seleccionar una sucursal.');
            return;
        }

        // Validación de moneda
        const moneda = document.getElementById('moneda').value;
        if (moneda === '') {
            alert('Debe seleccionar una moneda.');
            return;
        }

        // Validación del precio
        const precio = document.getElementById('precio').value.trim();
        if (precio === '' || isNaN(precio) || precio <= 0) {
            alert('Ingrese un precio válido.');
            return;
        }

        // Validación de los materiales
        const materiales = document.querySelectorAll('input[name="material[]"]:checked');
        if (materiales.length < 2) {
            alert('Debe seleccionar al menos dos materiales.');
            return;
        }

        // Validación de la descripción
        const descripcion = document.getElementById('descripcion').value.trim();
        if (descripcion.length < 10) {
            alert('La descripción debe tener al menos 10 caracteres.');
            return;
        }


        // Producto registrado de forma correcta
        alert('Producto registrado correctamente 🎉');

    });

});
