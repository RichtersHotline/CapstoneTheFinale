import { createPool } from "mysql2";
import "dotenv/config";
let connection = createPool({
host: process.env.hostDB,
user: process.env.userDB,
password: process.env.pwdDB,
database: process.env.dbName,
multipleStatements: true,
connectionLimit: 30
})
connection.on("Connection", (pool) => {

    if(!pool) throw new Error ("Cannot connect to the database at this time")


})
export {

    connection

}