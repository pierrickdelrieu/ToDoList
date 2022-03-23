<template>
  <form id="register-form" @submit.prevent="register">
    <h1>Register</h1>

    <div class="login-form-field">
      <div id="login-form-name">
        <input type="text" id="login-form-firstname" v-model="firstname" class="login-form-input" name="firstname" placeholder="First name *" required>
        <input type="text" id="login-form-lastname" v-model="lastname" class="login-form-input" name="lastname" placeholder="Last name *" required>
      </div>
      <InputField label="Email" v-model="email" placeholder="Email" type="email"/>

      <div class="login-form-field-item">
        <label for="login-form-password" class="login-form-label">Password</label><br>
        <input @input="passwordSecurity" v-model="password" type="password" id="login-form-password" class="login-form-input" name="login-form-password" placeholder="**********" required>
        <PasswordSecurity :level="levelSecurityPassword"/>
      </div>

      <InputField @input="passwordConfirm" label="Confirm password" placeholder="**********" type="password"/>
    </div>

    <SubmitButton content="Sign Up" />
    <p v-if="error">{{error}}</p>
    <Link link="/login" content="You already have an account?" strong="Login"/>
  </form>
</template>

<script>
import InputField from "@/components/login/LoginFormInputField";
import SubmitButton from "@/components/login/LoginFormSubmitButton";
import Link from "@/components/login/LoginFormLink";
import PasswordSecurity from "@/components/login/PasswordSecurity";
import AuthenticationService from "@/services/AuthenticationService";
export default {
  name: "RegisterForm",
  components: {PasswordSecurity, Link, SubmitButton, InputField},
  data() {
    return {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      levelSecurityPassword: 0,
      error: null
    }
  },
  methods:{
    passwordSecurity() {
      let level = 0;

      const regex_maj = /[A-Z]/g;
      const regex_min = /[a-z]/g;
      const regex_nb = /[0-9]/g;
      const regex_cara = /[!@#$%^&*]/g;

      const inputPassword = document.getElementById("login-form-password");


      if (inputPassword.value.match(regex_maj) !== null) {
        level++;
      }
      if (inputPassword.value.match(regex_min) !== null) {
        level++;
      }
      if (inputPassword.value.match(regex_nb) !== null) {
        level++;
      }
      if (inputPassword.value.match(regex_cara) !== null) {
        level++;
      }
      if (inputPassword.value.length >= 8) {
        level++;
      }

      this.levelSecurityPassword = level;
    },

    passwordConfirm() {
      const inputPassword = document.getElementById("login-form-password");
      const inputConfirmPassword = document.getElementById("login-form-confirm-password");

      if (inputPassword.value === inputConfirmPassword.value) {
        inputConfirmPassword.setCustomValidity('');
      } else {
        inputConfirmPassword.setCustomValidity('Passwords do not match');
      }

    },
      async register(){
              try{
                  let response = await AuthenticationService.register({
                      firstname: this.firstname,
                      lastname: this.lastname,
                      email: this.email,
                      password: this.password
                  })
                  /* If the user has been registered*/
                  if(!response.data.error){
                    this.$store
                      .dispatch("login", {
                        email: this.email,
                        password: this.password,
                      }).then(() => {
                        this.$store.dispatch("dashboardLists", {
                          id_user: response.data.user.id_user
                        }).then(() => {
                          if(localStorage.getItem("token")){
                            this.$router.push({
                              name: "dashboard"
                            });
                          }
                        })
                        /*Before the redirection, we look at the token to see if the user is well connected */
                        
                      })
                  }
                  else{
                    this.error = response.data.error
                  }

                  
                  
              }
              catch(error){
                  this.error = error.response.data.error
              }
                 
          }
    
  }
}
</script>

<style>
  #register-form {
    position: absolute;

    top: 150px;
    left: 10%;


    width: 500px;
    height: 600px;

    background: rgba(255, 255, 255, 0.3);
    box-shadow: 0 4px 70px rgba(0, 0, 0, 0.1);
    border-radius: 40px;

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }


  /* ******************** Input firstname and lastname ******************** */
  #login-form-name {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 100%;
  }

  #login-form-name > input {
    padding: 15px;
    margin-top: 10px;
    font-size: 1em;

    width: 150px;

    background: #FFFFFF;
    border-radius: 5px;
    border: unset;
  }

  #login-form-name > input:invalid {
    border: 1px solid #F25019;
  }

  .login-link {
    margin-bottom: 30px;
  }

  @media screen and (max-width: 1300px){
    #register-form {
      left: 50%;
      transform: translateX(-50%);
    }
  }

  @media screen and (max-width: 500px){
    #register-form {
      width: 90%;
      height: 650px;
    }
    #login-form-name {
      flex-direction: column;
    }
    #login-form-name > input {
      width: 90%;
    }
  }
</style>