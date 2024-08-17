$(document).ready(function(){ // Neste bloco de código fazemos com que o botão Nova Imagem do Cabeçalho
    $('header button').click(function(){ // role para baixo e exiba o furmolário
        $('form').slideDown();
        
    })
    $('#btn-cancelar').click(function() { //Já neste bloco é ao contrário clicado no botão cancelar o formulário se esconde
        $('form').slideUp();
    })



    $('form').on(`submit`,function(e){ // Neste bloco enviamos a url da imagem //
        e.preventDefault();
        const enderecoDaNovaImagem = $('#endereco-imagem-nova').val(); // Esta constante serve para chamar o input com o id #endereco-imagem-nova lá no html //
        const novoItem = $('<li style="display: none" ></li>');
        $(`<img src="${enderecoDaNovaImagem}" />`).appendTo(novoItem);

        $(`
            <div class="#overlay-imagem-link">
                <a href="${enderecoDaNovaImagem}" target="_blank" title="Ver Imagem em tamanho real">
                    Ver Imagem em tamanho real
                </a>
            </div>
        `).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn(2000);
        $('#endereco-imagem-nova').val(''); // Aqui deixa o input vazio novamente depois de adicionar ima imagem
    })

});