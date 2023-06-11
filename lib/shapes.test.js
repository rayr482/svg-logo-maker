const {Triangle, Square, Circle} = require('./shapes');

describe('Triangle', () => {
    it('should return a blue triangle', () => {
        const shape = new Triangle();
        shape.setColor("blue");
        expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
    });
});

describe('Circle', () => {
    it('should return a red circle', () => {
        const shape = new Circle();
        shape.setColor("FF0000");
        expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" fill="FF0000" />');
    });
});

describe('Square', () => {
    it('should return a yellow square', () => {
        const shape = new Square();
        shape.setColor("yellow");
        expect(shape.render()).toEqual('<rect x="73" y="40" width="160" height="160" fill="yellow" />');
    });
});
