$(document).ready(function() {
    $('header button').click(function() {
        $('form').slideToggle();
    })

    $('#cancel').click(function(){
        $('form').slideUp();
    })

    $('form').on('submit', function(e) {
        e.preventDefault();
        const endNovaImg = $('#end-img-new').val();
        const novoItem = $('<li></li>');
        $(`<img src="${endNovaImg}" />`).appendTo(novoItem);
        $(`
            <div class="overlay-img-link">
                <a href="${endNovaImg}" target="_blank" title="Ver imagem em tamanho real">
                    Ver imagem em tamnho real
                </a>
            </div>
        `).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $(novoItem).fadein(10000);
        $('#end-img-new').val('');

    })
})

