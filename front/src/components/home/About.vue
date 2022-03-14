<template>
  <div id="about">
    <img id="about-img" src="../../assets/about.png" alt="About us">
    <div id="about-content">
      <h1>About us</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipiscing elimassa consectetur in molestie augue sed sed augunibh et quis nibh faucibus sem non cursus lectusnibh volutpat aliquam sed est nibh adipiscing hendrerit rhoncus, sed dolor tortor pellentesque quis molestie volutpat volutpat euismod sit non sit sed.</p>
      <img src="../../assets/about_school.png" alt="School logo">
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "About"
}
</script>


<style>
  #about {
    margin-top: 150px;

    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
  }

  #about > img {
    position: relative;
  }

  #about-content {
    width: 50%;
  }

  #about-content img {
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    margin: 50px 0;
  }

  #about-content h1 {
    font-size: 2em;
    font-weight: 500;
  }

  @media screen and (max-width: 1100px){
    #about-content {
      width: 40%;
    }
    #about-content > img {
      width: 80%;
    }
  }

  @media screen and (max-width: 900px){
    #about {
      display: block;
    }
    #about > img {
      left: 50%;
      transform: translateX(-50%);

      /* Filtre */
      -webkit-filter : opacity(15%); /* Chrome, Safari, Opera */
      filter : opacity(15%);
    }
    #about-content {
      position: absolute;
      top: 20%;
      left: 50%;
      transform: translate(-50%, -20%);
      width: 70%;
    }
  }

  @media screen and (max-width: 500px){
    #about > img {
      width: 95%;
    }
  }

</style>