import express from "express"
import bodyParser from "body-parser"
import {Posters} from "../model/index.js"

const PostersRouter = express.Router()

PostersRouter.use(bodyParser.json())

// Getters

PostersRouter.get("/users",  (req, res) => {

    Posters.fetchAllUsers(req, res)
    
    
    })
    
    PostersRouter.get("/users/:id",  (req, res) => {

    Posters.fetchSingleUser(req, res)
    
    
    })
    // Adding User
    PostersRouter.post("/register", (req, res) => {

        Posters.registerUser(req, res)




    })
     // Updates
     PostersRouter.patch("/users/:id", (req, res) => {
    
        Posters.updateProfile(req, res)
        
        
        }) 
    // Login
    PostersRouter.post("/login",  (req, res) => {

        Posters.Login(req, res)
        
        
        })
        // Delete
        PostersRouter.delete("/users/id",  (req, res) => {

            Posters.deleteUser(req, res)
            
            
            })