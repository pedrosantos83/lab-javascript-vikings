// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health
        this.strength = strength
    }
    attack() {
        return this.strength
    }
    receiveDamage(amountOfDamage) {
        this.health = this.health - amountOfDamage;
    }
}
// Viking
class Viking extends Soldier {
    constructor(name, health, strength,) {
        super(health, strength);
        this.name = name;
    }
    receiveDamage(amountOfDamage) {
        super.receiveDamage(amountOfDamage);
        if( this.health > 0 ) {
            return `${this.name} has received ${amountOfDamage} points of damage`

        } else  {
                return `${this.name} has died in act of combat`
            }
        }
    battleCry() {
        return 'Odin Owns You All!'
    }
}

// Saxon
class Saxon extends Soldier {
    
    receiveDamage(amountOfDamage) {
        super.receiveDamage(amountOfDamage);
        if( this.health > 0 ) {
            return `A Saxon has received ${amountOfDamage} points of damage`

        } else  {
                return `A Saxon has died in combat`
            }
        }
}
// War
class War {
    
}
