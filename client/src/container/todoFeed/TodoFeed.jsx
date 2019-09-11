import React from 'react'
import TodoList from '../todoList/TodoList';

const TodoFeed = (props) => {
    const { todofeeds } = props
    return (
        <div>
            {todofeeds.map((todoData, index) => {
                return (        
                    <TodoList
                        todoList={todoData}
                        key={index}
                        deleteTodo={props.deleteTodo}
                    />
                )
            })}
        </div>
    )
}
export default TodoFeed
