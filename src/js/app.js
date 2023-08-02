import Magician from './Magician';
import Daemon from './Daemon';


export default function createHeroes() {
    return [
        new Magician('Magician'),
        new Daemon('Daemon'),
    ];
}
