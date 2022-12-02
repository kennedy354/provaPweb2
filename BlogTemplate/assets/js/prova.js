const botao = document.querySelector("#botaoMais")

let novoPost = document.querySelector("#postvelho2")
let novoUsuario = document.querySelector("#imagemUsuario")

const mudarPost = function () {
    var url = 'https://6388fbf0a4bb27a7f796c4f7.mockapi.io/user/1/posts/1';
    var ajax = new XMLHttpRequest();

    ajax.onreadystatechange = function () {
        if(this.readyState == 4 && this.status == 200){
            let ajax = JSON.parse(this.responseText);
            novoPost.innerText = ajax.textPost
        }
    };
    ajax.open('GET', url, true);
    ajax.send();
};

const mudarUsuario = function () {
    var url = 'https://6388fbf0a4bb27a7f796c4f7.mockapi.io/user/1';
    var ajax = new XMLHttpRequest();

    ajax.onreadystatechange = function () {
        if(this.readyState == 4 && this.status == 200){
            let ajax = JSON.parse(this.responseText);
            novoUsuario.src = ajax.avatar
        }
    };
    ajax.open('GET', url, true);
    ajax.send();
};


const funcao = function(e){
    e.preventDefault()
    mudarPost()
    mudarUsuario()
}

botao.addEventListener("click", funcao)