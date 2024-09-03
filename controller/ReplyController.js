import express from "express"
import bodyParser from "body-parser"
import {Replies} from "../model/index.js"

const RepliesRouter = express.Router()

RepliesRouter.use(bodyParser.json())

// Getters

RepliesRouter.get("/",  (req, res) => {

    Replies.fetchAllPosts(req, res)
    
    
    })
    
    RepliesRouter.get("/:id",  (req, res) => {

    Replies.fetchSingleReplies(req, res)
    
    
    })
    // Adding User
    RepliesRouter.post("/post/comment", (req, res) => {

        Replies.postReplies(req, res)




    })
     // Updates
     RepliesRouter.patch("/:id", (req, res) => {
    
        Replies.updateReplies(req, res)
        
        
        }) 

        // Delete
        RepliesRouter.delete("/:id",  (req, res) => {

            Replies.deleteReplies(req, res)
            
            
            })
            export {

                RepliesRouter,
                express
    
            }