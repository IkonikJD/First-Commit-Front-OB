function Borrar() {
    document.getElementById("adjunto").value = "";
}

function ShowSelected() {
    /* Para obtener el valor */
    var cod = document.getElementById("etiquetas").value;
    alert(cod);

    /* Para obtener el texto */
    var combo = document.getElementById("etiquetas");
    var selected = combo.options[combo.selectedIndex].text;
    alert(selected);
}