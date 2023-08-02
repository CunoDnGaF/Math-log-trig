import Nerf from '../Nerf';

test('should return an attack equal to 0', () => {
    const daemon = new Nerf ('Daemon', 'Daemon');
    daemon.finalAttack = 10;
    daemon.distance = 13;

    expect(daemon.finalAttack).toBe(0);
});

test('should return an attack equal to 20', () => {
    const daemon = new Nerf ('Magician', 'Magician');
    daemon.finalAttack = 34;
    daemon.distance = 5;

    expect(daemon.finalAttack).toBe(20);
});

test('should return an attack equal to 28', () => {
    const daemon = new Nerf ('Magician', 'Magician');
    daemon.stoned = true;
    daemon.finalAttack = 45;
    daemon.distance = 3;

    expect(daemon.finalAttack).toBe(28);
});