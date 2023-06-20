<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests">
    <meta name="keywords" content="">
    <title>TIF PICTURE</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"/>
    <link rel="stylesheet" href="{{ url('css/landing.css') }}">

</head>

<body data-spy="scroll" data-target=".nav-sidebar" data-offset="100">
<!-- Header -->

<header class="header text-white" style="background-image: linear-gradient(135deg, #667eea 0%, #764ba2 100%);">
    <div class="container-xs text-center">
        <h1 class="display-4 mb-4">TIF PICTURE</h1>
        <div id="img-container" style="height: 100px">
            <img src="{{ url('svg?name=andres cortes') }}" width="100px" alt="">
            <img src="{{ url('svg?bg=303f9f&name=andres cortes') }}" width="100px" alt="">
            <img src="{{ url('svg?bg=00897b&name=andres cortes') }}" width="100px" alt="">
        </div>
        <hr>
        <input type="text" id="name" class="form-control" value="Andres Cortes" placeholder="Ingrese un nombre">
        <br>
        <button class="btn btn-info" onclick="changevalues()">Generar</button>
        <button class="btn btn-outline-info" onclick="changevalues()">Copiar HTML</button>
        <br>

    </div>
</header>


<!-- Main Content -->
<main class="main-content">
    <div class="container">
        <div class="row">

            <!--
            |‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒
            | Sidebar
            |‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒
            !-->
            <div class="col-md-12 col-xl-12 ml-md-auto py-8">
                <h2 id="get-started">Iniciemos</h2>
                <p class="lead-2">
                    Empiece a utilizar <strong>TIF PICTURE</strong> para crear imágenes de perfil
                    con el nombre del usuario, ademas
                    configure el color de fondo y la letra a su gusto.
                </p>

                <table class="table table-bordered">
                    <tr>
                        <th colspan="2" class="bg-primary text-white">PARAMETROS</th>
                    </tr>
                    <tr>
                        <td>
                            <strong>URL</strong>
                        </td>
                        <td>
                            <a target="_blank" href="https://tif-picture.herokuapp.com/svg">https://tif-picture.herokuapp.com/svg</a>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <strong>name</strong>
                        </td>
                        <td>
                            Nombre del usuario o iniciales
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <strong>bg</strong>
                        </td>
                        <td>
                            Color hexadecimal del fondo de la imagen
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <strong>color</strong>
                        </td>
                        <td>
                            Color hexadecimal de la letra
                        </td>
                    </tr>
                </table>
                <hr class="hr-dash my-7">


            </div>

        </div>
    </div>
</main>

<footer class="footer text-center">
    <div class="container">
        <div class="row align-items-center">
            <div class="col-lg-auto mr-auto">
                <nav class="nav justify-content-center justify-content-lg-start">
                    <a class="nav-link" target="_blank" href="https://github.com/andrescortesdev">GITHUB</a>
                    <a class="nav-link" target="_blank" href="https://twitter.com/AndresCortesDev">TWITTER</a>
                    <a class="nav-link" target="_blank" href="https://www.linkedin.com/in/andrescortesdev/">LINKEDIN</a>
                </nav>
            </div>

            <div class="col-lg-auto">
                <hr class="w-25 d-lg-none">
                © <a target="_blank" href="https://andrescortes.herokuapp.com/">andrescortesdev </a>
            </div>
        </div>
    </div>
</footer><!-- /.footer -->


<script src="{{ url('js/landing.js') }}"></script>
<script>

    function changevalues() {
        var name = document.getElementById('name').value;
        var img = " <img src='{{ url('svg') }}?name=" + name + "' width='100px' alt=''> <img src='{{ url('svg') }}?bg=303f9f&name=" + name + "' width='100px' alt=''> <img src='{{ url('svg') }}?bg=00897b&name=" + name + "' width='100px' alt=''>";

        document.getElementById('img-container').innerHTML = img;
    }
</script>
</body>
</html>
