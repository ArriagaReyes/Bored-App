import Component from '../../lib/Component';
import createElement from '../../lib/createElement';

class TaskItem extends Component {
    constructor({ item, callback  }) {
        super();

	this.callback = callback;
	this.item = item;

	this.container = createElement('div', this.item);
    }

    click(e) {
	e.preventDefault();
	this.callback(this.item);
    }

    render() {
        return createElement('li', {
	     onclick: this.click.bind(this),
	    'data-component-id': this.id,
	    'class': `
		flex justify-center
		items-center h-[33vh]
		font-OffBit lg:text-5xl text-center
		lg:mr-2 lg:ml-2 lg:mb-2 bg-task-blue
		text-task-white lg:rounded-2xl
		mr-1 ml-1 mb-1.5 rounded-md
		text-2xl
		cursor-pointer
	    `
	}, this.container);
    }
}

export default class TaskList extends Component {
    constructor({ children = [], callback }) {
        super();

	this.items = children.map(item => new TaskItem({ item, callback }))
    }

    render() {
        return createElement('ul', {
	    'data-component-id': this.id,
	    'class': 'flex flex-col lg:pt-24 pt-12'
	}, ...this.items);
    }
}

