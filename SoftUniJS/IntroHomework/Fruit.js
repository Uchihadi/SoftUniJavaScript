function calculateCost(fruit, weightInGrams, pricePerKG) {
    //Write your code here
    var weightKG = parseFloat(weightInGrams / 1000).toFixed(2);
    var price = parseFloat(pricePerKG*weightKG).toFixed(2);
    console.log ("I need $" + price + " to buy " + weightKG + " kilograms of " + fruit + ".");
}

calculateCost('oranges', 2500, 1.8)
calculateCost('apples', 1563, 2.35)