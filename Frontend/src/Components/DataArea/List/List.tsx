import { ChangeEvent, ChangeEventHandler, useEffect, useState } from "react";
import "./List.css";
import FurnitureTypesModel from "../../../Models/FurnitureTypes-model";
import furnitureService from "../../../Services/FurnituresService";
import FurnitureModel from "../../../Models/Furniture-model";
import FurnitureCard from "../FurnitureCard/FurnitureCard";




function List(): JSX.Element {

const [furnituresTypes,setFurnituresTypes]=useState<FurnitureTypesModel[]>([])
const[furnitures,setFurnitures]=useState<FurnitureModel[]>([])

useEffect(()=>{
    furnitureService.getAlllFurnituresTypes()
    .then(furnituresTypes=>setFurnituresTypes(furnituresTypes))
    .catch(err=>alert(err.message))
    
})

async function displayFurnituers(args:ChangeEvent<HTMLSelectElement>){

    const value=+args.target.value
    await furnitureService.getFurnituresByTypes(value)
    .then(furnitures=>setFurnitures(furnitures))
    .catch(err=>alert(err))
}


    return (
        <div className="List">

            <label>Select Furniture Type:</label>

            <select defaultValue="" onChange={displayFurnituers}>
                <option disabled value="" selected>Select...</option>
             {furnituresTypes&&furnituresTypes.map(f=>
                <option key={f.furnitureTypesId} value={f.furnitureTypesId}>{f.furnitureTypesName}</option>)}
            </select>
            <br />
            {furnitures.map(f=><FurnitureCard key={f.furnitureId} furniture={f}/>)}
        </div>
    );
}

export default List;
