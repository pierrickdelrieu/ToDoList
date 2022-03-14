<template>
<div id="app">
   <router-view />
</div>
</template>

<script>

export default {
  name: "App"
}
</script>


<style>
  body {
    background-color: #F2F2F2;

    overflow-x: hidden;
    font-family: Ubuntu, sans-serif;
    font-style: normal;
    font-weight: normal;

    color: #212121;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    margin: 0;
    padding: 0;
    width: 100%;
  }

</style>