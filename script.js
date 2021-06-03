// Opdracht functions calling functions


//function met 1 parameter - retourneren true als lft >18

let heyHallo = function (leeftijd) {
    if (leeftijd <= 18) {
        return true;
    }
    else {
        return false;
    }
};

heyhallo (46);



// functions met 1 parameter - 2e functie roept 1e functie aan om te controleren

let heyHalloCheck = function (leeftijd) {
    heyHallo(46) {
        if (true) {
            return "Hallo daar!";
        }
        else {
            return "Hey Kiddo!";
        }
}

let mijnLeeftijd = heyHallo (46);
console.log (heyHalloCheck);




const add = function(numberA, numberB) {
    return numberA + numberB;
};