//script pour le soulignement de la barre de navigation

$(document).ready(function () {
    // Ajouter un gestionnaire d'événements au clic sur les liens de la barre de navigation
    $('.navbar-nav a').on('click', function () {
        // Retirer la classe 'active' de tous les liens de la barre de navigation
        $('.navbar-nav a').removeClass('active');

        // Ajouter la classe 'active' au lien cliqué
        $(this).addClass('active');
    });
});
//========================================================================

// script.js pour le changement a la selection d'un bouton radio

document.addEventListener('DOMContentLoaded', function () {
    var elementTrain = document.getElementById('elementTrain');
    var elementBus = document.getElementById('elementBus');
    var elementBateau = document.getElementById('elementBateau');
    var radioTrain = document.getElementById('train');
    var radioBus = document.getElementById('bus');
    var radioBateau = document.getElementById('bateau');

    function hideAllElements() {
        elementTrain.style.display = 'none';
        elementBus.style.display = 'none';
        elementBateau.style.display = 'none';
    }

    function showElement(element) {
        hideAllElements();
        element.style.display = 'block';
    }

    radioTrain.addEventListener('change', function () {
        if (radioTrain.checked) {
            showElement(elementTrain);
        }
    });

    radioBus.addEventListener('change', function () {
        if (radioBus.checked) {
            showElement(elementBus);
        }
    });

    radioBateau.addEventListener('change', function () {
        if (radioBateau.checked) {
            showElement(elementBateau);
        }
    });

    // Afficher l'élément initial au chargement de la page
    showElement(elementBus);
});
//========================================================================
