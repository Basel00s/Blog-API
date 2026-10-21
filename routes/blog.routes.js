import { Router } from "express";
import { sayHello } from "../controllers/blog.controllers.js";
const router = Router();

router.get("/hello",sayHello)




export default router;//this default means that when we import this file, we will get the router object as the default export.