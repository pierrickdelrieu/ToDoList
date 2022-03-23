<template>
  <form id="login-form" @submit.prevent="login">
    <h1>Login</h1>

    <div class="login-form-field">
      <InputField label="Email" v-model="email" placeholder="Email" type="email" />
      <InputField
        label="Password"
        v-model="password"
        placeholder="**********"
        type="password"
      />
    </div>

    <a href="" id="forgot-password">Forgot password?</a>

    <SubmitButton content="Sign In" />
    <p v-if="error">{{error}}</p> 
    <Link
      link="/register"
      content="Don’t have an account yet?"
      strong="Register for free"
    />
  </form>
</template>

<script>
/* eslint-disable */
import InputField from "@/components/login/LoginFormInputField";
import SubmitButton from "@/components/login/LoginFormSubmitButton";
import Link from "@/components/login/LoginFormLink";
import AuthenticationService from "@/services/AuthenticationService";

export default {
  name: "LoginForm",
  components: { Link, SubmitButton, InputField },
  data() {
    return {
      email: "",
      password: "",
      error: null
    };
  },
  methods: {
    login() {
      this.$store
      .dispatch("login", {
        email: this.email,
        password: this.password,
      }).then((response) => {
        if(!localStorage.getItem("token")){
          this.error = response
        }
        else{
          this.$store.dispatch("dashboardLists", {
            id_user: JSON.parse(localStorage.getItem("user")).id_user
          }).then(() => {
            /*Before the redirection, we look at the token to see if the user is well connected */
            if(localStorage.getItem("token")){
              this.$router.push({
                name: "dashboard"
              });
            }
          })
        }
        
      })
      
    },
  },
};
</script>

<style>
#login-form {
  position: absolute;

  top: 200px;
  left: 10%;

  width: 500px;
  height: 480px;

  background: rgba(255, 255, 255, 0.3);
  box-shadow: 0 4px 70px rgba(0, 0, 0, 0.1);
  border-radius: 40px;

  display: flex;
  flex-direction: column;
  align-items: center;
}

@media screen and (max-width: 1300px) {
  #login-form {
    left: 50%;
    transform: translateX(-50%);
  }
}

@media screen and (max-width: 500px) {
  #login-form {
    width: 90%;
  }
}

/* ******************** Input ******************** */
.login-form-field {
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 90%;
}

/* ******************** Forgot password ******************** */
#forgot-password {
  margin-top: 10px;
  margin-bottom: 30px;
  width: 85%;

  color: #212121;
  text-decoration: unset;
}

#forgot-password:hover {
  color: #737b7d;
}
</style>
