import React, { Component } from 'react'
import TodoList from './TodoList'

export class Todo extends Component {
    render() {
        return <TodoList todo={this.props.todo}/>
    }
}

export default Todo
