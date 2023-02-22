import '../assets/style.css'
import Tasks from './Tasks';

const tasksComponent = new Tasks();

document.getElementById('root').append(tasksComponent.render());
