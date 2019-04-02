
//Factory Functions with LOTR
/*
===============================================================================================
| Name                      | Nickname    | Race       | Origin         | Attack   | Defense  |
-----------------------------------------------------------------------------------------------
| Gandalf the White         | gandalf     | Wizard     | Middle Earth   | 10       | 6        |
-----------------------------------------------------------------------------------------------
| Bilbo Baggins             | bilbo       | Hobbit     | The Shire      | 2        | 1        |
-----------------------------------------------------------------------------------------------
| Frodo Baggins             | frodo       | Hobbit     | The Shire      | 3        | 2        |
-----------------------------------------------------------------------------------------------
| Aragorn son of Arathorn   | aragorn     | Man        | Dunnedain      | 6        | 8        |
-----------------------------------------------------------------------------------------------
| Legolas                   | legolas     | Elf        | Woodland Realm | 8        | 5        |
-----------------------------------------------------------------------------------------------
*/

function createCharacter(name, nickname, race, origin, attack, defense) {
    let character = {
        name: name,
        nickname: nickname,
        race: race,
        origin: origin,
        attack: attack,
        defense: defense,
        describe: function() {
            console.log(`${this.name} is a ${this.race} from ${this.origin}.`);
        },
        evaluateFight: function(character) {
            let charDmgTaken;
                if (character.attack <= this.defense) {     //character opponent vs factory char
                    charDmgTaken = 0;                
                } else {
                    charDmgTaken = character.attack - this.defense; 
                    }
            let enemyDmgTaken;
                if (this.attack <= character.defense) {     //factory char vs char opponent
                    enemyDmgTaken = 0;
                } else {
                    enemyDmgTaken = this.attack - character.defense;
                    }
            console.log(`Your opponent takes ${enemyDmgTaken} damage and you receive ${charDmgTaken} damage.`);
            // ex: If char Gandalf ATTK (10) vs char Aragorn DEF (8) --> Aragorn takes 2 DMG
            // ex2: If char Legolas ATTK (8) vs char Aragorn DEF (8) --> Aragorn takes 0 DMG
            // we need an equation that says ATTK - DEF = DMG (for 2 diff characters [character vs factory char])
            // If defense exceeds attack, then take zero damage.
        }
    };
    return character;
}
// createCharacter('Legolas', 'legolas', 'Elf', 'Woodland Realm', 8, 5);
// make a STORE <-- an object that stores all the data (?)
let characters = [];        // array literal
let gandalfTheWhite = createCharacter('Gandalf the White', 'gandalf', 'Wizard', 'Middle Earth', 10, 6);
let bilboBaggins = createCharacter('Bilbo Baggins', 'bilbo', 'Hobbit', 'The Shire', 2, 1);
let frodoBaggins = createCharacter('Frodo Baggins', 'frodo', 'Hobbit', 'The Shire', 3, 2);
let aragornSonOfArathorn = createCharacter('Aragorn son of Arathorn', 'aragorn', 'Man', 'Dunnedain', 6, 8);
let legolas = createCharacter('Legolas', 'legolas', 'Elf', 'Woodland Realm', 8, 5);
characters.push(gandalfTheWhite, bilboBaggins, frodoBaggins, aragornSonOfArathorn, legolas); // adding to array
console.log(characters);

