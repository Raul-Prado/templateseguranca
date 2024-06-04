// function alterarTemaSite(){
//     let body = document.querySelector("body");
    
//     let darkTema = body.classList.contains("tema-dark");

//     if(darkTema){
//         body.classList.remove("tema-dark");
//     }else{
//         body.classList.add("tema-dark");
//     }
// }
const toggleTheme = document.getElementById('toggle-theme');

  toggleTheme.addEventListener('input', function() {
    // Verifica o valor do controle deslizante
    if (toggleTheme.value === '1') {
      // Se o valor for 0, define o tema para escuro
      document.body.classList.add('tema-dark');
    } else {
      // Se o valor for 1, define o tema para claro
      document.body.classList.remove('tema-dark');
    }
});