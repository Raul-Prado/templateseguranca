function loader(){
    let carregamento = document.getElementById('loader');
    let conteudoOculto = document.getElementById('conteudoSite');


    if(carregamento && conteudoOculto){
        carregamento.style.display = 'none';
        conteudoOculto.style.display = 'block';
    }
}

setTimeout(loader, 3000);