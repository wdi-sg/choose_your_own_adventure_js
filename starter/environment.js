const trees = (seed) => {
    switch (ranN(3)) {
        case 1:
            eventContainer.innerHTML = 'This forest alive with the sound of music.';
            break;
        case 2:
            eventContainer.innerHTML = "It's thick and brushy in this forest.";
            break;
        case 3:
            eventContainer.innerHTML = 'Light streams down from the overgrown canopy of this forest.';
            break;
    };
};
const grass = (seed) => {
    switch (ranN(3)) {
        case 1:
            eventContainer.innerHTML = 'The grass ripples from a slight breeze.';
            break;
        case 2:
            eventContainer.innerHTML = "A verdant field.";
            break;
        case 3:
            eventContainer.innerHTML = 'Distant herds of animals gallop across this open plain.';
            break;

    };
};
const lake = (seed) => {
    switch (ranN(3)) {
        case 1:
            eventContainer.innerHTML = 'Fish swim freely in the lake.';
            break;
        case 2:
            eventContainer.innerHTML = "The waters of this lake shine brilliantly.";
            break;
        case 3:
            eventContainer.innerHTML = 'Azure water fills this lake.';
            break;

    };
};
const hill = (seed) => {
    switch (ranN(3)) {
        case 1:
            eventContainer.innerHTML = 'Music could be heard behind this hill.';
            break;
        case 2:
            eventContainer.innerHTML = "A brisk climb to the top of this hill.";
            break;
        case 3:
            eventContainer.innerHTML = 'Just another hill.';
            break;

    };
};
const mountain = (seed) => {
    switch (ranN(3)) {
        case 1:
            eventContainer.innerHTML = 'This mountain looks daunting.';
            break;
        case 2:
            eventContainer.innerHTML = "Snow caps this mountain.";
            break;
        case 3:
            eventContainer.innerHTML = 'A tremendous climb.';
            break;

    };
};
const abandonedBuilding = (seed) => {
    switch (ranN(3)) {
        case 1:
            eventContainer.innerHTML = 'A deserted building.';
            break;
        case 2:
            eventContainer.innerHTML = "This building have been long abandoned.";
            break;
        case 3:
            eventContainer.innerHTML = 'None inhabits this building anymore. ';
            break;

    };
};
const town = (seed) => {
    switch (ranN(3)) {
        case 1:
            eventContainer.innerHTML = 'This town bristles with activity.';
            break;
        case 2:
            eventContainer.innerHTML = "A gated town.";
            break;
        case 3:
            eventContainer.innerHTML = 'Smoke arises from houses in this town.';
            break;

    };
};