import { createStore } from 'vuex'
import { toast } from "vue3-toastify"
import "vue3-toastify/dist/index.css"
import axios from 'axios'

const apiURL = "https://home-of-the-broken-heroes.onrender.com/"
export default createStore({
  state: {
    users:null,
    user: null,
    posts: null,
    post:null
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
  },
  actions: {
    // Everything to do with users
    async fetchUsers(context) {
      try {
        const results = await (await axios.get(`${apiURL}users`)).data
        if (results) {
          context.commit('setUsers', results)
        } else {
console.log("error")
        }
      } catch (e) {
        toast.error(`${e.message}`, {
          autoClose: 2000,
          position: toast.POSITION.BOTTOM_CENTER
        })
      }

    },
    async fetchOneUser(context, id) {
      try {
        const result = await axios.get(`${apiURL}users/${id}`);
        if (result.data) {
          console.log(result.data)
          context.commit('setSingleUser', result.data);
        } else {
          toast.error(`${result}`, {
            autoClose: 2000,
            position: toast.POSITION.BOTTOM_CENTER,
          });
        }
      } catch (e) {
        toast.error(`${e.message}`, {
          autoClose: 2000,
          position: toast.POSITION.BOTTOM_CENTER,
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
            autoClose: 2000,
            position: toast.POSITION.BOTTOM_CENTER
          })
        }
      } catch (e) {
        toast.error(`${e.message}`, {
          autoClose: 2000,
          position: toast.POSITION.BOTTOM_CENTER
        })
      }
    },
    async updateProduct(context, payload) {
      try {
        console.log(payload)
        const  msg  = await (await axios.patch(`${apiURL}users/${payload.id}`, payload.data)).data
        if (msg) {
          context.dispatch('fetchUsers')
          toast.success(`${msg}`, {
            autoClose: 2000,
            position: toast.POSITION.BOTTOM_CENTER
          })
        }
      } catch (e) {
        toast.error(`${e.message}`, {
          autoClose: 2000,
          position: toast.POSITION.BOTTOM_CENTER
        })
      }
    },
    async deleteUser(context, id) {
      try {
        const  msg  = await (await axios.delete(`${apiURL}users/${id}`)).data
        if (msg) {
          context.dispatch('fetchUsers')
          toast.success(`${msg}`, {
            autoClose: 2000,
            position: toast.POSITION.BOTTOM_CENTER
          })
        }
      } catch (e) {
        toast.error(`${e.message}`, {
          autoClose: 2000,
          position: toast.POSITION.BOTTOM_CENTER
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
            position: toast.POSITION.BOTTOM_CENTER
          })
        }
      } catch (e) {
        toast.error(`${e.message}`, {
          autoClose: 2000,
          position: toast.POSITION.BOTTOM_CENTER
        })
      }
    },
//Everything to do with Posts
async fetchPosts(context) {
  try {
    const results = await (await axios.get(`${apiURL}posts`)).data
    if (results) {
      context.commit('setPosts', results)
    } else {
console.log("error")
    }
  } catch (e) {
    toast.error(`${e.message}`, {
      autoClose: 2000,
      position: toast.POSITION.BOTTOM_CENTER
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
      });
    }
  } catch (e) {
    toast.error(`${e.message}`, {
      autoClose: 2000,
      position: toast.POSITION.BOTTOM_CENTER,
    });
  }
},
async PostMessage(context, payload) {
  try {
    const msg= await (await axios.post(`${apiURL}posts/post`, payload)).data
    console.log(msg);
    if (msg) {
      context.dispatch('fetchPosts')
      toast.success(`${msg}`, {
        autoClose: 2000,
        position: toast.POSITION.BOTTOM_CENTER
      })
    }
  } catch (e) {
    toast.error(`${e.message}`, {
      autoClose: 2000,
      position: toast.POSITION.BOTTOM_CENTER
    })
  }
},
async updateMessage(context, payload) {
  try {
    console.log(payload)
    const  msg  = await (await axios.patch(`${apiURL}posts/${payload.id}`, payload.data)).data
    if (msg) {
      context.dispatch('fetchPosts')
      toast.success(`${msg}`, {
        autoClose: 2000,
        position: toast.POSITION.BOTTOM_CENTER
      })
    }
  } catch (e) {
    toast.error(`${e.message}`, {
      autoClose: 2000,
      position: toast.POSITION.BOTTOM_CENTER
    })
  }
},
async deleteMessage(context, id) {
  try {
    const  msg  = await (await axios.delete(`${apiURL}posts/${id}`)).data
    if (msg) {
      context.dispatch('fetchPosts')
      toast.success(`${msg}`, {
        autoClose: 2000,
        position: toast.POSITION.BOTTOM_CENTER
      })
    }
  } catch (e) {
    toast.error(`${e.message}`, {
      autoClose: 2000,
      position: toast.POSITION.BOTTOM_CENTER
    })
  }
},
  },
  modules: {
  }
})
