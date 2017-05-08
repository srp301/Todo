import React from 'react';
import Todolist from './components/todo-list';
import TodoCreate from './components/todo-create';
import _ from 'lodash';

const todos = [
	{
		task:'Learning React',
		isCompleted:true
	},
	{
		task:'Learning Jsx',
		isCompleted:false
	},
	{
		task:'React in action',
		isCompleted:false
	}
];

export default class App extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			todos:todos
		};
	}

	render(){
		return (
			<div>
				<h1>React Todo App</h1>
				<TodoCreate createTask={this.createTask.bind(this)}/>
				<Todolist todos={this.state.todos} saveTask={this.saveTask.bind(this)} toggleTask={this.toggleTask.bind(this)}/>
			</div>	
		);
	}

	saveTask(oldtask,newtask){
		const foundtask = _.find(this.state.todos,todo=>todo.task===oldtask)
		foundtask.task = newtask;
		this.setState({todos:this.state.todos});
	}

	toggleTask(currentTask){
		const foundtask = _.find(this.state.todos,todo=>todo.task===currentTask);
		foundtask.isCompleted = !foundtask.isCompleted;
		this.setState({todos:this.state.todos});
	}

	createTask(task){
		this.state.todos.push({
			task:task,
			isCompleted:false
		});
		this.setState({todos:this.state.todos});
	}
}