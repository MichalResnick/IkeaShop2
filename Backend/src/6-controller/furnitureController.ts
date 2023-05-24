import express, {Request,Response,NextFunction, response}from "express";
import furnitureLogic from "../5-logic/furnitureLogic";
import FurnitureModel from "../4-models/furniture-model";


const router=express.Router()

router.get("/furniture-types/",async(requst:Request,response:Response,next:NextFunction)=>{
   try {
    const furnitureTypes=await furnitureLogic.getAllFurnitureTypes()
    response.json(furnitureTypes)

   } catch (error:any) {
    next(error)
   
   }
})


router.get("/furniture-by-types/:furnitureTypesId",async(requst:Request,response:Response,next:NextFunction)=>{
   try {
     const furnitureTypesId=+requst.params.furnitureTypesId
     const furniture=await furnitureLogic.getFurnituresByTypes(furnitureTypesId)
     response.json(furniture)
      

   } catch (error:any) {
    next(error)
   
   }
})

router.post("/furnitures",async(requst:Request,response:Response,next:NextFunction)=>{
   try {
      const furniture=new FurnitureModel(requst.body)
    
      const addedFurniture=await furnitureLogic.addFurniture(furniture)
      response.status(201).json(addedFurniture)

   } catch (error:any) {
    next(error)
   
   }
})
export default router