import { connection as db } from "../Config/Config.js";
import {
    createToken
} from "../middleware/AuthenticateUser.js"
import {
    hash, compare
} from "bcrypt"
class Reply {
fetchSingleReply (req, res) {
    try {
        const Query = `
        select commentID, Reply, DatePosted, userID, postID, ReplyImg
        from Comments
        where commentID = ${req.params.id}
    
        `;   
        db.query(Query, (err, results) => {
       if (err) throw new Error("Reply could not be retrieved");
       res.json({
        status:res.statusCode,
        results: results[0],
       });
    
    
        });
    } catch (e) {
        res.json({
            status:404,
            Eror: e.message,
        });
    }




}
fetchReplies (req, res) {
    try {
        const Query = `
        select commentID, Reply, DatePosted, userID, postID, ReplyImg
        from Comments    
        `;   
        db.query(Query, (err, results) => {
       if (err) throw new Error("Replies could not be retrieved");
       res.json({
        status:res.statusCode,
        results,
       });
    
    
        });
    } catch (e) {
        res.json({
            status:404,
            Eror: e.message,
        });
    }




}
async updateReply(req, res) {
    try {
      const Query = `
        
        update Comments
        set ?
        where commentID = ${req.params.id};
        
        
        `;
      db.query(Query, [req.body], (err) => {
        if (err)
          throw new Error(err);
        res.json({
          status: res.statusCode,
          message: "Reply Updated.",
        });
      });
    } catch (e) {
      res.json({
        status: 400,
        eror: e.message,
      });
    }
  }
  async postReply(req, res) {
    try {
      let data = req.body;
  
      let Add = {
        Reply: data.Reply,
        DatePosted: data.DatePosted,
        ReplyImg: data.ReplyImg
      };
  
      const Query = `
        INSERT INTO Comments
        SET ?;
      `;
  
      db.query(Query, Add, (err) => {
        if (err) {
          res.json({
            status: res.statusCode,
            eror: err.message,
          });
        } else {
          res.json({
            status: res.statusCode,
            Message: "Reply successful",
          });
        }
      });
    } catch (e) {
      res.json({
        status: 404,
        err: e.message,
      });
    }
  }
  deleteReply (req, res) {
    try {
      const Query = ` 
    delete from Comments
    where commentID = ${req.params.id};
    
    `;
      db.query(Query, (err) => {
        if (err)
          throw new Error(
            "Cannot delete reply at this time"
          );
        res.json({
          status: res.statusCode,
          msg: "post was sucessfully removed.",
        });
      });
    } catch (e) {
      res.json({
        status: 404,
        err: e.message,
      });
    }
  }






}
export {Reply};