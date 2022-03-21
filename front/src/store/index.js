/* eslint-disable */
import Vue from 'vue'
import Vuex from 'vuex'
import AuthenticationService from "../services/AuthenticationService"
import DashboardService from "../services/DashboardService"
import UserUpdateService from "../services/UserUpdateService"
import NewListService from "../services/NewListService"
Vue.use(Vuex)

const LOGIN = "LOGIN"
const LOGIN_SUCCESS = "LOGIN_SUCCESS";
const LOGOUT = "LOGOUT";
const SET_USER = "SET_USER";

const store = new Vuex.Store({
  state: {
    token: null,
    user: null,
    dashboardLists: null,
    isUserLoggedIn: !!localStorage.getItem("token")
  },
  mutations: {
    /*
    setToken(state, token) {
      state.token = token
      if (token) {
        state.isUserLoggedIn = true
      }
      else {
        state.isUserLoggedIn = false
      }
    },
    setUser(state, user) {
      state.user = user
    }
    */
    [LOGIN](state) {
      state.pending = true;
    },
    [LOGIN_SUCCESS](state) {
      state.isUserLoggedIn = true;
      state.pending = false;
    },
    [LOGOUT](state) {
      state.isUserLoggedIn = false;
    },
    /**
     * 
     * @param {} state 
     * @param { store the user data (email,firstname,lastname) } credentials 
     * this mutations is used to store some user data (email,firstname,lastname) into the localStorage,
     * in order to be able to display them into our website.
     * The localStorage only accept JSON data, data which we provide by the methode stringify.
     * Furthermore, when accessed the localStorage JSON object data, we parse them, thanks to the method
     * parse, in order to transform them into a javascript object.
     */
    set_user(state, credentials) {
      console.log(credentials)
      localStorage.setItem("user", JSON.stringify({
        id_user: credentials.id_user,
        email: credentials.email,
        firstname: credentials.firstname,
        lastname: credentials.lastname
      }))
      let response = JSON.parse(localStorage.getItem("user"))

    }
  },
  actions: {
    /*
    setToken({ commit }, token) {
      commit("setToken", token)
    },
    setUser({ commit }, user) {
      commit("setUser", user)
    }
    */
    async login({ commit }, creds) {
      try {
        const response = await AuthenticationService.login({
          email: creds.email,
          password: creds.password
        })
        store.commit("set_user", {
          id_user: response.data.user.id_user,
          email: response.data.user.email,
          firstname: response.data.user.firstname,
          lastname: response.data.user.lastname

        })
        /*commit("SET_USER", response.data.user)*/
        localStorage.setItem("token", response.data.token)

      } catch (error) {
        /*this.error = error.response.data.error*/
        console.log(error)
      }

      /*
      setTimeout(() => {
        localStorage.setItem("token", creds.token);
        commit(LOGIN_SUCCESS);
        resolve();
      }, 1000);
      */
    },
    logout({ commit }) {
      localStorage.removeItem("token");
      localStorage.removeItem("todolists")
      commit(LOGOUT)
    },

    async dashboardLists({ commit }, data) {
      try {
        const response = await DashboardService.post({
          id_user: data.id_user
        })
        localStorage.setItem("todolists", JSON.stringify((response.data)))

        const todolists = JSON.parse(localStorage.getItem("todolists"))
        console.log("todolists : " + todolists)
      }
      catch (error) {
        console.log(error)
      }
    },
    async updateUser({ commit }, data) {
      try {
        const response = await UserUpdateService.post({
          email: data.email,
          firstname: data.firstname,
          lastname: data.lastname
        })
        localStorage.setItem("user", JSON.stringify({
          id_user: response.data.user.id_user,
          email: response.data.user.email,
          firstname: response.data.user.firstname,
          lastname: response.data.user.lastname
        }))
      }
      catch (error) {
        console.log(error)
      }
    },
    async createNewList({ commit }, data) {
      try {
        /* We call the API at the path newList with the listname, favorite and id_user for creating a new list 
        associated with the user who created it*/
        const response = await NewListService.post({
          name: data.name,
          is_favorite: data.isfavorite,
          id_user: data.id_user

        })
        console.log("response : " + response)

      } catch (error) {
        console.log(error)
      }
    }
  },
  getters: {
    isUserLoggedIn: (state) => {
      return state.isUserLoggedIn
    },
    getUser: (state) => {
      return state.user
    },
    getDashboardLists: (state) => {
      return state.dashboardLists
    }
  },
  modules: {

  }
})
export default store
