import React from 'react'
import Menu from '../template/Menu'
import Routes from './Routes'
import '../template/custom.css'

require('bootstrap/dist/css/bootstrap.min.css')
require('font-awesome/css/font-awesome.min.css')


const App = props => (
    <div className="container">
        <Menu />
        <Routes />
    </div>
)
export default App