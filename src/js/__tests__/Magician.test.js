import Magician from '../Magician';

test('should create a hero with the Magician type', () => {
    const result = new Magician('Magician');

    expect(result).toEqual({
        name: 'Magician',
        type: 'Magician',
        defence: 40,
        attack: 10,
        health: 100,
        level: 1
    });
});