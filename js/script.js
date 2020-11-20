
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

        constructor(_leJeu) {         //la fonction "constructor" sert a initier des variables pour la classe "Serpent"   *"_leJeu" fait référence à la classe "Jeu"*

            console.log("Création du Serpent");

            this.leJeu = _leJeu;     //le paramètre "_leJeu" va être gardé en mémoire

            this.currentX = -1;     //La position de départ en X est de -1;
            this.currentY = 0;      //La position de départ en Y est de 0;

            this.nextMoveX = 1;     //Le prochain mouvement en x est 1
            this.nextMoveY = 0;     //Le prochain mouvement en y est 0

            this.serpentLongueur = 1;       //la longeur de base du serpent est de 1
            this.tblCarreSerpent = [];      //cela sert à garder en référance le nombre de carré du serpent, c'est-à dire sa longueur

            this.vitesse = 250;            //Le serpent avance d'un carré à chaque 250ms, pour sa vitesse.
            this.timing = setInterval(this.controleSerpent.bind(this), this.vitesse);       //la fonctionnalité  "controleSerpent" est appelée à chaque 250ms, c'est-à dire la valeur de "vitesse". Le "this" dans "controleSerpent.bind(this)" possède le contexte de "this" de la classe "Serpent" et non du "setInterval"

            document.addEventListener("keydown", this.verifTouche.bind(this));     //dès qu'une touche est appuié, appele la donctionnalité "verifTouche" qui est dans la classe Serpent. Le "this" dans "verifTouche.bind(this)" possède le contexte de "this" de la classe "Serpent" et non du "document.addEventListener"


        }

        verifTouche(_evt) {        //fonctionalité qui sert a vérifier si une touche a été appuyé

            var evt = _evt;         //la variable "evt" représente un évènement

            console.log(evt.keyCode);

            this.deplacement(evt.keyCode);      //Dans "this", la fonctionnalité "deplacement" qui se trouve dans la classe "Serpent" est appelé et il prend comme paramètre "(evt.keyCode)"

        }

        deplacement(dirCode) {    //fonctionalité qui sert a déplacer le serpent

            switch (dirCode) {

                case 37:            //touche de gauche
                    this.nextMoveX = -1;
                    this.nextMoveY = 0;
                    break;

                case 38:            //touche de haut
                    this.nextMoveX = 0;
                    this.nextMoveY = -1;
                    break;

                case 39:            //touche de droite
                    this.nextMoveX = 1;
                    this.nextMoveY = 0;
                    break;

                case 40:            //touche de bas
                    this.nextMoveX = 0;
                    this.nextMoveY = 1;
                    break;

            }

            console.log(this.nextMoveX,  this.nextMoveY);

        }

        controleSerpent() {     //fonctionalité qui sert a vérifier un évenement du serpent, ex: Si le serpent se touche lui-même, etc.

            var nextX = this.currentX + this.nextMoveX;     //la variable "nextX" est égale à la position de départ en x + le prochain mouvement en x
            var nextY = this.currentY + this.nextMoveY;     //la variable "nextY" est égale à la position de départ en Y + le prochain mouvement en Y

            this.dessineCaré(nextX, nextY);         //Le carré à été dessiné après cette prochaine position
            this.currentX = nextX;
            this.currentY = nextY;


        }

        dessineCaré(x, y) {        //fonctionalité qui sert a dessiner le serpent en svg



        }

        supprimeSerpent() {        //fonctionalité qui sert a supprimer le serpent



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