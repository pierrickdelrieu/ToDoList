<template>
  <div id="register">
    <Header/>
    <RegisterForm/>
    <StrongPoints/>
  </div>
</template>

<script>
import Header from "@/components/Header";
import StrongPoints from "@/components/login/StrongPoints";
import RegisterForm from "@/components/login/RegisterForm";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Register",
  components: {RegisterForm, StrongPoints, Header}
}
</script>

<style>
  #register {
    height: 100vh;
    width: 100%;
    overflow-x: hidden;
  }
</style>