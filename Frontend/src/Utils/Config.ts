class Config {
    public furnitureTypesUrl = "http://localhost:3001/api/furniture-types";
    public furnitureByTypesUrl = "http://localhost:3001/api/furniture-by-types/";
    public addFurniture="http://localhost:3001/api/furnitures"
}

const appConfig = new Config(); // Singleton

export default appConfig;
