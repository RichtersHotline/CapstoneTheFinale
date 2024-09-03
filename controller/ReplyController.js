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

    Replies.fetchSingleReply(req, res)
    
    
    })
    // Adding User
    RepliesRouter.post("/post/comment", (req, res) => {

        Replies.postReply(req, res)




    })
     // Updates
     RepliesRouter.patch("/:id", (req, res) => {
    
        Replies.updateReply(req, res)
        
        
        }) 

        // Delete
        RepliesRouter.delete("/:id",  (req, res) => {

            Replies.deleteReply(req, res)
            
            
            })
            export {

                RepliesRouter,
                express
    
            }