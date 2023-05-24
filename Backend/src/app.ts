import cors from "cors";
import express from "express";
import furnitureController from "./6-controller/furnitureController";
import routeNotFound from "./3-middelwere/route-not-found";
import catchAll from "./3-middelwere/catch-all";
import appConfig from "./2-utils/app-config";


const server=express()
server.use(cors())
server.use(express.json())

server.use("/api",furnitureController)

server.use("*",routeNotFound)
server.use(catchAll)

server.listen(appConfig.port,()=>console.log(`Listening on http://localhost:${appConfig.port}`) )

