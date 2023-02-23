import Component from '../lib/Component';
import createElement from '../lib/createElement';

class TaskItem extends Component {
    constructor({ item, callback  }) {
        super();

	this.callback = callback;
	this.item = item;
    }

    click(e) {
	e.preventDefault();
	this.callback(this.item);
    }

    render() {
        return createElement('li', {
	     onclick: this.click.bind(this),
	    'data-component-id': this.id
	}, this.item);
    }
}

class TaskList extends Component {
    constructor({ children = [], callback }) {
        super();

	this.items = children.map(item => new TaskItem({ item, callback }))
    }

    render() {
        return createElement('ul', {
	    'data-component-id': this.id
	}, ...this.items);
    }
}

export default class Tasks extends Component {
    constructor() {
        super();
	this.tasks = ['eat breakfast', 'workout', 'take over the world'];
	this.archived = [];
	this.setState({
	    tasks: this.tasks,
	    archived: this.archived
	});

	window.Tasks = this;
    }

    addItem(item) {
        this.state.tasks = this.state.tasks.concat(item);
    }

    archiveItem(item) {
	this.state.tasks = this.state.tasks.filter(task => task !== item);

	this.state.archived = this.state.archived.concat(item);
	console.log(this.state.tasks);
        console.log(`Archiving '${item}'`);
    }

    render() {
        this.taskListComponent = new TaskList({
	    children: this.state.tasks,
	    callback: this.archiveItem.bind(this)
	});

	this.archiveListComponent = new TaskList({
	    children: this.state.archived,
	    callback: () => {}
	});

	return createElement('div',{
	    'data-component-id': this.id
	}, this.taskListComponent, this.archiveListComponent);
    }
}
