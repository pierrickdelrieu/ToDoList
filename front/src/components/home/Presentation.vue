<template>
  <div id="presentation-container">

    <div id="presentation-title">
      <h1>Manage your task</h1>
      <img src="../../assets/round.png">
    </div>

    <div id="presentation-subtitle">Manage your task. Don’t forget anything.</div>

    <img id="img-presentation" src="../../assets/presentation.png">
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Presentation"
}
</script>

<style>
  #presentation-container {
    position: relative;
    height: 90vh;
  }

  /* ******************** Title with round ******************** */
  #presentation-title {
    position: absolute;
    width: 660px;
    left: 7%;
    top: 25%;
    z-index: 1;

    padding: 20px 30px;
  }

  #presentation-title h1 {
    font-style: normal;
    font-weight: normal;
    font-size: 5.7em;
    line-height: 110%;

    color: #000000;
    float: left;
    margin: 0;
  }


  #presentation-title img {
    position: absolute;
    left: 10px;
    top: 80px;

    transform: rotate(14deg);
  }


  /* ******************** Subtitle ******************** */
  #presentation-subtitle {
    z-index: 1;

    position: absolute;
    left: 9%;
    top: 75%;

    font-size: 1.5em;
    line-height: 110%;
  }


  /* ******************** Image ******************** */
  #img-presentation {
    position: absolute;
    right: 5%;
    top: 50%;
    transform: translateY(-50%);

    margin: 0;
    padding: 0;
  }


  @media screen and (max-width: 1200px) {
    #img-presentation {
    height: 80vh;
    }
  }

    @media screen and (max-width: 1200px){
    #presentation-title {
      left: 50%;
      transform: translateX(-50%);
      width: fit-content;

      text-align: center;
    }

    #presentation-title img {
      right: -10px;
      left: auto;
      top: -20px;
    }

    #presentation-subtitle {
      width: 90%;
      text-align: center;

      left: 50%;
      transform: translateX(-50%);
      top: 50%;
    }

    #img-presentation {
      left: 50%;
      transform: translate(-50%, -50%);

      /* Filtre */
      -webkit-filter : opacity(35%); /* Chrome, Safari, Opera */
      filter : opacity(35%);
    }
  }

  @media screen and (max-width: 800px){
    #presentation-title h1 {
      font-size: 4em;
    }

    #presentation-title img {
      width: 160px;
      top: -10px;
      right: 3px;
    }
  }

  @media screen and (max-width: 573px){
    #presentation-title {
      top: 15%;
    }
    #presentation-title h1 {
      line-height: 120%;
    }
    #presentation-title img {
      width: 150px;
      top: 75px;
      right: auto;
      left: 50%;
      transform: translateX(-50%) rotate(14deg);
    }
  }


    @media screen and (max-width: 437px){
    #presentation-title img {
      width: 150px;
      top: 75px;
      left: 50%;
      transform: rotate(14deg);
    }
  }

</style>