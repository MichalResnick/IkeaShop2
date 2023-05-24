
class FurnitureModel{
    public furnitureId :number
    public furnitureTypesId :number
    public name: string
    public dimensions:string
    public color:string
    public price:number

    public constructor(furniture:FurnitureModel){
        this.furnitureId=furniture.furnitureId
        this.furnitureTypesId=furniture.furnitureTypesId
        this.name=furniture.name
        this.dimensions=furniture.dimensions
        this.color=furniture.color
        this.price=furniture.price

    }
}

export default FurnitureModel