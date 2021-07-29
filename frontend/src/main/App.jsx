import React from 'react'
import Todo from '../todo/Todo'
import About from '../about/About'

require('bootstrap/dist/css/bootstrap.min.css')
require('font-awesome/css/font-awesome.min.css')


const App = props => (
    <div className="container">
        <Todo />
        <About />
    </div>
)
export default App