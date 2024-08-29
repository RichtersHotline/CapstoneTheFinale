import express from "express"
import bodyParser from "body-parser"
import {Messages} from "../model/index.js"
import {verifyAToken} from "../middleware/AuthenticateUser.js"

const MessageRouter = express.Router()

MessageRouter.use(bodyParser.json())

// Getters

MessageRouter.get("/posts",  (req, res) => {

    Messages.fetchAllPosts(req, res)
    
    
    })
    
MessageRouter.get("/post/:id",  (req, res) => {

    Messages.fetchSinglePost(req, res)
    
    
    })
    // Posting
    MessageRouter.post("/posts", (req, res) => {

        Messages.postMsg(req, res)




    })
     // Updates
     MessageRouter.patch("/post/:id", (req, res) => {
    
        Messages.updatePost(req, res)
        
        
        }) 
    // Deletes
    MessageRouter.delete("/post/:id",  (req, res) => {

        Messages.deletePost(req, res)
        
        
        })
       
            