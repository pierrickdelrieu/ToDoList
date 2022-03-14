<template>
  <div id="password-security">
    <div v-if="level >= 1" id="password-security-item1" class="password-security-item"></div>
    <div v-if="level >= 2" id="password-security-item2" class="password-security-item"></div>
    <div v-if="level >= 3" id="password-security-item3" class="password-security-item"></div>
    <div v-if="level >= 4" id="password-security-item4" class="password-security-item"></div>
    <div v-if="level >= 5" id="password-security-item5" class="password-security-item"></div>
  </div>
</template>

<script>
export default {
  name: "PasswordSecurity",
  props: {
    level: {
      type: Number,
      default: 0
    }
  }
}
</script>

<style >
  #password-security {
    display: flex;
    flex-direction: row;
    width: 400px;
    margin-left: 10px;
  }

  .password-security-item {
    width: 80px;
    height: 0;
  }

  #password-security-item1{
      border: 2px solid #FF0000;
  }
  #password-security-item2{
    border: 2px solid #FFA500;
  }
  #password-security-item3{
    border: 2px solid #FFA500;
  }
  #password-security-item4{
    border: 2px solid #38C235;
  }
  #password-security-item5{
    border: 2px solid #38C235;
  }


</style>