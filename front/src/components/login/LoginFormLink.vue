<template>
  <router-link class="login-link" :to=link>
    <p>{{ content }}</p>
    <strong>{{ strong }}</strong>
  </router-link>
</template>

<script>
export default {
  name: "LoginFormLink",
  props: {
    link: {
      type: String,
      default: ""
    },
    content: {
      type: String,
      default: "Link"
    },
    strong: {
      type: String,
      default: ""
    }
  }
}
</script>

<style>
  .login-link {
    margin-top: 40px;

    display: flex;
    flex-direction: row;
    align-items: center;

    color: #212121;
    text-decoration: unset;
  }

  .login-link:hover {
    color: #737B7D;
  }

  .login-link > p {
    margin: 0;
  }

  .login-link > strong {
    margin-left: 30px;
  }

  @media screen and (max-width: 450px){
    .login-link {
      flex-direction: column;
    }
    .login-link > strong {
      margin: 0;
    }
  }
</style>