import FurnitureModel from "../../../Models/Furniture-model";
import "./FurnitureCard.css";

interface FurnitureCardProps {
	furniture:FurnitureModel
}

function FurnitureCard(props: FurnitureCardProps): JSX.Element {
    return (
        <div className="FurnitureCard">
		   <div className="card-content">
             <h3 className="card-title">Name:{props.furniture.name}</h3>
             <p className="card-description">Dimensions:{props.furniture.dimensions}</p>
             <p className="card-description">Color:{props.furniture.color}</p>
             <p className="card-description">Price: {props.furniture.price} ש"ח</p>
             <a href="#" className="card-link">View Details</a>
           </div>
        </div>
    );
}

export default FurnitureCard;
