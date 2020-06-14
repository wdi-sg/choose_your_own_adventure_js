import Resource from '../Resource';
import Tile from './Tile';
import {
    range
} from '../utils/index';

class Destination extends Resource {
    name;

    columns;

    rows;

    background;

    tiles;

    characters = [];

    dialog;

    constructor(options) {
        super();
        if (!options.name) {
            throw new Error('Destination requires a name!');
        }
        this.name = options.name;
        this.rows = range(options.rows || 11);
        this.columns = range(options.columns || 11);
        this.characters = options.characters || [];
        this.background = options.background || null;
        this.dialog = options.dialog || null;
    }

    buildMap() {
        const map = [];
        this.rows.forEach(row => {
            this.columns.forEach(col => {
                const isEdge = (col + 1) % this.rows.length == 0;
                map.push(new Tile(row, col, isEdge));
            })
        });
        this.tiles = map;
        return map;
    }

    startDialog() {
        if (this.dialog && this.dialog instanceof Dialog) {
            this.dialog.prompt();
        }
    }

    render(ui) {
        const map = this.buildMap();
        map.forEach(tile => tile.render(ui));
        this.startDialog();
        if (this.background) {
            document.body.style.backgroundImage = `url('${this.background}')`;
            document.body.style.backgroundSize = 'cover';
        }
        // load characters
        if (this.characters.length) {
            this.characters.forEach(character => {
                character.render(ui);
            });
        }
    }

    destroy() {
        // remove all tiles
        this.tiles.forEach(tile => tile.destroy());
        // remove all characters
        this.characters.forEach(character => character.destroy());
    }
}

window.Destination = Destination;

export default Destination;