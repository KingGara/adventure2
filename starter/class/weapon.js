class Weapon extends item {
    constructor(name, description, strength = 150) {
        super(name, description);
        this.strength = strength
    }
}
