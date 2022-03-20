<template>
  <DashboardContent :displayInfo='false'>
    <template v-slot:title>Account</template>

    <template v-slot:main>
      <form @submit.prevent="updateAccount" id="account-form">
        <input type="text" id="account-firstname" class="account-field" name="taskModal-firstname" v-model="firstname" required>
        <input type="text" id="account-lastname" class="account-field" name="taskModal-lastname" v-model="lastname" required>
        <div id="account-email" class="account-field">{{ email }}</div>
        <!-- <input type="text" id="account-email" class="account-field" name="taskModal-email" v-model="email"> -->

        <ButtonModal id="account-button" content="Update"/>
      </form>
    </template>
  </DashboardContent>
</template>

<script>
import DashboardContent from "@/components/dashboard/DashboardContent";
import ButtonModal from '../components/modal/ButtonModal.vue';

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Account",
  components: { DashboardContent, ButtonModal },
  data() {
    return {
      firstname: "Pierrick",
      lastname: "Delrieu",
      email: "pierrick.delrieu@efrei.net",
      password: ""
    }
  },
  methods: {
    updateAccount() {
      console.log(this.firstname, this.lastname)
      console.log(this.firstname.length, this.lastname.length)
      // const lastnameInput = document.getElementById("account-lastname");
      // const firstnameInput = document.getElementById("account-firstname");

      // if(this.firstname.length == 0) {
      //   firstnameInput.setCustomValidity('This field cannot be empty');
      //   firstnameInput.reportValidity()
      // } else if(this.lastname.length == 0) {
      //   lastnameInput.setCustomValidity('This field cannot be empty');
      //   lastnameInput.reportValidity()
      // } else {
      //   lastnameInput.setCustomValidity('');
      //   firstnameInput.setCustomValidity('');


      //   // CALL API
      // }
    }
  },
}
</script>

<style>
  #account-form {
    display: flex;
    flex-direction: column;
    align-items: center;
    
    background-color: #F2F2F2;
    border-radius: 10px;
    padding: 40px 100px;
  }
  .account-field {
    border: none;
    font-weight: 400;
    font-size: 20px;
    margin: 20px 0;
  }
  #account-button {
    margin-top: 50px;
  }
</style>