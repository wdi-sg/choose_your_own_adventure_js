import Resource from '../Resource';

class Tile extends Resource {
    x;
    y;
    dimensions;
    color = 'green';
    element;
    constructor(x, y, isEdge = false, dimensions = {
        width: 30,
        height: 30
    }, ) {
        super();
        this.x = x;
        this.y = y;
        this.isEdge = isEdge;
        this.dimensions = dimensions;
        this.element = this.createElement();
    }

    createElement(type = 'div') {
        const element = document.createElement(type);
        element.classList.add('game-tile');
        if (this.isEdge) {
            element.classList.add('is-edge');
        }
        element.style.backgroundColor = this.color;
        element.style.width = this.dimensions.width;
        element.style.height = this.dimensions.height;
        return element;
    }

    render(ui) {
        ui.appendChild(this.element);
    }

    destroy() {
        this.element.remove();
    }
}

export default Tile;