import Component from '../lib/Component';
import CreateElement from '../lib/createElement';

export default class Tasks extends Component {
    constructor() {
        super();
	console.log('Setting up Task component');

	this.title = CreateElement('div', 'Hello, world!', {
	    'class': 'text-3xl font-OffBit underline'
	});
    }

    render() {
        return this.title; 
    }
}
