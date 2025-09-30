// Mostrar formulario de registro
document.getElementById('mostrarRegistro').addEventListener('click', function(e){
    e.preventDefault();
    document.getElementById('formRegistro').style.display = 'block';
    document.getElementById('usuarioNoLogueado').style.display = 'none';
});

// Guardar datos del usuario y mostrar nombre en Mis Recomendaciones
document.getElementById('registroForm').addEventListener('submit', function(e){
    e.preventDefault();
    const nombre = document.getElementById('nombre').value;
    document.getElementById('nombreUsuario').innerText = nombre;
    document.getElementById('nombreUsuarioRec').innerText = nombre;
    document.getElementById('estadoUsuarioLogueado').innerText = document.getElementById('estado').value;

    document.getElementById('formRegistro').style.display = 'none';
    document.getElementById('usuarioLogueado').style.display = 'block';
});

