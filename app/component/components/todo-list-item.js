import React from 'react';

export default class TodoListItem extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			isEditing:false
		};
	}
	renderActionSection(){
		if(this.state.isEditing){
			return (
				<td>
					<button onClick={this.onSave.bind(this)}>Save</button>
					<button onClick={this.onCancel.bind(this)}>Cancel</button>
				</td>
			);
		}
		return (
			<td>
				<button onClick={this.onEditing.bind(this)}>Edit</button>
				<button>Delete</button>
			</td>
		);
	}

	renderTaskSection(){

		const taskStyle = {
			color:this.props.isCompleted?'green':'red',
			cursor:'pointer'
		};

		if(this.state.isEditing){
			return (
				<td>
					<form onSubmit={this.onSave.bind(this)}>
						<input type="text" defaultValue={this.props.task} ref="editInput"/>
					</form>
				</td>
			);
		}
		if(!this.props.isCompleted){
			return (<td onClick={this.onToggle.bind(this)} style={taskStyle}>{this.props.task}</td>);
		}
		return (<td onClick={this.onToggle.bind(this)} style={taskStyle}>
					<strike>{this.props.task}</strike>
				</td>);
	}

	render(){
		return (
			<tr key={this.props.index}>
				{this.renderTaskSection()}
				{this.renderActionSection()}
			</tr>
		);
	}

	onSave(event){
		event.preventDefault();
		const oldtask = this.props.task;
		const newtask = this.refs.editInput.value;
		this.props.saveTask(oldtask,newtask)
		this.setState({
			isEditing:false
		});
	}

	onCancel(){
		this.setState({
			isEditing:false
		});
	}

	onEditing(){
		this.setState({
			isEditing:true
		});
	}

	onToggle(){
		const currentTask = this.props.task;
		this.props.toggleTask(currentTask); 
	}
}