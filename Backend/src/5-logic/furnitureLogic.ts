import { OkPacket } from "mysql"
import dal from "../2-utils/dal"
import FurnitureModel from "../4-models/furniture-model"
import FurnitureTypesModel from "../4-models/furnitureTypes-model"

async function getAllFurnitureTypes():Promise<FurnitureTypesModel[]>{

    const sql=`SELECT * FROM furnituretypes`
    const furnitureTypes=await dal.execute(sql)
    return furnitureTypes
}

async function getFurnituresByTypes(furnitureTypesId:number):Promise<FurnitureModel[]>{
  const sql=`
  SELECT F.*,T.furnitureTypesName
  FROM furnitures AS F JOIN furnituretypes AS T
  ON F.furnituretypesId=T.furnituretypesId
  WHERE F.furnituretypesId=${furnitureTypesId} 
  `

  const furniture=await dal.execute(sql)
  return furniture

}

async function addFurniture(furniture:FurnitureModel):Promise<FurnitureModel>{

    const sql=`
    INSERT INTO furnitures
     VALUES(DEFAULT,
        '${furniture.furnitureTypesId}',
        '${furniture.name}',
        '${furniture.dimensions}',
        '${furniture.color}',
        '${furniture.price}' 
        ) `

    const info:OkPacket= await dal.execute(sql)
    furniture.furnitureId=info.insertId

    return furniture

}

export default{
    getAllFurnitureTypes,
    getFurnituresByTypes,
    addFurniture
}