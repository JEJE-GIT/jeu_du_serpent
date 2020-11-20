
document.addEventListener("DOMContentLoaded", function(event) {

    //Le jeu

    class Jeu{      //***---> tous les "this" qui sont à l'intérieur de la classe jeu font référence à la classe "Jeu".

        constructor(_idSvg, _idPointage) {         //la fonction "constructor" sert a initier des variables pour la classe "Jeu". La fonction "constructor" reçoi le paramètre "_idSvg" et le paramètre "_idPointage"

            console.log("Création du Jeu");

            this.s = Snap(_idSvg);           // Cette ligne de code sert à garder en mémoire le paramètre "_idSvg"
            this.sortiePointage = document.querySelector(_idPointage);      // Le id "pointage" va être sélèctionné depuis le html
            this.grandeurCarre = 20;        // La grandeur d'un carré est de 20px par 20px
            this.grandeurGrille = 15;       // La grille totale est divisé par 15px par 15px

        }

        nouvellePartie() {      //La fonctionnalité "nouvellePartie" de la classe "Jeu"

            this.affichagePointage(1);       // Quand une nouvelle partie commence, le serpent va avoir 1 case de longueur
            this.pomme = new Pomme;         // L'objet "Pomme" va être gardé en mémoire dans la classe "Jeu"
            this.serpent = new Serpent;     // L'objet "Serpent" va être gardé en mémoire dans la classe "Jeu"

        }

        finPartie() {       //La fonctionnalité "finPartie" de la classe "Jeu"

        }

        affichagePointage(_lePointage) {       //La fonctionnalité "affichagePointage" de la classe "Jeu"

            this.sortiePointage.innerHTML = _lePointage;          ////"this" fait référence à la classe "Jeu". le id "pointage" va être modifié depuis le html

        }

    }


    //Le serpent

    class Serpent{

        constructor() {         //la fonction "constructor" sert a initier des variables pour la classe "Serpent"

            console.log("Création du Serpent");

        }

    }


    //La pomme

    class Pomme{

        constructor() {         //la fonction "constructor" sert a initier des variables pour la classe "Serpent"

            console.log("Création de la pomme");

        }

    }

    var unePartie = new Jeu("#jeu", "#pointage");    //la variable "unePartie" contient l'objet "Jeu" qui contient le id "jeu" et le id "pointage".   ***LA SOURCE COMMENCE ICI***

    var btnJouer = document.querySelector("#btnJouer");     //Le id "btnJouer" va être sélectionné depuis le html
    btnJouer.addEventListener("click", nouvellePartie);


    function nouvellePartie() {         //Quand la fonction "nouvellePartie" sera appelée

        unePartie.nouvellePartie()      //          *le ".nouvellePartie()" fait référence à la fonctionnalité "nouvellePartie" dans la classe "Jeu"*

    }

});