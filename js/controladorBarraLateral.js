document.getElementById('toggleButton').addEventListener('click', function () {
    var menuLateral = document.querySelector('.menu-lateral');
    // var modoEscuro = document.querySelector('.modo-escuro')

    if(menuLateral.classList.contains("expandido")){
        menuLateral.classList.remove('expandido');
        menuLateral.classList.toggle('retraido');

        // modoEscuro.classList.remove('expandido')
        // modoEscuro.classList.toggle('retraido');
    }else{
        menuLateral.classList.remove('retraido');
        menuLateral.classList.toggle('expandido');

        // modoEscuro.classList.remove('retraido')
        // modoEscuro.classList.toggle('expandido');
    }
});