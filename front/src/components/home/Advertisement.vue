<template>
  <div id="advertisement">
    <div class="advertisement-item" id="advertisement-item1">
      <h1>Create a list of tasks from a template</h1>
      <img src="../../assets/advertisement1.png" alt="Advertisement 1">
    </div>

    <div class="advertisement-item" id="advertisement-item2">
      <div class="advertisement-item-part">
        <img src="../../assets/advertisement2.png" alt="Advertisement 2">
        <h1>No more forgetting</h1>
      </div>

      <div class="advertisement-item-part">
        <h1>Organize your time</h1>
        <img src="../../assets/advertisement3.png" alt="Advertisement 3">
      </div>

      <div class="advertisement-item-part">
        <img src="../../assets/advertisement4.png" alt="Advertisement 4">
      </div>
    </div>


    <div class="advertisement-item" id="advertisement-item3">
      <img src="../../assets/advertisement5.png" alt="Advertisement 5">
      <h1>Share the list with your friends and colleagues</h1>
    </div>

    <div class="advertisement-item" id="advertisement-item4">
      <h1>Manage your projects like a king</h1>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Advertisement"
}
</script>

<style>
  #advertisement {
    position: relative;
  }

  .advertisement-item {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    width: 95%;

    position: relative;
    left: 50%;
    transform: translateX(-50%);

    margin: 50px 0;
  }

  .advertisement-item h1 {
    font-weight: normal;
    font-size: 2em;
    line-height: 150%;
    align-items: center;
  }
  .advertisement-item > img {
    margin: 0 100px;
  }

  .advertisement-item-part {
    display: flex;
    flex-direction: column;
    align-items: center;

    margin: 20px 3%;
  }

  .advertisement-item-part h1 {
    margin: 20px 0;
  }

  #advertisement-item1 h1 {
    width: 400px;
  }
  #advertisement-item3 h1 {
    width: 55%;
  }


  @media screen and (max-width: 1249px){
    #advertisement-item1 h1 {
      width: 100%;
      text-align: center;
    }
  }
  @media screen and (max-width: 931px){
    #advertisement-item2 h1 {
      width: 100%;
      text-align: center;
    }
  }
  @media screen and (max-width: 931px){
    #advertisement-item3 h1 {
      width: 100%;
      text-align: center;
    }
  }
  @media screen and (max-width: 600px){
    #advertisement-item1 img {
      width: 100%;
    }
  }
  @media screen and (max-width: 500px){
    .advertisement-item h1 {
      width: 100%;
      font-size: 1.5em;
      text-align: center;
    }
    #advertisement-item2 img {
      width: 90%;
    }
  }
</style>