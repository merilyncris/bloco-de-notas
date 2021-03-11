var botaoAdicionar = document.querySelector("#adicionar-nota");
const listDeAnotaçoes = [];

botaoAdicionar.addEventListener("click", function(event) {
    event.preventDefault();
    adicionar();   
});

function adicionar() {
    var form = document.querySelector("#form-adiciona");

    var anotacao = obtemNotaDoFormulario(form);

    if(anotacao.assunto.length == 0 || anotacao.nota.length == 0 || anotacao.referencia.length == 0) return;
    
    adicionaNotaNaTabela(anotacao);

  /*  prepararParaSalvar();
    conveterSalvar();*/

    form.reset();
}

function adicionaNotaNaTabela(anotacao) {
    var anotacaoTr = montaTr(anotacao);
    var tabela = document.querySelector("#tabela-notas");
    tabela.appendChild(anotacaoTr);
}

function montaTr(anotacao) {
    var anotacaoTr = document.createElement("tr");

    anotacaoTr.classList.add("anotacao");


    anotacaoTr.appendChild(montaTd(anotacao.assunto, "td-assunto"));
    anotacaoTr.appendChild(montaTd(anotacao.nota, "td-nota"));
    anotacaoTr.appendChild(montaTd(anotacao.referencia, "td-referencia"));

    return anotacaoTr;

}

function montaTd(dado, classe) {
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);

    return td;
}

function obtemNotaDoFormulario(form) {

    var anotacao = {
        assunto: form.assunto.value,
        nota: form.nota.value,
        referencia: form.nota.value
    }

  return anotacao;
}

/*Deletar*/

var tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function(event){
    event.target.parentNode.classList.add("fadeOut");
    
    setTimeout(function(){
        event.target.parentNode.remove();
    }, 500);
    
})

/*function prepararParaSalvar(){
    let anotacoes = new Object();

    anotacoes.assunto = form.assunto.value;
    anotacoes.nota = form.nota.value;
    anotacoes.referencia = form.nota.value;

    listDeAnotaçoes.push(anotacoes);
}

function conveterSalvar() {
    const anotacoesJson = JSON.stringify(listDeAnotaçoes);
    localStorage.setItem('anotacoes', anotacoesJson);
} */