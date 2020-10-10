import React, { Component } from 'react'

export class TodoList extends Component {
    render() {
        return this.props.todo.map((todo) => (
            <div>{todo.title}</div>
        ))
    }
}

export default TodoList
