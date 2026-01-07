<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">

    <title>Registro de Productos</title>

    <link rel="stylesheet" href="css/estilos.css">
</head>
<body>

    <h2>Registro de Productos</h2>

    <form id="formProducto">

        <label>Código del Producto</label><br>
        <input type="text" id="codigo"><br><br>

        <label>Nombre del Producto</label><br>
        <input type="text" id="nombre"><br><br>

        <label>Bodega</label><br>
        <select id="bodega">
            <option value="">Seleccione una bodega</option>
            <option value="1">Bodega Central</option>
            <option value="2">Bodega Norte</option>
        </select><br><br>

        <label>Sucursal</label><br>
        <select id="sucursal">
            <option value="">Seleccione una sucursal</option>
            <option value="1">Sucursal 1</option>
            <option value="2">Sucursal 2</option>
        </select><br><br>

        <label>Moneda</label><br>
        <select id="moneda">
            <option value="">Seleccione una moneda</option>
            <option value="CLP">Peso Chileno</option>
            <option value="USD">Dólar</option>
        </select><br><br>

        <label>Precio</label><br>
        <input type="text" id="precio"><br><br>

        <label>Material del Producto</label><br>
        <input type="checkbox" name="material[]" value="Madera"> Madera<br>
        <input type="checkbox" name="material[]" value="Metal"> Metal<br>
        <input type="checkbox" name="material[]" value="Plástico"> Plástico<br>
        <input type="checkbox" name="material[]" value="Vidrio"> Vidrio<br><br>

        <label>Descripción del Producto</label><br>
        <textarea id="descripcion"></textarea><br><br>

        <button type="button" id="btnGuardar">Guardar Producto</button>

    </form>

    <script src="js/funciones.js"></script>

</body>
</html>


