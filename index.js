//// 
import cors from "cors"
import {PostersRouter, express} from "./controller/UsersController.js"
import {MessageRouter} from "./controller/PostController.js"
import path from "path"//create express app
const app = express()
const port = +process.env.PORT || 4000// Middleware
// creating an express app
app.use(
    
    express.static("./static"),
    express.json(),
    express.urlencoded({
        extended: true

    }))
app.use((req, res, next) => {

res.header("Access-Control-Allow-Origin", "*");
res.header("Access-Control-Allow-Origin", "*");
res.header("Access-Control-Allow-Credentials", "true");
res.header("Access-Control-Allow-Methods", "*");
res.header("Access-Control-Request-Methods", "*");
res.header("Access-Control-Allow-Headers", "*");
res.header("Access-Control-Expose-Headers", "Authorization");

next()

})
app.use(cors())



// THIS IS THE ACTUAL ENDPOINT THAT THE USER WILL NEED TO ENTER TO GET TO RELEVANT PAGES
app.use("/users", PostersRouter)
app.use("/posts", MessageRouter)

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

