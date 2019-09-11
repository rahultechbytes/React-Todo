import React, { Component } from 'react'
import { connect } from 'react-redux'
import Form from '../Form/index';
import TodoFeed from '../todoFeed/TodoFeed';
import { getTodos, deleteTodo } from '../../action/todo.action';

class TodoManager extends Component {

    componentDidMount() {
        this.props.getTodos();
    }

    render() {
        return (
            <div>
                <Form />
                <TodoFeed
                    todofeeds={this.props.todofeeds}
                    deleteTodo={this.props.deleteTodo}
                />
                
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    todofeeds: state.todoReducer.todos
})

const mapDispatchToProps = {
    getTodos,
    deleteTodo
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoManager)
