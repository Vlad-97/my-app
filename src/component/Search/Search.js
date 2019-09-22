import React from 'react';
import logo from './search.png';
import './Search.css';
import { Link } from 'react-router-dom';

const Search = () => {
    return (
        <div>
        <Link to = "/"><img src={logo} alt="logo" className="image" /></Link>
        <input type="text" placeholder="Search"  /> 
        </div>
    )
}

export default Search;
