/* eslint-disable */
import Vue from 'vue'
import Vuex from 'vuex'
import AuthenticationService from "../services/AuthenticationService"
Vue.use(Vuex)

const LOGIN = "LOGIN"
const LOGIN_SUCCESS = "LOGIN_SUCCESS";
const LOGOUT = "LOGOUT";
const SET_USER = "SET_USER";

const store = new Vuex.Store({
  state: {
    token: null,
    user: null,
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
    [SET_USER](state, user) {
      state.user = user
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
      commit(LOGIN);
      try {
        const response = await AuthenticationService.login({
          email: creds.email,
          password: creds.password
        })
        store.state.user = response.data.user
        /*commit("SET_USER", response.data.user)*/
        localStorage.setItem("token", response.data.token)
      } catch (error) {
        this.error = error.response.data.error
        console.log(this.error)
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
      commit(LOGOUT)
    }
  },
  getters: {
    isUserLoggedIn: (state) => {
      return state.isUserLoggedIn
    },
    getUser: (state) => {
      return state.user
    }
  },
  modules: {

  }
})
export default store
