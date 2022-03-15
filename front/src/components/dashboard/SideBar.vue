<script>
export default {
  name: "SideBar",
  data() {
    return {
      displaySideBar: true,
      user: {
        firstname: "Pierrick",
        lastname: "Delrieu"
      },
      lists: [
        {
          id: 1,
          name: "Kanban model",
          is_favorite: true,
          members: [
            {
              fistname: "Pierrick",
              lastname: "Delrieu"
            },
            {
              fistname: "Meric",
              lastname: "Chenu"
            }
          ]
        },
        {
          id: 2,
          name: "Education",
          is_favorite: false,
          members: null
        },
        {
          id: 3,
          name: "Travel",
          is_favorite: false,
          members: null
        },
        {
          id: 4,
          name: "Travel",
          is_favorite: false,
          members: null
        },
        {
          id: 5,
          name: "Travel",
          is_favorite: false,
          members: null
        },
        {
          id: 6,
          name: "Travel",
          is_favorite: false,
          members: null
        }
      ]
    }
  },
  computed: {
    fullName() {
      return this.user.firstname.charAt(0).toUpperCase() + this.user.firstname.slice(1).toLowerCase() + ' ' +
          this.user.lastname.charAt(0).toUpperCase() + this.user.lastname.slice(1).toLowerCase()
    },
    initial() {
      console.log("Initial : " + this.user.firstname.charAt(0).toUpperCase() + this.user.lastname.charAt(0).toUpperCase())
      return this.user.firstname.charAt(0).toUpperCase() + this.user.lastname.charAt(0).toUpperCase()
    }
  },
  methods: {
    toggleSideBar() {
      this.displaySideBar = !this.displaySideBar
      if (this.displaySideBar) {
        document.getElementById("side-bar").style = "display: block;"
      } else {
        document.getElementById("side-bar").style = "display: none;"
      }
    },
    logout: function(){
      console.log("logout")
      this.$store.dispatch("logout")
    }
  }
}
</script>

<template>
  <div>

  
    <div id="side-bar-burger-menu" @click="toggleSideBar">
      <img src="../../assets/burger-menu.png" alt="Burger menu">
    </div>
    
    <div id="side-bar">
      <img id="side-bar-close-burger-menu" @click="toggleSideBar" src="../../assets/close.svg" alt="Close icon">

      <div id="side-bar-content">
        <router-link to="/" id="side-bar-logo"><img src="../../assets/logo.png" alt="Logo"></router-link>

        <div class="sidebar-line"></div>

        <div id="side-bar-header">
          <router-link id="side-bar-title" :to="{ name: 'dashboard'}" exact-active-class="side-bar-active-link">
            <div id="side-bar-title-img"><img src="../../assets/icon-document.svg" alt="Icon to do list"></div>
            <h1>My Todo Lists</h1>
          </router-link>

          <img src="../../assets/plus-circle.svg" alt="Plus circle">
        </div>


        <div id="side-bar-list">
          <div class="side-bar-list-item" v-for="item in lists" :key="item.id">
            <img class="side-bar-list-item-img" style="cursor: pointer" v-show="item.is_favorite" src="../../assets/favorite.svg" alt="Is favorite task">
            <img class="side-bar-list-item-img" v-show="item.members" src="../../assets/team.svg" alt="Is shared task">

            <router-link :to="{ name: 'list', params: { id: item.id }}" id="side-bar-list-item-name" exact-active-class="side-bar-active-link">
              <p>{{ item.name }}</p>
              <img id="side-bar-list-item-next" src="../../assets/go_to.svg" alt="Go to task">
            </router-link>
          </div>
        </div>
      </div>

      <div id="side-bar-footer">
        <router-link id="side-bar-logout-btn" to="/login"><div @click="logout">Logout</div></router-link>

        <div class="sidebar-line"></div>

        <router-link id="side-bar-account" to="/dashboard/account">
          <p id="side-bar-account-initial">{{ initial }}</p>
          <p id="side-bar-account-fullname">{{ fullName }}</p>
        </router-link>
      </div>

    </div>
  </div>
</template>

<style>
  .side-bar-active-link > p {
    color: #F25019;
    /*background-color: #212121;*/
  }
  .side-bar-active-link > h1 {
    color: #F25019;
    /*background-color: #212121;*/
  }
  #side-bar {
    position: relative;
    height: 100vh;
    min-width: 250px;
    display: inline-block;
    background: #FFFFFF;
  }
  .sidebar-line {
    width: 176px;
    height: 0;
    border: 2px solid #F2F2F2;
  }
  #side-bar-content {
    position: absolute;
    top: 30px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    max-height: 70%;
  }
  #side-bar-logo {
    margin-bottom: 20px;
  }
  /* ******************** Header ******************** */
  #side-bar-close-burger-menu {
    display: none;
    position: absolute;
    right: 10px;
    top: 10px;
  }
  #side-bar-header {
    margin-top: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
    text-decoration: unset;
  }
  #side-bar-header > img {
    width: 20px;
  }
  #side-bar-title {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-right: 30px;
    text-decoration: unset;
    color: #212121;
  }
  #side-bar-title:hover {
    color: #F25019;
  }
  #side-bar-title > h1 {
    font-weight: normal;
    font-size: 18px;
    white-space: nowrap;
  }
  #side-bar-title-img {
    margin-right: 15px;
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #FFFFFF;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.12), 0 2px 4px -1px rgba(0, 0, 0, 0.07);
    border-radius: 8px;
  }
  /* ******************** List of tasks ******************** */
  #side-bar-list {
    position: relative;
    /*max-height: 20%;*/
    overflow-y: scroll;
  }
  .side-bar-list-item {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    margin: 15px 0;
  }
  .side-bar-list-item-img {
    width: 15px;
    height: 15px;
    margin: 0 5px;
  }
  #side-bar-list-item-name {
    display: flex;
    flex-direction: row;
    align-items: center;
    font-weight: normal;
    font-size: 14px;
    text-decoration: unset;
    color: #67748E;
    margin: 0 15px;
  }
  #side-bar-list-item-name:hover {
    color: #F25019;
  }
  #side-bar-list-item-name > p {
    width: 120px;
    margin: 0;
  }
  /* ******************** Footer ******************** */
  #side-bar-footer {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    bottom: 30px;
  }
  #side-bar-logout-btn {
    position: relative;
    width: 100px;
    height: 30px;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #FFFFFF;
    text-decoration: unset;
    font-weight: normal;
    font-size: 18px;
    background: #A5A5A5;
    border-radius: 16px;
  }
  #side-bar-logout-btn:hover {
    background-color: #F25019;
  }
  /* ***** Account ***** */
  #side-bar-account {
    text-decoration: unset;
    color: #212121;
    margin-top: 20px;
    display: flex;
    align-items: center;
  }
  #side-bar-account:hover {
    color: #F25019;
  }
  #side-bar-account-initial {
    width: 32px;
    height: 32px;
    margin: 0;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid #20BF55;
    box-sizing: border-box;
  }
  #side-bar-account-fullname {
    margin: 0 0 0 20px;
  }
  #side-bar-burger-menu {
    display: none;
    z-index: 1;
  }
  #side-bar-burger-menu > img {
    width: 30px;
  }
  @media screen and (max-width: 1000px){
    #side-bar {
      display: none;
      z-index: 1;
    }
    #side-bar-close-burger-menu {
      display: block;
    }
    #side-bar-burger-menu {
      display: flex;
      align-items: center;
      justify-content: center;
      position: fixed;
      top: 20px;
      left: 20px;
      width: 44px;
      height: 38px;
      background: #FFEBDC;
      border-radius: 10px;
    }
  }
</style>