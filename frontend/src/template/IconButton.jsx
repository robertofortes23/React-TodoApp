import React from 'react'
import If from '../template/If'

const IconButton = props => (
    <If test={!props.hide}>
            <button className={'btn btn-'+ props.btnStyle} onClick={props.onClick}>
                <i className={'fa fa-'+ props.icon}></i>
            </button>
    </If>
)

export default IconButton