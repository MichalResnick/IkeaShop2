import { useState, useEffect } from "react";
import FurnitureTypesModel from "../../../Models/FurnitureTypes-model";
import furnitureService from "../../../Services/FurnituresService";
import "./Insert.css";
import { useForm } from "react-hook-form";
import FurnitureModel from "../../../Models/Furniture-model";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Insert(): JSX.Element {

    const [furnituresTypes,setFurnituresTypes]=useState<FurnitureTypesModel[]>([])
    const {register, handleSubmit}=useForm<FurnitureModel>()
    const navigate=useNavigate()
   
    useEffect(()=>{
        furnitureService.getAlllFurnituresTypes()
        .then(furnituresTypes=>setFurnituresTypes(furnituresTypes))
        .catch(err=>alert(err.message))
        
    })

    async function send(furniture:FurnitureModel){
        try {
           await furnitureService.addFurniture(furniture)
           alert("You Added a furniture") 
           navigate("/furniture-list")
        } catch (error:any) {
            alert(error.message)
        }
    }

    return (
        <div className="Insert">
			<h2>Add a Furniture</h2>

            <form onSubmit={handleSubmit(send)}>

            <label>Select Furniture Type:</label>
            <select defaultValue="" {...register("furnitureTypesId")}>
                <option disabled value="" selected>Select...</option>
             {furnituresTypes&&furnituresTypes.map(f=>
                <option key={f.furnitureTypesId} value={f.furnitureTypesId}>{f.furnitureTypesName}</option>)}
            </select>

            <label>Name:</label>
            <input type="text"{...register("name")}required />
            <label>Dimensions:</label>
            <input type="text"{...register("dimensions")}required />
            <label>Color:</label>
            <input type="text"{...register("color")}required />
            <label>Price:</label>
            <input type="text"{...register("price")}required />
            <button>Add</button>
            </form>
        </div>
    );
}

export default Insert;
