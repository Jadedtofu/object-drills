// Object initializers and methods
let loaf = {
    flour: 300,
    water: 210,
    hydration: function() {
        return (this.water / this.flour) * 100;
    }
};
// console.log(loaf.hydration());

// Iterating over object's propeties
let food = {
    tacos: 'chicken',
    pizza: 'pepperoni',
    drink: 'margarita',
    curry: 'yellow',
    spam: 'musubi'
};
// for (let name in food) {    // name = property of food
//     console.log(`food.${name} = ${food[name]}`);  //food[name] gets the prop value
// };

// Arrays IN objects
let hobbitMeals = {
    meals: ['breakfast', 'second breakfast', 'elevenses', 'lunch', 'afternoon tea', 'dinner', 'supper']
};
// console.log(hobbitMeals.meals[3]);

// Arrays OF objects
let mockingJay = {name: 'Katniss', jobTitle: 'Archer', boss: 'Captain Marvel'};
let gameOfThrones = {name: 'Cercei', jobTitle: 'Queen', boss: 'Captain Marvel'};
let wonderWoman = {name: 'Diana', jobTitle: 'Art Curator', boss: 'Captain Marvel'};
let captainMarvel = {name: 'Carol', jobTitle: 'Fighter Pilot'};
let supergirl = {name: 'Kara', jobTitle: 'Reporter', boss: 'Captain Marvel'};

let characterArray = [mockingJay, gameOfThrones, wonderWoman, captainMarvel, supergirl];

// characterArray.map(function(meaningLess) {  // iterates through each object in array
//     console.log(`${meaningLess.name} : ${meaningLess.jobTitle}`);
// });

// Properties that aren't there
// characterArray.map(function(meaningLess) {  // iterates through each object in array
//     if (meaningLess.name === 'Carol') {
//         console.log(`${meaningLess.jobTitle} ${meaningLess.name} doesn't report to anybody.`);
//     } else {
//         console.log(`${meaningLess.jobTitle} ${meaningLess.name} reports to ${meaningLess.boss}.`);
//     }
// });
