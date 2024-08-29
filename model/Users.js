import { connection as db } from "../Config/Config.js";
import {
    createToken
} from "../middleware/AuthenticateUser.js"
import {
    hash, compare
} from "bcrypt"
class Users{
    // fetching 
fetchSingleUser(req, res) {
try {
    const Query = `
    select userID, firstName, lastName, mobileNumber, emailAddress, UnitorRank, combatStatus,  userPwd, UserImg, FriendCount
    from Users
    where userID = ${req.params.id}

    `;   
    db.query(Query, (err, results) => {
   if (err) throw new Error("Users could not be retrieved");
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
fetchAllUsers(req, res) {
    try {
        const Query = `
        select userID, firstName, lastName, mobileNumber, emailAddress, UnitorRank, combatStatus,  userPwd, UserImg, FriendCount
        from Users
        `;
        db.query(Query, (err, results) => {
            if (err) throw new Error("Users could not be retrieved");
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


  async registerUser(req, res)  {
    try {
        let data = req.body
        // encrypts the users password to 12 random characters also known as salt (???)
        data.userPwd = await hash(data.userPwd, 12)
        //   Payload
        let user = {

            emailAddress: data.emailAddress,
            userPwd: data.userPwd

        }
        const Query = `
 insert into Users
 SET ?;

`
        db.query(Query, [data], (err) => {

            if (err) {
                res.json({
                    status: res.statusCode,
                    eror: err.message


                })



            } else {

                const token = createToken(user)
                res.json({
                    token,
                    eror: "Thank you for registering"


                })


            }
        })

    } catch (e) {
        // when a new user can't be added
        res.json({
            status: 404,
            err: e.message

        })



    }



}

//   Deleting
  deleteUser(req, res) {
    try {
      const Query = ` 
    delete from Users
    where userID = ${req.params.id};
    
    `;
      db.query(Query, (err) => {
        if (err)
          throw new Error(
            "Cannot delete User, contact Site Admin if problem persists"
          );
        res.json({
          status: res.statusCode,
          msg: "User's info was sucessfully removed.",
        });
      });
    } catch (e) {
      res.json({
        status: 404,
        err: e.message,
      });
    }
  }
  
// Updating
async updateProfile(req, res) {
    try {
      const Query = `
        
        update Users
        set ?
        where userID = ${req.params.id};
        
        
        `;
      db.query(Query, [req.body], (err) => {
        if (err)
          throw new Error("unable to update profile. Contact site Admin");
        res.json({
          status: res.statusCode,
          message: "profile Updated.",
        });
      });
    } catch (e) {
      res.json({
        status: 400,
        eror: e.message,
      });
    }
  }
// Login 
async Login(req, res) {
    try {

        const {
            emailAddress,
            userPwd
        } = req.body
        const Query = `
    
    select userID, firstName, lastName, mobileNumber, emailAddress, UnitorRank, combatStatus,  userPwd, UserImg, FriendCount
        from Users
    where emailAddress = '${emailAddress}';
    
    
    `
        db.query(Query, async (err, result) => {
            if (err) throw new Error("Invalid Login. Pleases check your details")
            if (!result?.length) {
                res.json({

                    status: 401,
                    msg: "You are not registered. Please register"


                })


            } else {

                const isValidPass = await compare(userPwd, result[0].userPwd)
                if (isValidPass) {

                    const token = createToken({
                        emailAddress,
                        userPwd


                    })
                    res.json({
                        status: res.statusCode,
                        token,
                        result: result[0]




                    })

                } else {

                    res.json({

                        status: 401,
                        msg: "You might not be registered"


                    })


                }


            }
        })


    } catch (e) {

        res.json({
            status: 404,
            msg: e.message



        })

    }






}  











}
export { Users };
