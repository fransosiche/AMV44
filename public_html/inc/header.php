<?php
include('config/includes.php');
?>
<meta charset="UTF-8">
<!-- mobile responsive meta -->
<meta name="viewport" content="width=device-width, initial-scale=1">


<link rel="stylesheet" href="css/style.css">
<link rel="stylesheet" href="css/responsive.css">


<link rel="apple-touch-icon" sizes="120x120" href="images/favicons/apple-touch-icon.png">
<link rel="icon" type="image/png" sizes="32x32" href="images/favicons/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="images/favicons/favicon-16x16.png">
<link rel="manifest" href="images/favicons/site.webmanifest">
<meta name="msapplication-TileColor" content="#da532c">
<meta name="theme-color" content="#ffffff">
<!-- jQuery js -->
<script src="js/jquery.js"></script>
<script type="text/javascript" src="assets/tarteaucitron/tarteaucitron.js"></script>
<script>
    tarteaucitron.init({
        "privacyUrl": "", /* Privacy policy url */
        "hashtag": "#w4bcookies", /* Ouverture automatique du panel avec le hashtag */
        "cookieName": "w4bcookiesmanager", /* Cookie name */
        "highPrivacy": true, /* désactiver le consentement implicite (en naviguant) ? */
        "orientation": "bottom", /* Banner position (top - bottom) */
        "AcceptAllCta": true, /* Show the accept all button when highPrivacy on */
        "adblocker": false, /* Afficher un message si un adblocker est détecté */
        "showAlertSmall": true, /* afficher le petit bandeau en bas à droite ? */
        "cookieslist": true, /* Afficher la liste des cookies installés ? */
        "removeCredit": true, /* supprimer le lien vers la source ? */
        "moreInfoLink": true, /* Show more info link */
        "handleBrowserDNTRequest": false, /* If Do Not Track == 1, accept all */
        //"cookieDomain": ".my-multisite-domaine.fr" /* Shared cookie for subdomain */
    });

    tarteaucitron.user.gtagUa = 'UA-128660442-1';
    tarteaucitron.user.gtagMore = function () { /* add here your optionnal gtag() */
    };
    (tarteaucitron.job = tarteaucitron.job || []).push('gtag');

    tarteaucitron.user.googlemapsKey = 'AIzaSyA4zVwQBNr96CKWEm1g23R2atVqcpOqYLA';
    (tarteaucitron.job = tarteaucitron.job || []).push('googlemaps');
</script>
<style type="text/css">
    #tarteaucitron{
        top  : 50px !important;
    }
</style>


</head>
<body>

    <div class="boxed_wrapper">



        <header class="main-header">
            <!--    <div class="header-top">
                    <div class="container">
                            Top Left
                            <div class="top-left pull-left">
                            <ul class="links-nav clearfix">
                                <li><a href="#">We Build Structures & Bring Comfort to Your Life...</a></li>
                            </ul>
                        </div>
                        
                        Top Right
                            <div class="top-right pull-right">
                            <ul class="links-nav clearfix">
                                <li><a href="#">Support</a></li>
                                <li><a href="#">Career</a></li>
                                <li><a href="#">Latest News</a></li>
                            </ul>
                            <ul class="social">
                                        <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                                        <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                                        <li><a href="#"><i class="fa fa-instagram"></i></a></li>
                                        <li><a href="#"><i class="fa fa-dribbble"></i></a></li>
                                    </ul>
                        </div>
                    </div>
                </div>-->
            <div class="header-upper">
                <div class="container">
                    <div class="clearfix">

                        <div class="pull-left logo-outer">
                            <div class="logo"><a href="index.php"><img src="images/logo.png" alt="" title="AMV 44"></a></div>
                        </div>

                        <div class="pull-right upper-right clearfix">

                            <!--Info Box-->
                            <div class="upper-column info-box">
                                <div class="icon_box"><span class="icon-signs"></span></div>
                                5, Rue du Bois Simon - ZA de la Poterie <br><span class="bottom-text">44690 Château Thebaud</span>
                            </div>

                            <!--Info Box-->
                            <div class="upper-column info-box">
                                <div class="icon_box"><span class="icon-global"></span></div>
                                02 40 34 12 85<br><span class="bottom-text"> contact@amv44.fr </span>

                            </div>

                            <div class="upper-column info-box conteneur-facebook">
                                <div class="footer-contact-info">
                                    <div class="item">
                                        <ul class="list-inline social">
                                            <li>
                                                <a class="facebook-header" href="https://fr-fr.facebook.com/AMVCOIQUAULT/"><i class="fa fa-facebook icone-facebook-header"></i></a><p class="lien-facebook"> Suivez-nous sur Facebook </p>
                                            </li>
                                        </ul>	
                                    </div>
                                </div>	
                            </div>
                            <!--                    Info Box
                                                <div class="upper-column info-box">
                                                    <div class="icon_box"><span class="icon-clock"></span></div>
                                                    WORKING HOURS <br><span class="bottom-text"> Mon - Sat: 09.00am to 18.00pm</span>
                                                </div>-->


                        </div>

                    </div>
                </div>
            </div>
        </header>


        <section class="mainmenu-wrapper stricky">
            <div class="container">
                <div class="menu-bg clearfix">
                    <nav class="mainmenu-holder pull-left">
                        <div class="nav-header">
                            <ul class="navigation">
                                <li>
                                    <a href="index.php">Accueil</a>
                                </li>
                                <li>
                                    <a href="activites.php">Nos activités</a>
                                </li>
                                <li>
                                    <a href="realisations.php">Réalisations</a>
                                </li>
                                <li>
                                    <a href="partenaires.php">Partenaires</a>
                                </li>
                                <!--						<li>
                                                                                        <a href="about.html">About</a>
                                                                                </li>
                                                                                <li class="dropdown">
                                                                                        <a href="#">services</a>
                                                                                        <ul class="submenu">
                                                                                                <li><a href="service.html">service</a></li>
                                                                                                <li><a href="single-service.html">single service</a></li>
                                                                                        </ul>						
                                                                                </li>
                                                                                <li class="dropdown">
                                                                                        <a href="#">Projects</a>
                                                                                        <ul class="submenu">
                                                                                    <li><a href="projects-grid.html">Projects grid</a></li>
                                                                                    <li><a href="Projects-fullwidth.html">Projects fullwidth</a></li>
                                                                                    <li><a href="Projects-single.html">Projects Single</a></li>
                                                                                 </ul>
                                                                                </li>
                                                                                <li class="dropdown">
                                                                                        <a href="#">Blog</a>
                                                                                        <ul class="submenu">
                                                                                    <li><a href="blog.html">blog</a></li>
                                                                                    <li><a href="blog-details.html">blog detail page</a></li>
                                                                                 </ul>
                                                                                </li>
                                                                                <li class="dropdown">
                                                                                        <a href="#">Shop</a>
                                                                                        <ul class="submenu">
                                                                                    <li><a href="shop.html">Shop</a></li>
                                                                                    <li><a href="shop-single.html">single Product</a></li>
                                                                                    <li><a href="shop-cart.html">shoping Cart</a></li>
                                                                                    <li><a href="checkout.html">Checkout</a></li>
                                                                                    <li><a href="account.html">My Account</a></li>
                                                                                 </ul>
                                                                                </li>
                                                                                <li class="dropdown">
                                                                                        <a href="#">pages</a>
                                                                                        <ul class="submenu">
                                                                                    <li><a href="testimonials.html">testimonials</a></li>
                                                                                    <li><a href="faq.html">faq's</a></li>
                                                                                    <li><a href="pricing.html">pricing plan</a></li>
                                                                                    <li><a href="get-quote.html">get quote</a></li>
                                                                                 </ul>
                                                                                </li>-->
                                <!--						<li><a href="contact.html">Contact</a></li> -->
                            </ul>
                        </div>
                        <div class="nav-footer hidden-lg">
                            <ul>
                                <li><button class="menu-expander"><i class="fa fa-list-ul"></i></button></li>
                            </ul>
                        </div>
                    </nav>
                    <div class="get-appt pull-right">
                        <a href="contact.php" class="appt-btn theme-btn">Contactez-nous</a>
                    </div>
                </div>

            </div>
        </section>
