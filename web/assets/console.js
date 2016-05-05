$(function () {
    exibirConsole($('#exibir-consoles'));
    $("#form-console").submit(function (e) {
        e.preventDefault();
        inserirConsole($(this));
    });
    $('#exibir-consoles').click(function() {
        exibirConsole($(this));
    });
    $('#form-buscarConsole').submit(function(e) {
        e.preventDefault();
        exibirConsole();
    });
});

function inserirConsole(form) {
    $.ajax({
        url: 'InserirConsole',
        type: 'post',
        dataType: 'json',
        data: form.serialize(),
        beforeSend: function () {
            $('input, button', form).attr('disabled', true);
        },
        success: function (json) {
            if(!json.sucesso) {
                alert("Ocorreu um erro ao cadastrar o cliente.");
                return;
            }
            exibirConsole($('#exibir-consoles'));
            
            $('input, button', form).attr('disabled', false);
            $('input').val('');
            alert('Console cadastrado com sucesso.');
            $(json.cidades).each(function (indice, cidade) {
                $('#lista-cidades').append('<p>' + cidade.codigo + ' - ' + cidade.nome + '</p>');
            });
        },
        error: function () {
            $('input, button, select', form).attr('disabled', false);
            alert('Ocorreu um erro ao cadastrar o console.');
        }
    });
}

function exibirConsole(btn) {
    var form = $('#form-buscarConsole');
    $.ajax({
        url: 'ExibirConsole',
        type: 'post',
        dataType: 'json',
        data: btn ? {buscarConsole : ''} : form.serialize(),
        beforeSend: function() {
            if(btn) btn.button('loading');
            $('input', form).attr('disabled', true);
            $('button', form).button('loading');
        },
        success: function (json) {
            if(btn) btn.button('reset');
            $('#lista-consoles tbody tr').remove();
            $('input', form).attr('disabled', false);
            $('button', form).button('reset');
            $(json.consoles).each(function (indice, console) {
                $('#lista-consoles tbody').append("<tr><td>"+console.data_lancamento+"</td><td>"+console.fabricante+"</td><td>"+console.nome_console+"</td><td class='text-center'><button class='btn btn-danger' onclick='excluirConsole("+console.id+")' data-id='"+console.id+"'>Excluir</button></td></tr>");
            });
        },
        error: function () {
            if(btn) btn.button('reset');
            $('input', form).attr('disabled', true);
            $('button', form).button('loading');
            alert("Erro ao exibir Console");
        }
        
    });
}

function excluirConsole(id) {
    if(!confirm('Tem certeza que deseja realmente excluir este Console?'))
        return;
    
    var botao = $('button[data-id='+id+']').button('loading');
    $.ajax({
        url: 'ExcluirConsole',
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
            alert("Erro ao excluir console");
        }
        
    });
}






