import Consequence from './Consequence';

let id = 0;

export default class Component extends Consequence{
    constructor() {
	super();
        console.log('Creating a component');

	this.id = (id++).toString();
	this.state = {};
	this.stateHandler = {
	    set: (target, prop, value, receiver) => {
	        target[prop] = value;
		console.log(`property set: ${prop} = ${value}`);
		this.trigger('state');
		return true;
	    }
	};

	this.on('state', () => {
	    const old = document.querySelector(`[data-component-id="${this.id}"]`);
            const parentNode = old.parentNode;
	    parentNode.replaceChild(this.render(), old);
	});
    }

    setState(state) {
        this.state = new Proxy(state, this.stateHandler);
    }
}