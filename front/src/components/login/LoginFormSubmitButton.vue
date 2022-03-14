<template>
  <input type="submit" class="login-form-submit" :value=content>
</template>

<script>
export default {
  name: "LoginFormSubmitButton",
  props: {
    content: {
      type: String,
      default: "Submit"
    }
  },
}
</script>

<style>
  .login-form-submit {
    margin: 0;

    width: 90%;
    height: 50px;

    background: #F25019;
    border-radius: 5px;
    border: unset;
    cursor: pointer;

    font-weight: bold;
    font-size: 1.1em;
    color: #FFFFFF;
  }

  .login-form-submit:hover{
    background: rgba(242, 80, 25, 0.8);
  }
</style>