import Component from '../../lib/Component';
import createElement from '../../lib/createElement';

class ArchiveItem extends Component {
    constructor({ item, callback  }) {
        super();

	this.callback = callback;
	this.item = item;

	this.container = createElement('div', this.item);
    }

    render() {
        return createElement('li', {
	    'data-component-id': this.id,
	    'class': `
		flex justify-center
		items-center h-[33vh]
		font-OffBit lg:text-5xl text-center
		lg:mr-2 lg:ml-2 lg:mb-2 bg-task-blue-disabled
		text-task-white-disabled lg:rounded-2xl
		mr-1 ml-1 mb-1.5 rounded-md text-2xl
		cursor-not-allowed
	    `
	}, this.container);
    }
}

export default class ArchiveList extends Component {
    constructor({ children = [], callback }) {
        super();

	this.items = children.map(item => new ArchiveItem({ item, callback }))
    }

    render() {
        return createElement('ul', {
	    'data-component-id': this.id,
	    'class': 'flex flex-col'
	}, ...this.items);
    }
}
