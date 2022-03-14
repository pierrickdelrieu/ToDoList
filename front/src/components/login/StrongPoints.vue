<template>
  <div id="strong-point">

    <div class="strong-point-item" v-for="point in points" :key="point">
      <img src="../../assets/check.png" alt="Check">
      <p>{{ point }}</p>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "StrongPoints",
  data() {
    return {
      points: [ "Manage your task. Don’t forget anything.",
                "Share the list with your friends and colleagues.",
                "Manage your projects like a king.",
                "Create a list of tasks from a template."]
    }
  }
}
</script>

<style>
  #strong-point {
    position: absolute;
    top: 200px;
    right: 10%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

  }

  .strong-point-item {
    margin: 20px 0;
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .strong-point-item > p {
    font-weight: normal;
    font-size: 20px;

    margin-left: 20px;
  }

  @media screen and (max-width: 1300px){
    #strong-point {
      display: none;
    }
  }

</style>