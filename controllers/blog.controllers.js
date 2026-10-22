import { readAll, getPostbyId, create, update, deletepost, search } from "../models/blog.models.js";

export function getPosts(req, res) {
    let term = req.query.term
    if (term) {
        let x = search(term)
        res.status(200).send(x)
    }
    else {
        let y = readAll()
        res.status(200).send(y)
    }
}
export function getPost(req, res) {
    let id = req.params.id;
    let x = getPostbyId(id)
    if (x == undefined) {
        res.status(404).json("not found")
    }
    else {
        res.status(200).send(x)
    }
}
export function createPost(req,res){
    let data = req.body
    let x = create(data)
    res.status(201).json(x)
}
export function updatePost(req,res){
    let data = req.body;
    let id = req.params.id;
    let x = update(id,data)
    if (x ==undefined) {
        res.status(404).json("errror fuck it")
    }
    else{
        res.status(200).json(x)
    }
}
export function deletePost(req,res){
    let id = req.params.id
    let deleted = deletepost(id)
    if (deleted) {
        res.status(204).send()
    }
    else{
        res.status(404).json("not found")
    }
}