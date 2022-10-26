import React from 'react'
import { Link } from 'react-router-dom'
import { Navegacao } from './styles'
export const Header: React.FC = () => {
    return (
        <Navegacao>
                    <ul>
                        <li>
                        <Link to="/dashboard"> Dashboard </Link>
                        </li>
                        <li> 
                        <Link to="/repositories"> Repositories </Link>
                        </li>
                        <li> 
                        <Link to="/about"> About </Link>
                        </li>
                    </ul>
        </Navegacao>
    )
}   