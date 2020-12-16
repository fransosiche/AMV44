<!DOCTYPE html>
<html class="wide wow-animation" lang="fr">
    <title>Erreur | AMV 44 Menuiserie, Agencement, Isolation Loire-Atlantique</title>
    <?php
    include("inc/header.php");
    ?>
    <body>
        <style type="text/css">
            /*****-----*****-----*****-----*****
        20. Error CSS
    *****-----*****-----*****-----*****/
            .error-section {
                padding: 50px 0;
            }
            .error-col {
                text-align: center;
            }
            .error-col h1 {
                font-size: 100px;
                line-height: 1.1;
                letter-spacing: 8px;
                font-style: italic;
                color: #FFCD00;
            }
            .error-col h3 {
                font-size: 24px;
                margin-bottom: 20px;
            }
            .error-col img {
                width: 60%;
                margin: auto;
                margin-bottom: 30px;
                display: block;
            }
            .error-col a {
                font-size: 30px;
                color: #FFCD00;
                padding: 8px 20px;
            }
            .error-col a:hover {
                color: #ffffff;
                background: #FFCD00;
            }

        </style>
                <!-- Page-->
                <div class="page">
                    <!-- PANEL-->
                    <?php
                    include("inc/menu.php");
                    ?>
                    <section class="section parallax-container context-dark" data-parallax-img="images/007-avec-flou.png">
                        <div class="parallax-content parallax-header">
                            <div class="parallax-header__inner context-dark">
                                <div class="parallax-header__content">
                                    <div class="container">
                                        <div class="row  titre-page">
                                            <div class="col-md-10 col-xl-8 titre-page">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section class="error-section">
                        <div class="container">
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="error-col">
                                        <h1>OUPS!</h1>
                                        <h3>La page est temporairement introuvable :(</h3>
                                        <img src="images/error.png" alt="">
                                        <a href="index.php">Retour à la page d’accueil</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <!-- Page Footer-->
                    <?php
                    include("inc/footer.php");
                    ?>
        </div>
    </body>
</html>