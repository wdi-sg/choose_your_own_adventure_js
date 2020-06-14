import Resource from '../Resource';
import DialogContent from './DialogContent';

class Dialog extends Resource {
    transcript = [];
    dialogElement;

    constructor(scripts = [], dialogElement = '#dialog') {
        super();
        // allow a string for quick dialog
        if (typeof scripts === 'string') {
            scripts = [new DialogContent({
                text: scripts
            })];
        }
        this.transcript = scripts;
        this.dialogElement = typeof dialogElement === 'string' ? document.querySelector(dialogElement) : dialogElement;
    }

    get currentDialogContent() {
        return this.transcript.find(dialogContent => !dialogContent.get('completed'));
    }

    // added target to show context of dialog
    async prompt(target = null) {
        this.set('isActive', true);
        return new Promise(async (resolve, reject) => {
            const dialogContent = this.currentDialogContent;
            if (!dialogContent) return;
            await this.displayText(dialogContent.get('text'));
            if (dialogContent.get('hasOptions') && typeof dialogContent.get('then') === 'function') {
                await this.showOptions(dialogContent, target);
            } else if (dialogContent.get('takesInput') && typeof dialogContent.get('then') === 'function') {
                this.getPlayerInput(dialogContent);
            }
            // set this dialog content as completed
            dialogContent.set('completed', true);
            this.set('isActive', false);
            resolve(true);
            return this.prompt();
        });
    }

    displayText(text) {
        this.clear();
        return new Promise((resolve, reject) => {
            const textArray = typeof text === 'function' ? Array.from(text()) : Array.from(text);
            let textCount = 0;
            textArray.forEach((char, index) => {
                setTimeout(() => {
                    this.dialogElement.innerHTML += char;
                    textCount++;
                    if (textCount === textArray.length) {
                        resolve(true);
                    }
                }, index === 0 ? 20 : 50 * index);
            });
        });
    }

    showOptions(dialogContent, target) {
        const options = dialogContent.get('options');
        return new Promise((resolve, reject) => {
            options.forEach(option => {
                const optionButton = document.createElement('button');
                optionButton.classList.add('dialog-option');
                optionButton.innerHTML = typeof option === 'object' ? option.name : option;
                optionButton.onclick = event => {
                    dialogContent.then(option, {
                        gameTarget: target,
                        ...event
                    });
                    return resolve(true);
                };
                this.dialogElement.appendChild(optionButton);
            });
        });
    }

    getPlayerInput(dialogContent) {
        const input = prompt(dialogContent.get('text'));
        if (dialogContent.get('takesInput') && !input) {
            return this.getPlayerInput(dialogContent);
        }
        return dialogContent.then(input);
    }

    clear() {
        this.dialogElement.innerHTML = '';
    }
}

window.Dialog = Dialog;

export default Dialog;