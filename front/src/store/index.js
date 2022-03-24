/* eslint-disable */
import Vue from 'vue'
import Vuex from 'vuex'
import AuthenticationService from "../services/AuthenticationService"
import DashboardService from "../services/DashboardService"
import UserUpdateService from "../services/UserUpdateService"
import NewListService from "../services/NewListService"
import UpdateTodolistService from "../services/UpdateTodolistService"
import DeleteTodolist from "../services/DeleteTodolistService"
import GetRubrics from "../services/GetRubricsService"
import CreateNewTask from "../services/CreateNewTaskService"
import CreateRubric from "../services/CreateRubricService"
import RemoveTask from "../services/RemoveTaskService"
import UpdateTask from "../services/UpdateTaskService"
import DeleteRubric from "../services/DeleteRubricService"
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
        return error.response.data.error
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
      localStorage.removeItem("rubrics")
      commit(LOGOUT)
    },

    async dashboardLists({ commit }, data) {
      try {
        const response = await DashboardService.post({
          id_user: data.id_user
        })
        localStorage.setItem("todolists", JSON.stringify((response.data)))

        const todolists = JSON.parse(localStorage.getItem("todolists"))
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

      } catch (error) {
        console.log(error)
      }
    },
    async updateFavorite({ commit }, data) {
      try {
        const response = await UpdateTodolistService.post({
          id_todolist: data.id_todolist,
          is_favorite: data.is_favorite
        })
      } catch (error) {
        console.log(error)
      }
    },
    async deleteTodolist({ commit }, data) {
      try {
        const response = await DeleteTodolist.post({
          id_todolist: data.id_todolist
        })
      } catch (error) {
        console.log(error)
      }
    },
    async getRubrics({ commit }, data) {
      try {
        const response = await GetRubrics.post({
          id_user: data.id_user,
          id_todolist: data.id_todolist
        })
        /* We store all the rubrics into the localStorage in order to load just once the rubrics while navigating 
        through pages*/
        localStorage.setItem("rubrics", JSON.stringify(response.data))
      } catch (error) {
        console.log(error)
      }
    },
    async createNewTask({ commit }, data) {
      try {

        const response = await CreateNewTask.post({

          id_rubric: data.id_rubric,
          rubric_name: data.rubric_name,
          task_name: data.task_name,
          task_description: data.task_description,
          task_priority: data.task_priority,
          id_user: JSON.parse(localStorage.getItem("user")).id_user,
          task_date: data.task_date
        })



      } catch (error) {
        console.log(error)
      }
    },
    async removeRubric({ commit }, data) {
      try {
        const response = await DeleteRubric.post({
          id_rubric: data.id_rubric
        })
      } catch (error) {
        console.log(error)
      }
    },
    async createRubric({ commit }, data) {
      try {
        const response = await CreateRubric.post({
          id_todolist: data.id_todolist,
          rubric_name: data.rubric_name
        })
      } catch (error) {
        console.log(error)
      }
    },
    async removeTask({ commit }, data) {
      try {
        const response = await RemoveTask.post({
          id_task: data.id_task
        })
      } catch (error) {
        console.log(error)
      }
    },
    async updateTask({ commit }, data) {
      try {
        const response = await UpdateTask.post({
          id_task: data.id_task,
          name: data.name,
          description: data.description,
          date: data.date,
          priority: data.priority,
          rubric: data.rubric
        })
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
