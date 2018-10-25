function Character(name, hp, attackPower){
     this.name = name;
     this.hp = hp;
     this.attackPower = attackPower;
     this.initialPower = attackPower;

     this.isAlive = function() {
         return this.hp > 0;
     }

     this.attack = function(defender) {
        this.hp -= defender.attackPower;
        defender.hp -= this.attackPower;
        if (!this.isAlive()) {
            return;
        }

        this.attackPower += this.initialPower;
        if (!defender.isAlive()) {
            this.attackPower += this.initialPower;
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

    setMyCharacter : function(character) {
        this.myCharacter = character;
    },

    setDefender : function(character) {
        this.defender = character;
    },

    fight : function() {
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

