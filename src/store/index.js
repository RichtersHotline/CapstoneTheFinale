import { createStore } from 'vuex'
import { toast } from "vue3-toastify"
import "vue3-toastify/dist/index.css"
import axios from 'axios'

const apiURL = "https://home-of-the-broken-heroes.onrender.com/"
export default createStore({
  state: {
    users:[],
    user: null,
    posts: [],
    post:null,
    Reply:[],
    Replies:[],
  },
  getters: {
  },
  mutations: {
    setUsers(state, value) {
      state.users = value;
    },
    setSingleUser(state, value) {
      state.user = value;
    },
    setPosts(state, value) {
      state.posts = value;
    },
    setSinglePost(state, value) {
      state.post = value;
    },
    setReplies(state, value ) {
    state.Replies = value;

    },
    setReply(state,value) {

      state.Reply = value;

    }
  },
  actions: {
    // Everything to do with users
    async fetchUsers(context) {
      try {
        const {results} = await (await axios.get(`${apiURL}users`)).data
        if (results) {
          context.commit('setUsers', results)
        } else {
console.log("error")
        }
      } catch (e) {
        toast.error(`${e.message}`, {
          autoClose: 2000,
          position: toast.POSITION.BOTTOM_CENTER,
          theme:'dark'

        })
      }

    },
    async fetchOneUser(context, id) {
      try {
        const {results} = await (await axios.get(`${apiURL}users/${id}`)).data;
        if (results) {
          console.log(results)
          context.commit('setSingleUser', results);
        } else {
          toast.error(`${results}`, {
            autoClose: 2000,
            position: toast.POSITION.BOTTOM_CENTER,
            theme:'dark'

          });
        }
      } catch (e) {
        toast.error(`${e.message}`, {
          autoClose: 2000,
          position: toast.POSITION.BOTTOM_CENTER,
          theme:'dark'

        });
      }
    },
    async addAUser(context, payload) {
      try {
        const msg= await (await axios.post(`${apiURL}users/register`, payload)).data
        console.log(msg);
        if (msg) {
          context.dispatch('fetchUsers')
          toast.success(`${"You have been succesfully Registered"}`, {
            autoClose: 5000,
            position: toast.POSITION.BOTTOM_CENTER,
            theme:'dark'

          })
        }
      } catch (e) {
        toast.error(`${e.message}`, {
          autoClose: 2000,
          position: toast.POSITION.BOTTOM_CENTER,
          theme:'dark'

        })
      }
    },
    async updateUser(context, payload) {
      try {
        console.log(payload)
        const  msg  = await (await axios.patch(`${apiURL}users/${payload.id}`, payload.data)).data
        if (msg) {
          context.dispatch('fetchUsers')
          toast.success(`${"Your Profile has been successfully updated"}`, {
            autoClose: 2000,
            position: toast.POSITION.BOTTOM_CENTER,
            theme:'dark'

          })
        }
      } catch (e) {
        toast.error(`${e.message}`, {
          autoClose: 2000,
          position: toast.POSITION.BOTTOM_CENTER,
          theme:'dark'

        })
      }
    },
    async deleteUser(context, id) {
      try {
        const  msg  = await (await axios.delete(`${apiURL}users/${id}`)).data
        if (msg) {
          context.dispatch('fetchUsers')
          toast.success(`${"Thank you for your service. You have been discharged."}`, {
            autoClose: 7000,
            position: toast.POSITION.BOTTOM_CENTER,
            theme:'dark'

          })
        }
      } catch (e) {
        toast.error(`${e.message}`, {
          autoClose: 2000,
          position: toast.POSITION.BOTTOM_CENTER,
          theme:'dark'

        })
      }
    },
    async Login(context, payload) {
      try {
        console.log(payload)
        const  msg  = await (await axios.post(`${apiURL}users/login/${payload.emailAddress}`, payload.data)).data
        if (msg) {
          context.dispatch('fetchUsers')
          toast.success(`${msg}`, {
            autoClose: 2000,
            position: toast.POSITION.BOTTOM_CENTER,
            theme:'dark'

          })
        }
      } catch (e) {
        toast.error(`${e.message}`, {
          autoClose: 2000,
          position: toast.POSITION.BOTTOM_CENTER,
          theme:'dark'

        })
      }
    },
//Everything to do with Posts
async fetchPosts(context) {
  try {
    const {results} = await (await axios.get(`${apiURL}posts`)).data
    if (results) {
      context.commit('setPosts', results)
    } else {
console.log("error")
    }
  } catch (e) {
    toast.error(`${e.message}`, {
      autoClose: 2000,
      position: toast.POSITION.BOTTOM_CENTER,
      theme:'dark'

    })
  }

},
async fetchOnePost(context, id) {
  try {
    const result = await axios.get(`${apiURL}posts/${id}`);
    if (result.data) {
      console.log(result.data)
      context.commit('setSinglePost', result.data);
    } else {
      toast.error(`${result}`, {
        autoClose: 2000,
        position: toast.POSITION.BOTTOM_CENTER,
        theme:'dark'

      });
    }
  } catch (e) {
    toast.error(`${e.message}`, {
      autoClose: 2000,
      position: toast.POSITION.BOTTOM_CENTER,
      theme:'dark'

    });
  }
},
async PostMessage(context, payload) {
  try {
    const msg = await (await axios.post(`${apiURL}posts/post`, payload)).data
    console.log(msg);
    if (msg) {
      context.dispatch('fetchPosts')
      toast.success(`${"Your post has been successfully posted."}`, {
        autoClose: 2000,
        position: toast.POSITION.BOTTOM_CENTER,
        theme:'dark'

      })
    }
  } catch (e) {
    toast.error(`${e.message}`, {
      autoClose: 2000,
      position: toast.POSITION.BOTTOM_CENTER,
      theme:'dark'

    })
  }
},
async updateMessage(context, payload) {
  try {
    console.log(payload)
    const  {message}  = await (await axios.patch(`${apiURL}posts/${payload.id}`, payload.data)).data
    if (message) {
      context.dispatch('fetchPosts')
      toast.success(`${message}`, {
        autoClose: 2000,
        position: toast.POSITION.BOTTOM_CENTER,
        theme:'dark'

      })
    }
  } catch (e) {
    toast.error(`${e.message}`, {
      autoClose: 2000,
      position: toast.POSITION.BOTTOM_CENTER,
      theme:'dark'

    })
  }
},
async deleteMessage(context, id) {
  try {
    const  msg  = await (await axios.delete(`${apiURL}posts/${id}`)).data
    if (msg) {
      context.dispatch('fetchPosts')
      toast.success(`${"Your post has been removed"}`, {
        autoClose: 5000,
        position: toast.POSITION.BOTTOM_CENTER,
        theme:'dark'

      })
    }
  } catch (e) {
    toast.error(`${e.message}`, {
      autoClose: 2000,
      position: toast.POSITION.BOTTOM_CENTER,
      theme:'dark'

    })
  }
},
// Replies
async fetchReplies(context) {
  try {
    const {results} = await (await axios.get(`${apiURL}comment`)).data
    if (results) {
      context.commit('setReplies', results)
    } else {
console.log("error")
    }
  } catch (e) {
    toast.error(`${e.message}`, {
      autoClose: 2000,
      position: toast.POSITION.BOTTOM_CENTER,
      theme:'dark'

    })
  }

},
async fetchOneReply(context, id) {
  try {
    const result = await axios.get(`${apiURL}comment/${id}`);
    if (result.data) {
      console.log(result.data)
      context.commit('setReply', result.data);
    } else {
      toast.error(`${result}`, {
        autoClose: 2000,
        position: toast.POSITION.BOTTOM_CENTER,
        theme:'dark'

      });
    }
  } catch (e) {
    toast.error(`${e.message}`, {
      autoClose: 2000,
      position: toast.POSITION.BOTTOM_CENTER,
      theme:'dark'

    });
  }
},
async PostReply(context, payload) {
  try {
    const msg = await (await axios.post(`${apiURL}comment/post/comment`, payload)).data
    console.log(msg);
    if (msg) {
      context.dispatch('fetchReplies')
      toast.success(`${"Your reply has been successfully posted."}`, {
        autoClose: 2000,
        position: toast.POSITION.BOTTOM_CENTER,
        theme:'dark'

      })
    }
  } catch (e) {
    toast.error(`${e.message}`, {
      autoClose: 2000,
      position: toast.POSITION.BOTTOM_CENTER,
      theme:'dark'

    })
  }
},
async updateReply(context, payload,) {
  try {
    console.log(payload)
    const  message  = await (await axios.patch(`${apiURL}comment/${payload.id}`, payload.data)).data
    if (message) {
      context.dispatch('fetchReplies')
      toast.success(`${"Your Reply has been updated"}`, {
        autoClose: 2000,
        position: toast.POSITION.BOTTOM_CENTER,
        theme:'dark'

      })
    }
  } catch (e) {
    toast.error(`${e.message}`, {
      autoClose: 2000,
      position: toast.POSITION.BOTTOM_CENTER,
      theme:'dark'

    })
  }
},
async deleteReply(context, id) {
  try {
    const  msg  = await (await axios.delete(`${apiURL}comment/${id}`)).data
    if (msg) {
      context.dispatch('fetchReplies')
      toast.success(`${"Your reply has been removed"}`, {
        autoClose: 5000,
        position: toast.POSITION.BOTTOM_CENTER,
      theme:'dark'
      })
    }
  } catch (e) {
    toast.error(`${e.message}`, {
      autoClose: 2000,
      position: toast.POSITION.BOTTOM_CENTER,
      theme:'dark'
    })
  }
},
  },
  modules: {
  }
})
