const readlineSync = require('readline-sync');

class Hero {
    constructor(name, age, type) {
        this.name = name;
        this.age = age;
        this.type = type;
    }

    attack() {
        let attack = '';

        switch (this.type.toLowerCase()) {
            case 'mago':
                attack = 'magia';
                break;
            case 'guerreiro':
                attack = 'a espada';
                break;
            case 'monge':
                attack = 'artes marciais';
                break;
            case 'ninja':
                attack = 'a shuriken';
                break;
            default:
                attack = 'fez um ataque desconhecido';
        }

        console.log(`\nO ${this.type} ${this.name} atacou usando ${attack}`);
    }
}

let name = readlineSync.question('\nDigite o Nome do Heroi: ');
let age = parseInt(readlineSync.question('Digite a Idade do Heroi: '));
let type = readlineSync.question('Digite a Classe do seu Heroi: ');

const hero = new Hero(name, age, type);
hero.attack();