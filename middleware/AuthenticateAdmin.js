import "dotenv/config"
import jwt from "jsonwebtoken"
const {sign, verify } = jwt 

function createAdminToken(admin) {

return sign(
    { 

    emailAddress: admin.emailAddress,
    adminKey: admin.adminKey
},


process.env.SECRET_KEY,
{

expiresIn: "1h"

})

}
function verifyAdminToken(req, res, next) {
    const token = req?.headers["authorization"]
    if (token) {
        if (verify(token, process.env.SECRET_KEY)) {
            next()
        } else {
            res?.json({
                status: res.statusCode,
                msg: "Please provide the correct credentials."
            })
        }
    } else {
        res?.json({
            status: res.statusCode,
            msg: "Please login."
        })
    }
}
export {

    createAdminToken,
    verifyAdminToken
}