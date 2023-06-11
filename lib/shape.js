class shape {
    constructor() {
        this.color = '';
    };

    setColor(Color) {
        this.color = Color;
    };
};

class Circle extends shape {
    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
    };
};

class Triangle extends shape {
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
    };
};

class Square extends shape {
    render() {
        return `<rect x="73" y="40" width="160" height="160" fill="${this.color}" />`;
    };
};

module.exports = {Triangle, Square, Circle};
