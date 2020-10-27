var bois = [];
const besoinbois = 56;
var eau = [];
const besoineau = 30;
var poisson = [];
const besoinpois = 30;


function water() {


    let perte = 0, i = 0;
    let total = 0, gain = 0;
    let chance = Math.ceil(Math.random() * 7);
    if (chance !== 3) {
        let gain = 0;
        eau.push(chance);
        for (let i = 0; i < eau.length; i++) {
            gain += eau[i];
        }
        console.log("Tu as gagné " + chance + " litre d'eau " + " et tu as desormais " + gain + " litre d'eau ");
    }
    else if (chance == 3 && eau == []) {
        for (let i = 0; i < 10; i++) {
            console.log("s");
            console.log("TU T'ES FAIS MORDRE TROP DE FOIS !!!!\n GAME OVER....");
        }
        console.log("Tu as perdu le jeu ");
    }
    else if (chance == 3) {
        val = eau.pop();
        console.log("Un serpent vous a mordue! vous avez perdu " + val + " litre d'eau ");
        i++;
    }
    for (let i = 0; i < eau.length; i++) {
        total += eau[i];
    }
    while (i == 7) {
        console.log("TU T'ES FAIS MORDRE TROP DE FOIS !!!!\n GAME OVER....");
        alert ("TU T'ES FAIS MORDRE TROP DE FOIS !!!!\n GAME OVER....")
    }


    if (total >= besoineau) {
        console.log("Tu as assez d'eau pour survivre! Tu peux maintenant te concentrer sur les autres taches!");
        alert ("Tu as assez d'eau pour survivre! Passons au poisson!")
    }

}

function fish() {
    
   
    
    let perte = 0, i = 0;
    let total = 0, gain = 0;
    let chance = Math.ceil(Math.random() * 7);
    if (chance !== 3) {
        let gain = 0;
        poisson.push(chance);
        for (let i = 0; i < poisson.length; i++) {
            gain += poisson[i];
        }
        console.log("Tu as peché " + chance + " poisson " + " et tu as desormais " + gain + " poisson ");
    }
    else if (chance == 3 && poisson == []) {
        for (let i = 0; i < 10; i++) {
            console.log("glugluglu !!! \n TU T'ES NOYE!!!! GAME OVER");
        }
    }
    else if (chance == 3) {
        val = poisson.pop();
        console.log("Tu as failli te noyer! Tu as perdu " + val + " poisson ");
        i++;
    }
    for (let i = 0; i < poisson.length; i++) {
        total += poisson[i];
    }
    if (total >= besoinpois) {
        console.log("Tu as assez de poisson pour te nourrir! Tu peux maintenant te concentrer sur les autres taches!");
        alert ("Tu as assez de poisson pour survivre! Passons au bois, derniere etape!")
        
               
           }
   
   
       
    
    while (i == 7) {
        console.log("TU T'ES NOYE EN PECHANT !!!!\n GAME OVER....");
        alert ("TU T'ES NOYE EN PECHANT !!!!\n GAME OVER....")
    }
    
    
    
}









function wood() {
    
   
    let perte = 0, i = 0;
    let total = 0, gain = 0;
    let chance = Math.ceil(Math.random() * 7);
    if (chance !== 3) {
        let gain = 0;
        bois.push(chance);
        for (let i = 0; i < bois.length; i++) {
            gain += bois[i];
        }
        console.log("Tu as gagné " + chance + " bois " + " et tu as desormais " + gain + " bois ");
    }
    else if (chance == 3 && bois == []) {
        for (let i = 0; i < 10; i++) {
            console.log("s");
            console.log("TU T'ES FAIS MORDRE TROP DE FOIS !!!!\n GAME OVER....");
        }
    }
    else if (chance == 3) {
        val = bois.pop();
        console.log("Un serpent vous a mordue! vous avez perdu " + val + " bois ");
        i++;
    }
    for (let i = 0; i < bois.length; i++) {
        total += bois[i];
    }
    while (i == 7) {
        console.log("TU T'ES FAIS MORDRE TROP DE FOIS !!!!\n GAME OVER....");
        alert ("TU T'ES FAIS MORDRE TROP DE FOIS !!!!\n GAME OVER....")
    }
    if (total >= besoinbois) {
        console.log("Tu as assez de bois pour construire un bateau et t'echapper! Tu peux maintenant te concentrer sur les autres taches!");
        alert("TU AS GAGNE!!! Tu peux enfin t'echapper de cette ile et retourner a la civilisation! (pas le jeu CIV 6 hein :) )")
    }

}


