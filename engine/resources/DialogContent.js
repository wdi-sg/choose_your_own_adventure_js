import Resource from '../Resource';

class DialogContent extends Resource {
    text;
    options;
    takesInput;
    then;
    completed = false;

    get hasOptions() {
        return this.options.length;
    }

    constructor(options) {
        super();
        if (!options.text) {
            throw new Error('DialogContent requires text option!');
        }
        this.text = options.text;
        this.options = options.options || [];
        this.takesInput = options.takesInput || false;
        this.then = options.then || null;
    }
}

window.DialogContent = DialogContent;

export default DialogContent;