//// 
import cors from "cors"
import {PostersRouter, express} from "./controller/UsersController.js"
import {MessageRouter} from "./controller/PostController.js"
import { RepliesRouter } from "./controller/ReplyController.js"
import path from "path"//create express app
const app = express()
const port = +process.env.PORT || 4000// Middleware
// creating an express appp

app.use(
    
    express.static("./static"),
    express.json(),
    express.urlencoded({
        extended: true

    }))

    app.use((req, res, next) => {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Credentials", "true");
        res.header("Access-Control-Allow-Methods", "*");
        res.header("Access-Control-Request-Methods", "*");
        res.header("Access-Control-Allow-Headers", "*");
        res.header("Access-Control-Expose-Headers", "Authorization");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

        
        next()
    })



// THIS IS THE ACTUAL ENDPOINT THAT THE USER WILL NEED TO ENTER TO GET TO RELEVANT PAGES
app.use(cors())

app.use("/users", PostersRouter)
app.use("/posts", MessageRouter)
app.use("/comment", RepliesRouter)
app.get("^/$|/All", (req, res) => {

    res.status(200).sendFile(path.resolve("./static/HTML/index.html"))


})


app.get("*", (req, res) => {

    res.json({

        status: 404,
        msg: "Page Not Found"

    })



})

app.listen(port, () => {

    console.log(`Port is running at ${port}`);

})

