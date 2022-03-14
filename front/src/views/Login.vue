<template>
  <div id="login">
    <Header/>
    <LoginForm/>
    <StrongPoints/>
  </div>
</template>

<script>
import Header from "@/components/Header";
import LoginForm from "@/components/login/LoginForm";
import StrongPoints from "@/components/login/StrongPoints";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Login",
  components: {StrongPoints, LoginForm, Header}
}
</script>


<style>
  #login {
    height: 100vh;
    overflow-x: hidden;
  }
</style>