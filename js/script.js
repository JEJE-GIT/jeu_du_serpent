
document.addEventListener("DOMContentLoaded", function(event) {               //Temps de la vidéo tuto: 1h02min

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

            this.finPartie();
            this.affichagePointage(1);       // Quand une nouvelle partie commence, le serpent va avoir 1 case de longueur
            this.pomme = new Pomme(this);         // L'objet "Pomme" va être gardé en mémoire dans la classe "Jeu"
            this.serpent = new Serpent(this);     // L'objet "Serpent" va être gardé en mémoire dans la classe "Jeu"

        }

        finPartie() {       //La fonctionnalité "finPartie" de la classe "Jeu"

            if(this.pomme !== undefined) {         //Si "this.pomme" est différent de "non-défini". C'est-à dire que si la pomme à été crée...

                this.pomme.supprimePomme();     //Dans "this.pomme", la fonctionnalité "supprimePomme()" sera appelé depuis la classe "Pomme"
                this.pomme = undefined;     //S'assurer que "this.pomme" ne soit plus gardé en mémoire

            }

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

        constructor(_leJeu) {         //la fonction "constructor" sert a initier des variables pour la classe "Pomme"  *"_leJeu" fait référence à la classe "Jeu"*

            console.log("Création de la pomme");

            this.leJeu = _leJeu;     //le paramètre "_leJeu" va être gardé en mémoire

            this.pomme = [];        //ceci représente les coordonés de la pomme, c'est à dire la position, etc.

            this.ajoutePomme();     //appele la fonctionnalité "ajoutePomme" qui se situe dans la classe "Pomme"


        }

        ajoutePomme(){

            var posX = Math.floor(Math.random() * this.leJeu.grandeurGrille);      //la position x de la pomme sera aléatoire selon la Grille dans le jeu   *le "Math.floor" sert à arondir un nombre décimal
            var posY = Math.floor(Math.random() * this.leJeu.grandeurGrille);      //la position y de la pomme sera aléatoire selon la Grille dans le jeu   *le "Math.floor" sert à arondir un nombre décimal

            this.pomme = [this.leJeu.s.rect(posX * this.leJeu.grandeurCarre, posY * this.leJeu.grandeurCarre, this.leJeu.grandeurCarre, this.leJeu.grandeurCarre).attr({fill: "red"}), posX, posY];   //Dans le tableau "this.pomme", ceci va dessiner la pomme en svg, c'est-à dire selon la position x, la position y, la longueur et la hauteur. Il va aussi "attribuer" la couleur rouge. le dernier "posX" et le dernier "posY" vont servir à détecter si il y a une colision avec le serpent.

        }

        supprimePomme(){

            this.pomme[0].remove();     //Ceci va supprimer la pomme, c'est-à dire qu'il va supprimer l'element 0 dans le tableau "this.pomme". Il y a un seul element dans ce même tableau

        }

    }



    var unePartie = new Jeu("#jeu", "#pointage");    //la variable "unePartie" contient l'objet "Jeu" qui contient le id "jeu" et le id "pointage".   ***LA SOURCE COMMENCE ICI***

    var btnJouer = document.querySelector("#btnJouer");     //Le id "btnJouer" va être sélectionné depuis le html
    btnJouer.addEventListener("click", nouvellePartie);


    function nouvellePartie() {         //Quand la fonction "nouvellePartie" sera appelée

        unePartie.nouvellePartie();      //La variable "unePartie" appele la fonctionnalité "nouvellePartie"    *le ".nouvellePartie()" fait référence à la fonctionnalité "nouvellePartie" dans la classe "Jeu"*

    }

});