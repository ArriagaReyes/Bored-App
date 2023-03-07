import Component from '../lib/Component';
import createElement from '../lib/createElement';
import TaskList from './TaskList';
import ArchiveList from './ArchiveList';

class TaskButton extends Component {
    constructor({ callback }) {
        super();

	this.callback = callback;
    }

    click(e) {
        e.preventDefault();
	this.callback();
    }

    render() {
        return createElement('button', {
	    'data-component-id': this.id,
	    onclick: this.click.bind(this),
	    'class': `
		bg-task-white text-task-blue
		lg:px-5 lg:py-2 lg:rounded-xl font-OffBit
		lg:text-2xl
		text-sm px-2.5 py-1.5 rounded-md
	    `
	}, 'ADD TASK');
    }
}

class TaskForm extends Component {
    constructor({ callback }) {
        super();

        this.callback = callback;

	this.input = createElement('input', {
	    'class': `
		grow lg:mr-2 lg:rounded-xl bg-transparent
		lg:border-4 border-task-white text-task-white
		font-OffBit lg:text-2xl text-center
		mr-1 rounded-md border-2 text-sm
	    `
	});
	this.taskButtonComponent = new TaskButton({ callback: this.addTask.bind(this) });
	this.form = createElement('form', {
	    'data-component-id': this.id,
	    'class': 'flex flex-row w-full'
	}, this.input, this.taskButtonComponent);
    }

    addTask() {
	this.callback(this.input.value);
	this.input.value = '';
    }

    render() {
        return this.form;
    }
}

class Header extends Component {
    constructor({ callback }) {
        super();

	this.taskFormComponent = new TaskForm({ callback });
    }

    render() {
        return createElement('div', {
	    'data-component-id': this.id,
            'class': `
		fixed inset-x-0 top-0
		flex justify-end lg:py-3 lg:px-2
		py-2 px-1
	    `
	}, this.taskFormComponent);
    }
}

export default class Tasks extends Component {
    constructor() {
        super();
	this.tasks = [];
	for(let i = 0; i < this.tasks.length; i++) {
	    this.tasks[i] = this.tasks[i].toUpperCase();
	}
	this.archived = [];
	this.setState({
	    tasks: this.tasks,
	    archived: this.archived
	});

        this.headerComponent = new Header({ callback: this.addItem.bind(this) });

	window.Tasks = this;
    }

    addItem(item) {
        this.state.tasks = this.state.tasks.concat(item.toUpperCase());
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

	this.archiveListComponent = new ArchiveList({
	    children: this.state.archived,
	    callback: () => {}
	});

	return createElement('div',{
	    'data-component-id': this.id,
	    'class': 'bg-black min-h-screen'
	}, this.headerComponent, this.taskListComponent, this.archiveListComponent);
    }
}
