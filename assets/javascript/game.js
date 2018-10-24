function Character(name, hp, attackPower){
     this.name = name;
     this.hp = hp;
     this.attackPower = attackPower;

     this.isAlive = function() {
         return this.hp > 0;
     }

     this.attack = function(defender) {
        this.hp -= defender.attackPower;
        if (!this.isAlive()) {
            return;
        }

        defender.hp -= this.attackPower;
        this.attackPower += 8;
        if (!defender.isAlive()) {
            this.attackPower += 8;
        }
     }

     this.getHp = function() {
         return this.hp;
     }
}

var game =
{
    characters : [
        new Character("Darth Vader", 180, 25),
        new Character("Kenobi", 120, 8),
        new Character("Princess Leia", 150, 20),
        new Character("Yoda", 100, 5)
    ],

    myCharacter : null,
    defender : null,

    selectMyCharacter : function(character) {
        this.myCharacter = character;
    },

    selectDefender : function(character) {
        this.defender = character;
    },

    fight : function(character) {
        this.myCharacter.attack(this.defender);
    },

    findCharacter : function(name) {
        for(var i = 0; i < this.characters.length; ++ i)
        {
            if(this.characters[i].name === name)
            {
                return this.characters[i];
            }
        }

        return null;
    }
}

