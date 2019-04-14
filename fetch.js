fetch( URL ) 
  .then( function(resp) {
    return resp.text();
  })
  .then( function(conteudo) {
    // faz algo com esse conteúdo
  })
  .catch( function(erro) {
    // emite alguma mensagem de erro
  });