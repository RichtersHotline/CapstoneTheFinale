import { Posts } from "./Posts.js";
import { Users } from "./Users.js";
import {Reply} from "./Replies.js"
const Messages = new Posts()

const Posters = new Users()

const Replies = new Reply()

export {

Messages,
Posters,
Replies
}