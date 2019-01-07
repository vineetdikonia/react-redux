import React from "react";
import { Link } from "react-router-dom";
const Header = () => (
    <div className="row">
        <h2>Header</h2>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/topic">Topic</Link>
    </div>
);

export default Header;