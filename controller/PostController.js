import express from "express"
import bodyParser from "body-parser"
import {Messages} from "../model/index.js"
import {verifyAToken} from "../middleware/AuthenticateUser.js"

const MessageRouter = express.Router()

MessageRouter.use(bodyParser.json())

// Getters

MessageRouter.get("/",  (req, res) => {

    Messages.fetchAllPosts(req, res)
    
    
    })
    
MessageRouter.get("/:id",  (req, res) => {

    Messages.fetchSinglePost(req, res)
    
    
    })
    // Posting
    MessageRouter.post("/post", (req, res) => {

        Messages.postMsg(req, res)




    })
     // Updates
     MessageRouter.patch("/:id", (req, res) => {
    
        Messages.updatePost(req, res)
        
        
        }) 
    // Deletes
    MessageRouter.delete("/:id",  (req, res) => {

        Messages.deletePost(req, res)
        
        
        })
        export {

            MessageRouter


        }
       
            