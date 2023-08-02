import Character from './Character';

export default class Nerf extends Character {
    constructor(name, type) {
        super(name, type);
        this.distance =  1;
        this.beingStoned = false;
    }

    get stoned() {
        return this.beingStoned;
    }

    set stoned(value) {
        this.beingStoned = value;
    }

    get finalAttack() {
        let remoteAttack = this.attack * (1 - (this.distance - 1)/10);
        let finalAttack = Math.round(remoteAttack);
    
        if (this.stoned) {
            finalAttack = Math.round(remoteAttack - Math.log2(this.distance)*5);
        }

        if (finalAttack < 0) {
            finalAttack = 0;
        }
        
        return finalAttack;
    }

    set finalAttack(value) {
        this.attack = value;
    }

}