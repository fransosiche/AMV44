<!DOCTYPE html>
<html lang="fr">
<head>

    <title>Contact | AMV 44 Menuiserie, Agencement, Isolation Loire-Atlantique</title>

    <?php include('inc/header.php'); ?>

    <div class="inner-banner has-base-color-overlay text-center"
         style="background: url('images/background/contact.jpg');">
        <div class="container">
            <div class="box">
                <h3>Contactez-nous</h3>
            </div>
        </div>
        <div class="breadcumb-wrapper">
            <div class="container">
                <div class="pull-left">
                    <ul class="list-inline link-list">
                        <li>
                            <a href="index.php">Accueil</a>
                        </li>
                        <li>
                            <a href="contact.php">Contactez-nous</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>


    <section class="single_contact_form">
        <div class="container">

            <div class="row">
                <div class="col-md-4 col-sm-6 col-xs-12">
                    <div class="section-title">
                        <h3>Informations</h3>
                        <span class="decor"></span>
                    </div>
                    <div class="accordion-box">
                        <!--Start single accordion box-->
                        <div class="accordion animated out" data-delay="0" data-animation="fadeInUp">
                            <div class="acc-btn active">
                                Magasin
                                <div class="toggle-icon">
                                    <i class="plus fa fa-angle-right"></i><i class="minus fa fa-angle-down"></i>
                                </div>
                            </div>
                            <div class="acc-content collapsed">
                                <ul class="contact-infos">
                                    <li>
                                        <div class="icon_box">
                                            <i class="icon-signs"></i>
                                        </div><!-- /.icon-box -->
                                        <div class="text-box">
                                            <p>5, Rue du Bois Simon - ZA de la Poterie<br>44690 Château Thebaud</p>
                                        </div><!-- /.text-box -->
                                    </li>
                                    <li>
                                        <div class="icon_box">
                                            <i class="icon-global"></i>
                                        </div><!-- /.icon-box -->
                                        <div class="text-box">
                                            <p>02 40 34 12 85 <br>contact@amv44.fr</p>
                                        </div><!-- /.text-box -->
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <!--Form Column -->
                <div class="column form-column col-md-8 col-sm-12 col-xs-12">
                    <div class="section-title">
                        <h3>Envoyez nous vos questions</h3>
                        <span class="decor"></span>
                    </div>

                    <div class="form-box default-form">
                        <div class="default-form">
                            <div class="top_alerts"></div>
                            <form id="contact_form" name="contact_form"
                                  class="home-contact-form contact-form select-form" method="post">
                                <div class="row clearfix">
                                    <div class="col-md-6 col-sm-6 col-xs-12">

                                        <div class="form-group">
                                            <input type="text" name="name" id="name" class="form-control" value=""
                                                   placeholder="Nom" required="">
                                        </div>
                                    </div>
                                    <div class="col-md-6 col-sm-6 col-xs-12">
                                        <div class="form-group">
                                            <input type="email" id="mail" name="mail"
                                                   class="form-control required email" value=""
                                                   placeholder="Adresse mail" required>
                                        </div>
                                    </div>
                                    <div class="col-md-6 col-sm-6 col-xs-12">
                                        <div class="form-group">
                                            <input type="text" id="phone" name="phone" value="" placeholder="Téléphone">
                                        </div>
                                    </div>
                                    <div class="col-md-6 col-sm-6 col-xs-12">
                                        <div class="form-group">
                                            <input type="text" id="subject" name="subject" value="" placeholder="Sujet">
                                        </div>
                                    </div>
                                    <div class="col-md-12 col-sm-12 col-xs-12">
                                        <div class="form-group">
                                            <textarea id="message" name="message" class="form-control textarea required"
                                                      placeholder="Message"></textarea>
                                        </div>
                                    </div>
                                    <div class="col-md-12 col-sm-12 col-xs-12">
                                        <div class="form-group">
                                            <input id="form_botcheck" name="form_botcheck" class="form-control"
                                                   type="hidden" value=""/>
                                            <button id="envoi" class="thm-btn thm-color" type="submit"
                                                    data-loading-text="Envoi en cours">Envoyer Message
                                            </button>
                                        </div>
                                    </div>

                                </div>
                            </form>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    </section>

    <div class="map">
        <div id="map" class="googlemaps-canvas" zoom="11" latitude="47.105959" longitude="-1.443213"></div>
    </div>

    <?php include('inc/footer.php'); ?>
    <script type='text/javascript' src="js/jquery.validate.js"></script>
    <script type='text/javascript' src="js/additional-methods.js"></script>
    <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/emailjs-com@2.3.2/dist/email.min.js"></script>
    <script type="text/javascript">
        (function () {
            emailjs.init("user_FNBeRlHnQbwDxm5jfIuZe");
        })();
    </script>
    <script type='text/javascript'>
        let sendButton = document.getElementById('envoi');

        sendButton.addEventListener('click', function (e) {
            let validator = $("#contact_form").validate({
                rules: {
                    name: {
                        required: true,
                        minlength: 2
                    },
                    phone: {
                        required: true,
                        minlength: 10
                    },
                    mail: {
                        required: true
                    },
                    message: {
                        required: true,
                        minlength: 2
                    }
                },
                messages: {
                    name: {
                        required: "*Veuillez saisir un Nom.",
                        minlength: "Veuillez saisir au moins 2 caractères."
                    },
                    phone: {
                        required: "*Veuillez saisir un numéro de téléphone.",
                        minlength: "Veuillez saisir au moins 10 caractères."
                    },
                    mail: "*Veuillez saisir un Email valide.",
                    message: {
                        required: "*Veuillez saisir un Message.",
                        minlength: "Veuillez saisir au moins 2 caractères."
                    }
                },
                errorElement: 'div',
                errorPlacement: function (error, element) {
                    var placement = $(element).data('error');
                    if (placement) {
                        $(placement).append(error);
                    } else {
                        error.insertAfter(element);
                    }
                },
                submitHandler: function (form) {
                    send();
                },
            });
        });

        function send() {
            const template_params = {
                "subject": document.getElementById('subject').value,
                "name": document.getElementById('name').value,
                "message": document.getElementById('message').value,
                "mail": document.getElementById('mail').value,
                "phone": document.getElementById('phone').value,
            };

            let service_id = "default_service";
            let template_id = "amv44";
            emailjs.send(service_id, template_id, template_params).then(function (r) {
                if (r.status === 200){
                    success()
                } else {
                    error();
                }
            });
        }

        function erase() {
            document.getElementById('subject').value = "";
            document.getElementById('name').value = "";
            document.getElementById('message').value = "";
            document.getElementById('mail').value = "";
            document.getElementById('phone').value = "";
        }

        function success(){
            $(".top_alerts").html('<div class="alert alert-success alert-dismissable log-alerts" role="alert" hidden><a href="" class="close" data-dismiss="alert" aria-label="close">&times;</a>L\'envoi du mail de contact a été effectué avec succès.</div>');
            $(".alert-success").fadeTo(8000, 200).slideUp(500, function () {
                $(".alert-success").alert('close');
            });
            erase();
        }

        function error() {
            $(".top_alerts").html('<div class="alert alert-error alert-dismissable log-alerts" role="alert"><a href="" class="close" data-dismiss="alert" aria-label="close">&times;</a>Une erreur s\'est produite lors de l\'envoi du mail, veuillez nous contacter.</div>');
            $(".alert-error").fadeTo(8000, 200).slideUp(500, function () {
                $(".alert-error").alert('close');
            });
        }
    </script>
    </body>
</html>
