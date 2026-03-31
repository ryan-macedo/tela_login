function logar() {
    let usuario = document.getElementById('inputUsuario').value 
    let senha = document.getElementById('inputSenha').value

    if(usuario == "bazooka" && senha == "kabum") {
        window.location.href = "home.html"
    }

    else {
        Swal.fire({
            title: "Acesso Negado",
            text: "Usuário/Senha incorretos",
            icon: "error"
        });

    }
}