
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
            return `${this.name} is a ${this.race} from ${this.origin}.`;
        },
        evaluateFight: function(character) {
            let damageTaken = character.attack - this.defense;  //char opponent vs factory char
            let enemyDmgTaken = this.attack - character.defense; //factory char vs char opponent
            return `Your opponent takes ${enemyDmgTaken} damage and you receive ${damageTaken} damage.`;
            // ex: If char Gandalf ATTK (10) vs char Aragorn DEF (8) --> Aragorn takes 2 DMG
            // ex2: If char Legolas ATTK (8) vs char Aragorn DEF (8) --> Aragorn takes 0 DMG
            // we need to know the difference between each character's attack and defense value
            // we need an equation that says ATTK - DEF = DMG (but for 2 diff characters)
            // Where x and y are the differences between each characters attack and defense values. 
            //If defense exceeds attack, then take zero damage.
        }
    };
    console.log(character);
}
createCharacter('Legolas', 'legolas', 'Elf', 'Woodland Realm', 8, 5);

// make a STORE <-- an object that stores all the data
