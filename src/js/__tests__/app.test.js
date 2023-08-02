import createHeroes from '../app';

const correctTypes = [
    ['Magician',10, 40],
    ['Daemon',10, 40],
];

test('should create heroes with correct types', () => {
    const result = createHeroes();

    const correctHeroes = correctTypes.map(([type, attack, defence]) => ({
        name: type,
        type: type,
        attack: attack,
        defence: defence,
        health: 100,
        level: 1
    }));

    expect(result).toEqual(correctHeroes);
});