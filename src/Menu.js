import React from 'react'
import Search from './Search'
import './Menu.css'

function Menu (props){
    return(
        <div className="container">
            <div className="subcontainer">
                <div className="neon-wrapper">
                    <span className="logo">{props.title}</span>
                    <span className="gradient"></span>
                    <span className="dodge"></span>
                </div>
                <div className="search">
                    <Search onsearch={props.onsearch} />
                </div>
                <div className="actions">
                    <button className="button btn-blue">Buscar Libro</button>
                </div>
            </div>
        </div>
    );
}

export default Menu;