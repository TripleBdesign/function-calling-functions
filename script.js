// Opdracht functions calling functions


//function met 1 parameter - retourneren true als lft >18

let heyHallo = function (leeftijd) {
    if (leeftijd >= 18) {
        return true;
    }
    else {
        return false;
    }
};

heyhallo (46);


// functions met 1 parameter - 2e functie roept 1e functie aan om te controleren

let groet = function (leeftijd) {
        if (heyHallo (leeftijd)) {
            return "Hallo daar!";
        }
        else {
            return "Hey Kiddo!";
        }
}


console.log (groet(46)); // "Hallo daar!"
console.log (groet(16)); // "Hey Kiddo!"


/*
// korter middels de arrow function
// het hoeft niet zo kort maar goed om te weten dat het kan

const isAdultShort = age => age >= 18;

const greetShort = age => (isAdult(age) ? "Hello there" : "Hey kiddo");

console.log(greetShort(65)); // "Hello there"
console.log(greetShort(10)); // "Hey kiddo"
*/

//BTW opgave
const calculateVAT = function(basePrice, VATPercentage) {
    return basePrice * (VATPercentage / 100);
};

const calculatePriceIncludingVAT = function(basePrice, VATPercentage) {
    const VAT = calculateVAT(basePrice, VATPercentage);
    return basePrice + VAT;
};

console.log(calculatePriceIncludingVAT(1000, 21)); // 1210
console.log(calculatePriceIncludingVAT(2, 9)); // 2.18

//BTW opgave 2

const calculateBasePrice = function(priceIncludingVAT, VATPercentage) {
    const basePrice = priceIncludingVAT / ((100 + VATPercentage) / 100);
    return basePrice;
};

const calculateBasePriceAndVAT = function(priceIncludingVAT, VATPercentage) {
    const basePrice = calculateBasePrice(priceIncludingVAT, VATPercentage);
    const VAT = priceIncludingVAT - basePrice;
    return [basePrice, VAT];
};

console.log(calculateBasePriceAndVAT(1210, 21)); // [1000, 210]
console.log(calculateBasePriceAndVAT(2.18, 9)); // [2, 0.18]