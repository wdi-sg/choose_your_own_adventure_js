import Resource from '../Resource';

class Sprite extends Resource {
    asset;
    width;
    height;

    constructor(options = {}) {
        super();
        if (!options.asset) {
            throw new Error('Sprite requires asset!');
        }
        this.asset = options.asset;
        this.width = options.width || 36;
        this.height = options.height || 36;
        this.spriteElement = this.createSpriteElement();
    }

    createSpriteElement() {
        const spriteElement = document.createElement('div');
        spriteElement.classList.add('game-sprite');
        spriteElement.style.width = this.width;
        spriteElement.style.height = this.height;
        spriteElement.style.backgroundPosition = `0 0`;
        spriteElement.style.backgroundImage = `url('${this.asset}')`;
        return spriteElement;
    }
};
export default Sprite;