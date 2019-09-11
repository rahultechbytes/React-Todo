import React, { Component } from 'react'
import Modal from '../Modal/index';

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false
        }
    }
    
    handleModel = () => this.setState({showModal: !this.state.showModal})

    handleOnDelete = () => {
        const todoId = this.props.todoList._id
        this.props.deleteTodo(todoId);
    }

    render() {
        const { description } = this.props.todoList
        return (
            <div>
                <p>{description}</p>
                <button onClick={this.handleOnDelete}>delete</button>
                <button onClick={this.handleModel}>edit</button>
                {this.state.showModal ? (
                    <Modal onClose={this.handleModel} />
                ) : null}
            </div>
        )
    }
}

export default TodoList
