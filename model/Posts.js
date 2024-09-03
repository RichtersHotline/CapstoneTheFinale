import { connection as db } from "../Config/Config.js";
import {
    createToken
} from "../middleware/AuthenticateUser.js"
import {
    hash, compare
} from "bcrypt"
class Posts {
    // Fetching
    fetchAllPosts (req, res) {
        try {
            const Query = `
            select postID, Msg, DatePosted, userID, Salutes, Replies
            from UserPosts
            
            `;
            db.query(Query, (err, results) => {
                if (err) throw new Error("Posts could not be retrieved");
            res.json({
                status: res.statusCode,
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
    fetchSinglePost(req, res) {
try {
    const Query = `
    select postID, Msg, DatePosted, userID, Salutes, Replies
    from UserPosts
    where postID = ${req.params.id}

    `;
    db.query(Query, (err, results) => {
        if (err) throw new Error("Post could not be retrieved");
        res.json({
            status: res/statusCode,
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



    
// Posting and Adding
async postMsg(req, res) {
    try {
      let data = req.body;
  
      let Add = {
        Msg: data.Msg,
        DatePosted: data.DatePosted,
      };
  
      const Query = `
        INSERT INTO UserPosts
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
            Message: "Post successful",
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

//   Deleting Posts 
deletePost (req, res) {
    try {
      const Query = ` 
    delete from UserPosts
    where postID = ${req.params.id};
    
    `;
      db.query(Query, (err) => {
        if (err)
          throw new Error(
            "Cannot delete post, contact Site Admin if problem persists"
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
//   Updating Posts
async updatePost(req, res) {
    try {
      const Query = `
        
        update UserPosts
        set ?
        where postID = ${req.params.id};
        
        
        `;
      db.query(Query, [req.body], (err) => {
        if (err)
          throw new Error("unable to update post. Contact site Admin");
        res.json({
          status: res.statusCode,
          message: "post Updated.",
        });
      });
    } catch (e) {
      res.json({
        status: 400,
        eror: e.message,
      });
    }
  }

    
}
export { Posts };
