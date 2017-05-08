import React from 'react';

export default class TodoCreate extends React.Component {
	render(){
		return (
			<form onSubmit={this.handleCreate.bind(this)}>
				<input type="text" placeholder="what do i need" ref="createInput"/>
				<button>Create</button>
			</form>
		);
	}

	handleCreate(event){
		event.preventDefault();
		const task = this.refs.createInput.value;
		this.props.createTask(task);
		this.refs.createInput.value='';
	}
}