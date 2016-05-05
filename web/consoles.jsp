<%-- 
    Document   : index
    Created on : 23/03/2016, 22:36:17
    Author     : Cristiano
--%>


<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Cadastro de Consoles</title>
        <link rel="stylesheet" href="assets/bootstrap.min.css" rel="stylesheet" />
    </head>
    <body>
        <div class="container-fluid">
                <div class="row">
                <div class="col-xs-12">
                    <h4 class="text-center">
                        <smal>
                            <nav>
                                <ul>
                                  <li><a  href="http://localhost:8080/trabalho/index.xhtml">Pagina inicial</a></li>
                                  <li><a  href="http://localhost:8080/trabalho/galeria.xhtml">Galeria</a></li>
                                  <li><a  href="http://localhost:8080/trabalho/form2.jsp">Formulário</a></li>
                                  <li><a  href="http://localhost:8080/trabalho/consoles.jsp">Consoles</a></li>
                                  <li><a  href="http://localhost:8080/trabalho/jogos.jsp">Jogos</a></li>
                                  <li><a  href="http://localhost:8080/trabalho/informacoes.xhtml">Informações</a></li>
                                  <li><a  href="https://cdn.knightlab.com/libs/timeline3/latest/embed/index.html?source=1TCXI28375oqHE3asXbzSby_6XHJEzg7RuCXvlszzqg0">TimeLine Consoles</a></li>
                                </ul>
                            </nav>
                        </smal>
                    </h4>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-12">
                    <form class="form-horizontal" id="form-console" accept-charset=utf-8>
                        <div class="form-group">
                            <label class="control-label col-xs-12 col-sm-2">
                                data_lancamento
                            </label>
                            <div class="col-xs-12 col-sm-10">
                                <input type="text" name="data_lancamento" class="form-control" />
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="control-label col-xs-12 col-sm-2">
                                fabricante
                            </label>
                            <div class="col-xs-12 col-sm-10">
                                <input type="text" name="fabricante" class="form-control" />
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="control-label col-xs-12 col-sm-2">
                                nome do console
                            </label>
                            <div class="col-xs-12 col-sm-10">
                                <input type="text" name="nome_console" class="form-control" />
                            </div>
                            
                        </div>
                        
                        <div class="form-group text-center">
                            
                            <div class="col-xs-12 col-sm-6">
                                <button type="submit" class="btn btn-success">Salvar</button>
                            </div>
                            <div class="col-xs-12 col-sm-6">
                                <button type="reset" class="btn btn-danger">Cancelar</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div class="row">
                <div class="panel panel-default">
                    <!-- Default panel contents -->
                    <div class="panel-heading">
                        <div class="row">
                            <div class="col-xs-12 col-sm-4">Consoles</div>
                            <div class="col-xs-12 col-sm-4">
                                <form id="form-buscarConsole" accept-charset=utf-8>
                                    <div class="input-group">
                                        <input type="text" class="form-control" name="buscarConsole" placeholder="BuscarConsole">
                                        <span class="input-group-btn">
                                            <button class="btn btn-default" type="submit">Procurar</button>
                                        </span> 
                                    </div>
                                </form>
                            </div>
                            <div class="col-xs-6 col-sm-2 text-right">
                                <button type="button" class="btn btn-primary" id="exibir-consoles">
                                    Mostrar todos
                                </button>
                            </div>
                        </div>
                    </div>

                    <!-- Table -->
                    <table class="table" id="lista-consoles">
                        <thead>
                            <tr>
                                <th>Data de Lançamento</th>
                                <th>Fabricante</th>
                                <th>Console</th>
                                
                                <th class="text-center">Acoes</th>
                            </tr>
                        </thead>
                        <tbody>

                        </tbody>
                    </table>
                </div>
            </div>
        </div>

        <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js"></script>
        <script type="text/javascript" src="assets/bootstrap.min.js"></script>
        <script type="text/javascript" src="assets/console.js"></script>
    </body>
</html>
