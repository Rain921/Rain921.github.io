import React  from 'react';
import  './header.css'

const Header = () =>{
    return(
        <div className="Header d-flex">
        <h3>
            <a href="#">
            Stars DB
            </a>
        </h3>
            <ul className="d-flex">
            <li><a href="#">People</a></li>
                <li><a href="#">Planets</a></li>
                <li><a href="#">starships</a></li>
        </ul>
        </div>
    );

};


export default Header;