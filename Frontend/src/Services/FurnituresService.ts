import axios from "axios";
import FurnitureModel from "../Models/Furniture-model";
import appConfig from "../Utils/Config";
import FurnitureTypesModel from "../Models/FurnitureTypes-model";

class FurnituresService {


   public async getAlllFurnituresTypes():Promise<FurnitureTypesModel[]>{

        const response=await axios.get<FurnitureTypesModel[]>(appConfig.furnitureTypesUrl)
        const furnituresTypes=response.data
        return furnituresTypes
       
    }

    public async getFurnituresByTypes(furnitureTypesId:number):Promise<FurnitureModel[]>{
        const response=await axios.get<FurnitureModel[]>(appConfig.furnitureByTypesUrl+furnitureTypesId)
        const furnitures=response.data
        return furnitures

}

   public async addFurniture(furniture:FurnitureModel):Promise<void>{
    await axios.post(appConfig.addFurniture,furniture)
   }
}

const furnitureService = new FurnituresService();

export default furnitureService