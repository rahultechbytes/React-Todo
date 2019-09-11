import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addTodos } from '../../action/todo.action';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            description: ""
        }
    }
    handleOnChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    handleOnClick = (e) => {
        e.preventDefault();
        this.props.addTodos(this.state.description);
        this.clearInputField(e);
    }
    clearInputField() {
        this.setState({
            description: ""
        });
    }
    render() {
        return (
            <div>
                <input
                    type="text"
                    placeholder="Today's Task"
                    name="description"
                    onChange={this.handleOnChange}
                    value={this.state.description}
                />
                <button onClick={this.handleOnClick}>+</button>
            </div>
        )
    }
}

const mapDispatchToProps = {
    addTodos
}

export default connect(null, mapDispatchToProps)(Form)
