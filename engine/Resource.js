class Resource {
    /**
     * This sets a property of a resource

     * @param {string} property 
     * @param {mixed} value 
     */
    set(property, value) {
        this[property] = value;
    }

    /**
     * Returns property of resource

     * @param {string} property 
     */
    get(property) {
        return this[property];
    }
}

export default Resource;