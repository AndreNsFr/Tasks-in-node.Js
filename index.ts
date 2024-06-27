import express, { urlencoded } from "express";
import router from "./routes";


const server = express()

server.use(urlencoded({extended:true}))
server.use(router)

server.listen(4000)