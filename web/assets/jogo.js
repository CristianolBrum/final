$(function () {
    exibirJogo($('#exibir-jogos'));
    $("#form-jogo").submit(function (e) {
        e.preventDefault();
        inserirJogo($(this));
    });
    $('#exibir-jogos').click(function() {
        exibirJogo($(this));
    });
    $('#form-buscarJogo').submit(function(e) {
        e.preventDefault();
        exibirJogo();
    });
});

function inserirJogo(form) {
    $.ajax({
        url: 'InserirJogo',
        type: 'post',
        dataType: 'json',
        data: form.serialize(),
        beforeSend: function () {
            $('input, button', form).attr('disabled', true);
        },
        success: function (json) {
            if(!json.sucesso) {
                alert("Ocorreu um erro ao cadastrar o jogo.");
                return;
            }
            exibirJogo($('#exibir-jogos'));
            
            $('input, button', form).attr('disabled', false);
            $('input').val('');
            alert('Jogo cadastrado com sucesso.');
            $(json.cidades).each(function (indice, cidade) {
                $('#lista-cidades').append('<p>' + cidade.codigo + ' - ' + cidade.nome + '</p>');
            });
        },
        error: function () {
            $('input, button, select', form).attr('disabled', false);
            alert('Ocorreu um erro ao cadastrar o jogo.');
        }
    });
}

function exibirJogo(btn) {
    var form = $('#form-buscarJogo');
    $.ajax({
        url: 'ExibirJogo',
        type: 'post',
        dataType: 'json',
        data: btn ? {buscarJogo : ''} : form.serialize(),
        beforeSend: function() {
            if(btn) btn.button('loading');
            $('input', form).attr('disabled', true);
            $('button', form).button('loading');
        },
        success: function (json) {
            if(btn) btn.button('reset');
            $('#lista-jogos tbody tr').remove();
            $('input', form).attr('disabled', false);
            $('button', form).button('reset');
            $(json.jogos).each(function (indice, jogo) {
                $('#lista-jogos tbody').append("<tr><td>"+jogo.nome_jogo+"</td><td>"+jogo.data_lancamento+"</td><td>"+jogo.produtora+"</td><td class='text-center'><button class='btn btn-danger' onclick='excluirJogo("+jogo.id+")' data-id='"+jogo.id+"'>ExcluirJogo</button></td></tr>");
            });
        },
        error: function () {
            if(btn) btn.button('reset');
            $('input', form).attr('disabled', true);
            $('button', form).button('loading');
            alert("Erro ao exibir Jogo");
        }
        
    });
}

function excluirJogo(id) {
    if(!confirm('Tem certeza que deseja realmente excluir este Jogo?'))
        return;
    
    var botao = $('button[data-id='+id+']').button('loading');
    $.ajax({
        url: 'ExcluirJogo',
        type: 'post',
        dataType: 'json',
        data: {id: id},
        beforeSend: function() {
            botao.button('loading');
        },
        success: function () {
            botao.parents('tr').remove();
            botao.button('reset');
        },
        error: function () {
            botao.button('reset');
            alert("Erro ao excluir Jogo");
        }
        
    });
}






