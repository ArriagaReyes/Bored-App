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
		font-OffBit text-5xl text-center
		mr-2 ml-2 mb-2 bg-task-blue-disabled
		text-task-white-disabled rounded-2xl
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
