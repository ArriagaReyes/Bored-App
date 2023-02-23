import Component from '../lib/Component';
import createElement from '../lib/createElement';
import TaskList from './TaskList';
import ArchiveList from './ArchiveList';

class Header extends Component {
    constructor() {
        super();
    }

    render() {
        return createElement('div', 'Untitled header here');
    }
}

export default class Tasks extends Component {
    constructor() {
        super();
	this.tasks = ['eat breakfast', 'workout', 'take over the world'];
	for(let i = 0; i < this.tasks.length; i++) {
	    this.tasks[i] = this.tasks[i].toUpperCase();
	}
	this.archived = [];
	this.setState({
	    tasks: this.tasks,
	    archived: this.archived
	});

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
	    'class': 'bg-black'
	}, this.taskListComponent, this.archiveListComponent);
    }
}
