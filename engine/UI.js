class UI {
    uiElement;

    destination;

    charactersOnScreen = [];

    constructor(uiElement, destination) {
        this.uiElement = typeof uiElement === 'string' ? document.querySelector(uiElement) : uiElement;
        this.destination = destination;
        this.initailize();
    }

    initailize() {
        this.loadDestination(this.destination);
    }

    loadDestination(destination) {
        this.clear();
        destination.render(this.uiElement);
    }

    clear() {
        this.uiElement.innerHTML = '';
    }

    transtitionTo() {}

    render() {}
}

export default UI;