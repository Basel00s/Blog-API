import { Router } from "express";
import { getPosts,createPost,getPost ,updatePost,deletePost} from "../controllers/blog.controllers.js";
const router = Router();

router.get("/",getPosts)
router.get("/:id",getPost)
router.post("/",createPost)
router.put("/:id",updatePost)
router.delete("/:id",deletePost)









export default router;//this default means that when we import this file, we will get the router object as the default export.