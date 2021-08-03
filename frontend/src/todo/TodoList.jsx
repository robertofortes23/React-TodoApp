import React from 'react'
import IconButton from '../template/IconButton'

const TodoList = props => {
    const renderRows = () => {
        const list = props.list || []
        return list.map(todo => (
            <tr key={todo._id}>
                <td className={todo.done ? 'markedAsDone' : ''}>{todo.description}</td>
                <td>
                    <IconButton btnStyle='success' icon='check' hide={todo.done} onClick={() => props.handleMarkAsDone(todo)} />
                    <IconButton btnStyle='warning' icon='undo' hide={!todo.done} onClick={() => props.handleMarkAsPending(todo)} />
                    <IconButton btnStyle='danger' icon='trash-o' hide={!todo.done} onClick={() => props.handleRemove(todo)}/>
                </td>
            </tr>
        )) 
    }
    return (
        <table className='table'>
            <thead>
                <tr>
                    <th>Descrição</th>
                    <th className='tableActions'>Ações</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}

export default TodoList