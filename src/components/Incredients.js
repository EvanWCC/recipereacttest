import React from 'react'
import '../css/Incredient.css'
import Paper from '@material-ui/core/Paper'
const Incredients = ({item}) => {
    return (
        <div className="incredients">
            <ul className="incredient">
                <li className="amount_unit">
                    <small className="amount">{item.amount}</small>
                    <small className="unit">{item.unit}</small>
                </li>
                <li className="name">
                    <p>{item.name}</p>
                </li> 
            </ul>
        </div>
    )
}

export default Incredients

