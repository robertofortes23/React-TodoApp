import React from 'react'
import Grid from '../template/Grid'
import IconButton from '../template/IconButton'

const TodoForm = props => (
    <div role='form' className='todoForm'>
        <Grid cols='12 9 10'>
            <input id='description' className='form-control' placeholder='Adicione uma tarefa' onChange={props.handleChange} value={props.description}></input>
        </Grid>

        <Grid cols='12 3 2'>
            {/* Mudamos o nome da propriedade style para btnStyle, pois o Lint reclamava e essa é a melhor maneira de contornar esse problema */}
            <IconButton btnStyle='primary' icon='plus' onClick={props.handleAdd}></IconButton>
            <IconButton btnStyle='info' icon='search' onClick={props.handleSearch}/>
            <IconButton btnStyle='default' icon='close' onClick={props.handleClear}/>
        </Grid>
    </div>
)

export default TodoForm