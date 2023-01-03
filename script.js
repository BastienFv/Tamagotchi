// CREATION DES VARIABLES
let energie = 10
let faim = 0
let joie = 5


alert("Bonjour, je suis ton Tamagotchi !")
alert("Voici mes STATS: ENERGIE: " + energie + " FAIM: " + faim + " JOIE: " + joie)


let choix;


//BOUCLE TANT QUE
while (faim <= 5 && joie > 0 && energie > 0 && choix != 3) {
    

    //DEBUT DE LA PARTIE
    choix = prompt ("Que veux-tu faire ? 1: JOUER ou 2: NOURRIR, 3: SORTIR")
 

    //SI LE JOUEUR JOUE AVEC SON TAMAGOTCHI
    if (choix == 1) {
        energie = energie - 2;
        faim = faim + 1;
        joie = joie + 1;
        alert("ENERGIE: " + energie + " FAIM: " + faim + " JOIE " + joie)
    } 


    //SI LE JOUEUR NOURRI SON TAMAGOTCHI
    if (choix == 2) {
        faim = faim - 1;
        joie = joie - 1;
        energie = energie + 2;
        alert("ENERGIE: " + energie + " FAIM: " + faim + " JOIE: " + joie)
    }

    //APPEL FONCTION AUTOPSIE
    autopsie(energie, faim, joie) 


    // APPEL FONCTION LIFE
    life(energie, faim, joie) 
    

    //SI LE JOUEUR ARRÊTE LA PARTIE
    if (choix == 3) {
        // APPEL FONCTION LIFE
        alert("La partie est terminée, à bientôt !")
    }       
}
   

//FONCTION LIFE
function life(energie, faim, joie) {
    if (energie <= 0 || joie <= 0 || faim > 5) {
        alert("Votre Tamagotchi est mort. GAME OVER !!!")
    } else {
        if (energie > 0 && joie > 0 && faim < 6) {
            alert("Votre Tamagotchi est toujours en vie.")
        }         
    }
}



//FONCTION AUTOPSIE
function autopsie(energie, faim, joie){
    if (energie <= 0) {
        alert("Votre Tamagotchi n'a plus d'énergie ! :'(")
    }

    if (faim > 5) {
        alert("Votre Tamagotchi avait trop faim ! :'(")
    }

    if (joie <= 0) {
        alert("Votre Tamagotchi était trop triste ! :'(")
    }
}