import { NavLink } from "react-router-dom";
import "./Menu.css";

function Menu(): JSX.Element {
    return (
        <div className="Menu">
			<NavLink to="/home">Home</NavLink>
            <span> | </span>
			<NavLink to="/furniture-list">Our Furnitures</NavLink>
            <span> | </span>
			<NavLink to="/furniture-add">Add Furniture</NavLink>
        </div>
    );
}

export default Menu;
