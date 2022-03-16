<template>
  <div id="header-container">

    <div id="header--title">
      <router-link to="/"><img id="header--title-logo" src="../assets/logo.png" alt="Logo"></router-link>
      <div id="header--title-content">
        <h1>My ToDo Lists</h1>
        <h2>by Pierrick, Meric, Guillaume and Kais</h2>
      </div>
    </div>

    <div id="header-nav">
      <div class="nav-ancre">
        <a href="/#about">About</a>
        <a href="/#contact">Contact</a>
      </div>

      <router-link class="nav-login-register-button" to="/login">
      <div v-if='token'>Go to dashboard</div>
      <div v-else >Login/Register</div>
      </router-link>
      
    </div>

    <div id="burger-menu-img">
      <img @click="toggleDisplayBurgerMenu" src="../assets/burger-menu.png" alt="Burger menu">
    </div>

    <div v-if="displayBurgerMenu" id="burger-menu-content">
      <div id="burger-menu-nav">
        <div class="nav-ancre">
          <a href="/#about">About</a>
          <a href="/#contact">Contact</a>
        </div>

        <router-link class="nav-login-register-button" to="/login">Login/Register</router-link>
      </div>
    </div>


  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Header",
  data () {
    return {
      displayBurgerMenu: false,
      token: null
    }
  },
  methods: {
    toggleDisplayBurgerMenu(){
      this.displayBurgerMenu = !this.displayBurgerMenu;

      if (this.displayBurgerMenu) {
        window.scrollTo(0, 0);
        document.getElementById("burger-menu-img").firstElementChild.style = "transform: translateY(50%) rotate(90deg);";
        document.body.style = "overflow-y: hidden;";
      } else {
        document.getElementById("burger-menu-img").firstElementChild.style = "transform: translateY(50%) rotate(0);";
        document.body.style = "overflow-y: unset;";
      }
    }
  },
  mounted() {
      this.token = localStorage.getItem("token");
  }
}
</script>

<style>
  #header-container {
    position: relative;
    margin-top: 30px;

    display: flex;

    width: 100%;

    z-index: 3;
  }


  /* ******************** Burger menu ******************** */
  #burger-menu-img {
    display: none;
    z-index: 3;
  }
  #burger-menu-img img {
    top: 50%;
    transform: translateY(50%);
  }

  #burger-menu-content {
    position: absolute;
    left: 0;
    top: -30px;

    width: 100%;
    height: 100vh;

    background-color: rgba(246, 246, 246, 0.95); /*#F2F2F2*/
    z-index: 2;
  }

  /* ******************** Title ******************** */
  #header--title {
    display: flex;
    align-items: center;

    position: relative;
    margin-left: 60px;

    z-index: 3;
  }

  #header--title-logo {
    margin-right: 20px;
  }

  #header--title-content {
    width: 255px;
  }

  #header--title-content h1 {
    font-weight: 400;
    font-size: 2.5em;
    line-height: 10px;

    text-align: center;
    min-width: fit-content;
  }

  #header--title-content h2 {
    font-weight: normal;
    font-size: 11px;

    text-align: center;
  }

  @media screen and (max-width: 800px) {
    #header--title-content h1 {
      font-size: 2em;
    }
    #header--title-content {
      width: 200px;

    }
  }

  @media screen and (max-width: 460px) {
    #header--title-content h1 {
      font-size: 1.5em;
    }
    #header--title-content {
      width: 150px;
    }
  }

  @media screen and (max-width: 400px) {
    #header--title-content h1 {
      font-size: 1em;
    }
    #header--title-content {
      width: 100px;
    }
  }

    /* ******************** Navigation ******************** */
  #header-nav {
    position: relative;
    margin-right: 50px;
    margin-left: auto;

    display: flex;
    flex-direction: row;
    align-items: center;

    z-index: 3;
  }

  .nav-ancre {
    display: flex;
    flex-direction: row;
  }

  .nav-ancre a {
    font-weight: 500;
    font-size: 18px;

    line-height: 110%;

    margin: 0 30px;

    color: #212121;
    text-decoration: none;
  }

  .nav-ancre a:hover {
    color: #F25019;
  }

  .nav-login-register-button {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 170px;
    height: 45px;
    margin-left: 50px;

    background: #212121;
    border-radius: 16px;

    color: white;
    text-decoration: none;
  }

  .nav-login-register-button:hover {
    background: #4F5B67;
  }


  @media screen and (max-width: 900px) {
    #header-nav {
      flex-direction: column-reverse;
      align-content: flex-start;
    }

    .nav-login-register-button {
      margin-top: 20px;
      margin-left: 0;
    }

    .nav-ancre {
      margin-top: 20px;
    }
  }

  @media screen and (max-width: 700px) {
    #header-nav {
      display: none;
    }

    #burger-menu-nav {
      position: relative;
      top: 150px;

      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .nav-ancre {
      flex-direction: column;
      margin-bottom: 20vh;
    }

    .nav-ancre a {
      margin: 5vh 0;
      text-align: center;
    }

    #burger-menu-img {
      display: block;

      position: relative;
      margin-right: 50px;
      top: 0;
      margin-left: auto;
    }
    #burger-menu-img {
      display: block;


      position: relative;
      margin-right: 50px;
      top: 0;
      margin-left: auto;
    }
  }


</style>