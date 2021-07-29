import React from 'react'
import Todo from '../todo/Todo'
import About from '../about/About'
import Menu from '../template/Menu'

require('bootstrap/dist/css/bootstrap.min.css')
require('font-awesome/css/font-awesome.min.css')


const App = props => (
    <div className="container">
        <Menu />
        <Todo />
        <About />
    </div>
)
export default App